import data from '../data.json';
import { Weapon } from '@/interfaces/Weapon';

export const generateRandomWeapon = (weaponIds: number[]): Weapon => {
	const randomWeaponId =
		weaponIds[Math.floor(Math.random() * weaponIds.length)];

	const weapon = data.weapons.find((weapon) => weapon.id === randomWeaponId);

	if (!weapon) {
		throw new Error('Weapon not found');
	}

	return weapon;
};
