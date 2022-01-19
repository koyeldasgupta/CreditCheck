import React, { useState } from 'react';
import CardDetails from '../../components/CardDetails/CardDetails';
import { ICreditCard } from '../../models/models';

import './EligibleCards.scss';

interface IEligibleCardsProps {
    eligibleCards: ICreditCard[];
}

const EligibleCards = (props: IEligibleCardsProps) => {
    const [selectedCards, setSelectedCards] = useState<{[key: string]: boolean}>({});

    const handleCardSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const toggleValue = selectedCards[event.target.id];
        setSelectedCards({...selectedCards, [`${event.target.id}`]: !toggleValue});
    }

    const totalCreditAmount = props.eligibleCards.reduce((total, card) => total + (selectedCards[`${card.id}`] ? card.creditAvailableInPound : 0), 0);
    const cardDetailsElements = props.eligibleCards.map(card => {
        return <CardDetails 
            key={`card-${card.id}`} 
            card={card}
            isSelected={selectedCards[`${card.id}`] || false}
            handleSelectChange={handleCardSelect}
            />;
    });

    return (
        <div className='eligible-cards-content'>
            {
                !props.eligibleCards.length 
                    ? <p><h1>Sorry, you are not eligible for any cards.</h1></p>
                    : (
                        <>
                            <h1>Eligible Cards</h1>
                            <h3>The total amount of credit available : GBP {totalCreditAmount}</h3>
                            <div className='eligible-cards-content--options'>
                                {cardDetailsElements}
                            </div>
                        </>
                        
                    )
            }
           
                
        </div>
    );
}

export default EligibleCards;