import styled from "styled-components";

const Card = styled.div`
  width: 26rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  border-left: 6px solid ${({ price }) =>
    price > 10 ? "#16a34a" : "#dc2626"};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }
`;

const Category = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
`;

const Title = styled.h2`
  margin: 0.4rem 0;
  font-size: 1.4rem;
  color: #111827;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.5;
`;

const Brand = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #374151;
`;

const Price = styled.div`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #4f46e5;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.8rem;

  span {
    background-color: #eef2ff;
    color: #4338ca;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

export { Card, Title, Category, Description, Brand, Price, Tags };
