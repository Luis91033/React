/** @format */

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateAvailability,
  deleteProduct,
} from "./handlers/product";
import { body, param } from "express-validator";
import { Router } from "express";
import { handleInputErrors } from "./middleware";

const router = Router();
/**
 * @swagger
 * components:
 *    schemas:
 *      Product:
 *        type: object
 *        properties:
 *          id:
 *              type: integer
 *              description: The Product ID
 *              example: 1
 *          name:
 *              type: string
 *              description: The Product name
 *              example: Monitor Curvo de 49 pulgadas
 *          price:
 *              type: number
 *              description: The Product price
 *              example: 300
 *          availability:
 *              type: boolean
 *              description: The Product availability
 *              example: true
 *
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Get a list of products
 *    tags:
 *      - Products
 *    description: Return a list of products
 *    responses:
 *      200:
 *          description: Successfull response
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/Product'
 *
 */
router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Get a product by ID
 *    tags:
 *      - Products
 *    description: Return a product based on its unique ID
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to retrieve
 *      required: true
 *      schema:
 *        type: integer
 *    responses:
 *      200:
 *        description: Successful Response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Not found
 *      400:
 *        description: Bad Request - Invalid ID
 */

router.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors as any,
  getProductById as any
);

/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Creates a new product
 *    tags:
 *      - Products
 *    description: Return a new record in the database
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor Curvo de 49 pulgadas"
 *              price:
 *                type: number
 *                example: 399
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - invalid input data
 *
 *
 */
router.post(
  "/",
  body("name")
    .notEmpty()
    .withMessage("El nombre de Producto no puede ir vacio"),
  body("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio de Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no válido"),
  handleInputErrors as any,
  createProduct
);
/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Updates a product with user input
 *    tags:
 *      - Products
 *    description: Return de updated product
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to retrieve
 *      required: true
 *      schema:
 *        type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor Curvo de 49 pulgadas"
 *              price:
 *                type: number
 *                example: 399
 *              availability:
 *                type: boolean
 *                example: true
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - Invalid ID or Invalid Input Data
 *      404:
 *        description: Product Not Found
 */

router.put(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  body("name")
    .notEmpty()
    .withMessage("El nombre de Producto no puede ir vacio"),
  body("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio de Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no válido"),
  body("availability").isBoolean().withMessage("El valor no es el correcto"),
  handleInputErrors as any,
  updateProduct as any
);

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *    summary: Update product availability
 *    tags:
 *      - Products
 *    description: Returns the updated availability
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to retrieve
 *      required: true
 *      schema:
 *        type: integer
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - Invalid ID
 *      404:
 *        description: Product Not Found
 *
 */
router.patch(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors as any,
  updateAvailability as any
);
/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Deletes a product by a given ID
 *    tags:
 *      - Products
 *    description: Returns a confirmation message
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The ID of the product to delete
 *      required: true
 *      schema:
 *        type: integer
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: string
 *              value: 'Producto Eliminado'
 *      400:
 *        description: Bad Request - Invalid ID
 *      404:
 *        description: Product Not Found
 */
router.delete(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors as any,
  deleteProduct as any
);

export default router;
