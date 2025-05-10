import express from 'express';
import { addReview, getPublicReviews } from '../controllers/reviewController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/public', getPublicReviews);
router.post('/', authenticateToken, addReview);

export default router;
