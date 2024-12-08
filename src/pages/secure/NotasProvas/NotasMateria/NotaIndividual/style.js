import styled from 'styled-components';

const commonContainerStyles = `
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

export const BoxContainer = styled.div`
    ${commonContainerStyles}

    &.boxGeral {
        width: 98%;
        height: auto;
        gap: 20px;
    }

    &.boxInfo {
        border: 2px solid ${props => props.theme.color.primary};
        flex-direction: column;

        @media (max-width: 450px) {
            border-radius: 25px;
        }
    }

    &.boxModular {
        flex-direction: column;
        width: 35%;
        border: 2px solid ${props => props.theme.color.primary};
        justify-content: space-between;
        height: 72vh;
        gap: 10px;
        padding: 10px;

        @media (max-width: 1280px) {
            display: none;
        }

        &.exibir {
            @media (max-width: 1280px) {
                display: flex;
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 80%;
                background-color: white;
            }
        }
    }

&.boxBotoes {
    padding: 5px 10px;
    gap: 10px;
    border-radius: 70px;
    justify-content: space-between;
    background-color: ${props => props.theme.color.primary};
    width: 90%;

    @media (max-width: 1024px) {
        height: 65px;
    }
}

&.identificacaoMateria {
    gap: 5px;
    width: auto;
}

&.botoesAcoesProva {
    height: 50px;
    width: 280px;
    gap: 10px;
    padding: 5px;
    display: none;

    @media (max-width: 1280px) {
        display: flex;
    }
}

&.boxImprimir {
    border-radius: 70px;
    gap: 10px;
    border: 1px solid white;
    padding: 5px;
    width: 250px;
    height: 50px;

    @media (max-width: 1024px) {
        display: none;
    }
}

&.boxNomeImprimir {
    flex-direction: column;
    width: 75%;
}

&.boxTabela {
    height: 65vh;
    padding: 10px;
    overflow: hidden;
}

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

&.boxResponsivo {
    justify-content: space-around;
    display: none;

    @media (max-width: 1024px) {
        display: flex;
    }
}

&.boxImprimirResponsivo {
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

&.boxBotaoVoltarResponsivo {
    background-color: ${props => props.theme.color.primary};
    width: auto;
    height: auto;
    padding: 5px;
    border-radius: 70px;
    margin-top: 1%;
}

&.boxTitulo {
    padding: 5px;
    gap: 5px;
    border-radius: 70px;
    background-color: ${props => props.theme.color.primary};
    width: 100px;
}

&.boxExpeciais {
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid ${props => props.theme.color.primary};
    height: 100%;
}
`;

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

export const Botao = styled.button`
    ${commonButtonStyles}
    background-color: ${props => props.$backgroundcolor || 'white'};
    width: ${props => props.$width || '100%'};
    height: ${props => props.$height || '35px'};

@media (max-width: 768px) {
    height: 30px;
    width: auto;
    min-width: 50px;
}

&.botaoOrdenar {
    color: ${props => props.theme.color.primary};
    font-family: 'Poppins-Regular';

    @media (max-width: 1024px) {
        height: 20px;
        width: 100%;
    }
}

&.botaoVoltar,
&.botaoVoltarResponsivo {
    color: ${props => props.theme.color.primary};

    @media (max-width: 1024px) {
        &.botaoVoltar {
            height: 20px;
            display: none;
        }

        &.botaoVoltarResponsivo {
            height: 28px;
        }
    }
}

&.botoesImpressao {
    background-color: ${props => props.theme.color.secondary};

    @media (max-width: 1024px) {
        height: 100%;
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

    ${(props) =>
        props.variant === 'materiaProva' &&`
        font-size: 2.5rem;
        line-height: 1;
        letter-spacing: 1.5px;
    `}

    ${(props) =>
        props.variant === 'ac_coProva' &&`
        font-size: 1.1rem;
        font-family: 'Poppins-Regular';
        line-height: 1;
    `}
`;

export const CircleIcon = styled.span`
    background-color: ${props => props.$backgroundcolor || ''};
    padding: 5px;
    border-radius: 50%;
    width: 43px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
