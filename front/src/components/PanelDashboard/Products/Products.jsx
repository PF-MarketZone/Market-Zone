import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts, deleteProducts } from "../../../redux/Actions/productsAction";
import ProductsItems from '../ProductsItems/ProductsItems';



const Products = () => {

    const allProducts = useSelector(state => state.products);
    const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProducts(id));
      alert('Producto Eliminado Exitosamente');
    } catch (error) {
      console.log('Error al eliminar el producto', error);
      alert('No se puede eliminar el producto');
    }
  }

      useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return ( 
        <div>
                <p>Productos</p>
            <div>
                { allProducts.products.data && allProducts.products.data.length > 0 ? (
                    allProducts.products.data.map((product) => (
                    <div key={product._id}>
                    <ProductsItems
                        id={product._id}
                        image={product.image[0].url}
                        name={product.name}
                        stock={product.stock}
                        price={product.price}
                        enabled={product.deleted}
                        onDelete={() => handleDelete(product._id)}
                    />
                    </div>
                    ))
                    ) : (
                        <p>No hay productos</p> 
                    )}
            </div>
      
                      </div>
     );
}
 
export default Products;