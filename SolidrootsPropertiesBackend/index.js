const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 30000");
});
app.get("/", (req, res) => {
    res.send("Hello from SolidRootsBackend Server server updated");
  });
  