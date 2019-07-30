const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Niño!');
});

const server = app.listen(process.env.PORT || 8080, () => {

    const address = server.address().address;
    const port = server.address().port;
    console.log(`App listening on http://${address}:${port}`);
})