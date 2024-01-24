import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';
import * as admin from 'firebase-admin';
import { asyncWrapper } from '../middlewares/asyncWrapper';
import axios from 'axios';
import { httpStatusText } from '../utils/httpStatusText';

const serviceAccount = require('../utils/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://daldart-task.firebaseio.com',
});

const fetchAndSavePosts = asyncWrapper(
    async(req: Request, res: Response, next: NextFunction) => {
        const listing = req.body.listing;

        if(!listing){
            const error = new AppError('listing is required', 400, httpStatusText.ERROR);
            return next(error);
        }
        
        const response = await axios.get(`https://www.reddit.com/r/FlutterDev/${listing}.json`);
        const posts = response.data.data.children;
        
        const batch = admin.firestore().batch();
        const postsCollection = admin.firestore().collection('posts');
        for(const post of posts){
            const docRef = postsCollection.doc(post.data.id);
            batch.set(docRef, post);
        }
        await batch.commit();

        res.status(200).json({status: httpStatusText.SUCCESS, data: posts});
    }
)

export {fetchAndSavePosts};