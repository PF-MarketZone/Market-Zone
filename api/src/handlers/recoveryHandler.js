const { recoveryPassword, changePassword } = require('../controllers/authController')

const recoveryHandler = async (req, res, next) => {
    try {
        const { email } = req.body;
        console.log(email)
        const rta = await recoveryPassword(email);
        
        res.json(rta);
    } catch (error) {
        console.log(error); 
        res.status(500).json({ error: 'Error al intentar recuperar la contraseña' });
    }
};
const changeHandler = async (req, res, next) => {
    try {
        const { token, newPassword } = req.body; 
        console.log(token);
        console.log(newPassword)//agregar un esquema de validacion;
        const rta = await changePassword(token, newPassword);
        res.send(rta);
    } catch (error) {
        console.log(error); 
        res.status(500).json({ error: 'Error al intentar cambiar la contraseña' });
    }
}



 module.exports = { recoveryHandler, changeHandler }