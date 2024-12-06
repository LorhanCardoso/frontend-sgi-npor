import React from 'react';
import * as S from './style';
import images from '../../../../../assets/iconsNotas/index';
import { FcStatistics, FcIdea, FcPrint, FcApproval,
        FcComboChart, FcGenericSortingAsc,
        FcGenericSortingDesc,  } from "react-icons/fc";

import { FaHome } from "react-icons/fa";

import colorMapMaterias from '../../../../../styles/colorMapMaterias';


const NotasIndividual = ({ titulo, img, tipo, onBack, materiaId }) => {

  const BoxImprimir = ({ responsivo }) => (
    <S.BoxContainer className={responsivo ? 'boxImprimirResponsivo' : 'boxImprimir'}>
      <S.BoxContainer className='boxNomeImprimir'>
        <FcPrint size={20}/>
        <S.Texto>Imprimir</S.Texto>
      </S.BoxContainer>
      <S.Botao className='botoesImpressao'>Notas</S.Botao>
      <S.Botao className='botoesImpressao'>Gráfico</S.Botao>
    </S.BoxContainer>
  );

  const BotaoAcao = ({ backgroundColor, icon: Icon, texto }) => (
    <S.Botao $backgroundcolor={backgroundColor}>
      <Icon size={10}/>
      {texto}
    </S.Botao>
  );

  const BotaoOrdenar = ({ icon: Icon, texto }) => (
    <S.Botao className='botaoOrdenar'>
      <Icon size={10}/>
      {texto}
    </S.Botao>
  );

  const BotaoVoltar = ({ responsivo, onBack }) => (
    <S.Botao 
      width="120px" 
      className={responsivo ? 'botaoVoltarResponsivo' : 'botaoVoltar'} 
      onClick={onBack}
    >
      <FaHome size={10} />
      Voltar
    </S.Botao>
  );

  const backgroundColor = colorMapMaterias[materiaId] || "#E7B341"; // Cor padrão se o ID não estiver no mapeamento.
  

  return (
    <>
      <S.BoxContainer className='boxGeral'>
        
        <S.BoxContainer className='boxBotoes'>

          <S.BoxContainer className='identificacaoMateria'>
            <S.CircleIcon $backgroundcolor={backgroundColor}>
              <img src={images[img]} alt={titulo} width={90} />
            </S.CircleIcon>

            <S.TextoBox>
              <S.Texto variant="materiaProva">{titulo}</S.Texto>
              <S.Texto variant="ac_coProva">{tipo}</S.Texto>
            </S.TextoBox>              
          </S.BoxContainer>

          <S.BoxContainer className='botoesAcoesProva'>
            <BotaoAcao backgroundColor="#E17337" icon={FcStatistics} texto="Gráfico" />
            <BotaoAcao backgroundColor="#FFA500" icon={FcIdea} texto="Menções" />
          </S.BoxContainer>

          <BoxImprimir responsivo={false} />

          <S.Botao width="120px" $backgroundcolor="#87CB28" >
              <FcApproval size={10}/>
              Salvar
          </S.Botao>

          <BotaoVoltar responsivo={false} onBack={onBack} />
        </S.BoxContainer>

        <S.BoxContainer className='boxResponsivo'>

        <BoxImprimir responsivo={true} />

          <S.BoxContainer className='boxBotaoVoltarResponsivo'>
            <BotaoVoltar responsivo={true} onBack={onBack} />
          </S.BoxContainer>
        </S.BoxContainer>
        
        <S.BoxContainer className='boxTabela'>Espaço para a tabela</S.BoxContainer>
      </S.BoxContainer>
      
      <S.BoxContainer className='boxOrdernar'>
        <S.Texto>Ordernar</S.Texto>

        <S.BoxContainer className='boxBotoesOrdenar'>
          <BotaoOrdenar icon={FcComboChart} texto="Padrão" />
          <BotaoOrdenar icon={FcGenericSortingDesc} texto="Maiores" />
          <BotaoOrdenar icon={FcGenericSortingAsc} texto="Menores" />
        </S.BoxContainer>
        
    </S.BoxContainer>

    </>
  );
};

export default NotasIndividual;