import React from 'react'
import { useState } from 'react';
import styles from './add.module.css'
import {validate} from "./validations"


export default function Add () {

  //console.log("se imprime desde adicionar las plataformas")
  //console.log(plataformas)
  //seteamos el hook para el input
  const [inputs, setInputs] = useState({
    
    name:"",
    image: "",
    description:"",
    releaseDate: "",
    precio: "",
    categorias: []
  })


  

  //seteamos el hook para el error
  const [errors, setErrors] = useState({
    
    name:"",
    image: "",
    description:"",
    releaseDate: "",
    precio: ""

  })

  //seteamos la funcion para manejar los cambios en el formulario
  const handleInputChange  = (e) => {
    
    //llamamos al hook
    //usamos el spread operator(...cosa) para copiar todo el estado anterior
    //usamos los objetos literales para hacer dinamico el formulario
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })

    setErrors( 
      (validate({
        ...inputs,
        [e.target.name]: e.target.value
      }))
    )

  };

  const handleDate = (e) =>{
    console.log("Se deberia ver la fecha")
    setInputs({
      ...inputs,
      releaseDate: e.target.value
    }
      )
  }

  

  const handleSubmit = (e) =>{
    e.preventDefault();

    //el condicional convierte el objeto errors a un array
    if(Object.keys(errors).length){
      alert("Debe llenar todos los campos");
    }else{
      alert("Datos completos");
      let info = {
        name: inputs.name,
        image: inputs.image,
        description: inputs.description,
        releaseDate: inputs.releaseDate,
        precio: inputs.precio

      }
      console.log(info);
      dispatch(createGame(info));
      setInputs({
        name:"",
        image: "",
        releaseDate: "",
        description:"",
        precio: ""
      }
      )

      setErrors({
        name:"",
        image: "",
        releaseDate: "",
        description:"",


      })

    }
  }

  //console.log("se imprime el string final")
  //console.log(aux.sGeneros);
  return (
    <div className={styles.origin}>
      {/* */}
      <div className={styles.container}>
      <h1>Añadí tu producto</h1>
      <p>Por favor rellena el siguiente formulario con la informacion requerida</p>
 
      <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} action=''className={styles.formulario}>

      {/*Para el nombre*/}
        <label htmlFor='name'>Nombre del producto:</label>
        <br></br>
        <input onChange={handleInputChange} className={errors.name && styles.warning} type="text" value={inputs.name} name="name" id="name" placeholder='Nombre de tu producto...'/>
        <p className={styles.danger}>{errors.name}</p>

        {/*Para la imagen*/}
        <label htmlFor='image'>Agregar imagen</label>
        <br></br>
        <input onChange={handleInputChange} className={errors.image && "warning"} type="text" value={inputs.image} name="image" id="image" placeholder='www...'/>
        <p className={styles.danger}>{errors.image}</p>
        <br></br>
        {/*Para la descripcion*/}
        <label htmlFor="description">Descripcion:</label>
        <br></br>
        <textarea 
          onChange={handleInputChange} className={errors.description && "warning"} type="text" value={inputs.description} name="description" id="description" placeholder='Describe tu producto...' rows="3" cols="30">
          </textarea>
        <p className={styles.danger}>{errors.description}</p>
        <br></br>

        {/*Para la fecha*/}
        <label htmlFor="release">Fecha</label>
        <br></br>
        <input
          onChange={handleDate}   type="date" value={inputs.releaseDate} name="release" id="release" >
        </input>
        {/*console.log(inputs.releaseDate)*/}
        <p className={styles.danger}>{errors.releaseDate}</p>
        <br></br>

        {/*Para el precio*/}
        <label htmlFor='precio'>Ponele precio</label>
        <br></br>
        <input onChange={handleInputChange} className={errors.precio && "warning"} type="text" value={inputs.precio} name="precio" id="precio" placeholder='5'/>
        <p className={styles.danger}>{errors.precio}</p>


        

        <button className={styles.enviar} type='submit'>Añadir producto</button>
      </form>
      <div className={styles.visualizar}>
            <h2>Resumen de tu info</h2>
            <img className={styles.renderI} src={inputs.image}></img>
            <p>Nombre: {inputs.name}</p>
            <p>Descripcion: </p>
            <p>{inputs.description}</p>
            <p>Colores: </p>
            <p>{inputs.colores}</p>
            <p>Fecha: </p>
            <p>{inputs.releaseDate}</p>
            <p>Precio: </p>
            <p>{inputs.precio} Pesos</p>
      </div>
      </div>

      </div>

    </div>
    
  
  )
}