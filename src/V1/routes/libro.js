const express = require("express");
const router = express.Router();
const librosController = require("../../controllers/libroController");

router.get("/",  librosController.getAllLibros);


router.get("/:idLibro", librosController.getOneLibro);


router.post("/", librosController.createNewLibro);

router.patch("/:idLibro", librosController.updateOneLibro);


module.exports = router;
