import styled from 'styled-components';

const CircleIcon = styled.span`
    background-color: ${props => props.$backgroundcolor || '#f1eded'};
    padding: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content :center;
    align-items :center;
`;

const AlunoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    .iconAluno {
        margin-bottom: 5px;
    }
`;

export const TextoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Texto = styled.p`
    color: white;
    text-decoration: none;
    font-size: 12px;
    text-align: center;
    margin: 0;
    color: #424854;
    font-family: 'Poppins-Bold';

    &.nrAluno{
        font-size: 9px;
        font-family: 'Prompt-Bold';
        color: #676d7c;
    }
`;

const columns = [

  { header: 'Aluno', render: row => (
    <AlunoInfo>
      <CircleIcon>
        <row.foto size={30} color="gray" />
      </CircleIcon>
      <TextoBox>
        <Texto>{`Al ${row.aluno}`}</Texto>
        <Texto className='nrAluno'>{`Aluno ${row.nrAluno}`}</Texto>
      </TextoBox>
    </AlunoInfo>
  )
  },
  { header: 'IG', accessor: 'ig' },
  { header: 'CSC 1', accessor: 'csc1' },
  { header: 'TAF', accessor: 'taf' },
  { header: 'História Militar', accessor: 'historiaMilitar'},
  { header: 'CSC 2', accessor: 'csc2' },
  { header: 'Patrulha 2', accessor: 'patrulha2' },
  { header: 'OeInf', accessor: 'oeInf' },
  { header: 'PID', accessor: 'pid'},
  { header: 'Conceito', accessor: 'conceito' },
  { header: 'Nota Final', accessor: 'notaFinal'},
];

export default columns;

