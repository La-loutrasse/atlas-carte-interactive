import express, { Response } from 'express';
import { authenticateToken, AuthenticatedRequest } from '../middlewares/authMiddleware';
import { db } from '../utils/db';
import { User } from '../types/User';
import { login, register } from '../controllers/authController';

const router = express.Router();
router.post('/register', register);
router.post('/login', login);

router.get('/me', authenticateToken, async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const [rows] = await db.query('SELECT id, username, email FROM users WHERE id = ?', [req.userId]);
    const users = rows as User[];

    if (users.length === 0) {
      res.status(404).json({ message: 'Utilisateur introuvable' });
      return;
    }

    res.json(users[0]);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

export default router;