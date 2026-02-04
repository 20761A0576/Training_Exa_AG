import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "#f5f5f5" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  transition: all 0.3s ease;
`;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease;
  padding: 2rem;
`;

export const LoginContainer = styled.div`
  min-height: 45.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
