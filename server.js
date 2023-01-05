import express from "express";
import cors from "cors";
import pageRouter from "./router/pageRouter.js";
import userRouter from "./router/userRouter.js";

const app = express();

// define application port
const port = process.env.PORT || 7000;

// import database connection file
import connect from "./database/conn.js";

// application middlewares
app.use(express.json());    // converts request body to json
app.use(cors());
app.use((req, res, next) => {
  console.log("HTTP Method - " + req.method + ", URL - " + req.url);
  next();
})

// define routes
app.use("/api", pageRouter); // apis
app.use("/users", userRouter); // apis

app.get("/", (req, res) => res.send("Welcome to the Backend Server!"));
app.all("*", (req, res) => res.send("Route doesn't exist"));

// start server only when we have valid connection
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Invalid Database Connection");
  }
});
