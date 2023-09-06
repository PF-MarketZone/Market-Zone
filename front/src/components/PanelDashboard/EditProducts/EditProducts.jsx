import React, { useState} from 'react'
import {AiOutlineEdit} from "react-icons/ai";


const EditProducts = ({id, onEdit}) => {

    const [showConfirmation, setShowConfirmation] = useState(false);

    
    const handleEditClick = () => {
        setShowConfirmation(true)
    }

    const handleEditOk = async () => {
        await onEdit(id);
        setShowConfirmation(false)       
    }

    const handleEditCancel = () => {
        setShowConfirmation(false);
    }

       return(
        <>
        <div>
            <AiOutlineEdit onClick={handleEditClick}></AiOutlineEdit>
            {
                showConfirmation && (
                    <div>
                        <p>¿Desea editar su producto?</p>
                        <button onClick={handleEditOk}>Aceptar</button>
                        <button onClick={handleEditCancel}>Cancelar</button>
                    </div>
                )
            }
            
        </div>
        </>
    )
};

export default EditProducts;