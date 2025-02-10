import express from "express";

import { PORT } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription app APi");
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker running on http://localhost:${PORT}`);
});

export default app;
