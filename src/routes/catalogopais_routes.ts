import {Router} from 'express';
import { DELETECP, GETCPS, GETCP, POSTCP, PUTCP } from '../controllers/catalogopais_controllers';

const router = Router();

router.get('/',GETCPS);
router.get('/:id',GETCP);
router.post('/',POSTCP);
router.put('/:id',PUTCP);
router.delete('/:id',DELETECP);

export default router;