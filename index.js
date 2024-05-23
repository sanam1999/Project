const { render } = require('ejs');
const methodoverride = require('method-override');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 correctly
const app = express();
const port = 4400;

// Middleware
app.use(methodoverride('_method'))
app.use(express.urlencoded({ extended: true })); 
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); 



// Server start
app.listen(port, () => {
    console.log("app is listening on port", port);
});

// app.get('/post', (req, res) => {
//     console.log("request found /post");
//     res.render("index.ejs", { posts }); 
// });

