import lenguaje from "../models/lenguajes.js";

class lenguajeservice {
  static async getlenguaje() {
    try {
      const instancelenguaje = new lenguaje();
      const lenguajes = await instancelenguaje.getAll();
      // Validamos si no hay ciudad
      if (lenguajes.length === 0) {
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
        message: "lenguajes obtenidas correctamente",
        data: lenguajes,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener las lenguaje",
      };
    }
  }

  static async getLenguajeid(id) {
    try {
      const lenguajeinstance = new lenguaje();
      const lenguajes = await lenguajeinstance.getbyid(id);
      // Validamos si no hay ciudades
      if (lenguajes.length === 0) {
        return {
          error: true,
          code: 404,
          message: "lenguajes no encontrada",
        };
      }
      // Consultamos los productos asociados a la categoría
      const id = await lenguajeinstance.id(id);
      // Agregamos la propiedad productos al objeto categoría
      lenguajes.id = id;
      // Retornamos la categoría obtenida
      return {
        error: false,
        code: 200,
        message: "lenguajes obtenida correctamente",
        data: lenguajes,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error al obtener la lenguaje",
      };
    }
  }

  static async createlenguaje(nombre, id) {
    try {
      const lenguajeinstance = new lenguaje();
      const lenguajes = await lenguajeinstance.create(nombre, id);
      // Validamos si no se pudo crear la ciudad
      if (lenguajes === null) {
        return {
          error: true,
          code: 400,
          message: "Error al crear la lenguajes",
        };
      }
      // Retornamos la nueva ciudad creada
      return {
        error: false,
        code: 201,
        message: "lenguajes creada correctamente",
        data: lenguajes,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al crear la lenguajes",
      };
    }
  }

  static async updatelenguaje(id, campos) {
    try {
      const lenguajesinstance = new lenguaje();
      // Consultamos la categoría por id
      const lenguajesexistente = await lenguajesinstance.getCiudadid(id);
      // Validamos si no existe la categoría
      if (lenguajesexistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "lenguajes no encontrada",
        };
      }
      const lenguajes = await lenguajesinstance.update(id, campos);
      // Validamos si no se pudo actualizar la categoría
      if (lenguajes === null) {
        return {
          error: true,
          code: 400,
          message: "Error al actualizar la lenguajes",
        };
      }
      // Retornamos la categoría actualizada
      return {
        error: false,
        code: 200,
        message: "lenguajes actualizada correctamente",
        data: lenguajes,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar la lenguajes",
      };
    }
  }

  static async deletelenguaje(id) {
    try {
      const lenguajeinstance = new lenguaje();
      // Consultamos la categoría por id
      const lenguajeexistente = await lenguajeinstance.getCiudadid(id);
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
        message: "ciudad eliminada correctamente",
        data: lenguajeexistente,
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

export default lenguajeservice;
