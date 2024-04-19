import Room from "../models/rooms.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        res.status(201).json(savedRoom)
    } catch (err) {
        next(err)
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findOneAndUpdate({_id: req.params.id}, { $set: req.body}, { new: true })
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}

export const deleteRoom = async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Room has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch (err) {
        next(err)
    }
}

export const getRoomById = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}