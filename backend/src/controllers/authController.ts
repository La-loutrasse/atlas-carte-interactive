import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../models/userModel';
import { hashPassword, comparePassword } from '../utils/hash';
import { generateToken } from '../utils/jwt';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: 'Email déjà utilisé' });
      return;
    }

    const passwordHash = await hashPassword(password);
    await createUser(username, email, passwordHash);
    res.status(201).json({ message: 'Utilisateur créé' });
  } catch (error) {
    console.error('Error in register:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
      return;
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Mot de passe incorrect' });
      return;
    }

    const token = generateToken(user.id);

    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
