// Documentacion
/**
 * Mapea y devuelve la respuesta detallada
 * @param  {boolean} hasAnError Indica si hubo error o no
 * @param  {string} message Mensaje a retornar
 * @param {object | null} data  Data a retotnar
 * @return {object} Respuesta mapeada
 */

// -----

const responseMaper = (hasAnError, message, data) => {
  return {
    error: hasAnError,
    message,
    data,
  };
};

module.exports = { responseMaper };
