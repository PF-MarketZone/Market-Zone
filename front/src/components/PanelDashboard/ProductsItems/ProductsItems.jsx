import React from "react";

import {
  ProductContainer,
  FileProduct,
  ColumnProduct,
  ImgProduct
} from './ProductsItemsStyle';

const ProductsItems = ({_id, image, name, stock, price}) => {

  
  return(
      <ProductContainer>
        <FileProduct>
          <ColumnProduct key={_id}>
            <ImgProduct src={image} alt="" />
          </ColumnProduct>
          <ColumnProduct>{name}</ColumnProduct>
          <ColumnProduct>{stock}</ColumnProduct>
          <ColumnProduct>{price}</ColumnProduct>
        </FileProduct>  
      </ProductContainer>
  )
}

export default ProductsItems;