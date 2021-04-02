//index.js
// import express
const app = require('express')();
//configure web server to listen to GET requests on ping
app.get('/ping',(req, res) =>{
    res.send('Hello World');
});

//start web server on port 3000
app.listen(9000, () => console.log('Demo Server started on localhost:3000'));

//Export the web server for use in our tests
module.exports = app;