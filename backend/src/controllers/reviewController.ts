import { Request, Response } from 'express';
import {db} from '../utils/db';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';

export const getPublicReviews = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query(`
      SELECT r.id, r.content, r.created_at, u.username, p.title AS place_title
      FROM reviews r
      JOIN users u ON r.user_id = u.id
      JOIN places p ON r.place_id = p.id
      ORDER BY r.created_at DESC
      LIMIT 10;
    `);

    res.json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis publics:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const addReview = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userId;
  const { placeId, content } = req.body;
  if (!placeId || !content) {
    res.status(400).json({ message: 'Champs requis manquants' });
    return;
  }

  try {
    await db.query(
      `INSERT INTO reviews (user_id, place_id, content) VALUES (?, ?, ?)`,
      [userId, placeId, content]
    );
    res.status(201).json({ message: 'Avis ajouté avec succès' });
  } catch (error) {
    console.error('Erreur lors de l’ajout de l’avis :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};