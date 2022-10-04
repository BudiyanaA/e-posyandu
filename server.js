const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./app/models");
const Role = db.roles;
db.sequelize.sync({ force: false })
  .then(() => {
    console.log(" Drop and re-sync db.");
    // initial();
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
require("./app/routes/mom.routes")(app);
require("./app/routes/dad.routes")(app);
require("./app/routes/child.routes")(app);
require("./app/routes/birthrecord.routes")(app);
require("./app/routes/antropometristandard.routes")(app);
require("./app/routes/kms.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/masterpuskesmas.routes")(app);
require("./app/routes/childnutrition.routes")(app);

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});