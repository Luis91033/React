/** @format */

import request from "supertest";
import server from "../../server";

describe("POST /api/products", () => {
  it("should create a new product", async () => {
    const response = await request(server).post("/api/products").send({
      name: "Mouse",
      price: 500,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("data");
  });
});
