import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2; 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 25rem;
  background: ${({ theme }) => theme.background || "#fff"};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.3rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  font-size: 1rem;

  ${({ error }) =>
    error &&
    css`
      border-color: red;
      background-color: #ffe6e6;
    `}

  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? "red" : "#4a90e2")};
  }
`;

export const ErrorMessage = styled.p`
    font-size:0.8rem;
    color:#f90606;
    padding: 0.1rem 0.2rem;
`;


// Buttons
export const Button = styled.button`
  padding: 0.6rem 1rem;
  margin-top: 1rem;
  width: 100%;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #fff;

  background-color: ${({ disabled }) => (disabled ? "#888" : "#4a90e2")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#888" : "#357ABD")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
