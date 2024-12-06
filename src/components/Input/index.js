import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  font-size: 10px;
  font-family: 'Poppins-Regular';
  border: none;
  outline: none;
  transition: border-color 0.3s ease;
  height: 30px;


  &::placeholder {
      color: #999;
  }

  &.formularioFatoObervado{
    height: 40px;
    padding: 10px;
    font-family: 'Poppins-Regular';
    border: 1px solid #f1eded; 
    outline: none;
    transition: border-color 0.3s ease;
    border-radius: 70px;
    color: #424854;
  }

  &:focus {
  border-color: ${props => props.theme.color.primary || '#676d7c'};
  }

  &:hover {
    border-color: ${props => props.theme.color.primary || '#676d7c'};
  }

`;

const Input = ({ 
    placeholder, 
    type, 
    disabled = false, 
    value, 
    onChange,
    className,
    name,
    readOnly
  }) => {
    return (
      <StyledInput 
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
        readOnly={readOnly}
      />
    );
  };

export default Input;
