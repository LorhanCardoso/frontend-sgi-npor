import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importação do hook useNavigate
import * as S from './style';
import Logo from '../../../assets/icone.png';
import { BoxContainer } from '../../../shared/styles';

const Login = () => {
    const navigate = useNavigate(); // Inicializa o hook

    const handleLogin = () => {
        // Aqui você pode adicionar validações, se necessário
        navigate('/'); // Redireciona para a tela de Dashboard
    };

    return (
        <S.Container>
            <BoxContainer 
                $height="40vh" 
                $flexDirection="column"
                $padding="2 rem"
                $backgroundColor="white"    
            >
                <S.Titulo>SISTEMA DE GESTÃO</S.Titulo>
                <S.SubTitulo>NÚCLEO DE PREPARAÇÃO DE OFICIAIS DA RESERVA</S.SubTitulo>
            </BoxContainer>

            <BoxContainer
                $flexDirection="column"
            >
                <S.FotoContainer>
                    <img src={Logo} alt='SGI-NPOR' />
                </S.FotoContainer>
                <S.SaudacaoText>Bem-vindo!</S.SaudacaoText>

                <S.LoginBox>
                    <S.InputWrapper>
                        <S.StyledIconUser size={20} />
                        <S.StyledInputs type="text" placeholder="Usuário" />
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <S.StyledIconPassword size={20} />
                        <S.StyledInputs type="password" placeholder="Senha" />
                    </S.InputWrapper>

                    <S.StyledButton onClick={handleLogin}>Entrar</S.StyledButton>
                </S.LoginBox>

                <S.VersaoText>VERSÃO 3.0</S.VersaoText>
            </BoxContainer>

            <BoxContainer>
                <S.RodapeText>Desenvolvido por Lo-rhan <span>Cardoso</span> da Paz - 3° Sargento</S.RodapeText>
            </BoxContainer>
        </S.Container>
    );
};

export default Login;
