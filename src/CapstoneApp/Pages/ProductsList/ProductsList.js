import React, { useCallback, useMemo, useState } from "react";
import { Products } from "../../Data/Products";
import {
  ProductHeader,
  SearchBar,
  ProductsContainer,
  ProductCard,
  NavLink,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductCategory,
  ProductPrice,
  NoItems
} from "./ProductsList.Styled";

const ProductsList = () => {
  const [searchText, setSearchText] = useState("");
  const filterData = useMemo(() => {
    const filteredData = Products.filter((item) =>
      (item.name.trim().toLowerCase().includes(searchText.trim().toLowerCase()))
    );
    return filteredData;
  }, [searchText]);

  const handleChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, [])

  return (
    <div>
      <ProductHeader>
        <h2>Products</h2>
        <SearchBar type="search" placeholder="Search Products...." value={searchText} onChange={handleChange} ></SearchBar>
      </ProductHeader>
      {
        filterData.length === 0 && <NoItems>No Products Available</NoItems>
      }
      <ProductsContainer>
        {filterData.map((item, index) => (
          <ProductCard key={index}>
            <NavLink key={item.id} state={{ item }} to={`/products/${item.id}`} style={{ textDecoration: "none" }} >
              <ProductImage src={"https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg"} alt={item.name} />
              <ProductInfo>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductDescription>{item.description}</ProductDescription>
                <ProductCategory>{item.category}</ProductCategory>
                <ProductPrice>${Number(item.price).toFixed(2)}</ProductPrice>
              </ProductInfo>
            </NavLink>
          </ProductCard>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductsList;
