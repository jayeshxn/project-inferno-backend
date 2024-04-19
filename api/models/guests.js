import mongoose from "mongoose";
const { Schema } = mongoose;

const GuestSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    checkinDate:{
        type: Date,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    cateringBill: {
        type: Number,
        default: 0
    },
    roomType: {
        type: String,
        required: true
    },
    roomNumber: {
        type: String
    },
    roomTariff: Number
})

export default mongoose.model('Guest', GuestSchema);