import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import { deleteProducts } from "../../../redux/Actions/productsAction";

const DeleteProducts = (id) => {
    const dispatch = useDispatch();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmation(true)
    }

    const handleDeleteOk = async () => {
        try{
            await dispatch(deleteProducts(id))
            alert('Producto Eliminado Exitosamente')
            setShowConfirmation(false);
        }catch(error){
            console.log('Error al eliminar el producto', error)
            alert('No se pudo eliminar el producto')
            setShowConfirmation(false)
        }       
    }

    const handleDeleteCancel = () => {
        setShowConfirmation(false);
    }

    return(
        <>
        <div>
            <button onClick={handleDeleteClick}></button>
            {
                showConfirmation && (
                    <div>
                        <p>¿Esta seguro que desea eliminar su producto?</p>
                        <button onClick={handleDeleteOk}>Aceptar</button>
                        <button onClick={handleDeleteCancel}>Cancelar</button>
                    </div>
                )
            }
        </div>
        </>
    )
};

export default DeleteProducts;