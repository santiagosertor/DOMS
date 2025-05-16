import lenguajes from "../models/lenguajes.js";

class lenguajeservice {
  static async getCiudad() {
    try {
      const instanceciudad = new lenguajes();
      const ciudad = await instanceciudad.getAll();
      // Validamos si no hay ciudad
      if (ciudad.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay ciudades registradas",
        };
      }
      // Retornamos las ciudad obtenidas
      return {
        error: false,
        code: 200,
        message: "ciudad obtenidas correctamente",
        data: ciudad,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener las ciudad",
      };
    }
  }

  static async getlenguaje(id) {
    try {
      const lenguajeinstance = new lenguajes();
      const lenguaje = await lenguajeinstance.getbyid(id);
      // Validamos si no hay categorías
      if (lenguaje.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }
      // Consultamos los productos asociados a la categoría
      const id_lenguaje = await lenguajeinstance.id_lenguaje(id);
      // Agregamos la propiedad productos al objeto categoría
      ciudad.id_lenguaje = id_lenguaje;
      // Retornamos la categoría obtenida
      return {
        error: false,
        code: 200,
        message: "ciudad obtenida correctamente",
        data: categoria,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la ciudad",
      };
    }
  }

  static async createlenguaje(nombre, id_lenguaje) {
    try {
      const ciudadinstance = new lenguajes();
      const ciudad = await ciudadinstance.create(nombre, id_lenguaje);
      // Validamos si no se pudo crear la categoría
      if (ciudad === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear la categoría",
        };
      }
      // Retornamos la nueva categoría creada
      return {
        error: false,
        code: 201,
        message: "Categoría creada correctamente",
        data: categoria,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al crear la categoría",
      };
    }
  }

  static async updatelenguaje(id, campos) {
    try {
      const ciudadinstance = new lenguajes();
      // Consultamos la categoría por id
      const ciudadexistente = await ciudadinstance.getlenguaje(id);
      // Validamos si no existe la categoría
      if (ciudadexistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }
      const lenguaje = await lenguajeinstance.update(id, campos);
      // Validamos si no se pudo actualizar la categoría
      if (lenguaje === null) {
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
        data: lenguaje,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar la ciudad",
      };
    }
  }

  static async deletelenguaje(id) {
    try {
      const ciudadinstance = new lenguajes();
      // Consultamos la categoría por id
      const lenguajeexistente = await lenguajeinstance.getlenguaje(id);
      // Validamos si no existe la categoría
      if (lenguajeexistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }

      // Procedemos a eliminar la ciudad
      const resultado = await lenguajeinstance.delete(id);
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
        message: "lenguaje eliminada correctamente",
        data: ciudadexistente,
      };
    } catch (error) {
      console.log(error);

      return {
        error: true,
        code: 500,
        message: "Error interno al eliminar la lenguaje",
      };
    }
  }
}

export default lenguajeservice;
