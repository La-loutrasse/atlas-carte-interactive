import { Request, Response } from 'express';
import { db } from '../utils/db.js';

export const getPlaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const [places] = await db.query('SELECT id, title FROM places'); // Sélection des champs id et title des lieux
    res.json(places);
  } catch (error) {
    console.error('Erreur lors de la récupération des lieux:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
  