import { ICreditCard, ICreditCardRule, ICustomerData } from "../models/models";
import { GetEligibleCards } from "../utils/GetEligibleCards";

const creditCards: ICreditCard[] = [
  {
      "id": 1,
      "name": "Student Life",
      "aprPercentage": 18.9,
      "balanceTransferOfferDurationInMonths" : 0,
      "purchaseOfferDurationInMonths" : 6,
      "creditAvailableInPound" : 1200, 
      "availabilityRuleId" : 1
   },
  {
      "id": 2,
      "name": "Anywhere Card",
      "aprPercentage": 33.9,
      "balanceTransferOfferDurationInMonths" : 0,
      "purchaseOfferDurationInMonths" : 0,
      "creditAvailableInPound" : 300,
      "availabilityRuleId" : 2
   },
  {
      "id": 3,
      "name": "Liquid Card",
      "aprPercentage": 33.9,
      "balanceTransferOfferDurationInMonths" : 12,
      "purchaseOfferDurationInMonths" : 6,
      "creditAvailableInPound" : 3000,
      "availabilityRuleId" : 3
   }
];

const rules: ICreditCardRule[] = [
  {
      "id": 1,
      "name": "Student Life Rule",
      "conditions" : [
          {
              "fact": "employmentStatus",
              "operator": "equal",
              "value": "student"
          }
      ]
  },
  {
      "id": 2,
      "name": "Anywhere Card Rule",
      "conditions" : []
  },
  {
      "id": 3,
      "name": "Liquid Card Rule",
      "conditions" : [
          {
              "fact": "annualIncome",
              "operator": "greaterThan",
              "value": 16000
          }
      ]
  }
];

const customerData1: ICustomerData = {
  firstName: 'Ollie',
  lastName: 'Murphree',
  dateOfBirth: new Date('01/07/1970'),
  postcode: '12345',
  houseNumber: '123',
  streetName: 'Pomorska',
  town: 'krakow',
  maritalStatus: 'single',
  employmentStatus: 'Full time',
  annualIncome: 34000
};

const customerData2: ICustomerData = {
  firstName: 'Trevor',
  lastName: 'Rieck',
  dateOfBirth: new Date(),
  postcode: 'TS25 2NF',
  houseNumber: '343',
  streetName: 'Pomorska',
  town: 'krakow',
  maritalStatus: 'Married',
  employmentStatus: 'Part time',
  annualIncome: 15000
};

const customerData3: ICustomerData = {
  firstName: 'Elizabeth ',
  lastName: 'Edmundson',
  dateOfBirth: new Date('29/06/1984'),
  postcode: 'PH12 8UW',
  houseNumber: '177',
  streetName: 'Oxford',
  town: 'London',
  maritalStatus: 'single',
  employmentStatus: 'Student',
  annualIncome: 17000
};

describe('GetEligibleCards', () => {
    
    test('should return Anywhere Card and Liquid Card', () => {
      const result = GetEligibleCards(creditCards, rules, customerData1);
       expect(result.length).toBe(2);
       expect(result.some(card => card.name === 'Anywhere Card')).toBe(true);
       expect(result.some(card => card.name === 'Liquid Card')).toBe(true);
    });

    test('should return Student Life, Anywhere Card and Liquid Card', () => {
      const result = GetEligibleCards(creditCards, rules, customerData3);
       expect(result.length).toBe(3);
       expect(result.some(card => card.name === 'Anywhere Card')).toBe(true);
       expect(result.some(card => card.name === 'Liquid Card')).toBe(true);
       expect(result.some(card => card.name === 'Student Life')).toBe(true);
    });

    test('should return Anywhere Card only', () => {
      const result = GetEligibleCards(creditCards, rules, customerData2);
       expect(result.length).toBe(1);
       expect(result.some(card => card.name === 'Anywhere Card')).toBe(true);
    });

    test('should return no cards', () => {
      const result = GetEligibleCards([], [], customerData2);
       expect(result.length).toBe(0);
    });

});
