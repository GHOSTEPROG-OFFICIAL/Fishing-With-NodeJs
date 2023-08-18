const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");

const app = express();

//Custom Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/admin", adminRoutes); // /admin/message
app.use(homeRoutes);
//End Routes

app.listen(3000);
