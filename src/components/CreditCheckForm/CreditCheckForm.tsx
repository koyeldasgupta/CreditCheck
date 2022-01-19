import  React, { useState } from 'react';
import Select, { Options } from 'react-select';
import DatePicker from 'react-datepicker';
import { ICustomerData } from '../../models/models';

import 'react-datepicker/dist/react-datepicker.css';
import './CreditCheckForm.scss';

interface Option {
    value: string;
    label: string;
};

interface ICreditCheckFormProps {
    handleCheckEligibility: (customerData: ICustomerData) => void;
}

const CreditCheckForm = (props: ICreditCheckFormProps) => {
    const [formData, setFormData] = useState<ICustomerData>({}); 
    const [errors, setErrors] = useState<{[key: string] : string}>({});

    const validations = {
        firstName: {
            required: {
                value: true,
                message: 'Enter first name'
            }
        },
        lastName: {
            required: {
                value: true,
                message: 'Enter last name'
            }
        },
        dateOfBirth: {
            required: {
                value: true,
                message: 'Select date of birth'
            }
        },
        postcode: {
            required: {
                value: true,
                message: 'Enter postcode'
            }
        },
        houseNumber: {
            required: {
                value: true,
                message: 'Enter house number'
            }
        },
        maritalStatus: {
            required: {
                value: true,
                message: 'Enter marital status'
            }
        },
        employmentStatus: {
            required: {
                value: true,
                message: 'Enter employment status'
            }
        },
        annualIncome: {
            required: {
                value: true,
                message: 'Enter annual income'
            }
        }
    }

    const maritalStatusOptions: Options<Option>= [
        { value: 'Single', label: 'Single' },
        { value: 'Married/Civil partnership', label: 'Married/Civil partnership' },
        { value: 'Living with partner', label: 'Living with partner' },
        { value: 'Divorced', label: 'Divorced'},
        { value: 'Widowed', label: 'Widowed'}
    ]; 

    const employmentStatusOptions:  Options<Option>= [
        { value: 'Full Time', label: 'Full Time' },
        { value: 'Part Time', label: 'Part Time' },
        { value: 'Student', label: 'Student' }
    ];

    const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;
        if (!value.startsWith(' ')) {
            const updatedData: ICustomerData = {...formData, [`${event.target.name}`]: value};
            setFormData(updatedData);  
        }
    }

    const handleNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.length ? parseInt(event.target.value, 10) : undefined;
        if (value === undefined || (!Number.isNaN(value) && value > 0)) {
            const updatedData: ICustomerData = {...formData, [`${event.target.name}`]: value};
            setFormData(updatedData);
        }
    }

    const handleDateChange = (date: Date): void => {
        const updatedData: ICustomerData = {...formData, dateOfBirth: date};
        setFormData(updatedData);
    }

    const handleMaritalStatusChange = (selected: any): void => {
        const updatedData: ICustomerData = {...formData, maritalStatus: selected.value};
        setFormData(updatedData);
    }

    const handleEmploymentStatusChange = (selected: any): void => {
        const updatedData: ICustomerData = {...formData, employmentStatus: selected.value};
        setFormData(updatedData);
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const errors = checkValidation();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            props.handleCheckEligibility(formData);
        }
    } 

    const checkValidation = () => {
        const errors: {[key: string]: string} = {};
        for( const [key, validation] of Object.entries(validations)) {
            const enteredValue = formData[key];
            if (validation?.required?.value && !enteredValue) {
                errors[key] = validation?.required?.message;
            }
        }
        return errors;
    }
    
    return (
        <form className='credit-check-form' onSubmit={handleSubmit}>
            <div className='credit-check-form-content'>
                <div className='credit-check-form-content--header'>
                    <h1>About you</h1>
                    <p>We use this information to identify you when calculating your score.</p>
                </div>
                <div className='credit-check-form-content--body'>
                    <div className='input-item'>
                        <label>
                            <span>First Name</span>
                            <input type='text' id='first-name' name='firstName' value={formData.firstName || ''} onChange={handleTextInputChange} />
                        </label>
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>
                    <div className='input-item'>
                        <label>
                            <span>Last Name</span>
                            <input type='text' id='last-name' name='lastName' value={formData.lastName || ''} onChange={handleTextInputChange} />
                        </label>
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>
                    <div className='input-item'>
                        <label>
                            <span>Date of Birth</span>
                            <DatePicker placeholderText='-- select --' selected={formData.dateOfBirth} onChange={handleDateChange} />
                        </label>
                        {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
                    </div>
                    <div className='input-item'>
                        <label>
                            <span>Marital Status</span>
                            <Select 
                                placeholder='-- select --' 
                                defaultValue={!formData.maritalStatus || {label: formData.maritalStatus, value: formData.maritalStatus}}
                                onChange={handleMaritalStatusChange} 
                                options={maritalStatusOptions}/>
                        </label>
                        {errors.maritalStatus && <div className="error">{errors.maritalStatus}</div>}
                    </div>
                    <div className='input-item'>
                        <label>
                            <span>Postcode</span>
                            <input type='text' id='postcode' name='postcode' value={formData.postcode || ''} onChange={handleTextInputChange} />
                        </label>
                        {errors.postcode && <div className="error">{errors.postcode}</div>}
                    </div>
                    <div className='input-item'>
                        <label>
                            <span>House Number</span>
                            <input type='text' id='house-number' name='houseNumber' value={formData.houseNumber || ''} onChange={handleTextInputChange} />
                        </label>
                        {errors.houseNumber && <div className="error">{errors.houseNumber}</div>}
                    </div>
                    <div className='input-item'>
                        <label>
                            <span>Street Name</span>
                            <input type='text' id='street-name' name='streetName' value={formData.streetName || ''} onChange={handleTextInputChange} />
                        </label>
                        {errors.streetName && <div className="error">{errors.streetName}</div>}
                    </div>
                    <div className='input-item'>
                        <label>
                            <span>Town/City</span>
                            <input type='text' id='town' name='town' value={formData.town || ''} onChange={handleTextInputChange} />
                        </label>
                        {errors.town && <div className="error">{errors.town}</div>}
                    </div>
                    <div className='input-item'>
                        <label className='type--status'>
                            <span>Employment Status</span>
                            <Select 
                                placeholder='-- select --' 
                                defaultValue={!formData.employmentStatus || {label: formData.employmentStatus, value: formData.employmentStatus}} 
                                onChange={handleEmploymentStatusChange} 
                                options={employmentStatusOptions}/>
                        </label>
                        {errors.employmentStatus && <div className="error">{errors.employmentStatus}</div>}
                    </div>
                    <div className='input-item'>
                        <label className='type--currency'>
                            <span>Annual Income</span>
                            <input type='text' id='annual-income' name='annualIncome' value={formData.annualIncome?.toString() || ''} onChange={handleNumberInputChange} />
                        </label>
                        {errors.annualIncome && <div className="error">{errors.annualIncome}</div>}
                    </div>
                </div>
                <div className='credit-check-form-content--footer'>
                    <button className='action-btn' type='submit'>Check Eligibility</button> 
                </div>
            </div>
        </form>        
    );
}

export  default CreditCheckForm;