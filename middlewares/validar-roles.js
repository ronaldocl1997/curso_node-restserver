const {response,request} = require('express')

const esAdminRole = (req = request,res = response,next) =>{
    if(!req.usuario){
        return res.status(500).json({
            mgs : 'Se quiere verificar el role sin validar el token primero'
        })
    }

    const {rol,nombre} = req.usuario;

    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            mgs : `${nombre} no es administrador - no Puede hacer esto` 
        });
    }

    next();
}

const tieneRole = ( ...roles ) => {
    return (req,res = response,next) => {

        if(!req.usuario){
            return res.status(500).json({
                mgs : 'Se quiere verificar el role sin validar el token primero'
            })
        }

        if(!roles.includes(req.usuario.rol)){
            return res.status(401).json({
                msg:`El servicio requiere uno de estos roles ${roles}`
            });
        }
        next();
    }
}

module.exports = {
    esAdminRole,
    tieneRole
}