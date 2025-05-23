import express from "express";
import {
  camposlenguaje,
  parciallenguaje,
} from "../middlewares/lenguaje/index.js";
import lenguajecontroller from "../controller/Lenguajecontroller.js";

const router = express.Router();
// Creamos una instancia del controlador

// Obtener todas las ciudad
router.get("/", lenguajecontroller.getAlllenguaje);

// Obtener una categoría por ID
router.get("/:id", lenguajecontroller.getlengaujeid);

// Crear una nueva categoría
router.post("/", camposlenguaje, lenguajecontroller.createlenguaje);

// Actualizar una categoría
router.put("/:id", camposlenguaje, lenguajecontroller.updatelenguaje);

// Actualizar parcialmente una categoría
router.patch("/:id", parciallenguaje, lenguajecontroller.updatelenguaje);

// Eliminar una categoría
router.delete("/:id", lenguajecontroller.deletelenguaje);

export default router;
