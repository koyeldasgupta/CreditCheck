import  React from 'react';
import { ICreditCard } from '../../models/models';
import creditCardImg from '../../assets/images/creditcard.png'

import './CardDetails.scss';

interface ICardDetailsProps {
    card: ICreditCard;
    isSelected: boolean;
    handleSelectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardDetails = (props: ICardDetailsProps) => {
    return (
        <div className='item-wrapper'>
            <div className='item--control'>
                <input 
                    type='checkbox'
                    id={`${props.card.id}`}
                    checked={props.isSelected}
                    onChange={props.handleSelectChange}/>
            </div>
            <div className='item--content'>
                <div className='item--content--tilte'><h2>{props.card.name}</h2></div>
                <div className='item--content--details'>
                    <div className='image'>
                        <img src={creditCardImg} alt='credit card image'/>
                    </div>   
                    <div className='info'>
                        <div className='info-title'>Balance Transfer offer duration</div>
                        <div className='info-value'>{`${props.card.balanceTransferOfferDurationInMonths} months`}</div>
                    </div>
                    <div className='info'>
                        <div className='info-title'>0% Purchase offer duration</div>
                        <div className='info-value'>{`${props.card.purchaseOfferDurationInMonths} months`}</div>
                    </div>   
                    <div className='info'>
                        <div className='info-title'>Representative % APR (variable)</div>
                        <div className='info-value'>{`${props.card.aprPercentage}%`}</div>
                    </div>                   
                    <div className='info'>
                        <div className='info-title'>Credit Available</div>
                        <div className='info-value'>{`GBP ${props.card.creditAvailableInPound}`}</div>
                    </div>   
                </div>
            </div>
              
        </div>
    );
}

export  default CardDetails;