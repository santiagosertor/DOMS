import database from "../utils/database.js"

export class Usuario {

  static async finddocumento(documento) {
    const [rows] = await database.query("SELECT * FROM usuarios WHERE documento = ?", [
      documento,
    ]);
    return rows[0];
  }

  static async create(nombre, documento, contrasena) {
    console.log(nombre, documento, contrasena);
    const [result] = await database.query(
      "INSERT INTO usuarios (nombre, documento, contrasena) VALUES (?, ?, ?)",
      [nombre, documento, contrasena]
    );
    return result.insertId;
  }

  static async updateRefreshToken(id, refreshToken) {
    await database.query("UPDATE usuarios SET refresh_token = ? WHERE id = ?", [
      refreshToken,
      id,
    ]);
  }
}