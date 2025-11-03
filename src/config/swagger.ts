import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import type { Application } from "express"; // ✅ Import type

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GST Billing API",
      version: "1.0.0",
      description: "API documentation for GST-based billing system",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

// ✅ Add type here
export const swaggerDocs = (app: Application, port: number) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(`✅ Swagger docs hosted at http://localhost:${port}/api-docs`);
};
