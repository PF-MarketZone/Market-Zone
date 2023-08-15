export function validate( inputs ){

    const regexI = /^(http(s):\/\/.)[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)$/;
    const regexN = /^[0-9]*$/

    let validI = true;
    let validN = true;

    if(inputs.image){
      console.log("existe")
      
      validI= regexI.test(inputs.image);
 
    }

    if(inputs.precio){
      validN = regexN.test(inputs.precio);
    }
    

    let errors = {};
    if (!inputs.name.length) {
      errors.name = 'Se requiere un nombre';
    }
    if (!inputs.image.length) {
      errors.image = 'Debe haber una URL';
    }
    
    if(!validI){
      errors.image = "Debe ser una URL valida";
    }
    if(!validN){
      errors.precio = "Deben ser solo numeros";
    }

  
    if(!inputs.releaseDate.length){
      errors.releaseDate = "Debe ser una fecha valida"
    }
    if (!inputs.description.length) {
      errors.description = 'Debe haber una descripcion';
    }

    return errors;
  
  }