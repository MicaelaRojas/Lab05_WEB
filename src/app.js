
import express from "express";

import { user, story } from "./components";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", user);
app.use("/story", story);

