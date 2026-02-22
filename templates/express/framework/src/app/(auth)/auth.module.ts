import { Router } from "express";
import authContainer from "./container";

export default function AuthModule() {
   const routes = Router();
   routes.post("/login", authContainer.login);
   return routes;
}
