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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #cbd5f5;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #cbd5f5;
  font-size: 1rem;
  min-height: 120px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.link};
  color: #ffffff;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.linkHover};
  }
`;
