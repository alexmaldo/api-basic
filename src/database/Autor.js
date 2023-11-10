const DB = require("./db.json")

const { saveToDatabase } = require("./utils");


const getAllAutores = () =>{
    return DB.autores;
}

const getOneAutor = (idAutor) =>{
    const autor = DB.autores.find((a) => a.id === idAutor);
    if(!autor){
        return;
    }
    return autor;
}

const createNewAutor = (newAutor) => {
    const registrado = DB.autores.findIndex(
            ((a) => a.nombres === newAutor.nombres && a.apellidos === newAutor.apellidos)) > -1 
        
    if(registrado){
        return;
    }
    DB.autores.push(newAutor);
    saveToDatabase(DB);
    return newAutor;
}

const updateOneAutor = (idAutor, changedAutor) =>{
    const index = DB.autores.findIndex(
        ((a) => a.id  === idAutor )) ;
    if(index === -1){
        return ;
    }
    const updatedAutor ={
        ...DB.autores[index],
        ...changedAutor,
        fechaActualizacion: new Date().toLocaleString("en-US",{timeZone:"UTC"})
    };
    DB.autores[index] = updatedAutor;
    saveToDatabase(DB);
    return updatedAutor;
}
module.exports = {  getAllAutores, createNewAutor , getOneAutor, updateOneAutor};