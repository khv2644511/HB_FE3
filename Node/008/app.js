const http = require("http");
const server = http.createServer(function (req, res) {
  console.log("server가 구동중입니다.");
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.write("<h1><style='color:black'>hello world</h1>");
  res.end();
});

server.listen(8080);
// server.listen(8001);
