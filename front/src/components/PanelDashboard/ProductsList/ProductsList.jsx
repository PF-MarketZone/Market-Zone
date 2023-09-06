import DeleteProducts from "../DeleteProducts/DeleteProducts";
import EditProducts from "../EditProducts/EditProducts";
import { toogleProduct } from "../../../redux/Actions/productsAction";
import { useDispatch } from 'react-redux';
import { useState } from "react";

import {
  ProductContainer,
  FileProduct,
  ColumnProduct,
  ImgProduct
} from './ProductsListStyle';



const ProductsList = ({id, image, name, stock, price, onDelete, onEdit, enabled}) => {

  const [isChecked, setIsChecked] = useState(enabled);
  const dispatch = useDispatch();

  const handleToggle = async () => {
    try{
      await dispatch(toogleProduct(id));
      setIsChecked(!isChecked);
    }catch{
      console.log('No se pudo cambiar el estado de tu producto')
    }
  };
  
    return(
      <ProductContainer>
        <FileProduct>
          <ColumnProduct onClick={handleToggle}>
            {isChecked ? 'DESACTIVADO' : 'ACTIVADO'}
          </ColumnProduct>
          <ColumnProduct id={id}> 
            <ImgProduct src={image} alt="" />
          </ColumnProduct>
          <ColumnProduct>{name}</ColumnProduct>
          <ColumnProduct>{stock}</ColumnProduct>
          <ColumnProduct>{price}</ColumnProduct>
          <ColumnProduct>
          <EditProducts id={id} onEdit={onEdit} />
          </ColumnProduct>
          <ColumnProduct>
          <DeleteProducts id={id} onDelete={onDelete} />
          </ColumnProduct>

        </FileProduct>  
      </ProductContainer>
  )
}

export default ProductsList;