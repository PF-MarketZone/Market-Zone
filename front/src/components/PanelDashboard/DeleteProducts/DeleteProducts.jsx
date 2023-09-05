import React, {useState} from "react";
import {AiOutlineDelete} from "react-icons/ai";


const DeleteProducts = ({id, onDelete}) => {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmation(true)
    }

    const handleDeleteOk = async () => {
        await onDelete(id);
        setShowConfirmation(false)       
    }

    const handleDeleteCancel = () => {
        setShowConfirmation(false);
    }

    return(
        <>
        <div>
            <AiOutlineDelete onClick={handleDeleteClick}></AiOutlineDelete>
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