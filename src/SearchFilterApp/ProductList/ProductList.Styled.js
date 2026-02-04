import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:#fbf7f7;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  padding: 1.2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-left: 5rem;
`;

const SearchProduct = styled.input`
  width: 30rem;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  height:2rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  margin: 1.3rem;
  margin-right: 4rem;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`;

const GoTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  padding: 0.7rem 1.2rem;
  border-radius: 50%;
  border: none;
  background-color: #4f46e5;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #4338ca;
    transform: translateY(-3px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NoData = styled.p`
  text-align: center;
  background-color:#e2dede;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.3rem;
`;

export { Container, HeaderContainer, Title, SearchProduct, ProductContainer, GoTop, NoData }