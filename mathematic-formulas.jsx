import React from 'react';
import { Link } from 'react-router-dom';

const MathematicFormulas = props => {
	return (
		<>
			<h1 className='text centered'>Mathematic Formulas!</h1>
			<hr />
			<br />
			<h2 className='text left'>Battle Damage Formula</h2>
			<hr />
			<br />
			<blockquote>
				<p className='text'><strong>D = p * ((a + 4) / (d + 4)) * S * T * C * r</strong></p>
			</blockquote>

			<p className='text'>
				<strong>D</strong>: damage<br />
				<strong>p</strong>: technique power<br />
				<strong>a</strong>: attack (cumulative, 0 to 96)<br />
				<strong>d</strong>: defence (cumulative, 0 to 96)<br />
				<strong>S</strong>: stab (attacker, tech) (1.2 | 1)<br />
				<strong>T</strong>: matchup (defender, tech) (1.5 | 1 | 0.8)<br />
				<strong>C</strong>: 5% critical hit chance (2 | 1)<br />
				<strong>r</strong>: random (0.85 to 1)<br />
			</p>
			<br />

			<h3 className='text left'>Reasoning</h3>
			<br />
			<p className='text'>Each technique has a chance to deal either physical or magical damage, based on it's type. When dealing this damage, the above equation is used to calculate the final result.</p>
			<p className='text'>Starting from the power of the technique, we multiply it by the ratio of the attacker's and defender's stats, so the stronger you are, the more influence you'll have over the technique. 4 is added to both the attack and defence before the calculation to prevent dividing by zero, and to give a nice round 100 as the top of the possibile values here.</p>
			<p className='text'>"Cummulative" simply means the adding of the inherent stats, genetic stats and trained stats, each of which has a maximum value of 32. A creature's strength is added to their physical attack and defence, while their power is added to their magical attack and defence.</p>
			<p className='text'>"Stab" is a term borrowed from another game with similar mechanics - here it means "<strong>S</strong>ame elemen<strong>T</strong> <strong>A</strong>ttack <strong>B</strong>onus". Put simply, if the element of the technique matches the element of the user, then the running damage total is multiplied by 1.2.</p>
			<p className='text'>"Matchup" refers to how the technique interacts with the defender's element, according to the <Link to='/wiki/elements'>Elemental Matchup Chart</Link>. If the technique has an advantage, then the running damage is multiplied by 1.5. It it's at a disadvantage, then it's multiplied by 0.8 (please note that these numbers may be tweaked at a granular level after writing).</p>
			<p className='text'>Finally, the running damage total has some randomness applied - there's a 5% chance of doubling the damage (called a critical hit), and finally finally, the running total is multiplied by a random number between 0.85 and 1, to give battles a more organic outcome.</p>
			<br />

			<h2 className='text left'>Elo Rating System</h2>
			<hr />
			<br />
			<blockquote>
				<p className='text'><strong>A = 1 / (1 + 10 ^ ((b - a) / 400))</strong></p>
				<p className='text'><strong>a2 = a + (W - A) * K</strong></p>
			</blockquote>

			<p className='text'>
				<strong>W</strong>: win(1) | loss(0)<br />
				<strong>K</strong>: 32 (A constant, which may be calibrated)<br />
				<strong>A, B</strong>: player's chance of winning<br />
				<strong>a, b</strong>: player's scores<br />
				<strong>a2, b2</strong>: player's new scores after the game<br />
			</p>
			<br />

			<h3 className='text left'>Reasoning</h3>
			<br />
			<p className='text'>The Elo rating system is not original to Egg Trainer; in fact, it originated as a way to measure chess skill. For a more detailed explanation of how it all works, refer to <a href='https://en.wikipedia.org/wiki/Elo_rating_system'>the Wikipedia page</a> on the subject.</p>
			<p className='text'>In short, every player starts the game with a rating of 1000, which bubbles up and down as they win and lose games. Interestingly, locked battle boxes also have their own score, until they're unlocked. This will allow people to track individual teams.</p>
			<p className='text'>There may be a monthly reset for the Elo scores - this hasn't been decided yet.</p>
		</>
	);
};

export default MathematicFormulas;
