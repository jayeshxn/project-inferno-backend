import User from "../models/users.js";
import bcrypt from "bcrypt";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            name: req.body.name,
            password: hashedPassword
        })

        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })

        if (!user) return next(createError(404, "User Not Found"))
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordValid)
            return next(createError(400, "Invalid Credentials"))

        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
                isManager: user.isManager,
                isCaterer: user.isCaterer
            },
            process.env.JWT_SECRET
        )
        const { password, isAdmin, isManager, isCaterer, ...others } = user._doc

        res
            .cookie("access_token", token,
                {
                    httpOnly: true,
                })
            .status(200).json(others)
    } catch (error) {
        next(error)
    }
}