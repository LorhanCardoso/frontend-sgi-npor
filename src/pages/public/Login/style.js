import styled from 'styled-components';
import { FaUserAlt, FaLock } from "react-icons/fa";

export const Container = styled.div`
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Titulo = styled.p`
    color: ${props => props.theme.color.primary};
    font-size: 8em; // Aumentando o tamanho da fonte
    text-align: center;
    font-family: 'Prompt-Bold';
    margin-bottom: -2rem; // Reduz o espaçamento inferior do Título

    @media (max-width: 768px) {
        font-size: 7rem; // Aumentando o tamanho da fonte
    }

    @media (max-width: 480px) {
        font-size: 5.5rem; // Aumentando o tamanho da fonte
    }
`;

export const SubTitulo = styled.p`
    color: #666;
    font-size: 2em; // Aumentando o tamanho da fonte
    letter-spacing: 2px;
    text-align: center;
    font-family: 'Poppins-Bold';
    margin-top: 0.2rem; // Reduz o espaçamento superior do Subtítulo

    @media (max-width: 480px) {
        font-size: 1.6rem; // Aumentando o tamanho da fonte
    }
    
`;

export const SaudacaoText = styled.p`
    color: ${props => props.theme.color.primary};
    font-size: 1.5em;
    margin: 1rem 0; // Ajustando o espaçamento
    font-family: 'Prompt-Bold';

    @media (max-width: 951px) {
        font-size: 2em; // Aumentando o tamanho da fonte
    }
`;

export const FotoContainer = styled.div`
    text-align: center;

    img {
        width: 45px;
        height: 50px;
        max-width: 100%;
        margin-bottom: 1rem; // Espaçamento entre a logo e o texto
    }
`;

export const RodapeText = styled.p`
    color: ${props => props.theme.color.primary};
    font-size: 1.2em;
    font-family: 'Prompt-Regular';

    span {
        font-weight: bold;
    }

    @media (max-width: 951px) {
        font-size: 1.5rem; // Aumentando o tamanho da fonte
    }
`;

export const VersaoText = styled.p`
    color: ${props => props.theme.color.primary};
    font-weight: bold;
    font-size: 1em;
    margin-top: 1rem; // Espaçamento acima da versão
    font-family: 'Prompt-Bold';

    @media (max-width: 951px) {
        font-size: 1.5rem; // Aumentando o tamanho da fonte
    }
`;

export const LoginBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 950px;
    padding: 1rem; // Espaçamento interno para o conteúdo

    // Fundo preto e bordas arredondadas em telas maiores
    @media (min-width: 768px) {
        background-color: ${props => props.theme.color.primary}; // Fundo cinza
        border-radius: 50px; // Bordas arredondadas
        width: 90%;
    }

    // Layout vertical em telas menores
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
        width: 90%;
    }
`;

export const StyledButton = styled.button`
    background-color: ${props => props.theme.color.secondary};
    color: white;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 1.2em; // Aumentando o tamanho da fonte
    cursor: pointer;
    font-family: 'Poppins-Bold';
    height: 50px;
    width: 70%;

    &:hover {
        background-color: #0056b3;
    }

    @media (max-width: 951px) {
        font-size: 2em; // Aumentando o tamanho da fonte
    }

    @media (max-width: 480px) {
        margin-top: 5%;
        width: 100%;
    }

`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledIconUser = styled(FaUserAlt)`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #969696;
`;

export const StyledIconPassword = styled(FaLock)`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #969696;
`;

export const StyledInputs = styled.input`
    width: 100%;
    height: 50px; // Aumentando a altura dos inputs
    padding: 0.75rem 1rem 0.75rem 40px; // Espaço para o ícone à esquerda
    border: 1px solid #ccc;
    border-radius: 30px;
    font-size: 1.2em; // Aumentando o tamanho da fonte
    font-family: 'Poppins-Regular';

    &:focus {
        outline: none;
        border-color: #007BFF; // Cor do border no foco
    }

    &::placeholder {
        color: #969696; // Cor do texto do placeholder
    }

    @media (max-width: 951px) {
        font-size: 2em; // Aumentando o tamanho da fonte
    }
`;
