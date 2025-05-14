/** @format */

import { Router } from "express";
import { body, param } from "express-validator";
import { AuthController } from "../controllers/AuthController";
import { handleInputErrors } from "../middleware/validation";
import { authenticate } from "../middleware/auth";

const router = Router();

router.post(
  "/create-account",
  body("name").notEmpty().withMessage("El nombre no puede ir vacío"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("El password es muy corto, mínimo 8 caracteres"),
  body("password_confirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Los Password no son iguales");
    }
    return true;
  }),
  body("email").isEmail().withMessage("Email no es válido"),
  handleInputErrors as any,
  AuthController.createAccount as any
);

router.post(
  "/confirm-account",
  body("token").notEmpty().withMessage("El Token no puede ir vacío"),
  handleInputErrors as any,
  AuthController.confirmAccount as any
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Email no es válido"),
  body("password").notEmpty().withMessage("El password no puede ir vacío"),
  handleInputErrors as any,
  AuthController.login as any
);

router.post(
  "/forgot-password",
  body("email").isEmail().withMessage("Email no es válido"),
  handleInputErrors as any,
  AuthController.forgotPassword as any
);

router.post(
  "/validate-token",
  body("token").notEmpty().withMessage("El Token no puede ir vacío"),
  handleInputErrors as any,
  AuthController.validateToken as any
);

router.post(
  "/update-password/:token",
  param("token").isNumeric().withMessage("Token no válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("El password es muy corto, mínimo 8 caracteres"),
  body("password_confirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Los Password no son iguales");
    }
    return true;
  }),
  handleInputErrors as any,
  AuthController.updatePasswordWithToken as any
);

router.get("/user", authenticate as any, AuthController.user as any);

//Profile
router.put(
  "/profile",
  authenticate as any,
  body("name").notEmpty().withMessage("El nombre no puede ir vacío"),
  body("email").isEmail().withMessage("Email no es válido"),
  handleInputErrors as any,
  AuthController.updateProfile as any
);

router.post(
  "/update-password",
  authenticate as any,
  body("current_password")
    .notEmpty()
    .withMessage("El password actual no puede ir vacío"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("El password es muy corto, mínimo 8 caracteres"),
  body("password_confirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Los Password no son iguales");
    }
    return true;
  }),
  handleInputErrors as any,
  AuthController.updateCurrentUserPassword as any
);

router.post(
  "/check-password",
  authenticate as any,
  body("password").notEmpty().withMessage("El password  no puede ir vacío"),
  handleInputErrors as any,
  AuthController.checkPassword
);

export default router;
