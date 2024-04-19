import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
        priceHistory: [[Number]]
    },
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);