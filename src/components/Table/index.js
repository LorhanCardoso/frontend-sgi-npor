import styled from 'styled-components';

const StyledTable = styled.table`
    width: 99%;
    border-collapse: collapse;
    font-size: 9px;
    text-align: center;
    color: #676d7c;
    font-family: 'Poppins-Bold';


    th, td {
      padding: 7px 15px;
      border: 1px solid #c6c9cf;
      border-left: none; 
      border-right: none; 

      /* Adicione as propriedades abaixo para truncar o texto */
      white-space: nowrap; /* Impede quebra de linha */
      overflow: hidden; /* Esconde o texto que ultrapassa o limite */
      text-overflow: ellipsis; /* Adiciona as reticências (...) */
      max-width: 400px; /* Defina um limite de largura apropriado */
    }

    th {
      background-color: none;
      color: #969696;
      font-family: 'Poppins-Regular';
      font-size: 8px;
      border-top: none;
    }

    tr:hover {
      background-color: #f1eded;
    }

    tbody {
      background-color: white;
    }
`;

const StyledTableContainer = styled.div`
    width: 98%;
    max-height: 265px; /* Define uma altura máxima para o scroll */
    overflow-y: auto; /* Adiciona barra de rolagem vertical */
    border-radius: 10px;

    /* Adicionando o estilo para desabilitar a tabela */
    &.disabled {
        pointer-events: none; /* Desativa a interação com os itens dentro da tabela */
        opacity: 0.5; /* Diminui a opacidade para dar uma aparência desativada */
    }

    &::-webkit-scrollbar {
        width: 6px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #969696; /* Cor da barra */
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #676d7c; /* Cor ao passar o mouse */
    }
`;

const Table = ({ data, columns, onRowClick, isDisabled }) => {
    return (
      <StyledTableContainer className={isDisabled ? 'disabled' : ''}>
        <StyledTable>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={`header-${index}`}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={`row-${rowIndex}`}
                onClick={() => onRowClick(row)} // Captura o clique na linha
                style={{ cursor: 'pointer' }} // Estilização para indicar que é clicável
              >
                {columns.map((column, colIndex) => (
                  <td key={`col-${colIndex}`} title={column.render ? column.render(row) : row[column.accessor]}>
                    {column.render ? column.render(row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    );
  };

export default Table;