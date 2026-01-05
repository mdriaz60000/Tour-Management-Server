import { Router } from "express";
import { userController } from "./user.controller.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import { createUserZodSchema } from "./user.validation.js";


const router = new Router();

router.post("/register", validateRequest(createUserZodSchema), userController.createUser);
router.get("/all-user", userController.getAllUsers);

export const userRoutes = router;

