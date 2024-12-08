import React, { useState, useMemo, useCallback } from 'react';
import * as S from './style';

import { FcSurvey } from "react-icons/fc";
import {
  IoAddCircle,
  IoRemove,
  IoAdd,
  IoSearchOutline,
  IoSaveOutline
}
from "react-icons/io5";

import { ToastContainer, toast, Bounce } from 'react-toastify';

import { MdOutlineEdit } from "react-icons/md";
import { BsPrinter } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

import data from '../../../data/dadosFo';
import columns from '../../../components/ColumsTabela/columnsFO';

import { Input, Table, Select, TextArea, ToggleButton } from '../../../components'

import alunosData from '../../../data/alunos.json';
import instrutoresData from '../../../data/instrutor.json';

const BotaoAcaoTabela = React.memo(({ backgroundColor, icon: Icon, texto, onClick }) => (
  <S.Botao $backgroundcolor={backgroundColor} className="btAcaoTabela" onClick={onClick}>
    <Icon size={10} />
    {texto}
  </S.Botao>
));

const BoxQuantidade = React.memo(({ backgroundColor, icon: Icon, titulo, quantidades }) => (
  <S.BoxContainer className="boxQuantidade">
    <S.CircleIcon className="iconQuantidade" $backgroundcolor={backgroundColor}>
      <Icon size={20} color="white" />
    </S.CircleIcon>
    <S.Texto $variant="qtFos">{quantidades}</S.Texto>
    <S.BoxContainer className="boxNomeQtFos" $backgroundcolor={backgroundColor}>
      <S.Texto className='tituloFos'>{titulo}</S.Texto>
    </S.BoxContainer>
  </S.BoxContainer>
));

const error = (error) => toast.error(error, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,  
  progress: undefined,
  theme: "colored",
  transition: Bounce,
});

