import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const SearchInput = styled.input`
    width: 20rem;
    padding: 0.7rem 1rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
`;

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #f4f4f4;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

export const Pagination = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  background-color: #1976d2;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ExportButton = styled.button`
  margin: 0rem;
  padding: 0.6rem 1rem;
  background-color:rgb(99, 236, 246);
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 1rem;
`;

export const DropDown = styled.select`
  padding: 0.35rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 0.875rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
`;

export const Header = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 650;
  color: #333;
  margin: 0;
  padding: 0.5rem 0;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0.5rem 0;
`;

export const ColumnToggleContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: space-evenly;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const ColumnToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  input {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: #007bff;
  }
`;

export const NoData = styled.p`
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color:#fcfbfb;
  border-radius: 0.3rem;
`;
