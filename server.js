const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const config = require('./config');
const routes = require('./routes');

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)

//404
app.use((req, resp) => {
    resp.status(404).json({
        status: 'Page does not exist'
    });
});

const PORT = config.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
});