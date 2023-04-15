import data from '../data.json';
import { Character } from '@/interfaces/Character';

export const generateRandomCharacter = (): Character => {
	return data.characters[Math.floor(Math.random() * data.characters.length)];
};
