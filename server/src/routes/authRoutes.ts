import express from "express"
import { register, login } from "../controllers/authController"
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/protected", authMiddleware, (req, res) => {
    res.json({
        message: "You are authorised"
    })
})

export default router