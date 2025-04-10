// Importa la libreria Express
const express = require('express');
// Importa il modulo 'path' di Node.js (serve per gestire i percorsi dei file)
const path = require('path');

// Crea un'applicazione Express
const app = express();

// Definisce la porta su cui il server ascolterà.
// Render.com imposta una variabile d'ambiente PORT, altrimenti usa 3000 per il test locale.
const PORT = process.env.PORT || 3000;

// --- Middleware ---
// Questo dice a Express di "servire" file statici (HTML, CSS, JS)
// dalla cartella 'public'. Quando qualcuno chiede '/', Express cercherà
// automaticamente 'index.html' dentro 'public'.
app.use(express.static(path.join(__dirname, 'public')));

// --- Avvio del Server ---
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
  console.log(`Apri http://localhost:${PORT} nel tuo browser.`);
});