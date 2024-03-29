import express from "express";
import userRouter from "./routes/user.js";

const app = express();

app.use("/api/users/", userRouter);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
