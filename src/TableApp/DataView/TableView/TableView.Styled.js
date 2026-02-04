import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  overflow-x: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const Table = styled.table`
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
`;

export const Loading = styled.table`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 5rem;
`;

export const TableHead = styled.thead`
  background-color: #f5f7fa;
`;

export const TableHeader = styled.th`
  padding: 0.5rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #444;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableData = styled.td`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArrowButton = styled.button`
  border: none;,
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background-color: #fff;
`;
