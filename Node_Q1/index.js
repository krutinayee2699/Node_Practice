const body = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));

app.post("/", (request, response) => {
    response.send(request.body);
});

app.listen(8001);