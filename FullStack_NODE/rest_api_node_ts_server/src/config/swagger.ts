/** @format */

import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    info: {
      title: "REST API Node.js / Express / TypeScript",
      version: "1.0.0",
      description: "API Docs for Products",
    },
    tags: [
      {
        name: "Products",
        description: "API operations related to products",
      },
    ],
  },
  apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);
const swaggerUiOptions: SwaggerUiOptions = {
  customCss: `
    .topbar-wrapper .link{
      content: url(https://img.freepik.com/vector-gratis/ilustracion-gradiente-api_23-2149379182.jpg);
      height: 120px;
      width: auto
    }
  `,
};

export default swaggerSpec;
export { swaggerUiOptions };
