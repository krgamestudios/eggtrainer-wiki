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

			<h2 className='text'>Beginner's Guide</h2>
			<hr />
			<p className='text'>Coming Soon</p>
			<br />

			<h2 className='text'>Important Game Stats</h2>
			<hr />
			<ul>
				<li><Link to='/wiki/elements'  className='text'>Elements Graph</Link></li>
			</ul>
			<p className='text'>Coming Soon</p>
			<br />
		</>
	);
};

export default Index;