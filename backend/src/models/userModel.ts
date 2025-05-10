
import { db } from '../utils/db.js';
import { User } from '../types/User.js';

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const users = rows as User[];
    return users[0] || null;
};

export const createUser = async (username: string, email: string, passwordHash: string): Promise<void> => {
    await db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, passwordHash]
    );
};

