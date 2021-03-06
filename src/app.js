const express = require("express");
const cors = require("cors");
const poll = require("./model/poll");
const app = express();

const patientsRouter = require("./router/api/patientsRouter");
const port = process.env.PORT || 3200;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./router/root"));
app.use(express.static(__dirname + "/public"));
app.use(patientsRouter);
app.listen(port, () => {
  console.log(`Connections: ${poll.activeConnections()}`);
  console.log(`Server started in http://localhost:${port}/`);
});
