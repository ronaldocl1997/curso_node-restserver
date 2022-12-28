const Role = require('../models/role'); 
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '')=> {
    const existeRol = await Role.findOne({ rol });
    if( !existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`);
    }
};

const emailExiste = async ( correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El correo ${correo} ya esta registrado`);
    };
};

const existeUsuarioPorId = async ( id ) => {
    try {
        const existeUsuario = await Usuario.findById(id);
        console.log(existeUsuario)
        if( !existeUsuario){
            throw new Error(`El id no existe ${id}`);
        };
    } catch (error) {
        throw new Error(`El id no es valido ${id}`);
    }
};

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}