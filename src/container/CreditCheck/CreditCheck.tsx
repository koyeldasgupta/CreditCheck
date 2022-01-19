import React, { useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import CreditCheckForm from '../../components/CreditCheckForm/CreditCheckForm';
import { ICreditCard, ICustomerData, IFetchCreditCardsResponse } from '../../models/models';
import { GetEligibleCards } from '../../utils/GetEligibleCards';
import useAPI from '../../utils/useAPI';
import EligibleCards from '../EligibleCards/EligibleCards';

import './CreditCheck.scss';

const CreditCheck = () => {
    const [customerData, setCustomerData] = useState<ICustomerData | null>(null);
    const [eligibleCards, setEligibleCards] = useState<ICreditCard[]>([]);
    const {data: creditCardData , error, isLoading, execute: getAllCards} = useAPI(`${window.location.origin}/json_data/Cards.json`, 'GET', null, false);

    useEffect(() => {
        if(creditCardData && customerData) {
            const {creditCards, availabilityRules} = creditCardData as IFetchCreditCardsResponse;
            setEligibleCards(GetEligibleCards(creditCards, availabilityRules, customerData));
        }
    }, [creditCardData]);

    const handleCheckEligibility = async (customerData: ICustomerData) => {
        setCustomerData(customerData);
        getAllCards();
    };

    return (
        <div className='credit-check-container'>
            {
                isLoading 
                    ? <ScaleLoader color='#ffffff' width={'50px'} />
                    : customerData === null
                        ? <CreditCheckForm handleCheckEligibility={handleCheckEligibility}/>
                        : <EligibleCards eligibleCards={eligibleCards}/>
            }
        </div>
    );
}

export default CreditCheck;