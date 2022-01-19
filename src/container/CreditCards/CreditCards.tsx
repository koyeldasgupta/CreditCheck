import  React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreditCards.scss';

const CreditCards = () => {
    let navigate = useNavigate();

    const handleCheckEligibility = (): void => {
        navigate('/credit-cards/credit-check');
    };

    return (
        <div className='credit-cards-container'>
            <div className='credit-cards-banner'>
               <div className='credit-cards-banner-content'>
                    <div className='credit-cards-banner-content--tilte'>
                        <h1>Find the right credit card for you</h1>
                    </div>
                    <button className='action-btn credit-cards-banner-content--button' onClick={handleCheckEligibility}>Check My Eligibility</button>
                    <ul>
                        <li>Get your free credit report</li>
                        <li>No harm to your credit rating</li>
                        <li>See your best offers</li>
                        <li>Free forever</li>
                    </ul>
               </div>
            </div>
        </div>

    );
}

export  default CreditCards;