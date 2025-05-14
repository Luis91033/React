/** @format */

import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

type UserPayload = {
  id: ObjectId;
};

export const generateJWT = (payload: UserPayload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "180d",
  });
  return token;
};
