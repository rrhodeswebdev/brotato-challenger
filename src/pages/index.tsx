import { useState } from 'react';
import Image from 'next/image';
import { Neucha } from 'next/font/google';
import logo from '../../public/brotato-logo.png';
import { generateRandomCharacter } from '@/helpers/generateRandomCharacter';
import { Character } from '@/interfaces/Character';
import { Weapon } from '@/interfaces/Weapon';
import { generateRandomWeapon } from '@/helpers/generateRandomWeapon';
import { Scenario } from '@/interfaces/Scenario';
import { generateRandomScenario } from '@/helpers/generateRandomScenario';

const neucha = Neucha({ weight: ['400'], subsets: ['latin'] });

type Challenge = {
	character: Character;
	scenario: number;
};

export default function Home() {
	const [challenge, setChallenge] = useState(false);
	const [character, setCharacter] = useState<Character | null>(null);
	const [weapon, setWeapon] = useState<Weapon | string | null>(null);
	const [scenario, setScenario] = useState<Scenario | null>(null);
	const [error, setError] = useState<string | null>(null);

	const onGenerateChallengeClick = () => {
		setError(null);
		setChallenge(false);

		const character = generateRandomCharacter();

		if (character) {
			setCharacter(character);

			if (character.startingWeapons.length > 0) {
				setWeapon(
					generateRandomWeapon(character.startingWeapons as number[])
				);
			} else {
				setWeapon('No starting weapon');
			}

			setScenario(generateRandomScenario());
		}

		if (!character && !weapon) return setError('Something went wrong!');

		character && weapon && setChallenge(true);
	};

	return (
		<main className="flex min-h-screen flex-col items-center pt-24 bg-gradient-to-br from-slate-950 to-slate-700">
			<div className="max-w-2xl flex flex-col items-center justify-center">
				<div className="mb-8 w-3/4">
					<Image src={logo} alt="Brotato Logo" priority={true} />
				</div>
				<div className="mb-8">
					<h1
						className={`${neucha.className} text-6xl font-bold text-white`}
					>
						Brotato Challenger
					</h1>
				</div>
				<div className="mb-8">
					<button
						className="py-2 px-6 bg-cyan-800 rounded text-white hover:bg-cyan-900 shadow"
						onClick={onGenerateChallengeClick}
					>
						Generate Challenge
					</button>
				</div>
				{error && (
					<div className="mb-8">
						<h2 className="text-2xl text-white mb-4">{error}</h2>
					</div>
				)}
				{challenge && character && weapon && scenario && (
					<>
						<div className="flex flew-row justify-around items-center w-full">
							<div className="mb-8 flex flex-col items-center max-w-sm">
								<Image
									src={character.image}
									alt={character.name}
									width={80}
									height={80}
								/>
								<h2 className="text-2xl text-white mb-4">
									{character.name}
								</h2>
							</div>
							<p className="text-4xl text-white text-center">+</p>
							{typeof weapon === 'string' ? (
								<div className="mb-8 flex flex-col items-center max-w-sm">
									<h2 className="text-2xl text-white mb-4">
										{weapon}
									</h2>
								</div>
							) : (
								<div className="mb-8 flex flex-col items-center max-w-sm">
									<Image
										src={weapon.image}
										alt={weapon.name}
										width={80}
										height={80}
									/>
									<h2 className="text-2xl text-white mb-4">
										{weapon.name}
									</h2>
								</div>
							)}
						</div>
						<div>
							<h2 className="text-2xl text-white text-center mb-4">
								Scenario
							</h2>
							<p className="text-white">{scenario.description}</p>
						</div>
					</>
				)}
			</div>
		</main>
	);
}
