import conection from "../utils/database.js";

class Ciudades {
  async getAll() {
    try {
      const [rows] = await conection.query("SELECT * FROM ciudades");
      return rows;
    } catch (error) {
      throw new Error("error al pedir ciudades");
    }
  }

  async getbyid(id) {
    try {
      const [rows] = await conection.query("SELECT FROM ciudades where id=?", [id]);
      if (rows.length === 0) {
        return [];
      }
      return rows[0];
    } catch (error) {
      throw new Error("Error de ciudad ");
    }
  }

  async create(nombre, id) {
    try {
      const [result] = await conection.query(
        "INSERT INTO ciudades (nombre, id) VALUES (?,?)",
        [nombre, id]
      );
      if (result.affectedRows === 0) {
        return null; // Retorna null si no se pudo crear la ciudad
      }
      // Retorna la nueva ciudad creada
      return { id: result.insertId, nombre, id };
    } catch (error) {
      throw new Error("Error al crear la ciudad");
    }
  }

  async update(id, campos) {
    try {
      let query = "UPDATE ciudades SET ";
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
      throw new Error("Error al actualizar la categoría");
    }
  }

  async delete(id_ciudad) {
    // Procedemos con la eliminación si no está relacionada
    const [result] = await conection.query(
      "DELETE FROM ciudades WHERE id = ?",
      [id_ciudad]
    );

    if (result.affectedRows === 0) {
      return {
        error: true,
        mensaje: "No se pudo eliminar la ciudad, ocurrio un error inesperado.",
      };
    }

    return {
      error: false,
      mensaje: "ciudad eliminada exitosamente.",
    };
  }

  // Método para listar los productos de una ciudad
  async productos(id_ciudad) {
    const [rows] = await conection.query(
      "SELECT * FROM lenguaje WHERE id_ciudad = ?",
      [id_ciudad]
    );
    return rows;
  }
}

export default Ciudades;
