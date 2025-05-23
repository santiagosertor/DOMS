import express from "express";
// import multer from "multer";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import rutaciudad from "./rutas/rutaciudad.js";
import rutalenguajea from "./rutas/rutalenguaje.js";
import rutasusuario from "./rutas/rutasusuario.js";
import rutasgeneros from "./rutas/rutasgenero.js";

dotenv.config();

// Crear la instancia de Express
const app = express();
// Middleware
// Habilita CORS
app.use(cors());
// Permite que la app acepte datos JSON
app.use(bodyParser.json());
// app.use(express.json());
// Permite el envio de datos de tipo utlencode
app.use(express.urlencoded({ extended: true }));
// Permite manejar cookies en las respuestas.
app.use(cookieParser());
// Rutas
app.use("/api/ciudades", rutaciudad);
app.use("/api/lenguajes", rutalenguajea);
app.use("/api/usuarios", rutasusuario);
app.use("/api/generos", rutasgeneros);

// Puerto para ejecutar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
