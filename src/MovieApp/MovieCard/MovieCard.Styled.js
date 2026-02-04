import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 10px #000000;
  border-left: 6px solid ${props => props.rating > 8 ? "green" : "red"};
`;

const Title = styled.h2`
  margin: 0 0 1rem;
`;

const Rating = styled.p`
  font-weight: bold;
  color: ${props => props.rating > 8 ? "green" : "red"};
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
  background-color:rgb(142, 187, 246);
  border-radius: 0.3rem;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
`;

export { Card, Title, Rating, Button, MovieImage };