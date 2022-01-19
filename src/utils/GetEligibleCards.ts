import { ICreditCard, ICreditCardRule, ICustomerData } from "../models/models";

export const GetEligibleCards = (cards: ICreditCard[], rules: ICreditCardRule[] , customerData: ICustomerData) : ICreditCard[] => {

    const eligibleCards = [];

    for(let card of cards) {
        let rule = rules.find(rule => rule.id === card.availabilityRuleId);
        if (rule) {
            let isEligible = rule.conditions.reduce((isEligible, condition) => {
                return isEligible  
                    && Object.hasOwnProperty.call(customerData, condition.fact) 
                    && checkCondition(condition.operator, customerData[condition.fact], condition.value);
            }, true);
            if (isEligible) {
                eligibleCards.push(card);
            }
        }
    }
    return eligibleCards;

}

const checkCondition = (operator: string, customerValue: string|number, conditionValue: string|number) => {
    let result;
    if (typeof customerValue === 'string') {
        customerValue = customerValue.toLowerCase();
        conditionValue = conditionValue.toString().toLowerCase();
    }
   
    switch(operator) {
        case 'equal' : result = customerValue === conditionValue; break;
        case 'greaterThan' : result = customerValue > conditionValue; break;
        case 'lessThan' : result = customerValue < conditionValue; break;
        default: result = false; break;
    }
    return result;
}

