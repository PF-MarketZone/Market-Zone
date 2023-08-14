// require('.dotenv').config();

const getAllStore = (req, res) => {
  console.log('llegando al handler');
  //   try {
  //     res.status(200).send('Estas son las tiendas');
  //   } catch (error) {
  //     res.status(404).send('No se encontraron tiendas');
  //   }
};

module.exports = {
  getAllStore,
};
