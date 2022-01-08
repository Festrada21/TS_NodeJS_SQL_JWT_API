
import {Router} from 'express';
import { singIn, singUp } from '../controllers/auth_controllers';


const authrouter = Router();


authrouter.post('/singup',singUp);
authrouter.post('/singin',singIn);

export default authrouter;