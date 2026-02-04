import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 2rem;
`;

const SubCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  min-width: 250px; 
  text-align: center;
  background-color: ${({ condition }) =>
    condition === "Sunny"
      ? "#ffe066"
      : condition === "Rainy"
        ? "#a3d5ff"
        : condition === "Cloudy"
          ? "#d3d3d3"
          : "#f2f2f2"};
`;

const DropDown = styled.select`
  width: 10rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  border: 0.1rem solid #ccc;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }
`;

const SearchCity = styled.input`
  border-radius: 0.3rem;
  height: 2rem; 
  font-size: 1rem;
  padding: 1rem;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`;

export { Card, SubCard, DropDown, SearchCity };