import { Router } from "express";
const router = Router();

import { login, register, logout } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validatorMiddleware.js";

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(validateLoginInput, login);
router.get("/logout", logout);

export default router;
