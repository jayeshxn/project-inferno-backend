import express from "express";
import {createRoom, deleteRoom, getRoom, getRoomById, updateRoom} from "../controllers/rooms.js";
import {verifyUser} from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyUser, createRoom)
//UPDATE
router.put("/:id", updateRoom)
//GET
router.get("/:id", getRoomById)
//GET ALL
router.get("/", getRoom)
//DELETE
router.delete("/:id", deleteRoom)

export default router