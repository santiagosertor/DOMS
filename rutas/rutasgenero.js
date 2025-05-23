import express from "express";
import generocontroller from "../controller/generocontroller.js";
import { camposgeneros, parcialgenero } from "../middlewares/genero/index.js";
const router = express.Router();
// Creamos una instancia del controlador

// Obtener todas las ciudad
router.get("/", generocontroller.getAllgenero);

// Obtener una categoría por ID
router.get("/:id", generocontroller.getgeneroid);

// Crear una nueva categoría
router.post("/", camposgeneros, generocontroller.creategenero);

// Actualizar una categoría
router.put("/:id", camposgeneros, generocontroller.updategenero);

// Actualizar parcialmente una categoría
router.patch("/:id", parcialgenero, generocontroller.updategenero);

// Eliminar una categoría
router.delete("/:id", generocontroller.deletegenero);

export default router;
   