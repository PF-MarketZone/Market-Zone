import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../../redux/Actions/productsAction';
import ProductsItems from '../ProductsItems/ProductsItems'

const Products = () => {

    const allProducts = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])

  console.log(allProducts);

    return ( 
        <div>
                <h1>Productos</h1>
            <div>
            {
            allProducts.products.data.length > 0 ? (
                allProducts.products.data.map((product) => (
                        <ProductsItems
                            key={product._id}
                            image={product.image[0].url}
                            name={product.name}
                            stock={product.stock}
                            price={product.price}
                        />
                    )) 
                    ) : (

                        <p>No hay productos</p>
                    )
            }
            </div>
        </div>
     );
}
 
export default Products;