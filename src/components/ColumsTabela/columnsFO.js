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

const BoxContainer = styled.div`
    display: flex;
    height: 16px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$backgroundcolor || 'grey'};
    color: white;
    border-radius: 30px;
    font-family: 'Poppins-Bold';
    font-size: 9px;
    
    @media (max-width: 995px) {
      width: 60px;
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
    ) },
    { header: 'Tipo de FO', render: row => (
      <BoxContainer $backgroundcolor={row.tipoFo === "Positivo" ? '#87cb28' : '#f44336'}>
        {row.tipoFo}
      </BoxContainer>
    ) },
    { header: 'Instrutor/Monitor', accessor: 'instrutor' },
    { header: 'Fato', accessor: 'relatoFato' }
];

export default columns;

