import express from "express";
import { GlobalError } from "./app/utils/global-error.js";
import { mainRoutes } from "./app/router/index.js";
const app= express();
import cookieParser from "cookie-parser";
// parser middleware
app.use(express.json());


app.use(cookieParser());

                                                   
app.use("/api/v1/", mainRoutes )

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.use(GlobalError.handledError);
app.use(GlobalError.notFoundUrlError);

export default app; 