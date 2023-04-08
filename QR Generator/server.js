const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}`);
});

http://127.0.0.1:1000/home