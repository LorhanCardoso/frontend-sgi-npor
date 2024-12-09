import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 9px;
  text-align: center;
  color: #676d7c;
  font-family: 'Poppins-Bold', sans-serif;

  th,
  td {
    padding: 7px 15px;
    border: 1px solid #c6c9cf;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 400px;
    border-bottom: none;
    font-size: 10px;
  }

  th {
    background-color: white;
    color: #312e2d;
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 10px;
    border-top: none;
  }

  tbody {
    background-color: white;
  }
`;

const StyledTableContainer = styled.div`
  width: 90%;
  max-height: 265px;
  overflow-y: auto;
  border-radius: 20px;
  border: 1px solid #c6c9cf;

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

const TableHeader = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column, index) => (
        <th key={`header-${index}`} scope="col">
          {column.header}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBody = ({ data, columns }) => (
  <tbody>
    {data.map((row, rowIndex) => (
      <tr
        key={`row-${rowIndex}`}
        style={{ color: rowIndex === data.length - 1 ? "#312e2d" : "#676d7c" }}
      >
        {columns.map((column, colIndex) => (
          <td key={`col-${colIndex}`} title={column.render ? column.render(row) : row[column.accessor]}>
            {column.render ? column.render(row) : row[column.accessor]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

const Table = ({ data, columns }) => (
  <StyledTableContainer>
    <StyledTable>
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </StyledTable>
  </StyledTableContainer>
);

export default Table;

