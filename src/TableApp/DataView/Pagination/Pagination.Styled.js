import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
  text-align: center;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: left;
  gap: 0.25rem;
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

export const Button = styled.button`
  min-width: 32px;
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ active }) => (active ? "#007bff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ active }) =>
    active ? "#0056b3" : "#f0f0f0"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Span = styled.span`
  font-size: 0.875rem;
  color: #555;
  margin: 0 0.25rem;
`;
