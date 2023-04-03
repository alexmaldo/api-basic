const libroService = require("../services/libroService");

const getAllLibros = (req,res) => {
    const libros = libroService.getAllLibros();
    res.send({status:"OK", data:libros});
};

const getOneLibro = (req, res) =>{
    const { params : { idLibro} } = req;
    if(!idLibro){
        return;
    }
    const libro = libroService.getOneLibro(idLibro);
    res.send({status:"OK", data: libro});
}

const createNewLibro = (req,res) =>{
    const {body} = req;
    if (!body.titulo)
    {
        return;
    }
    const nuevoLibro = {
        titulo: body.titulo,
        editorial: body.editorial,
        nropaginas:body.nropaginas,
        autor: body.autor,
        tipo: body.tipo,
        claves: body.claves,
        resumen: body.resumen
    }
    const createdLibro = libroService.createNewLibro(nuevoLibro);
    res.status(201).send({status:"OK", data: createdLibro});
    //res.send(`Agrega un libro ${req.params.idLibro}`);
};

const updateOneLibro = (req, res) => {
    const {body, params : { idLibro}} = req;
    if(!idLibro){
        return;
    }

    const updateLibro = libroService.updateOneLibro(idLibro,body); 
    res.status(201).send({status:"OK", data: updateLibro});
};

module.exports = {
    getAllLibros,
    getOneLibro,
    createNewLibro,
    updateOneLibro
};