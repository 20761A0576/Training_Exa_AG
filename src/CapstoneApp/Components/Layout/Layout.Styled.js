import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.mainText};
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const OrderList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

export const List = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.link};
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  background: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.mainText};
`;

export const Footer = styled.footer`
  background: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.footerText};
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.link};
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;
