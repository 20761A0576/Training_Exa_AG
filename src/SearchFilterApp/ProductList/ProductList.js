import React, { lazy, useCallback, useMemo, useRef, useState } from "react";
import ProductPage from "../ProductPage/ProductPage";
import { Container, HeaderContainer, Title, SearchProduct, ProductContainer, GoTop, NoData } from "./ProductList.Styled";
// import productsData from "../Data/ProductsData";

const productsData = lazy(()=>import("../Data/ProductsData"));

function ProductList() {
    const [searchText, setSearchText] = useState("");
    const goTopref = useRef();

    const products = useMemo(()=>{
        const search = searchText.trim().toLowerCase();
        const filteredProduct = productsData.filter(product =>
            (product.title ?? "").toLowerCase().includes(search) ||
            (product.brand ?? "").toLowerCase().includes(search) ||
            String(product.rating ?? "").toLowerCase().includes(search) ||
            (product.category ?? "").toLowerCase().includes(search)
        );
        return filteredProduct;
    }, [searchText]);

    const scrollTop = () => {
        goTopref.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    const handleSearch = useCallback((e) =>{
        setSearchText(e.target.value);
    },[searchText]);

    return (
        <Container ref={goTopref}>
            <HeaderContainer>
                <Title>Product Catalog</Title>
                <SearchProduct type="search" value={searchText} onChange={handleSearch} placeholder="Search..."></SearchProduct>
            </HeaderContainer>
            {
                products.length === 0 && (<NoData>No Data Available</NoData>)
            }
            <ProductContainer>
                {
                    products.map((product,index) => (
                        <ProductPage key={index} description={product.description} title={product.title} price={product.price} category={product.category} brand={product.brand} tags={product.tags} ></ProductPage>
                    ))
                }
            </ProductContainer>
            {
                (products.length > 0 && (<GoTop onClick={scrollTop}>↑</GoTop>))
            }
        </Container>
    );
}

export default ProductList;
