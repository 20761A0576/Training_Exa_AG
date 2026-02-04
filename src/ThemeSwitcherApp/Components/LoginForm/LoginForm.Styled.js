import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 300px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#fff" : "#444"};
  border-radius: 12px;
  box-shadow: 0 0.3rem 1rem  #000000;
`;

export const Input = styled.input`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  background-color: ${({ theme }) =>
    theme === "light" ? "#fff" : "#444"};
  color: ${({ theme }) =>
    theme === "light" ? "#444" : "#fff"};

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 0.025rem #4f46e5;
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: none;
  background-color:rgb(131, 125, 240);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4338ca;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  width: 300px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#fff" : "#444"};
  border-radius: 12px;
  box-shadow: 0 4px 20px #000000;

  p {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  }
`;
