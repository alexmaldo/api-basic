const autorService = require("../services/autorService");

const getAllAutores = (req,res) => {
    const autores = autorService.getAllAutores();
    res.send({status:"OK", data:autores});
};

const getOneAutor = (req, res) =>{
    const { params : { idAutor} } = req;
    if(!idAutor){
        return;
    }
    const autor = autorService.getOneAutor(idAutor);
    res.send({status:"OK", data: autor});
}

const createNewAutor = (req,res) =>{
    const {body} = req;
    if (!body.nombre)
    {
        return;
    }
    const nuevoAutor = {
        nombres: body.nombres,
        apellidos:body.apellidos,
        pais:body.pais        
    }
    const createdAutor = autorService.createNewAutor(nuevoAutor);
    res.status(201).send({status:"OK", data: createdAutor});
    
};

const updateOneAutor = (req, res) => {
    const {body, params : { idAutor}} = req;
    if(!idAutor){
        return;
    }

    const updateAutor = autorService.updateOneAutor(idAutor,body); 
    res.status(201).send({status:"OK", data: updateAutor});
};


module.exports = {
    getAllAutores,
    getOneAutor,
    createNewAutor,
    updateOneAutor
};