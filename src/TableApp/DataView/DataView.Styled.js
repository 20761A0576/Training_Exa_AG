import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
`;

export const SubContainer = styled.div`
    margin: 0.5rem;
`;

export const Header = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 650;
  color: #333;
  margin: 0;
  padding: 0.5rem 0;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0.5rem 0;
`;

export const SearchBar = styled.input`
    width: 20rem;
    padding: 0.7rem 1rem;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
`;

export const NoData = styled.p`
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color:#fcfbfb;
  border-radius: 0.3rem;
`;

export const Button = styled.button`
  margin: 0rem;
  padding: 0.6rem 1rem;
  background-color:rgb(99, 236, 246);
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 1rem;
`;

export const Loading = styled.table`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 5rem;
  background-color: #fff;
  border-radius: 0.3rem;
`;