const FatosObservados = (props) => {

  const [formData, setFormData] = useState({
    aluno: "",
    alunoID: "",
    tipoFo: "",
    data: "",
    instrutor: "",
    instrutorID: "",
    relatoFo: "",
  });

  const [inputPesquisa, setInputPesquisa] = useState("");
  const [modularState, setModularState] = useState({
    titulo: "",
    exibir: false,
    editar: false,
    lancar: false,
    opcoesTabela: false,
    selectedData: null,
  });

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = useCallback(() => {
    const filtered = data.filter((item) => item.alunoID === parseInt(inputPesquisa));
    setFilteredData(filtered);
  }, [inputPesquisa]);

  const alunosOptions = useMemo(() => alunosData.map((aluno) => ({
    value: aluno.id,
    label: `${aluno.nrAluno} - ${aluno.nomeGuerra}`,
  })), []);

  const instrutoresOptions = useMemo(() => instrutoresData.map((instrutor) => ({
    value: instrutor.id,
    label: `${instrutor.abrev_posto_grad} ${instrutor.nomeGuerra}`,
  })), []);

  const handleChangeForm = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const zerarFormData = useCallback(() => {
    setFormData({
      aluno: '',
      alunoID: '',
      tipoFo: '',
      data: '',
      instrutor: '',
      instrutorID: '',
      relatoFo: '',
    });
  }, []);

  const handleRowClick = useCallback((row) => {
    setModularState({
      exibir: true,
      editar: false,
      selectedData: row,
      opcoesTabela: true,
      titulo: `FATO OBSERVADO N°${row.id}`,
      lancar: false,
    });

    setFormData({
      aluno: row.aluno,
      alunoID: row.alunoID,
      tipoFo: row.tipoFo,
      data: row.date,
      instrutor: row.instrutor,
      instrutorID: row.instrutorID,
      relatoFo: row.relatoFato,
    });
  }, []);

  const handleLancarFo = useCallback(() => {
    setModularState({
      exibir: true,
      editar: true,
      selectedData: null,
      opcoesTabela: false,
      titulo: "LANÇAR FO",
      lancar: true,
    });
    zerarFormData();
  }, [zerarFormData]);

  const handleEditarDados = useCallback(() => {
    setModularState((prevState) => ({
      ...prevState,
      editar: true,
      opcoesTabela: false,
      titulo: `EDITANDO FO N°${prevState.selectedData.id}`,
    }));
  }, []);

  const handleCancelar = useCallback(() => {
    setModularState({
      exibir: false,
      editar: false,
      selectedData: null,
      opcoesTabela: false,
      titulo: "",
      lancar: false,
    });
    zerarFormData();
  }, [zerarFormData]);

  const handleSalvarDados = useCallback(() => {
    const { alunoID, tipoFo, data, instrutorID, relatoFo } = formData;

    // Validação dos campos
    if (!alunoID || !tipoFo || !data || !instrutorID || !relatoFo) {
      error('Todos os campos devem ser preenchidos!');
      return;
    }

    //const nrAluno = "00";
    //const aluno = "Aluno";
    //const instrutor = "Militar Tal";

    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

    if (modularState.selectedData) {
      // Editar
    } else {
      // Novo lançamento
    }

    toast.promise(
      resolveAfter3Sec,
      {
        pending: "Salvando dados...", // Mensagem enquanto a promessa está pendente
        success: "Dados salvos com sucesso! 🎉", // Mensagem ao resolver
        error: "Erro ao salvar os dados. 😢", // Mensagem ao rejeitar
      },
      {
        position: "top-right",
        autoClose: 3000, // Fecha após 3 segundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    )
    
    //setFeedbackMessage(modularState.selectedData ? "Fato observado atualizado com sucesso!" : "Fato observado lançado com sucesso!");
    
    setModularState({ ...modularState, exibir: false, editar: false, selectedData: null, lancar: false });

    zerarFormData();

  }, [formData, modularState, zerarFormData]);

  const handleExcluirDados = useCallback(() => {
    if (!modularState.selectedData) return;

    //setFeedbackMessage("Fato observado excluído com sucesso!");
    setModularState({ ...modularState, exibir: false, editar: false, selectedData: null, lancar: false });

    //setShow(true);
    
    zerarFormData();
  }, [modularState, zerarFormData]);

  return (
    <S.BoxContainer className='boxGeral'>

      <ToastContainer />

      <S.BoxContainer className='boxInfo'>
        
        <S.BoxContainer className='boxTopInfo'>
          <S.BoxContainer className='boxAprentacaoTopInfo'>
            <S.CircleIcon>
              <FcSurvey size={35} />
            </S.CircleIcon>
            <S.TextoBox>
              <S.Texto $variant="modulo">Módulo</S.Texto>
              <S.Texto $variant="fatosObservados">FATOS OBSERVADOS</S.Texto>
            </S.TextoBox>
          </S.BoxContainer>

          <S.Botao className='botaoLancarFo' onClick={handleLancarFo}>
            <IoAddCircle size={15} />
            Lançar FO
          </S.Botao>
        </S.BoxContainer>

        <S.BoxContainer className='boxQuantidadeInfo'>
          <BoxQuantidade
            backgroundColor={props => props.theme.color.green}
            icon={IoAdd}
            quantidades="120"
            titulo="FOs Positivos"
          />
          <BoxQuantidade
            backgroundColor={props => props.theme.color.gray}
            icon={FcSurvey}
            quantidades="250"
            titulo="FOs Lançados"
          />
          <BoxQuantidade
            backgroundColor={props => props.theme.color.red}
            icon={IoRemove}
            quantidades="130"
            titulo="FOs Negativos"
          />
        </S.BoxContainer>

        <S.BoxContainer className='boxTabelaInfo'>

          <S.BoxContainer className='boxPesquisa'>
            <IoSearchOutline 
              size={20} 
              style={{ fill: props => props.theme.color.gray}}
            />
            <Select
              options={alunosOptions}
              value={inputPesquisa}
              onChange={(e) => setInputPesquisa(e.target.value)}
              placeholder="Selecione um aluno"
            />
            <S.Botao
              className='botaoPesquisar'
              onClick={handleSearch}
            >
              Pesquisar
            </S.Botao>

            <S.Botao
              className='botaoPesquisar'
              onClick={() => setFilteredData(data)}
              $backgroundcolor={props => props.theme.color.gray}
            >
              Limpar
            </S.Botao>
          </S.BoxContainer>

          <S.BoxContainer className="boxTabela">
            {filteredData.length > 0 ? (
              <Table
                data={filteredData}
                columns={columns}
                onRowClick={handleRowClick}
                isDisabled={modularState.lancar || modularState.editar}
              />
            ) : (
              <S.Texto className='textoModular'>
                Nenhum FO encontrado.
              </S.Texto>
            )}
          </S.BoxContainer>

          {modularState.opcoesTabela && (
            <S.BoxContainer className="boxOpcoesTabela desktop">
              <S.Texto>{`Com a linha selecionada:`}</S.Texto>
              <S.BoxContainer className="botoesOpcoesTabela">
                <BotaoAcaoTabela 
                  icon={MdOutlineEdit} 
                  texto="Editar" 
                  onClick={handleEditarDados} 
                />

                <BotaoAcaoTabela 
                  icon={BsPrinter} 
                  texto="Imprimir" 
                />
                
                <BotaoAcaoTabela 
                  icon={RiDeleteBinLine} 
                  texto="Excluir" 
                  backgroundColor={props => props.theme.color.red} 
                  onClick={handleExcluirDados}
                />
              </S.BoxContainer>
            </S.BoxContainer>
          )}
        </S.BoxContainer>
      </S.BoxContainer>

      <S.BoxContainer 
        className={`boxModular ${modularState.exibir ? 'exibir' : ''}`}
      >
        <S.BoxContainer className='boxTituloModular'>
          <S.CircleIcon className='circleModular' $backgroundcolor={formData.tipoFo} />
          <S.Texto className='tituloModular'>{modularState.titulo}</S.Texto>
        </S.BoxContainer>
        {modularState.exibir ? (
          <>
            <S.BoxContainer className='camposModular'>
              <S.BoxContainer className='boxCampos'>
                <S.Texto className='campos'>Aluno</S.Texto>
                <Select
                  name="alunoID"
                  options={alunosOptions}
                  value={formData.alunoID}
                  onChange={handleChangeForm}
                  placeholder="Selecione um aluno"
                  disabled={!modularState.editar}
                />
              </S.BoxContainer>

              <S.BoxContainer className="boxCampos" $toggle={true}>
                <S.Texto className="campos">Tipo de FO</S.Texto>
                <ToggleButton
                  formData={formData}
                  setFormData={setFormData}
                  isEditable={modularState.editar}
                />
              </S.BoxContainer>

              <S.BoxContainer className='boxCampos'>
                <S.Texto className='campos'>Data</S.Texto>
                <Input
                  name="data"
                  placeholder="Insira a data do FO"
                  value={formData.data}
                  onChange={handleChangeForm}
                  type="date"
                  className="formularioFatoObervado"
                  readOnly={!modularState.editar}
                />
              </S.BoxContainer>
              <S.BoxContainer className='boxCampos'>
                <S.Texto className='campos'>Instrutor/ Monitor</S.Texto>
                <Select
                  name="instrutorID"
                  options={instrutoresOptions}
                  value={formData.instrutorID}
                  onChange={handleChangeForm}
                  placeholder="Selecione um instrutor/monitor"
                  disabled={!modularState.editar}
                />
              </S.BoxContainer>
              <S.BoxContainer className='boxCampos'>
                <S.Texto className='campos'>Relato do Fato</S.Texto>
                <TextArea
                  name="relatoFo"
                  value={formData.relatoFo}
                  onChange={handleChangeForm}
                  placeholder="Digite o relato do fato aqui..."
                  disabled={!modularState.editar}
                />
              </S.BoxContainer>

              {modularState.opcoesTabela && (
                <S.BoxContainer className="boxOpcoesTabela mobile">
                  <BotaoAcaoTabela 
                    icon={MdOutlineEdit} 
                    texto="Editar" 
                    onClick={handleEditarDados} 
                  />

                  <BotaoAcaoTabela 
                    icon={BsPrinter} 
                    texto="Imprimir"
                  />
                    
                  <BotaoAcaoTabela 
                    icon={RiDeleteBinLine} 
                    texto="Excluir" 
                    backgroundColor={props => props.theme.color.red} 
                    onClick={handleExcluirDados}
                  />
                </S.BoxContainer>
              )}
            </S.BoxContainer>

            <S.BoxContainer className='boxBotoes'>
              {modularState.editar && (
                <div>
                  <S.Botao 
                    className='btAcaoFo' 
                    $backgroundcolor={props => props.theme.color.green}
                    onClick={handleSalvarDados}
                  >
                    <IoSaveOutline size={14} />
                    Salvar
                  </S.Botao>

                  <S.Botao 
                    className='btAcaoFo' 
                    $backgroundcolor={props => props.theme.color.red} 
                    onClick={handleCancelar}
                  >
                    <IoIosCloseCircleOutline size={14} />
                    Cancelar
                  </S.Botao>
                </div>
              )}

              {!modularState.editar && (
                <div>
                  <S.Botao 
                    className='btAcaoFo' 
                    $backgroundcolor={props => props.theme.color.red} 
                    onClick={handleCancelar}
                  >
                    <IoIosCloseCircleOutline size={14} />
                    Fechar
                  </S.Botao>
                </div>
              )}
            </S.BoxContainer>
          </>
        ) : (
          <S.Texto className='textoModular'>Selecione um FO na tabela</S.Texto>
        )}
      </S.BoxContainer>
      
    </S.BoxContainer>
  );
};

export default FatosObservados;

