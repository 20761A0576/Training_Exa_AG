import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 2rem;
`;

export const SearchBar = styled.input`
  width: 30rem;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  height:2rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

export const ProductCard = styled.div`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 45%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 1rem;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ProductTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.mainText};
`;

export const ProductDescription = styled.p`
  font-size: 0.8rem;
  color: #555;
  // color: ${({ theme }) => theme.mainText};
  // height: 40px;
  // overflow: scroll;
  text-align: justify;
  text-overflow: ellipsis;
`;

export const ProductCategory = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.link};
  font-weight: 500;
`;

export const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.linkHover};
`;

export const NoItems = styled.div`
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.mainText};
    display: flex;
    justify-content: center;
    margin: 5rem;
`;
