const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./app/models");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log(" Drop and re-sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/posyandu.routes")(app);
require("./app/routes/masterbirthconditions.routes")(app);
require("./app/routes/masterplace.routes")(app);
require("./app/routes/mastervaksin.routes")(app);
require("./app/routes/mastervilage.routes")(app);
require("./app/routes/masterreligion.routes")(app);
require("./app/routes/mastereducation.routes")(app);
require("./app/routes/mastereducation.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});