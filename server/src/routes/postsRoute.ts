import express from 'express';
const router = express.Router();

import { fetchAndSavePosts } from '../controllers/postsControllers';

router.route('/')
        .post(fetchAndSavePosts);

export { router as postsRoute };
