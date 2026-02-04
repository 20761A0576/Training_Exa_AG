import styled from "styled-components";

export const NoItems = styled.div`
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.mainText};
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin: 10rem;
`;