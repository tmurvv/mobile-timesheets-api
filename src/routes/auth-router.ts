import express from "express";
import { login, signup } from "../controllers/auth/";
const router = express.Router();

router.put("/signup/:id", signup);
router.post("/login", login);

export const authRouter = router;
