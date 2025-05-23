import conection from "../utils/database.js";

class genero {
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT * FROM generos");
      return rows;
    } catch (error) {
      throw new Error("error al pedir ciudades");
    }
  }

  async getbyid(id) {
    try {
      const [rows] = await conection.query("SELECT FROM generos where id=?", [
        id,
      ]);
      if (rows.length === 0) {
        return [];
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error de generos ");
    }
  }

  async create(nombre, id) {
    try {
      const [result] = await conection.query(
        "INSERT INTO generos (nombre, id) VALUES (?,?)",
        [nombre, id]
      );
      if (result.affectedRows === 0) {
        return null; // Retorna null si no se pudo crear la generos
      }
      // Retorna la nueva generos creada
      return { id: result.insertId, nombre, id };
    } catch (error) {
      throw new Error("Error al crear la generos");
    }
  }

  async update(id, campos) {
    try {
      let query = "UPDATE generos SET ";
      let params = [];

      // Construimos dinámicamente la consulta de actualización solo con los campos proporcionados
      for (const [key, value] of Object.entries(campos)) {
        query += `${key} = ?, `;
        params.push(value);
      }

      // Eliminamos la última coma y espacio de la consulta
      query = query.slice(0, -2);

      // Añadimos la condición WHERE para seleccionar el producto por su ID
      query += " WHERE id = ?";
      params.push(id);
      const [result] = await conection.query(query, params);
      return result.affectedRows > 0 ? { id, ...campos } : null;
    } catch (error) {
      throw new Error("Error al actualizar la generos");
    }
  }

  async delete(id_generos) {
    // Procedemos con la eliminación si no está relacionada
    const [result] = await conection.query("DELETE FROM generos WHERE id = ?", [
      id_generos,
    ]);

    if (result.affectedRows === 0) {
      return {
        error: true,
        mensaje:
          "No se pudo eliminar la lenguajes, ocurrio un error inesperado.",
      };
    }

    return {
      error: false,
      mensaje: "generos eliminada exitosamente.",
    };
  }

  // Método para listar los productos de una categoría
  async productos(id_generos) {
    const [rows] = await conection.query(
      "SELECT * FROM generos WHERE id_generos = ?",
      [id_generos]
    );
    return rows;
  }
}

export default genero;
