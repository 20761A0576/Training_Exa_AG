import styled, { css } from "styled-components";

// Container for the form
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2; 
`;

// Container for the form
export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 25rem;
  background: ${({ theme }) => theme.background || "#fff"};
`;

// Form field wrapper
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

// Label
export const Label = styled.label`
  margin-bottom: 0.3rem;
  font-weight: 500;
`;

// Input with dynamic styles
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

// Password strength indicator
export const Strength = styled.div`
  font-size: 0.8rem;
  margin-top: 0.3rem;
  color: ${({ strength }) =>
    strength === "Weak" ? "red" : strength === "Medium" ? "orange" : "green"};
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

// Toggle password visibility
export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #4a90e2;
  cursor: pointer;
  font-size: 0.85rem;
  margin-top: 0.3rem;
  align-self: flex-end;
`;

export const InfoContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 0.5rem;
  cursor: pointer;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 23rem;
  background-color: #333;
  color: #fff;
  text-align: left;
  padding: 0.5rem;
  border-radius: 0.3rem;
  position: absolute;
  z-index: 10;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const InfoIcon = styled.span`
  font-weight: bold;
  color: #555;
`;
