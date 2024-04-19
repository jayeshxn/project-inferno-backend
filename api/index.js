import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import guestRoute from "./routes/guests.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB!")
    } catch (err) {
        throw err
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})

mongoose.connection.on("connected", (err) => {
    console.log("MongoDB connected!")
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/guest', guestRoute)
app.use('/api/user', usersRoute)
app.use('/api/room', roomsRoute)

app.use((err, req, res, next) => {
    res.status(err.status || 500).json(
        {
            status: err.status || 500,
            message: err.message || "Something went wrong!"
        })
})
app.listen(8800, () => {
    connect()
    console.log("Server up and running!")
})