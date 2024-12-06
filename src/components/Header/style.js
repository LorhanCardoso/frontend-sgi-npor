import styled from 'styled-components';

export const HeaderBox = styled.div`
    width: 98%;
    max-width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 70px;
    margin: 1% auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;


    @media (max-width: 450px) {
        height: 7vh;
    }

    &.headerBoxBotoesResponsivos {
        display: none;

        @media (max-width: 1280px) {
            display: flex;
            height: 7vh;
            min-height: 45px;
        }

        @media (max-height: 860px) {
            max-height: 40px;
        }
    }
`;

export const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;

    &.boxAcesso, &.boxIdentificacao{
        width: 70%;
    }

    @media (max-width: 680px) {
        &.boxAcesso, &.boxIdentificacao{
            width: 100%;
        }

        &.boxTitulo {
            width: 30%;
        }

        &.logout {
            width: 15%;
        }

    }

    @media (max-width: 1280px) {
        &.boxBotoes {
            display: none;
        }
    }
`;

export const CircleIcon = styled.span`
  background-color: ${({ theme }) => theme.color.white};
  padding: 5px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 780px) {
    width: 30px;
    height: 30px;
  }
`;

export const TextoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &.tituloTextBox{
    align-items: center; // Alinha os textos ao centro horizontalmente
    justify-content: center; // Centraliza verticalmente
    text-align: center; // Alinha o texto no centro dentro do contêiner
  }

`;

export const Texto = styled.p`
    color: ${({ color, theme }) => color || theme.color.white};
    font-size: 1.3rem;
    margin: 0;
    line-height: 1;
    font-family: 'Poppins', sans-serif;

    &.acesso {
        font-size: 0.8rem;
        font-family: 'Poppins-Bold';

        @media (max-width: 950px) {
            font-size: 1rem;
        }

    }

    &.nivelAcesso {
        font-size: 2rem;
        font-family: 'Prompt-Bold';
    }

    &.nomeUsuario {
        font-size: 2rem;
        font-family: 'Poppins-Bold';
    }

    &.cargo {
        font-size: 1.2rem;
        font-family: 'Poppins-Regular';
    }

    &.sistemaGestao {
        font-size: 3.5rem;
        font-family: 'Prompt-Bold';
    }

    &.npor {
        font-size: 1.4rem;
        font-family: 'Poppins-Bold';
    }


    @media (max-width: 950px) {
        &.nivelAcesso, &.nomeUsuario {
            font-size: 2.4rem;
        }

        &.cargo {
            font-size: 1.5rem;
        }

    }

    @media (max-width: 480px) {
        &.acesso {
            font-size: 1rem;
        }

        &.nivelAcesso, &.nomeUsuario {
            font-size: 1.6rem;
        }

        &.cargo {
            font-size: 1.3rem;
        }

    }

    @media (max-width: 450px) {
        &.nomeUsuario {
            font-size: 1.9rem;
        }
    }

`;

export const Botao = styled.button`
    border-radius: 70px;
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-family: 'Poppins-Bold';
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.primary};

    &:hover {
        opacity: 0.9;
    }

    &.logout {
        width: 10%;
    }

    @media (max-width: 480px) {

        width: 100%;
        height: 40px;

        &.logout {
            width: 20%;
            height: 30px;
        }
    }

    @media (max-width: 450px) {
        font-size: 1.1rem;
    }

    @media (max-width: 1280px) {
        font-size: 1.6rem;
    }

    @media (max-height: 860px) {
        max-height: 35px;
    }

`;
