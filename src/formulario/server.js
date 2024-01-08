// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Conexión a MongoDB (asegúrate de tener un servidor MongoDB en ejecución)
// mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });

// // Definición del esquema de datos
// const mensajeSchema = new mongoose.Schema({
//   nombre: String,
//   email: String,
//   mensaje: String
// });

// // Modelo de datos
// const Mensaje = mongoose.model('Mensaje', mensajeSchema);

// // Middleware
// app.use(cors()); // Configuración básica de CORS
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Ruta para manejar el envío de mensajes
// app.post('/enviar-mensaje', async (req, res) => {
//   try {
//     const { nombre, email, mensaje } = req.body;

//     // Crear un nuevo mensaje
//     const nuevoMensaje = new Mensaje({ nombre, email, mensaje });

//     // Guardar en la base de datos
//     await nuevoMensaje.save();

//     res.status(200).send('Mensaje enviado con éxito');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error al enviar el mensaje');
//   }
// });

// // Ruta de inicio para verificar que el servidor está en funcionamiento
// app.get('/', (req, res) => {
//   res.send('¡Servidor en funcionamiento!');
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor iniciado en http://localhost:${PORT}`);
// });
