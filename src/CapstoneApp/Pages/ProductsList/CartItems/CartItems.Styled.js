import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

export const NoItems = styled.div`
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.mainText};
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin: 2rem;
`;

export const ProductCard = styled.div`
    background: ${({ theme }) => theme.headerBg};
    color: ${({ theme }) => theme.headerText};
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    padding: 1rem;
    margin: 1rem;
    gap: 2rem;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
`;

export const ProductImage = styled.img`
    width: 45%;
    object-fit: cover;
    border-radius: 0.3rem;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
`;
export const ProductInfo = styled.div`
    padding: 0.5rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SubInfo = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ProductTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.mainText};
`;

export const ProductDescription = styled.p`
    font-size: 1rem;
    color: #555;
    text-overflow: ellipsis;
`;

export const Features = styled.div`
    font-size: 0.9rem;
    color: #555;

    p {
        margin: 0.2rem 0;
    }
`;

export const ProductCategory = styled.span`
    font-size: 1rem;
    color: ${({ theme }) => theme.link};
    font-weight: 500;
`;

export const ProductPrice = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.linkHover};
`;

export const RemoveCartButton = styled.button`
    padding: 0.7rem 1.2rem;
    background-color:#ff1a1a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color:#e60000;
    }
`;

export const PriceContainer = styled.div`
    background: ${({ theme }) => theme.headerBg};
    color: ${({ theme }) => theme.headerText};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 2rem;
    padding: 2rem;
`;

export const Price = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
`;

export const Button = styled.button`
    padding: 0.7rem 1.2rem;
    background-color:#0073e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.8rem 6rem;

    &:hover {
        background-color: #0059b3;
    }
`;
