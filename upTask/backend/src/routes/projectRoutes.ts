/** @format */

import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { handleInputErrors } from "../middleware/validation";
import { TaskController } from "../controllers/TaskController";
import { validateProjectExist } from "../middleware/project";

const router = Router();
router.post(
  "/",
  body("projectName")
    .notEmpty()
    .withMessage("El nombre del Proyecto es Obligatorio"),
  body("clientName")
    .notEmpty()
    .withMessage("El nombre del Cliente es Obligatorio"),
  body("description")
    .notEmpty()
    .withMessage("La descripcion del Proyecto es Obligatorio"),
  handleInputErrors as any,
  ProjectController.createProject
);
router.get("/", ProjectController.getAllProjects);
router.get(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors as any,
  ProjectController.getProjectById as any
);

router.put(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  body("projectName")
    .notEmpty()
    .withMessage("El nombre del Proyecto es Obligatorio"),
  body("clientName")
    .notEmpty()
    .withMessage("El nombre del Cliente es Obligatorio"),
  body("description")
    .notEmpty()
    .withMessage("La descripcion del Proyecto es Obligatorio"),
  handleInputErrors as any,
  ProjectController.updateProject as any
);

router.delete(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors as any,
  ProjectController.deleteProject as any
);

/** Routes for task */
router.post(
  "/:projectId/tasks",
  validateProjectExist as any,
  param("projectId").isMongoId().withMessage("ID no válido"),
  body("name").notEmpty().withMessage("El nombre de la tarea es Obligatorio"),
  body("description")
    .notEmpty()
    .withMessage("ELa descripcion de la tarea es obligatoria"),
  TaskController.createTask as any
);

router.get(
  "/:projectId/tasks",
  validateProjectExist as any,
  TaskController.getProjectTasks
);

export default router;
