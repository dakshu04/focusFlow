import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const register = async (req : Request, res: Response) => {
    const { name, email, password } = req.body
    // Defensive check
    
    const existingUser = await User.findOne({ email })
    if(existingUser) {
        res.status(400).json({
            message: "User already exists"
        })
        return;
    }
    
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPass
    })

    res.status(201).json({ message: "User created", user });
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({
        message: "Invalid credentials"
    })

    const match = await bcrypt.compare(password, user.password);
    
    if (!match) return res.status(400).json({ message: "password galat h 💓day" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, {
        expiresIn: '1d'
    })
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
}