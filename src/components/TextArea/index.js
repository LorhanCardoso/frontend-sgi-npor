import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  max-height: 250px;
  min-height: 150px;
  padding: 10px;
  font-size: 12px;
  font-family: 'Poppins-Regular';
  border: 1px solid #f1eded;
  outline: none;
  background-color: white;
  transition: border-color 0.3s ease;
  border-radius: 20px;
  color: #424854;
  resize: vertical; /* Permite redimensionar o campo verticalmente */

  &:focus {
    border-color: ${props => props.theme.color.primary || '#676d7c'};
  }

  &:hover {
    border-color: ${props => props.theme.color.primary || '#676d7c'};
  }


`;

const TextArea = ({ 
  value, 
  onChange, 
  placeholder, 
  disabled = false, 
  className,
  name,
  readOnly
}) => {
  return (
    <StyledTextArea 
      value={value} 
      onChange={onChange} 
      disabled={disabled} 
      placeholder={placeholder}
      className={className}
      name={name}
      readOnly={readOnly}
    />
  );
};

export default TextArea;
