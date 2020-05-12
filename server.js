const app = require("./app");

const server = app.listen(8081, () => {
  const port = server.address().port;
  console.log(`Server listening at localhost:${port}`);
});
