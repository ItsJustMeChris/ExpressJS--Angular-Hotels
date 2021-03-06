const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

require('./app/routes/properties')(app);
app.listen(8000, () => {
    console.log('Server started!');
});
