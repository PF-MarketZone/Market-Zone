import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts, deleteProducts } from "../../../redux/Actions/productsAction";
import ProductsList from '../ProductsList/ProductsList';
import FormEditCard from '../FormEditCard/FormEditCard';
import Pagination from '../Pagination/Pagination';



const Products = () => {

    const allProducts = useSelector(state => state.products.products.data);
    console.log(allProducts);
    const dispatch = useDispatch();
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])

  const [page, setPage] = useState(1); //aranca en la primer pagina
  const [cardsPage, setCardsPage] = useState(5); //guarda cuantas cartas quiero por pagina


  const indexLastCard = page * cardsPage; //pagina actual q estoy * la cantidad de recetas x pagina '9'
  const indexFirstCard = indexLastCard - cardsPage; //indice del ultimo personaje - los recetas por pag

  const currentCards = allProducts.slice(indexFirstCard, indexLastCard);  //va tener las recetas que tiene en la pagina actual

  const pagination = (pageNumber) => {
      setPage(pageNumber)
  }


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
      <Pagination
                cardsPage={cardsPage}
                recipes={allProducts.length}
                pagination={pagination}
                page={page}
            />
        {currentCards && currentCards.length > 0 ? (
          currentCards.map((product) => (
            <div key={product._id}>
              {editingProductId === product._id ? (
                // Mostrar el componente de edición
                <FormEditCard product={product} onCancelEdit={handleCancelEdit} />
              ) : (
                // Mostrar el componente de visualización de productos
                <ProductsList
                  id={product._id}
                  image={product.image[0].url}
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