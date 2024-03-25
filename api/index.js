import express from "express";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

//parser para requisições content-type:
//application/x-www-form-urlencoded-json
//app.use((req, res, next) => {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  //next();
//});
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use("/api/users/", userRouter);
app.use("/api/auth/", authRouter);
app.use(cors());


app.listen(8001, () => {
  console.log("Server running on port 8001");
});
