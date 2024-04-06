const express = require('express');
const path = require('path');

const app = express();

// Define el directorio raíz para servir archivos estáticos
const directorioRaiz = path.join(__dirname);

// Usa express.static para servir archivos estáticos desde el directorio raíz
app.use(express.static(directorioRaiz));

// Redirige la raíz a index.html dentro de la carpeta html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Redirige /login a login.html
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
});

// Redirige /registro a registro.html
app.get('/registro.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'registro.html'));
});
