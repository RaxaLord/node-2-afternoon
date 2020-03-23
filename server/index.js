const express = require("express");
const ctrl = require("./controllers/messages_controller");

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const msgBaseUrl = "/api/messages";
app.post(msgBaseUrl, ctrl.create);
app.get(msgBaseUrl, ctrl.read);
app.put(`${msgBaseUrl}/:id`, ctrl.update);
app.delete(`${msgBaseUrl}/:id`, ctrl.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

// ** Run all tests again, once you hit save the server resets and sends back an empty array!!!! **
