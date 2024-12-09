import React from 'react';
import { FcComboChart, FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";
import styled from 'styled-components';

const commonButtonStyles = `
    border-radius: 70px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-family: 'Poppins-Bold';
    color: white;
    &:hover {
        opacity: 0.9;
    }
    & span {
        @media (max-width: 556px) {
            display: none;
        }
    }
`;

const commonContainerStyles = `
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;


export const Botao = styled.button`
    ${commonButtonStyles}
    background-color: ${props => props.$backgroundcolor || 'white'};
    width: ${props => props.$width || '100%'};
    height: ${props => props.$height || '35px'};

  &.botaoOrdenar {
      color: ${props => props.theme.color.primary};
      font-family: 'Poppins-Regular';

      @media (max-width: 1024px) {
          height: 20px;
          width: 100%;
      }
  }
`;

export const Texto = styled.p`
    color: white;
    text-decoration: none;
    font-size: ${(props) => props.$size || '1rem'};
    font-family: ${(props) => props.theme.font.titulo};
    background-color: ${(props) => props.$backgroundcolor || ''};
    margin: 0;
`;

export const BoxContainer = styled.div`
  ${commonContainerStyles}

  &.boxOrdernar {
      width: 30%;
      height: 50px;
      gap: 10px;
      border-radius: 70px;
      padding: 5px;
      flex-direction: row;
      background-color: ${props => props.theme.color.primary};

      @media (max-width: 1024px) {
          width: 70%;
          height: 35px;
      }
  }

  &.boxBotoesOrdenar {
      background-color: #424242;
      border-radius: 70px;
      gap: 10px;
      padding: 5px;
  }
`;


const BotaoOrdenar = ({ icon: Icon, texto, onClick }) => (
  <Botao className='botaoOrdenar' onClick={onClick}>
    <Icon size={10} />
    {texto}
  </Botao>
);

const BoxOrdernar = ({ sortByAluno, sortByMaiorNota, sortByMenorNota }) => {
  return (
    <BoxContainer className='boxOrdernar'>
      <Texto>Ordernar</Texto>
      <BoxContainer className='boxBotoesOrdenar'>
        <BotaoOrdenar 
          icon={FcComboChart} 
          texto="Padrão" 
          onClick={sortByAluno} 
        />
        <BotaoOrdenar 
          icon={FcGenericSortingDesc} 
          texto="Maiores" 
          onClick={sortByMaiorNota} 
        />
        <BotaoOrdenar 
          icon={FcGenericSortingAsc} 
          texto="Menores" 
          onClick={sortByMenorNota} 
        />
      </BoxContainer>
    </BoxContainer>
  );
};

export default BoxOrdernar;
