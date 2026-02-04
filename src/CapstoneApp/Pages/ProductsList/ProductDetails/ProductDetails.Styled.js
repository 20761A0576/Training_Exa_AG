import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;

export const ProductInfo = styled.div`
  padding: 2rem;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProductImage = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 0.3rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
`;

export const Features = styled.div`
  font-size: 0.9rem;
  color: #555;

  p {
    margin: 0.2rem 0;
  }
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonContainer = styled.p`
  display: flex;
  justify-content: space-between; 
  align-items: stretch;    
  gap: 10px;    
  width: 100%;          
`;

export const Button = styled.button`
  padding: 0.7rem 1.2rem;
  background-color: ${({ cart }) => cart ? "#00e600" : "#1aa3ff"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: ${({ cart }) => cart ? "100%" : "50%"};  

  &:hover {
    background-color: ${({ cart }) => cart ? "#00b300" : "#007acc"};
  }
`;

export const RemoveCartButton = styled.button`
  padding: 0.7rem 1.2rem;
  background-color:#ff1a1a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;  

  &:hover {
    background-color:#e60000;
  }
`;

export const BackButton = styled.button`
  padding: 0.7rem 1.2rem;
  background-color:#1affff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;  

  &:hover {
    background-color:#00e6e6;
  }
`;

export const NoItems = styled.div`
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.mainText};
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin: 10rem;
`;