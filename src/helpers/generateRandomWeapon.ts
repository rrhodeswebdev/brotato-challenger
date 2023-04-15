import data from '../data.json';
import { Weapon } from '@/interfaces/Weapon';

export const generateRandomWeapon = (weaponIds: number[]): Weapon => {
	const filteredWeapons = data.weapons.filter((weapon) =>
		weaponIds.includes(weapon.id)
	);

	return filteredWeapons[Math.floor(Math.random() * filteredWeapons.length)];
};
