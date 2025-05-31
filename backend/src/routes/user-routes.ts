import express from "express";

import {
	getAllUsers,
	userSignUp,
	userLogin,
	verifyUserStatus,
	logoutUser,
} from "../controllers/user-controllers.js";

import {
	loginValidator,
	signUpValidator,
	validate,
} from "../utils/validators.js";

import { verifyToken } from "../utils/token-manager.js";

const userRoutes = express.Router(); 

userRoutes.get("/", getAllUsers);

userRoutes.post("/signup", validate(signUpValidator), userSignUp);

<<<<<<< HEAD
userRoutes.post("/login", validate(loginValidator), userLogin);
=======
userRoutes.get("/login", validate(loginValidator), userLogin);
>>>>>>> f76affbeda726b434cb099c24cdd2c12323abd0a

userRoutes.get("/auth-status", verifyToken, verifyUserStatus); // check if user cookies are valid so he doesnt have to login again

userRoutes.get("/logout", verifyToken, logoutUser)


export default userRoutes;
