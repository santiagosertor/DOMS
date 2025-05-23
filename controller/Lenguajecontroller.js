import Lenguajeservice from "../services/Lenguajeservice.js";
import { ResponseProvider } from "../providers/ResponseProvider.js";

class lenguajecontroller {
  static getAlllenguaje = async (req, res) => {
    try {
      // Llamamos al servicio para obtener las ciudades
      const response = await Lenguajeservice.getlenguaje();
      // Validamos si no hay ciudades
      if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(res, response.message, response.code);
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  };

  // Obtener una categoría por su ID
  static getlengaujeid = async (req, res) => {
    const id = req.params.id;
    try {
      const response = await Lenguajeservice.getLenguajeid(id);
      if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(res, response.message, response.code);
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      console.error("Error en getciudadid:", error);
      ResponseProvider.error(res, "Error interno en el servidor", 500);
    }
  };

  // Crear una nueva categoría
  static createlenguaje = async (req, res) => {
    const { nombre, id } = req.body;
    try {
      const response = await Lenguajeservice.createlenguaje(nombre, id);
      if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.error(res, response.message, response.code);
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta
        return ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  };

  // Actualizar una categoría
  static updatelenguaje = async (req, res) => {
    const { id } = req.params;
    // Los campos a actualizar se pasan en el cuerpo de la solicitud
    const campos = req.body;
    try {
      // Crear una instancia de la clase Categoria
      const ciudad = await Lenguajeservice.updatelenguaje(id, campos);
      // Validamos si no se pudo actualizar la categoría
      if (ciudad.error) {
        ResponseProvider.error(res, ciudad.message, ciudad.code);
      }
      // Retornamos la respuesta cuando se actualiza correctamente
      ResponseProvider.success(res, ciudad.data, ciudad.message, ciudad.code);
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  };

  // Eliminar una categoría
  static deletelenguaje = async (req, res) => {
    const { id } = req.params;
    try {
      // Llamamos al servicio para eliminar la categoría
      const response = await Lenguajeservice.deletelenguaje(id);
      if (response.error) {
        // Llamamos el provider para centralizar los mensajes de respuesta
        ResponseProvider.error(res, response.message, response.code);
      } else {
        // Llamamos el provider para centralizar los mensajes de respuesta
        ResponseProvider.success(
          res,
          response.data,
          response.message,
          response.code
        );
      }
    } catch (error) {
      // Llamamos el provider para centralizar los mensajes de respuesta
      ResponseProvider.error(res, "Error al interno en el servidor", 500);
    }
  };
}
export default lenguajecontroller;
