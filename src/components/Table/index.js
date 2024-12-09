import styled from 'styled-components';

const StyledTable = styled.table`
    width: 99%;
    border-collapse: collapse;
    font-size: 9px;
    text-align: center;
    color: #676d7c;
    font-family: 'Poppins-Bold';


    th, td {
      padding: 7px 20px;
      border: 1px solid #c6c9cf;
      border-left: none; 
      border-right: none;

     
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      max-width: 400px;
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
    width: 100%;
    height: 95%; 
    max-height: 100%; 
    overflow-y: auto;
    border-radius: 10px;
    
    &.disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #969696;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #676d7c;
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
                onClick={() => onRowClick(row)} 
                style={{ cursor: 'pointer'}}
              >
                {columns.map((column, colIndex) => (
                  <td key={`col-${colIndex}`}>
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