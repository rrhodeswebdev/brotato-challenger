import { Weapon } from '@/interfaces/Weapon';

export interface Character {
	id: number;
	name: string;
	image: string;
	startingWeapons: number[] | Weapon[];
}
