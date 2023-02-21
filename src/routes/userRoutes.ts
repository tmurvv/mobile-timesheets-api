import express from "express";
import {userController} from "../controllers/userController";
const router = express.Router();

// router.post('/signup', userController.signup);
router.post('/login', userController.login);
// router.get('/', (req: Request, res: Response) => res.send('imin login router'));
// router.post('/sendresetemail', userController.sendResetEmail);
// router.post('/updateuser', userController.updateUser);
// router.post('/resetpassword', userController.resetPassword);
// router.post('/deleteuser', userController.deleteUser);

export default router;