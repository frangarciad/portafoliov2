// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000; // Puedes cambiar el puerto si es necesario

// // Middleware para manejar datos del formulario
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Configuración del transporter (para enviar correos electrónicos)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'tucorreo@gmail.com', // Cambia esto por tu dirección de correo electrónico
//     pass: 'tupassword' // Cambia esto por tu contraseña
//   }
// });

// // Ruta para manejar el envío de correos electrónicos
// app.post('/enviar-correo', (req, res) => {
//   const { email } = req.body;

//   // Configuración del correo electrónico
//   const mailOptions = {
//     from: 'tucorreo@gmail.com', // Cambia esto por tu dirección de correo electrónico
//     to: 'destinatario@gmail.com', // Cambia esto por la dirección de correo del destinatario
//     subject: 'Nuevo contacto',
//     text: `Se ha recibido un nuevo contacto. Correo: ${email}`
//   };

//   // Envío del correo electrónico
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error al enviar el correo electrónico');
//     } else {
//       console.log('Correo enviado: ' + info.response);
//       res.status(200).send('Correo enviado con éxito');
//     }
//   });
// });

// // Inicia el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor iniciado en http://localhost:${PORT}`);
// });
