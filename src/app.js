import express from "express";
import { GlobalError } from "./app/utils/global-error.js";
const app= express();

// parser middleware
app.use(express.json());

                                                   
// app.use("/api/v1/", )

app.get("/", (req, res) => {
  res.send("Hello World! ");
});

app.use(GlobalError.handledError);
app.use(GlobalError.notFoundUrlError);

export default app; 