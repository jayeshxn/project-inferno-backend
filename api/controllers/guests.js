import Guest from "../models/guests.js";

export const createGuest = async (req, res, next) => {

    const type = req.body.roomType
    const duration = req.body.duration
    var tariff;
    if (type === "Single AC") {
        tariff = 2000;
    } else if (type === "Single Non-AC") {
        tariff = 1500;
    } else if (type === "Double AC") {
        tariff = 3000;
    } else {
        tariff = 2000;
    }
    const roomTariff = tariff*duration;
    var newGuestDetails = req.body;
    newGuestDetails.roomTariff = roomTariff;
    const newGuest = new Guest(newGuestDetails)

    try {
        const savedGuest = await newGuest.save()
        res.status(201).json(savedGuest)
    } catch (err) {
        next(err)
    }
}

export const updateGuest = async (req, res, next) => {
    try {
        const updatedGuest = await Guest.findOneAndUpdate({_id: req.params.id}, { $set: req.body}, { new: true })
        res.status(200).json(updatedGuest)
    } catch (err) {
        next(err)
    }
}

export const deleteGuest = async (req, res) => {
    try {
        await Guest.findByIdAndDelete(req.params.id)
        res.status(200).json("Guest has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getGuests = async (req, res, next) => {
    try {
        const guests = await Guest.find()
        res.status(200).json(guests)
    } catch (err) {
        next(err)
    }
}

export const getGuestById = async (req, res, next) => {
    try {
        const guest = await Guest.findById(req.params.id)
        res.status(200).json(guest)
    } catch (err) {
        next(err)
    }
}