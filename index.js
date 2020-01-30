const express = require('express');
require('./server/database/database')
const userRouter = require('./server/routes/user');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from ythe App Engine....');
});

app.use('/api', userRouter);

const PORT = process.env.PORT ||4000;

app.listen(PORT, () => {
    console.log(`Server Listening on post ${PORT}`);
});