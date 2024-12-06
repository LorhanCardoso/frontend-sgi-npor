import React, { useEffect, useState, memo } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom'; // Importação do hook useNavigate
import { FcCalculator, FcSurvey, FcPrivacy, FcSafe, FcLinux } from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";

const Header = memo(({ onComponentChange }) => {

  const navigate = useNavigate(); // Inicializa o hook

  const handleLogout = () => {
      // Aqui você pode adicionar validações, se necessário
      navigate('/login'); // Redireciona para a tela de Dashboard
  };


  const [screenLabels, setScreenLabels] = useState({
    npor: "NÚCLEO DE PREPARAÇÃO DE OFICIAIS DA RESERVA",
    acesso: "NÍVEL DE ACESSO",
    nivelAcesso: "ADMINISTRADOR",
    sistemaGestao: "SISTEMA DE GESTÃO"
  });

  useEffect(() => {
    const updateLabels = () => {
      const width = window.innerWidth;
      setScreenLabels({
        npor: width <= 680 ? "NPOR" : "NÚCLEO DE PREPARAÇÃO DE OFICIAIS DA RESERVA",
        sistemaGestao: width <= 680 ? "SGI" : "SISTEMA DE GESTÃO",
        acesso: width <= 350 ? "ACESSO" : "NÍVEL DE ACESSO",
        nivelAcesso: width <= 350 ? "ADM" : "ADMINISTRADOR"
      });
    };

    updateLabels();
    window.addEventListener('resize', updateLabels);
    return () => window.removeEventListener('resize', updateLabels);
  }, []);

  const renderButtons = () => (
    <>
      <S.Botao onClick={() => onComponentChange('NotasProvas')}>
        <FcCalculator size={15} />
        Notas de Provas
      </S.Botao>
      <S.Botao onClick={() => onComponentChange('FatosObservados')}>
        <FcSurvey size={15} />
        Fatos Observados
      </S.Botao>
      <S.Botao onClick={() => onComponentChange('Administrador')}>
        <FcPrivacy size={15} />
        Administração
      </S.Botao>
    </>
  );

  return (
    <>
      <S.HeaderBox>
        <S.BoxContainer className="boxAcesso">
          <S.CircleIcon>
            <FcSafe size={35} />
          </S.CircleIcon>
          <S.TextoBox>
            <S.Texto className="acesso">{screenLabels.acesso}</S.Texto>
            <S.Texto className="nivelAcesso">{screenLabels.nivelAcesso}</S.Texto>
          </S.TextoBox>
        </S.BoxContainer>

        <S.BoxContainer className="boxIdentificacao">
          <S.CircleIcon>
            <FcLinux size={35} />
          </S.CircleIcon>
          <S.TextoBox>
            <S.Texto className="nomeUsuario">3° SGT Cardoso</S.Texto>
            <S.Texto className="cargo">Chefe STE</S.Texto>
          </S.TextoBox>
        </S.BoxContainer>

        <S.BoxContainer className="boxTitulo">
          <S.TextoBox className="tituloTextBox">
            <S.Texto className="sistemaGestao">{screenLabels.sistemaGestao}</S.Texto>
            <S.Texto className="npor">{screenLabels.npor}</S.Texto>
          </S.TextoBox>
        </S.BoxContainer>

        <S.BoxContainer className="boxBotoes">
          {renderButtons()}
        </S.BoxContainer>

        <S.Botao className="logout" onClick={handleLogout}>
          <IoMdLogOut size={20} color="#312E2D" />
        </S.Botao>
      </S.HeaderBox>

      <S.HeaderBox className="headerBoxBotoesResponsivos">
        {renderButtons()}
      </S.HeaderBox>
    </>
  );
});

export default Header;
