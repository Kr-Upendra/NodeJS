require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 5959;

app.listen(port, () =>
  console.log(`server started at http://127.0.0.1:${port}`)
);
