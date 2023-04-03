const DB = require("./db.json")

const { saveToDatabase } = require("./utils");


const getAllLibros = () =>{
    return DB.libros;
}

const getOneLibro = (idLibro) =>{
    const libro = DB.libros.find((l) => l.id === idLibro);
    console.log("dbLibro",libro);
    if(!libro){
        return;
    }
    return libro;
}

const createNewLibro = (newLibro) => {
    const registrado = DB.libros.findIndex(
            ((l) => l.titulo === newLibro.titulo )) > -1 
        
    if(registrado){
        return;
    }
    DB.libros.push(newLibro);
    saveToDatabase(DB);
    return newLibro;
}

const updateOneLibro = (idLibro, changedLibro) =>{
    const index = DB.libros.findIndex(
        ((l) => l.id  === idLibro )) ;
    if(index === -1){
        return ;
    }
    const updatedLibro ={
        ...DB.libros[index],
        ...changedLibro,
        fechaActualizacion: new Date().toLocaleString("en-US",{timeZone:"UTC"})
    };
    DB.libros[index] = updatedLibro;
    saveToDatabase(DB);
    return updatedLibro;
}
module.exports = {  getAllLibros, createNewLibro , getOneLibro, updateOneLibro};