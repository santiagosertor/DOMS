import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ResponseProvider } from "../../providers/ResponseProvider.js";

dotenv.config();

export function verifyToken(req, res, next) {
  const usuariohead = req.headers.authorization;
  // Validamos si la petición trea un token de autorización
  if (!usuariohead || !usuariohead.startsWith("Bearer ")) {
    return ResponseProvider.error(
      res,
      "Acceso denegado. Token no proporcionado",
      401
    );
  }
  // Extraemos el token de la solicitud
  const token = usuariohead.split(" ")[1];

  if (!token) {
    return ResponseProvider.error(res, "Token invalido", 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Aquí tendrás todos los datos que firmaste en el token
    req.user = decoded;
    // Pasamos a la siguiente función
    next();
  } catch (error) {
    console.log(error);
    return ResponseProvider.error(res, "Token inválido o expirado", 401);
  }
}
