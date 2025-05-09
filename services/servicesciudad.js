import Ciudades from "../models/ciudades";

class Ciudadservices {
  static async getCiudad() {
    try {
      const instanceciudad = new Ciudades();
      const ciudad = await instanceciudad.getAll();
      // Validamos si no hay ciudad
      if (ciudad.length === 0) {
        return {
          error: true,
          code: 404,
          message: "No hay categorías registradas",
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

  static async getCiudadid(id) {
    try {
      const ciudadinstance = new Ciudades();
      const ciudad = await ciudadinstance.getbyid(id);
      // Validamos si no hay categorías
      if (ciudad.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }
      // Consultamos los productos asociados a la categoría
      const id_ciudad = await ciudadinstance.id_ciudad(id);
      // Agregamos la propiedad productos al objeto categoría
      ciudad.id_ciudad = id_ciudad;
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

  static async createciudad(nombre, id_ciudad) {
    try {
      const ciudadinstance = new Ciudades();
      const ciudad = await ciudadinstance.create(nombre, id_ciudad);
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

  static async updateciudad(id, campos) {
    try {
      const ciudadinstance = new Ciudades();
      // Consultamos la categoría por id
      const ciudadexistente = await ciudadinstance.getCiudadid(id);
      // Validamos si no existe la categoría
      if (ciudadexistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }
      const ciudad = await ciudadinstance.update(id, campos);
      // Validamos si no se pudo actualizar la categoría
      if (ciudad === null) {
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
        data: ciudad,
      };
    } catch (error) {
      return {
        error: true,
        code: 500,
        message: "Error interno al actualizar la ciudad",
      };
    }
  }

  static async deleteciudad(id) {
    try {
      const ciudadinstance = new Ciudades();
      // Consultamos la categoría por id
      const ciudadexistente = await ciudadinstance.getCiudadid(id);
      // Validamos si no existe la categoría
      if (ciudadexistente.length === 0) {
        return {
          error: true,
          code: 404,
          message: "ciudad no encontrada",
        };
      }
      
      // Procedemos a eliminar la ciudad
      const resultado = await ciudadinstance.delete(id);
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
        data: ciudadexistente,
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

export default Ciudadservices;
