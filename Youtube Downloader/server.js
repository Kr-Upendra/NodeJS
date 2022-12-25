const app = require("./index");

const port = process.env.PORT || 5050;
app.listen(port, () =>
  console.log(`server is running on port http://localhost:${port}`)
);
