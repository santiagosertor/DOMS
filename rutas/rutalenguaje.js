import express from "express";
<<<<<<< HEAD
import {
  camposlenguaje,
  parciallenguaje,
} from "../middlewares/lenguaje/index.js";
import lenguajecontroller from "../controller/Lenguajecontroller.js";
=======
import { camposciudad, parcialciudad } from "../middlewares/ciudad/index.js";
import ciudadController from "../controller/ciudadcontroller.js";
>>>>>>> 598807af6dc822aad5b9f9c007ae442dbf92e0cf

const router = express.Router();
// Creamos una instancia del controlador

// Obtener todas las ciudad
<<<<<<< HEAD
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
=======
router.get("/", ciudadController.getAllciduad);

// Obtener una categoría por ID
router.get("/:id", ciudadController.getciudadid);

// Crear una nueva categoría
router.post("/", camposciudad, ciudadController.createciudad);

// Actualizar una categoría
router.put("/:id", camposciudad, ciudadController.updateciudad);

// Actualizar parcialmente una categoría
router.patch("/:id", parcialciudad, ciudadController.updateciudad);

// Eliminar una categoría
router.delete("/:id", ciudadController.deleteciudad);
>>>>>>> 598807af6dc822aad5b9f9c007ae442dbf92e0cf

export default router;
