import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn,
  });

  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.signedCookies[`${COOKIE_NAME}`];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    res.locals.jwtData = decoded;
    return next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ message: "Token Expired or Invalid" });
  }
};
