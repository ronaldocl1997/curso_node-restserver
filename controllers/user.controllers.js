const { response, request } = require('express');

const usuariosGet = (req = request , res = response)=>{

    const { page=1, size=10 } = req.query;
    res.json({
        ok:true,
        mensaje:'get Api-controller',
        page,
        size
    });
}

const usuariosPost = (req , res = response)=>{

    const body = req.body;

    res.json({
        ok:true,
        mensaje:'Post Api-controller',
        body:body
    });
}

const usuariosPut = (req , res = response)=>{

    const id = req.params.id;
    res.json({
        ok:true,
        mensaje:'Put Api-controller',
        id:id,
    });
}

const usuariosDelete = (req , res = response)=>{

    res.json({
        ok:true,
        mensaje:'Delete Api-controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}