import React from 'react';
import { Link } from 'react-router-dom';

const Index = props => {
	return (
		<>
			<h1 className='text centered'>Welcome to the Egg Trainer Wiki!</h1>
			<hr />
			<br />
			<p className='text'>Here you can find all of the user-contributed information about the game Egg Trainer.</p>
			<p className='text'>To contribute to this wiki, open a new pull request on the public github repository here by <a href='https://github.com/krgamestudios/eggtrainer-wiki'>following this link.</a></p>

			<h2 className='text left'>New Player Guide</h2>
			<hr />
			<br />
			<ul>
				<li><Link className='text' to='/wiki/introduction'>Introduction</Link></li>
				<li><Link className='text' to='/wiki/getting-started'>Getting Started</Link></li>
				<li className='text'>Training for Battle (Coming Soon...)</li>
				<li className='text'>Your First Battle (Coming Soon...)</li>
			</ul>
			<br />

			<h2 className='text left'>Important Game Stats</h2>
			<hr />
			<br />
			<ul>
				<li><Link className='text' to='/wiki/elements'>Elements Graph</Link></li>
				<li className='text'>Technique statistics (Coming Soon...)</li>
				<li><Link className='text' to='/wiki/mathematic-formulas'>Mathematic Formulas</Link></li>
			</ul>
			<br />

			<h2 className='text left'>Easter Eggs</h2>
			<hr />
			<br />
			<p className='text'>WARNING: spoilers ahead!</p>
			<ul>
				<li><Link className='text' to='/wiki/fantastic-creatures'>Fantastic Creatures And Where To Find Them</Link></li>
			</ul>
			<br />
		</>
	);
};

export default Index;