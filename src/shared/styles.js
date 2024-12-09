import styled from 'styled-components';

export const HeaderBox = styled.div`
    width: 98%; 
    max-width: 100%; 
    background-color: ${props => props.theme.color.primary};
    border-radius: 70px; 
    margin: ${props => props.$margin || ''};
    height: ${props => props.$height || ''}; 
    display: ${props => props.$display || ''};
    align-items: center;
    justify-content: ${props => props.$justifycontent || ''};
    padding-left: ${props => props.$paddingleft || ''};
    padding-right: ${props => props.$paddingright || ''};
    padding: ${props => props.$padding || ''};
    gap: 10px;

    @media (max-width: 1280px) {
        display: ${props => props.$displayBotoes || ''};
    }

    @media (max-width: 450px) {
        height: ${props => props.$height450 || ''};
        padding-left: ${props => props.$paddingleft450 || ''};
        padding-right: ${props => props.$paddingright450 || ''};
    }
`;

export const Container = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;


export const BoxContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.$flexDirection || 'row'};
  justify-content: ${props => props.$justifyContent || 'center'};
  align-items: ${props => props.$alignItems || 'center'};
  height: ${props => props.$height || '100%'};
  width: ${props => props.$width || '100%'};
  background-color: ${props => props.$backgroundColor || 'transparent'};
  padding: ${props => props.$padding || '0px'};
  padding-left: ${props => props.$paddingLeft || '0px'};
  padding-right: ${props => props.$paddingRight || '0px'};
  gap: ${props => props.$gap || '0px'};
  border-radius: ${props => props.$borderRadius || '0px'};
  margin: ${props => props.$margin || '0px'};
  margin-bottom: ${props => props.$marginBottom || ''};
  border: ${props => props.$border || ''};
  border-color: ${ props => props.theme.color.primary };
  
  /* Responsividade para telas menores */
  @media (max-width: 1024px) {
    flex-direction: ${props => props.$responsiveDirection || props.$flexDirection || 'row'};
    padding: ${props => props.$responsivePadding || props.$padding || '0px'};
  }

  /* Outras media queries conforme necessário */
  @media (max-width: 450px) {
    flex-direction: ${props => props.$responsiveDirectionSmall || props.$flexDirection || 'row'};
  }
`;

export const Botao = styled.button`
  border-radius: 70px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  font-family: 'Poppins-Bold';
  color: ${ props => props.theme.color.primary };
  background-color: ${props => props.$backgroundcolor || 'white'};
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || '40px'};

  &:hover {
      opacity: 0.9;
  }
  & span {
      @media (max-width: 556px) {
          display: none;
      }
  }

  @media (max-width: 768px) {
      height: 30px;
      width: auto;
      min-width: 50px;
  }
`;
