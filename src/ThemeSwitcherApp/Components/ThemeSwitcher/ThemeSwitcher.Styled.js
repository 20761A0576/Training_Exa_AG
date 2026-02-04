import styled from "styled-components";

export const SwitchButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => (theme === "light" ? "#4f46e5" : "#fff")};
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#4f46e5")};
  color: ${({ theme }) => (theme === "light" ? "#4f46e5" : "#fff")};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? "#4f46e5" : "#372dc3")};
    color: #fff;
  }

  &:active {
    transform: scale(0.97);
  }
`;
