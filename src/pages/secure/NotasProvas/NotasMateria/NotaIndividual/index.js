import React, { useState, useCallback, useMemo } from 'react';
import * as S from './style';
import images from '../../../../../assets/iconsNotas/index';
import { FcStatistics, FcIdea, FcPrint } from "react-icons/fc";

import { FcBusinesswoman, FcBusinessman, FcManager, FcPortraitMode } from "react-icons/fc";

import { FaHome } from "react-icons/fa";
import { IoIosSave, IoIosCloseCircleOutline } from "react-icons/io";

import colorMapMaterias from '../../../../../styles/colorMapMaterias';

import { Chart } from "react-google-charts";
import SimpleTable from '../../../../../components/SimpleTable';
import Table from '../../../../../components/Table';
import BoxOrdernar from '../../../../../components/Ordernar';

import columnsTableMencoes from '../../../../../components/ColumsTabela/columnsMencoes';
import columnsTableNotas from '../../../../../components/ColumsTabela/columnsNotas';

//import dataNotas from '../../../../../data/dadosNotas';

const date = [
  { id: 1, foto: FcBusinesswoman, nrAluno: '01', alunoID: 1, aluno: 'Cardoso', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 2, foto: FcBusinessman, nrAluno: '02', alunoID: 2, aluno: 'Costa Silva', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 3, foto: FcManager, nrAluno: '03', alunoID: 3, aluno: 'Ferreira', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 4, foto: FcPortraitMode, nrAluno: '04', alunoID: 4, aluno: 'Almeida', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 5, foto: FcBusinesswoman, nrAluno: '05', alunoID: 5, aluno: 'Pereira', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 7, foto: FcManager, nrAluno: '07', alunoID: 7, aluno: 'Mendes', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 8, foto: FcPortraitMode, nrAluno: '08', alunoID: 8, aluno: 'Gonçalves', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 9, foto: FcBusinesswoman, nrAluno: '09', alunoID: 9, aluno: 'Rodrigues', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 10, foto: FcBusinessman, nrAluno: '10', alunoID: 10, aluno: 'Oliveira', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 11, foto: FcManager, nrAluno: '11', alunoID: 11, aluno: 'Martins', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 12, foto: FcPortraitMode, nrAluno: '12', alunoID: 12, aluno: 'Santos', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 13, foto: FcBusinesswoman, nrAluno: '13', alunoID: 13, aluno: 'Ribeiro', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 15, foto: FcManager, nrAluno: '15', alunoID: 15, aluno: 'Nascimento', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 16, foto: FcPortraitMode, nrAluno: '16', alunoID: 16, aluno: 'Lima', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 17, foto: FcBusinesswoman, nrAluno: '17', alunoID: 17, aluno: 'Soares', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 18, foto: FcBusinessman, nrAluno: '18', alunoID: 18, aluno: 'Monteiro', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 19, foto: FcManager, nrAluno: '19', alunoID: 19, aluno: 'Carvalho', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 20, foto: FcPortraitMode, nrAluno: '20', alunoID: 20, aluno: 'Vieira', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 21, foto: FcBusinesswoman, nrAluno: '21', alunoID: 21, aluno: 'Machado', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 22, foto: FcBusinessman, nrAluno: '22', alunoID: 22, aluno: 'Correia', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 23, foto: FcManager, nrAluno: '23', alunoID: 23, aluno: 'Teixeira', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 24, foto: FcPortraitMode, nrAluno: '24', alunoID: 24, aluno: 'Costa', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 25, foto: FcPortraitMode, nrAluno: '25', alunoID: 25, aluno: 'Costa', gbm: 120, gbo: '', nota: '', mencao: '' },
  { id: 26, foto: FcPortraitMode, nrAluno: '26', alunoID: 26, aluno: 'Costa', gbm: 120, gbo: '', nota: '', mencao: '' }
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
  const [tableData, setTableData] = useState(date); // Estado para manter os dados

  // Função para definir menção
  const definirMencao = (nota) => { 
    if (nota >= 9.5) return "Excelente"; 
    if (nota >= 8) return "Muito Bom"; 
    if (nota >= 7) return "Bom"; 
    if (nota >= 5) return "Regular"; 
    return "Insuficiente"; 
  };

  // Função para calcular nota
  const calcularNota = (gbm, gbo) => {
    return (parseFloat(gbo) * 10) / parseFloat(gbm);
  }

  // Função para lidar com clique em uma linha da tabela
  const handleRowClick = useCallback((row) => {
    const gbo = window.prompt("Digite a nota:");
    if (gbo) {
      if(gbo === "NR"){
        setTableData((prevData) =>
          prevData.map((item) =>
            item.id === row.id ? { ...item, gbo, nota:"", mencao:"Não Realizado" } : item
          )
        );
      }else{
        const nota = calcularNota(row.gbm, gbo).toFixed(2);
        const mencao = definirMencao(nota);

        setTableData((prevData) =>
          prevData.map((item) =>
            item.id === row.id ? { ...item, gbo, nota, mencao } : item
          )
        );
      }
    }
  }, []);

  // Cálculo dinâmico para o gráfico e a tabela de menções
  const { quantidadeMencoes, dataMencoes } = useMemo(() => {
    const mencoesContagem = {
      Excelente: 0,
      "Muito Bom": 0,
      Bom: 0,
      Regular: 0,
      Insuficiente: 0,
      "Não Realizado": 0,
    };

    tableData.forEach((item) => {
      const mencao = item.mencao || "Não Realizado";
      mencoesContagem[mencao] += 1;
    });

    const total = tableData.length;
    
    const dataGrafico = [
      ["Menção", "Quantidade"],
      ...Object.entries(mencoesContagem),
    ];

    const dataTabela = Object.entries(mencoesContagem).map(([mencao, quantidade]) => ({
      mencao,
      quantidade,
      porcentagem: `${((quantidade / total) * 100).toFixed(2)}%`,
    }));

    dataTabela.push({
      mencao: "Total",
      quantidade: total,
      porcentagem: "100%",
    });

    return {
      quantidadeMencoes: dataGrafico,
      dataMencoes: dataTabela,
    };
  }, [tableData]);

  const handleModular = () => {
    setExibirModular(!exibiModular);
  };

  const backgroundColor = colorMapMaterias[materiaId] || "#E7B341";

  const [, setSortOrder] = useState(null); // Estado para controle de ordenação

  // Função para ordenar por número do aluno (Padrão)
  const sortByAluno = () => {
    const sortedData = [...tableData].sort((a, b) => a.alunoID - b.alunoID);
    setTableData(sortedData);
    setSortOrder('aluno'); // Define o tipo de ordenação
  };

  // Função para ordenar por maior nota (Maiores)
  const sortByMaiorNota = () => {
    const sortedData = [...tableData].sort((a, b) => parseFloat(b.nota) - parseFloat(a.nota));
    setTableData(sortedData);
    setSortOrder('maiores');
  };

  // Função para ordenar por menor nota (Menores)
  const sortByMenorNota = () => {
    const sortedData = [...tableData].sort((a, b) => parseFloat(a.nota) - parseFloat(b.nota));
    setTableData(sortedData);
    setSortOrder('menores');
  };

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
              data={tableData}
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
              data={quantidadeMencoes}
              options={{ title: "Gráfico de Menções", backgroundColor: "none" }}
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
      <BoxOrdernar 
        sortByAluno={sortByAluno} 
        sortByMaiorNota={sortByMaiorNota} 
        sortByMenorNota={sortByMenorNota} 
      />
    </>
  );
};

export default NotasIndividual;

