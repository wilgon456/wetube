import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next();
};

const privateMiddleware = (req, res, next) => {
 const url = req.url
 if(url === "/protected"){
  return res.send("<h1>Not allowed</h1>");
 }
 console.log("Allowed, you may continue.")
 next();
}

const handleHome = (req, res) => {
  return res.send("<h1>Still Love you!</h1>");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
}

//홈페이지는 get "/" 한다음 gossip 미들웨어 로딩 그 후 controller 구동
app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);
const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🧜‍♂️`);

app.listen(4000, handleListening);
