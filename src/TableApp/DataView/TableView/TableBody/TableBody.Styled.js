import styled from "styled-components";

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
  padding: 0.8rem 1rem;
  font-size: 0.875rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TBody = styled.tbody`
  margin-bottom: 0.5rem;
`;