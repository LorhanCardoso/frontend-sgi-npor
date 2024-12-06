import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ToggleButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border: 1px solid ${({ $isActive }) => ($isActive ? 'transparent' : '#f1eded')};
  background-color: ${({ $isActive, color }) => ($isActive ? color : '#fff')};
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#424854')};
  transition: all 0.3s ease;
  height: 40px;

  &:hover {
    border-color: ${({ color }) => color};
  }
`;

const InnerCircle = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 8px;
  background-color: ${({ $isActive, color }) =>
    $isActive ? '#fff' : color || '#424854'};
  border-radius: 50%;
  transition: background-color 0.3s ease;
`;

const ToggleButton = ({ $isActive, color, onClick, label }) => (
  <ToggleButtonStyled $isActive={$isActive} color={color} onClick={onClick}>
    <InnerCircle $isActive={$isActive} color={color} />
    {label}
  </ToggleButtonStyled>
);

const Toggle = ({ formData, setFormData, isEditable }) => {
  return (
    <ToggleContainer>
      {isEditable ? (
        <>
          <ToggleButton
            $isActive={formData.tipoFo === 'Positivo'}
            color="#87cb28"
            onClick={() =>
              setFormData((prev) => ({ ...prev, tipoFo: 'Positivo' }))
            }
            label="Positivo"
          />
          <ToggleButton
            $isActive={formData.tipoFo === 'Negativo'}
            color="#f44336"
            onClick={() =>
              setFormData((prev) => ({ ...prev, tipoFo: 'Negativo' }))
            }
            label="Negativo"
          />
        </>
      ) : (
        <ToggleButton
          $isActive
          color={formData.tipoFo === 'Positivo' ? '#87cb28' : '#f44336'}
          onClick={() => {}}
          label={formData.tipoFo}
        />
      )}
    </ToggleContainer>
  );
};

export default Toggle;
