import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 40%;
    display: flex;
    flex-direction: column;
    border: 2px solid ${props => props.theme.color.primary};
    border-radius: 40px;
`;

export const BoxContainer = styled.div`
    height: ${props => props.$height || '100%'};
    width: ${props => props.$width || '100%'};
    background-color: ${props => props.$backgroundcolor || props.theme.color.primary};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.$alignitems || 'center'};
    justify-content: ${props => props.$justifycontent || 'center'};
    gap: ${props => props.$gap || ''};
    flex: ${props => props.$flex || '1'}; 
    padding: ${props => props.$padding || ''};
    border-radius: ${props => props.$borderradius || ''};;

    @media (max-width: 768px) {
        flex: 1;
    }

    @media (max-width: 576px) {
        flex: 1;
    }
`;

export const Botao = styled.button`
  border-radius: 70px;
  border: none;
  background-color: ${props => props.theme.color.secondary};
  width: 100%;
  height: 4.5vh;
  min-height: 30px;
  font-family: 'Poppins-Bold';
  font-size: 1.1rem;
  color: #ffffff;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

export const Text = styled.p`
    color: ${props => props.theme.color.primary};
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    font-family: 'Prompt-Bold';
    padding-top: 5px;

    span {
        font-weight: bold;
    }
`;
