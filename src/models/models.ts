export interface ICustomerData {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    postcode?: string;
    houseNumber?: string;
    streetName?: string;
    town?: string;
    maritalStatus?: string;
    employmentStatus?: string;
    annualIncome?: number;
    [key: string]: any;
}

export interface IFetchCreditCardsResponse {
    creditCards: ICreditCard[];
    availabilityRules: ICreditCardRule[];
    [key: string]: any;
}

export interface ICreditCard {
    id: number;
    name: string;
    aprPercentage: number;
    balanceTransferOfferDurationInMonths : number;
    purchaseOfferDurationInMonths : number;
    creditAvailableInPound : number;
    availabilityRuleId: number;
    [key: string]: any;
}

export interface ICreditCardRule {
    id: number;
    name: string;
    conditions: IRuleFact[];
    [key: string]: any;
}

export interface IRuleFact {
    fact: string;
    operator: 'equal' | 'greaterThan' | 'lessThan' ;
    value: string | number;
    [key: string]: any;
}
