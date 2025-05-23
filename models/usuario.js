// models/Usuario.js
import conection from "../utils/database.js";

export class Usuario {
  static async findByid(id) {
    const [rows] = await conection.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [id]
    );
    return rows[0];
  }

  static async create(
    id,
    nombre,
    apellido,
    documento,
    telefono,
    usuario,
    contrasena
  ) {
    console.log(id, nombre, apellido, documento, telefono, usuario, contrasena);
    const [result] = await conection.query(
      "INSERT INTO usuarios (id, nombre, apellido, documento,telefono,usuario, contrasena) VALUES (?, ?, ?)",
      [id, nombre, apellido, documento, telefono, usuario, contrasena]
    );
    return result.insertId;
  }

  static async updateRefreshToken(id, refreshToken) {
    await conection.query(
      "UPDATE usuarios SET refresh_token = ? WHERE id = ?",
      [refreshToken, id]
    );
  }
}
