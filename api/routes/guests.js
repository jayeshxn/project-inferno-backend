import express from "express";
import {createGuest, deleteGuest, getGuests, getGuestById, updateGuest} from "../controllers/guests.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", createGuest)
//UPDATE
router.put("/:id", updateGuest)
//GET
router.get("/:id", getGuestById)
//GET ALL
router.get("/", getGuests)
//DELETE
router.delete("/:id", deleteGuest)

export default router