import styled, { css } from 'styled-components';

// Reutilização de estilos comuns
const boxStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const BoxContainer = styled.div`
  ${boxStyles}
  height: 100%;
  width: 100%;

  &.boxGeral {
    margin: auto 0;
    width: 98%;
    height: 85vh;
    gap: 20px;
  }

  &.boxInfo {
    border: 2px solid ${props => props.theme.color.primary};
    flex-direction: column;

    @media (max-width: 450px) {
      border-radius: 25px;
    }
  }

  &.boxTopInfo {
    background-color: ${props => props.theme.color.primary};
    height: 5vh;
    min-height: 40px;
    justify-content: space-between;
    padding: 10px;
    width: 90%;
  }

  &.boxQuantidadeInfo {
    height: 110px;
    justify-content: space-evenly;
    align-items: end;
    padding-bottom: 7px;
  }

  &.boxTabelaInfo {
    flex-direction: column;
    padding: 5px;
    gap: 5px;

    @media (max-width: 1280px) {
      .boxPesquisa + .boxOpcoesTabela.mobile {
        display: flex;
      }
    }
  }

  &.boxModular {
    flex-direction: column;
    width: 45%;
    border: 2px solid ${props => props.theme.color.primary};
    justify-content: space-between;

    @media (max-width: 1280px) {
      display: none; // Faz o BoxModular desaparecer quando a largura da tela for 1280px ou menor
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
        border-radius: 50px 50px 0px 0px;
      }
    }
  }

  &.boxAprentacaoTopInfo {
    gap: 5px;
    width: auto;
  }

  &.boxQuantidade {
    flex-direction: column;
    background-color: ${props => props.theme.color.primary};
    height: 65px;
    width: 120px;
    justify-content: space-around;
    border-radius: 20px;

    @media (max-width: 450px) {
      width: 100px;
    }
  }

  &.boxNomeQtFos {
    background-color: ${props => props.$backgroundcolor || 'grey'};
    width: 80%;
    height: 15px;
    margin-bottom: 5px;
  }

  &.boxPesquisa {
    border: 1px solid #f1eded;
    border-radius: 70px;
    background-color: white;
    height: 35px;
    width: 400px;
    justify-content: space-around;
    gap: 5px;
    padding: 3px;

    @media (max-width: 450px) {
      width: 90%;
    }
  }

  &.boxTabela {
    border-radius: 10px;
    padding: 10px;
    border: 1px solid ${props => props.$backgroundcolor};
    align-items: start;
    background-color: white;
    height: 60vh;
    overflow: hidden;

    @media (max-width: 1280px) {
      height: 55vh;
    }
  }

  &.boxOpcoesTabela {
    background-color: ${props => props.theme.color.primary || '#676d7c'};
    width: 40%;
    height: 40px;
    padding: 8px;

    &.mobile {
      display: none;

      @media (max-width: 1280px) {
        display: flex;
        width: auto;
        padding: 10px;
        gap: 10px;
        justify-content: center;
      }
    }

    &.desktop {
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }

  &.botoesOpcoesTabela {
    gap: 10px;
    width: 70%;
    justify-content: flex-end;
  }

  &.camposModular {
    flex-direction: column;
    height: 65%;
  }

  &.boxTituloModular {
    background-color: ${props => props.theme.color.primary || '#676d7c'};
    height: 40px;
    width: 80%;
    gap: 10px;
    margin-top: 3px;
  }

  &.boxCampos {
    flex-direction: column;
    align-items: ${({ $toggle }) => ($toggle ? 'start' : 'center')};
    padding: 5px;
    gap: 3px;
    width: 90%;

    @media (max-width: 1280px) {
      padding: 2px;
      gap: 2px;
    }
  }

  &.boxBotoes {
    height: 60px;

    & div {
      ${boxStyles}
      gap: 10px;
      flex-direction: row;
      background-color: ${props => props.theme.color.primary || '#676d7c'};
      padding: 5px;
    }
  }
`;


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

  &.botaoLancarFo {
    width: 90px;
    height: 30px;
    background-color: #87CB28;
  }

  &.botaoVoltar {
    color: ${props => props.theme.color.primary};
  }

  &.botaoVoltarResponsivo {
    color: ${props => props.theme.color.primary};
  }

  &.botoesImpressao {
    background-color: ${props => props.theme.color.secondary};
  }

  &.botaoPesquisar {
    background-color: ${props => props.$backgroundcolor || props.theme.color.secondary};
    width: 100%;
    max-width: 70px;
    height: 30px;
    font-size: 8px;
  }

  &.btAcaoTabela,
  &.btAcaoFo {
    background-color: ${props => props.$backgroundcolor || '#676d7c'};
    width: 90px;
    height: 30px;
    width: 90px;
    height: 30px;
    font-size: 8px;
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
    props.$variant === 'modulo' &&
    `
    font-size: 1.1rem;
    line-height: 1;
    letter-spacing: 1.5px;
  `}

  ${(props) =>
    props.$variant === 'fatosObservados' &&
    `
    font-size: 2.5rem;
    font-family: 'Prompt-Bold';
    line-height: 1;
  `}

  ${(props) =>
    props.$variant === 'qtFos' &&
    `
    font-size: 3.5rem;
    font-family: 'Prompt-Bold';
    line-height: 1;
  `}

  &.tituloModular {
    font-size: 13px;
    letter-spacing: 1px;

    span {
      font-family: 'Prompt-Regular';
    }
  }

  &.campos {
    color: #424854;
    text-align: left;
    width: 100%;
    padding-left: 25px;
    font-family: 'Prompt-Bold';
    font-size: 12px;
  }

  &.textoModular {
    color: #424854;
    font-size: 12px;
    font-family: 'Prompt-Bold';
  }
`;


export const CircleIcon = styled.span`
  background-color: ${props => props.$backgroundcolor || '#f1eded'};
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  ${boxStyles}

  &.iconQuantidade {
    width: 20px;
    height: 20px;
    padding: 2px;
    margin-top: -10px;
  }

  &.circleModular {
    width: 13px;
    height: 13px;
    background-color: ${props => {
      if (props.$backgroundcolor === "Positivo") {
        return props.theme.color.green;
      } else if (props.$backgroundcolor === "Negativo") {
        return props.theme.color.red;
      } else {
        return props.theme.color.primary;
      }
    }};
  }
`;

export const TextoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;