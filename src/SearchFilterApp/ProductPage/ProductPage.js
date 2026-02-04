import React from "react";
import { Card, Title, Category, Description, Price, Tags, Brand } from "./ProductPage.Styled";


const ProductPage = ({ price, category, title, description, brand, tags }) => {
  return (
    <Card price={price}>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Brand>
        <strong>Brand:</strong> {brand}
      </Brand>

      <Price>${price}</Price>

      <Tags>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </Tags>
    </Card>
  );
}

export default React.memo(ProductPage);
