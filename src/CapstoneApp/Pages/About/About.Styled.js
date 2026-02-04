import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.mainText};
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.mainText};
`;
