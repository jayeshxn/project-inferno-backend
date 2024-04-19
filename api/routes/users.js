import express from "express";
import {deleteUser, getUserById, getUsers, updateUser} from "../controllers/users.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateUser)
//GET
router.get("/users/:id",  getUserById)
//GET ALL
router.get("/", getUsers)
//DELETE
router.delete("/:id", deleteUser)

export default router