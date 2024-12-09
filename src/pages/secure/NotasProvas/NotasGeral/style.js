import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;

    @media (max-width: 768px) {
        flex-direction: column; 
    }

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const BoxContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;

    &.boxOrdenar{
        width: 30%;
        height: 50px;
        gap: 10px;
        border-radius: 70px;
        padding: 7px;
        background-color: ${props => props.theme.color.primary};

        @media (max-width: 1130px) {
            width: 95%;
        }
    }

    &.botoesOrdenar{
        border-radius: 70px;
        gap: 10px;
        background-color: #424242;
    }

    &.boxTabela{
        margin-top: 0.5%;
        background-color: none;
        height: 72vh;
        border: 1px solid ${props => props.theme.color.primary};
        border-radius: 50px;
        padding: 10px;
    }
    

`;

export const Botao = styled.button`
    border-radius: 70px;
    border: none;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || '100%'};
    height: 100%;
    gap: 3px;
    font-family: 'Poppins-Regular';
    color: ${props => props.theme.color.primary};
    
    &:hover {
    opacity: 0.9;
    }
`;


export const Text = styled.a`
    color: ${props => props.color || ''};
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Prompt-Bold';
`;



