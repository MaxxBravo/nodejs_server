const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h3>Acá está el Hola Mundo! Sabiondo, esta no es la URL que te pase.</h3>');
});
app.get('/ma', (req, res) => {
    res.send('<h3>Hola Ma!</h3>');
});
app.get('/pa', (req, res) => {
    res.send('<h3>Hola Pa!</h3>');
});
app.get('/macro', (req, res) => {
    res.send('<h3>Hola Equipo Macro!</h3>');
});
app.get('/ergo', (req, res) => {
    res.send('<h3>Hola Equipo Ergo!</h3>');
});

app.get('*', (req, res) => {
    res.send('<h3>URL no válida</h3>');
})

const server = app.listen(process.env.PORT || 8080, () => {

    const address = server.address().address;
    const port = server.address().port;
    console.log(`App listening on http://${address}:${port}`);
})