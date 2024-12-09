import React from 'react';
import styled from 'styled-components';


const StyledSelect = styled.select`
    width: 100%;
    height: 35px;
    padding: 10px;
    font-size: 10px;
    font-family: 'Poppins-Regular';
    border: 1px solid #f1eded; 
    outline: none;
    background-color: white;
    transition: border-color 0.3s ease;
    border-radius: 70px;
    color: #424854;

    &:focus {
        border-color: ${props => props.theme.color.primary || '#676d7c'};
    }

    &:hover {
        border-color: ${props => props.theme.color.primary || '#676d7c'};
    }
`;

const Select = ({ 
    options = [], 
    value, 
    onChange, 
    disabled = false, 
    placeholder = "Selecione uma opção", 
    className,
    name,
    readOnly,
}) => {
    return (
        <StyledSelect 
            value={value} 
            onChange={onChange} 
            disabled={disabled} 
            className={className}
            name={name}
            readOnly={readOnly}
        >
            <option value="" disabled hidden>
                {placeholder}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Select;
