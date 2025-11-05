import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import type { Application } from "express"; 

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
        url: "https://gst-api-t5l3.onrender.com",
      },
    ],
      components: {
        schemas: {
          TaxCategory: {
            type: "object",
            required: ["name", "rate", "code"],
            properties: {
              _id: { type: "string" },
              name: { type: "string" },
              rate: { type: "number" },
              code: { type: "string" },
              __v: { type: "number" }
            },
            example: {
              _id: "690af106ff799d0ed481a8c9",
              name: "GST 28%",
              rate: 28,
              code: "GST28",
              __v: 0
            }
          },
          NewTaxCategory: {
            type: "object",
            required: ["name", "rate", "code"],
            properties: {
              name: { type: "string" },
              rate: { type: "number" },
              code: { type: "string" }
            },
            example: { name: "GST 28%", rate: 28, code: "GST28" }
          },
          Transaction: {
            type: "object",
            properties: {
              _id: { type: "string" },
              userId: {
                type: "object",
                properties: {
                  _id: { type: "string" },
                  name: { type: "string" },
                  email: { type: "string" }
                }
              },
              items: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    sku: { type: "string" },
                    name: { type: "string" },
                    quantity: { type: "number" },
                    basePrice: { type: "number" },
                    taxRate: { type: "number" },
                    gstAmount: { type: "number" },
                    totalAmount: { type: "number" }
                  }
                }
              },
              totalSubtotal: { type: "number" },
              totalGstAmount: { type: "number" },
              finalTotalAmount: { type: "number" },
              createdAt: { type: "string" },
              updatedAt: { type: "string" }
            },
            example: {
              _id: "60c72b9f1f1d9b001a8e4a3d",
              userId: { _id: "60c72b9f1f1d9b001a8e4a3b", name: "Demo User", email: "demo@example.com" },
              items: [
                { sku: "MS-WL1", name: "Mouse - Wireless", quantity: 2, basePrice: 800, taxRate: 12, gstAmount: 96, totalAmount: 896 }
              ],
              totalSubtotal: 1600,
              totalGstAmount: 192,
              finalTotalAmount: 1792,
              createdAt: "2025-11-05T17:00:00.000Z",
              updatedAt: "2025-11-05T17:00:00.000Z"
            }
          }
        }
      }
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: Application, port: number) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/openapi.json", (_req, res) => res.json(swaggerSpec));

  console.log(`✅ Swagger docs hosted at http://localhost:${port}/api-docs`);
};
