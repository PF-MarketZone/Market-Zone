import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts, deleteProducts } from "../../../redux/Actions/productsAction";
import ProductsList from '../ProductsList/ProductsList';
import FormEditCard from '../FormEditCard/FormEditCard';
// import Pagination from '../Pagination/Pagination';



const Products = () => {

    const allProducts = useSelector(state => state.products);
    console.log(allProducts);
    const dispatch = useDispatch();
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])

  

  const handleEdit = (id) => {
    setEditingProductId(id);
  }


  const handleCancelEdit = () => {
    setEditingProductId(null);
  }

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProducts(id));
      dispatch(getProducts())
      alert('Producto Eliminado Exitosamente');
    } catch (error) {
      console.log('Error al eliminar el producto', error);
      alert('No se puede eliminar el producto');
    }
  }

    
    return ( 
      <div>
      <p>Productos</p>
      <div>
     
        {allProducts.products.data && allProducts.products.data.length > 0 ? (
          allProducts.products.data.map((product) => (
            <div key={product._id}>
              {editingProductId === product._id ? (
                // Mostrar el componente de edición
                <FormEditCard product={product} onCancelEdit={handleCancelEdit} />
              ) : (
                // Mostrar el componente de visualización de productos
                <ProductsList
                  id={product._id}
                  // image={product.image[0].url}
                  name={product.name}
                  stock={product.stock}
                  price={product.price}
                  enabled={product.deleted}
                  onEdit={() => handleEdit(product._id)}
                  onDelete={() => handleDelete(product._id)}
                />
              )}
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
     );
}
 
export default Products;