import React from "react";

import { BoxContainer, Botao } from "../../../shared/styles";

import * as S from "./style"

import { FcPrivacy } from "react-icons/fc";
import { FcDataConfiguration, FcContacts, FcBusinessman } from "react-icons/fc";

import Table from "../../../components/Table";
import columns from "../../../components/ColumsTabela/columnsAdmAlunos";

const alunos = [
    { id: 1, foto: FcBusinessman, nrAluno: '01', nomeGuerra: 'Cardoso', nomeCompleto: 'Lorhan Cardoso da Paz' },
    { id: 2, foto: FcBusinessman, nrAluno: '02', nomeGuerra: 'Costa Silva', nomeCompleto: 'Gabriel Costa Silva' },
    { id: 3, foto: FcBusinessman, nrAluno: '03', nomeGuerra: 'Ferreira', nomeCompleto: 'Rafael Ferreira de Souza' },
    { id: 4, foto: FcBusinessman, nrAluno: '04', nomeGuerra: 'Almeida', nomeCompleto: 'João Almeida Santos' },
    { id: 5, foto: FcBusinessman, nrAluno: '05', nomeGuerra: 'Pereira', nomeCompleto: 'Luiz Pereira Gomes' },
    { id: 6, foto: FcBusinessman, nrAluno: '06', nomeGuerra: 'Barbosa', nomeCompleto: 'Carlos Barbosa Filho' },
    { id: 7, foto: FcBusinessman, nrAluno: '07', nomeGuerra: 'Mendes', nomeCompleto: 'Victor Mendes Silva' },
    { id: 8, foto: FcBusinessman, nrAluno: '08', nomeGuerra: 'Gonçalves', nomeCompleto: 'Eduardo Gonçalves Lima' },
    { id: 9, foto: FcBusinessman, nrAluno: '09', nomeGuerra: 'Rodrigues', nomeCompleto: 'Felipe Rodrigues Alves' },
    { id: 10, foto: FcBusinessman, nrAluno: '10', nomeGuerra: 'Oliveira', nomeCompleto: 'Matheus Oliveira Souza' },
    { id: 11, foto: FcBusinessman, nrAluno: '11', nomeGuerra: 'Martins', nomeCompleto: 'Thiago Martins Silva' },
    { id: 12, foto: FcBusinessman, nrAluno: '12', nomeGuerra: 'Santos', nomeCompleto: 'Fernando Santos Ribeiro' },
    { id: 13, foto: FcBusinessman, nrAluno: '13', nomeGuerra: 'Ribeiro', nomeCompleto: 'Leonardo Ribeiro Costa' },
    { id: 14, foto: FcBusinessman, nrAluno: '14', nomeGuerra: 'Silveira', nomeCompleto: 'André Silveira Moraes' },
    { id: 15, foto: FcBusinessman, nrAluno: '15', nomeGuerra: 'Nascimento', nomeCompleto: 'Ricardo Nascimento Freitas' },
    { id: 16, foto: FcBusinessman, nrAluno: '16', nomeGuerra: 'Lima', nomeCompleto: 'Alexandre Lima Correia' },
    { id: 17, foto: FcBusinessman, nrAluno: '17', nomeGuerra: 'Soares', nomeCompleto: 'Pedro Soares Vieira' },
    { id: 18, foto: FcBusinessman, nrAluno: '18', nomeGuerra: 'Monteiro', nomeCompleto: 'Marcelo Monteiro Barros' },
    { id: 19, foto: FcBusinessman, nrAluno: '19', nomeGuerra: 'Carvalho', nomeCompleto: 'Bruno Carvalho Teixeira' },
    { id: 20, foto: FcBusinessman, nrAluno: '20', nomeGuerra: 'Vieira', nomeCompleto: 'Adriano Vieira Santos' },
    { id: 21, foto: FcBusinessman, nrAluno: '21', nomeGuerra: 'Machado', nomeCompleto: 'Diego Machado Pereira' },
    { id: 22, foto: FcBusinessman, nrAluno: '22', nomeGuerra: 'Correia', nomeCompleto: 'Lucas Correia Martins' },
    { id: 23, foto: FcBusinessman, nrAluno: '23', nomeGuerra: 'Teixeira', nomeCompleto: 'Gustavo Teixeira Almeida' },
    { id: 24, foto: FcBusinessman, nrAluno: '24', nomeGuerra: 'Araújo', nomeCompleto: 'Rodrigo Araújo Lima' },
    { id: 25, foto: FcBusinessman, nrAluno: '25', nomeGuerra: 'Farias', nomeCompleto: 'Henrique Farias Gonçalves' },
    { id: 26, foto: FcBusinessman, nrAluno: '26', nomeGuerra: 'Castro', nomeCompleto: 'Vitor Castro Santos' },
    { id: 27, foto: FcBusinessman, nrAluno: '27', nomeGuerra: 'Duarte', nomeCompleto: 'Elias Duarte Barbosa' },
    { id: 28, foto: FcBusinessman, nrAluno: '28', nomeGuerra: 'Camargo', nomeCompleto: 'Samuel Camargo Ferreira' },
    { id: 29, foto: FcBusinessman, nrAluno: '29', nomeGuerra: 'Henrique', nomeCompleto: 'Jorge Henrique Costa' },
    { id: 30, foto: FcBusinessman, nrAluno: '30', nomeGuerra: 'Batista', nomeCompleto: 'Leandro Batista Moraes' }
];


const Administrador = (props) => {
      
    return (
        
        <BoxContainer
            $border="1px solid"
            $backgroundColor="#f3f3f3"
            $flexDirection="column"
            $borderRadius="50px"
            $width="99%"
        >

            <BoxContainer
                $border="1px solid"
                $backgroundColor={ props => props.theme.color.primary }
                $height="60px"
                $borderRadius="50px"
                $width="99%"
            >
                <BoxContainer $gap="8px" $justifyContent="start" $paddingLeft="10px">
                    <S.CircleIcon $backgroundcolor="#dadcde">
                        <FcPrivacy size={20}/>
                    </S.CircleIcon>
                    <S.TextoBox>
                        <S.Texto variant="materiaProva">ADMINISTRAÇÃO</S.Texto>
                        <S.Texto variant="ac_coProva">Gerenciar Sistema</S.Texto>
                    </S.TextoBox>
                </BoxContainer> 

                <BoxContainer $gap="10px" $justifyContent="end" $paddingRight="10px">
                    <Botao $width="120px">
                        <FcDataConfiguration />
                        Alunos
                    </Botao>
                    <Botao $width="120px">
                        <FcContacts />
                        Eqp Instr
                    </Botao>
                </BoxContainer>

            </BoxContainer>

            <BoxContainer
                $backgroundColor="none"
                $flexDirection="column"
            >
                <BoxContainer $height="400px" $padding="10px" $width="95%">
                    <Table
                        data={alunos}
                        columns={columns}
                        onRowClick={()=> ""}
                    />
                </BoxContainer>
            </BoxContainer>

        </BoxContainer>

    )
}
export default Administrador;

