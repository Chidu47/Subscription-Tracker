import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "get all subscription" })
);
subscriptionRouter.get("/:id", authorize, getUserSubscriptions);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/", (req, res) =>
  res.send({ title: "Update subscription" })
);
subscriptionRouter.delete("/", (req, res) =>
  res.send({ title: "DELETE subscription" })
);

export default subscriptionRouter;
