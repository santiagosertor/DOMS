import conection from "../utils/database";

class lenguaje {
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT*FROM");
    } catch (error) {
      throw new Error("error de falta el lenguaje");
    }
  }

  async getbyid(id) {
    try {
      const [rows] = await conection.query(
        "SELECT *FROM lenguaje  WHERE id = ?",
        [id]
      );
      if (rows.length === 0) {
        return [];
      }
      return rows[0];
    } catch (error) {
      throw new Error("error de obtener el lenguaje");
    }
  }

  // Método para actualizar una categoría
  async update(id, campos) {
    try {
      let query = "UPDATE lenguaje SET ";
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
      const [result] = await connection.query(query, params);
      return result.affectedRows > 0 ? { id, ...campos } : null;
    } catch (error) {
      throw new Error("Error al actualizar la categoría");
    }
  }

  // Método para eliminar una categoría
  async delete(id_lenguaje) {
    // Procedemos con la eliminación si no está relacionada
    const [result] = await connection.query(
      "DELETE FROM lenguaje WHERE id = ?",
      [id_lenguaje]
    );

    if (result.affectedRows === 0) {
      return {
        error: true,
        mensaje:
          "No se pudo eliminar la categoría, ocurrio un error inesperado.",
      };
    }

    return {
      error: false,
      mensaje: "lenguaje eliminada exitosamente.",
    };
  }

  // Método para listar los productos de una categoría
  async productos(id_lenguaje) {
    const [rows] = await connection.query(
      "SELECT * FROM lenguaje_usuario WHERE id_lenguaje = ?",
      [id_lenguaje]
    );
    return rows;
  }
}

export default lenguaje;
