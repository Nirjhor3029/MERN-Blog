import express from 'express'
import { post_get } from '../controllers/postController.js';
// import { post_get } from '../controllers/postController.js';

const router = express.Router();

router.get('/', post_get);

export default router;