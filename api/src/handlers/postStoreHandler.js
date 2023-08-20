const { storeCreate } = require('../controllers/storeController');
const { responseMaper } = require('../helpers/responseMaper');

const createStoreHandler = async (req, res) => {
  try {
    const { name, image, categories } = req.body;
    console.log(name);
    if (!name || !image || !categories) {
      res
        .status(400)
        .json(responseMaper(true, 'Completa todos los campos', null));
    }
    const newStore = storeCreate(name, image, categories);
    res
      .status(200)
      .json(
        responseMaper(false, `La tienda ${name} fue creada con exito`, newStore)
      );
    console.log('Creando una tienda');
  } catch (error) {
    res.status(400).send('error al crear la tienda');
  }
};

module.exports = { createStoreHandler };
