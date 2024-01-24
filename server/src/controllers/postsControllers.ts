import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';
import * as admin from 'firebase-admin';

const serviceAccount = require('../utils/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://daldart-task.firebaseio.com',
});