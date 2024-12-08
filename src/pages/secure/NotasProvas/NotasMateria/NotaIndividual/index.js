import React, { useState, useCallback } from 'react';
import * as S from './style';
import images from '../../../../../assets/iconsNotas/index';
import {
  FcStatistics, FcIdea, FcPrint,
  FcComboChart, FcGenericSortingAsc,
  FcGenericSortingDesc,
} from "react-icons/fc";

import { FaHome } from "react-icons/fa";
import { IoIosSave, IoIosCloseCircleOutline } from "react-icons/io";

import colorMapMaterias from '../../../../../styles/colorMapMaterias';

import { Chart } from "react-google-charts";
import SimpleTable from '../../../../../components/SimpleTable';
import Table from '../../../../../components/Table';

import columnsTableMencoes from '../../../../../components/ColumsTabela/columnsMencoes';
import columnsTableNotas from '../../../../../components/ColumsTabela/columnsNotas';

import dataNotas from '../../../../../data/dadosNotas';

const data = [
  ["Menção", "Quantidade"],
  ["Excelente", 9],
  ["Muito Bom", 2],
  ["Bom", 2],
  ["Regular", 2],
  ["Insuficiente", 7],
  ["Não Realizado", 4],
];

const options = {
  title: "Gráfico de Menções",
  backgroundColor: "none"
};

const dataMencoes = [
  { mencao: "Excelente", quantidade: 9, porcentagem: "10%" },
  { mencao: "Muito Bom", quantidade: 2, porcentagem: "15%" },
  { mencao: "Bom", quantidade: 2, porcentagem: "53%" },
  { mencao: "Regular", quantidade: 2, porcentagem: "41%" },
  { mencao: "Insuficiente", quantidade: 7, porcentagem: "23%" },
  { mencao: "Não Realizado", quantidade: 4, porcentagem: "42%" },
  { mencao: "Total", quantidade: 30, porcentagem: "100%" },
];

const BoxImprimir = ({ responsivo }) => (
  <S.BoxContainer className={responsivo ? 'boxImprimirResponsivo' : 'boxImprimir'}>
    <S.BoxContainer className='boxNomeImprimir'>
      <FcPrint size={10} />
      <S.Texto>Imprimir</S.Texto>
    </S.BoxContainer>
    <S.Botao className='botoesImpressao'>Notas</S.Botao>
    <S.Botao className='botoesImpressao'>Gráfico</S.Botao>
  </S.BoxContainer>
);

const BotaoOrdenar = ({ icon: Icon, texto }) => (
  <S.Botao className='botaoOrdenar'>
    <Icon size={10} />
    {texto}
  </S.Botao>
);

const BotaoVoltar = ({ responsivo, onBack }) => (
  <S.Botao
    $width="100px"
    className={responsivo ? 'botaoVoltarResponsivo' : 'botaoVoltar'}
    onClick={onBack}
  >
    <FaHome size={10} />
    Voltar
  </S.Botao>
);

const NotasIndividual = ({ titulo, img, tipo, onBack, materiaId }) => {
  const [exibiModular, setExibirModular] = useState(false);

  const handleRowClick = useCallback(() => {
    window.prompt("Digite a nota:");
  }, []);

  const handleModular = () => {
    setExibirModular(!exibiModular);
  };

  const backgroundColor = colorMapMaterias[materiaId] || "#E7B341";

  return (
    <>
      <S.BoxContainer className='boxGeral'>
        <S.BoxContainer className='boxInfo'>
          <S.BoxContainer className='boxBotoes'>
            <S.BoxContainer className='identificacaoMateria'>
              <S.CircleIcon $backgroundcolor={backgroundColor}>
                <img src={images[img]} alt={titulo} width={75} />
              </S.CircleIcon>
              <S.TextoBox>
                <S.Texto variant="materiaProva">{titulo}</S.Texto>
                <S.Texto variant="ac_coProva">{tipo}</S.Texto>
              </S.TextoBox>
            </S.BoxContainer>
            <S.BoxContainer className='botoesAcoesProva'>
              <S.Botao $backgroundcolor="#E17337" $width="100px" onClick={handleModular}>
                <FcStatistics size={10} />
                Gráfico
              </S.Botao>
            </S.BoxContainer>
            <BoxImprimir responsivo={false} />
            <S.Botao $width="120px" $backgroundcolor={props => props.theme.color.green}>
              <IoIosSave size={10} />
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
          <S.BoxContainer className='boxTabela'>
            <Table
              data={dataNotas}
              columns={columnsTableNotas}
              onRowClick={handleRowClick}
            />
          </S.BoxContainer>
        </S.BoxContainer>
        <S.BoxContainer className={`boxModular ${exibiModular ? 'exibir' : ''}`}>
          {exibiModular &&
            <S.Botao
              $backgroundcolor={props => props.theme.color.red}
              $width="70px"
              $height='60px'
              onClick={handleModular}
            >
              <IoIosCloseCircleOutline size={10} />
              Fechar
            </S.Botao>
          }
          <S.BoxContainer className='boxExpeciais'>
            <S.BoxContainer className='boxTitulo'>
              <FcStatistics />
              <S.Texto $size="1.2rem">Gráfico</S.Texto>
            </S.BoxContainer>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"230px"}
            />
          </S.BoxContainer>
          <S.BoxContainer className='boxExpeciais'>
            <S.BoxContainer className='boxTitulo'>
              <FcIdea />
              <S.Texto $size="1.2rem">Menções</S.Texto>
            </S.BoxContainer>
            <SimpleTable
              data={dataMencoes}
              columns={columnsTableMencoes}
            />
          </S.BoxContainer>
        </S.BoxContainer>
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
