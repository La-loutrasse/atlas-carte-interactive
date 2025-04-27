import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';
import { db } from '../utils/db';
import { User } from '../types/User';

export const getMe = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const [rows] = await db.query('SELECT id, username, email FROM users WHERE id = ?', [req.userId]);
    const users = rows as User[];

    if (users.length === 0) {
      res.status(404).json({ message: 'Utilisateur introuvable' });
      return;
    }

    res.json(users[0]);
  } catch (err) {
    next(err);
  }
}; 