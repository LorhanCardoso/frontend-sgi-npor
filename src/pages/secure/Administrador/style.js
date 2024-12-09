import styled from "styled-components";

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

export const TextoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;