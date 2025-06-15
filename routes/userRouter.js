import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

import { validateUpdateUserInput } from "../middleware/validatorMiddleware.js";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import {
  authorizePermissions,
  checkForTestUser,
} from "../middleware/authMiddleware.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;
