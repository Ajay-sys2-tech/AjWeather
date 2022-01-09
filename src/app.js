const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3300;

const path = require("path");

const staticPath = path.join(__dirname, "../public");
const views_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", views_Path);
hbs.registerPartials(partials_Path);
app.use(express.static(staticPath));



// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("error");
});


app.listen(port, "127.0.0.1", () => {
    console.log(`server started at port ${port}`);
});




