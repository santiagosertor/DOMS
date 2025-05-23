import genero from "../models/generos.js";

class generosservice {
  static async getgenero() {
    try {
      const instancegenero = new genero();
      const generos = await instancegenero.getAll();
      // Validamos si no hay ciudad
      if (generos.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay ciudad registradas",
        };
      }
      // Retornamos las ciudad obtenidas
      return {
        error: false,
        code: 200,
        message: "ciudad obtenidas correctamente",
        data: generos,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener las ciudad",
      };
    }
  }

  static async getgeneroid(id) {
    try {
      const generoinstance = new genero();
      const generos = await generoinstance.getbyid(id);
      // Validamos si no hay ciudades
      if (generos.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }
      // Consultamos los productos asociados a la categoría
      const id = await generoinstance.id(id);
      // Agregamos la propiedad productos al objeto categoría
      generos.id = id;
      // Retornamos la categoría obtenida
      return {
        error: false,
        code: 200,
        message: "ciudad obtenida correctamente",
        data: generos,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la ciudad",
      };
    }
  }

  static async creategenero(nombre, id) {
    try {
      const generoinstance = new genero();
      const generos = await generoinstance.create(nombre, id);
      // Validamos si no se pudo crear la ciudad
      if (generos === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear la ciudad",
        };
      }
      // Retornamos la nueva ciudad creada
      return {
        error: false,
        code: 201,
        message: "ciudad creada correctamente",
        data: generos,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al crear la ciudad",
      };
    }
  }

  static async updategenero(id, campos) {
    try {
      const generoinstance = new genero();
      // Consultamos la categoría por id
      const generosexistente = await generoinstance.getCiudadid(id);
      // Validamos si no existe la categoría
      if (generosexistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }
      const generos = await generosinstance.update(id, campos);
      // Validamos si no se pudo actualizar la categoría
      if (generos === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar la ciudad",
        };
      }
      // Retornamos la categoría actualizada
      return {
        error: false,
        code: 200,
        message: "ciudad actualizada correctamente",
        data: generos,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar la ciudad",
      };
    }
  }

  static async deletegenero(id) {
    try {
      const generosinstance = new genero();
      // Consultamos la categoría por id
      const generosexistente = await generosinstance.getCiudadid(id);
      // Validamos si no existe la categoría
      if (generosexistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }

      // Procedemos a eliminar la ciudad
      const resultado = await generosinstance.delete(id);
      // Validamos si no se pudo eliminar la categoría
      if (resultado.error) {
        return {
          error: true,
          code: 400,
          message: resultado.mensaje,
        };
      }
      // Retornamos la respuesta de eliminación
      return {
        error: false,
        code: 200,
        message: "ciudad eliminada correctamente",
        data: generosexistente,
      };
    } catch (error) {
      console.log(error);

      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar la ciudad",
      };
    }
  }
}

export default generosservice;
