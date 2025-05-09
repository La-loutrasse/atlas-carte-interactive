import { Request, Response } from 'express';
import {db} from '../utils/db';

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

    res.json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des avis publics:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
