import AuthController from "../controllers/auth.controller";
import AuthRepository from "../repositories/auth.repository";
import AuthService from "../services/auth.service";

const authContainer = new AuthController(new AuthService(new AuthRepository()));
export default authContainer;
