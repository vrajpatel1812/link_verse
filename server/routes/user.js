import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controller/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const routes = express.Router();

//READ
routes.get("/:id", verifyToken, getUser);
routes.get("/:id/friends", verifyToken, getUserFriends);

//UPDATE
routes.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default routes;
