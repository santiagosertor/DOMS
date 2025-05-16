import express from "express";
import { camposciudad, parcialciudad } from "../middlewares/ciudad/index.js";
import ciudadController from "../controller/ciudadcontroller.js";

const router = express.Router();
// Creamos una instancia del controlador

// Obtener todas las ciudad
router.get("/", ciudadController.getAllciduad);

// Obtener una ciudad por ID
router.get("/:id", ciudadController.getciudadid);

// Crear una nueva ciudad
router.post("/", camposciudad, ciudadController.createciudad);

// Actualizar una ciudad
router.put("/:id", camposciudad, ciudadController.updateciudad);

// Actualizar parcialmente una ciudad
router.patch("/:id", parcialciudad, ciudadController.updateciudad);

// Eliminar una ciudad
router.delete("/:id", ciudadController.deleteciudad);

export default router;
