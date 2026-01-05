import { Router } from "express";
import { authController } from "./auth.controller.js";

const router = new Router();


router.post("/login", authController.credentialsLogin);
router.post("/refresh-token", authController.refreshToken);

export const authRoutes = router;