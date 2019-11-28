const express = require("express");
const routerEmployee = require("./routes/employees")
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use("/emp", routerEmployee);
app.listen(7879, "0.0.0.0",()=>{
    console.log("Server Started at 7879....");
})