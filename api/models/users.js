import mongoose from "mongoose";

const {Schema} = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isManager: {
        type: Boolean,
        default: false
    },
    isCaterer: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

export default mongoose.model('User', UserSchema);