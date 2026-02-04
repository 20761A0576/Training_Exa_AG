import styled from "styled-components";

export const TableHeader = styled.th`
  padding: 0.5rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #444;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
`;

export const HeaderData = styled.p`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #444;
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

export const ArrowButton = styled.button`
  border: none;,
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background-color: #fff;
`;