import data from '../data.json';
import { Scenario } from '@/interfaces/Scenario';

export const generateRandomScenario = (): Scenario => {
	const scenarios = data.scenarios;

	return scenarios[Math.floor(Math.random() * scenarios.length)];
};
