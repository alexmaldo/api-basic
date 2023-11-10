const express = require("express");
const router = express.Router();
const autoresController = require("../../controllers/autorController");

router.get("/",  autoresController.getAllAutores);


router.get("/:idAutor", autoresController.getOneAutor);


router.post("/", autoresController.createNewAutor);

router.patch("/:idAutor", autoresController.updateOneAutor);

module.exports = router;