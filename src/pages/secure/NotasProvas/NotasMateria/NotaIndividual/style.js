import styled from 'styled-components';

export const BoxContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

    &.boxGeral{
        margin: auto 0;
        flex-direction: column;
        width: 98%;
        margin-top: -1%;
    }

    &.boxBotoes{
        padding: 10px;
        gap: 10px;
        border-radius: 70px;
        justify-content: space-between;
        background-color: ${props => props.theme.color.primary};

        @media (max-width: 1024px) {
            height: 65px;;
        }
    }

    &.identificacaoMateria{
        gap: 5px;
        width: auto;
    }

    &.botoesAcoesProva{
        height: 50px;
        width: 280px;
        gap: 10px;
        padding: 5px;
    }

    &.boxImprimir{
        border-radius: 70px;
        gap: 10px;
        border: 1px solid;
        border-color: white;
        padding: 5px;
        width: 250px;
        height: 50px;

        @media (max-width: 1024px) {
            display: none;
        }
    }

    &.boxNomeImprimir{
        flex-direction: column;
        width: 75%;
    }

    &.boxTabela{
        height: 600px;
    }

    &.boxOrdernar{
        width: 30%;
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

    &.boxBotoesOrdenar{
        background-color: #424242;
        border-radius: 70px;
        gap: 10px;
        padding: 5px;
    }

    &.boxResponsivo{
        justify-content: space-around;
        display: none;

        @media (max-width: 1024px) {
            display: flex;
        }
    }

    &.boxImprimirResponsivo{
        border-radius: 70px;
        gap: 10px;
        background-color: ${props => props.theme.color.primary};
        padding: 5px;
        width: 180px;
        height: 35px;
        margin-top: 1%;

        @media (max-width: 1024px) {
            display: flex;
        }
    }

    &.boxBotaoVoltarResponsivo{
        background-color: ${props => props.theme.color.primary};
        width: 15%;
        height: auto;
        padding: 5px;
        border-radius: 70px;
        margin-top: 1%;
    }

`

export const Botao = styled.button`
    border-radius: 70px;
    border: none;
    background-color: ${props => props.$backgroundcolor || 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || '100%'};
    height: 40px;
    gap: 3px;   
    font-family: 'Poppins-Bold';
    color: ${props => props.color || 'white'};

    @media (max-width: 768px) {
        height: 30px;
        width: auto;
        min-width: 50px;
    }
    
    &:hover {
    opacity: 0.9;
    }

    & span {
        @media (max-width: 556px) {
            display: none;
        }
    }

    &.botaoOrdenar{
        color: ${props => props.theme.color.primary};
        font-family: 'Poppins-Regular';

        @media (max-width: 1024px) {
            height: 20px;
            width: 100%;
        }
    }

    &.botaoVoltar{
        color: ${props => props.theme.color.primary};

        @media (max-width: 1024px) {
            height: 20px;
            display: none;
        }
    }

    &.botaoVoltarResponsivo{
        color: ${props => props.theme.color.primary};

        @media (max-width: 1024px) {
            height: 28px;
        }
    }

    &.botoesImpressao{
        background-color: ${props => props.theme.color.secondary};

        @media (max-width: 1024px) {
            height: 100%;
        }
    }
    
`;

export const Texto = styled.p`
    color: white;
    text-decoration: none;
    font-size: ${(props) => props.size || '1rem'};
    font-family: ${(props) => props.theme.font.titulo};
    background-color: ${(props) => props.$backgroundcolor || ''};
    margin: 0;

    ${(props) =>
        props.variant === 'materiaProva' &&
        `
        font-size: 3rem;
        line-height: 1;
        letter-spacing: 1.5px;
    `}

    ${(props) =>
        props.variant === 'ac_coProva' &&
        `
        font-size: 1.3rem;
        font-family: 'Poppins-Regular';
        line-height: 1;
    `}
`;


export const CircleIcon = styled.span`
    background-color: ${props => props.$backgroundcolor || ''};
    padding: 5px;
    border-radius: 50%;
    width: 47px;
    height: 47px;
    display: flex;
    justify-content :center;
    align-items :center;
    
`;

export const TextoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center
`;