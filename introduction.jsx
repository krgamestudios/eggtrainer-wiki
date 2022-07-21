import React from 'react';

const NewPlayerGuide = props => {
	return (
		<>
			<h1 className='text centered'>Introduction</h1>
			<hr />
			<br />
			<h2 className='text'>Welcome to the Wonderful World of Egg Trainer!</h2>
			<hr />
			<br />
			<p className='text'>The impetus for Egg Trainer is to create a fun and engaging monster battling game which lowers the barrier to entry for new players to get into the genre.</p>
			<p className='text'>Heavily inspired by the world-dominating video game franchise <a href='https://en.wikipedia.org/wiki/Pok%C3%A9mon'>Pokemon</a>, Egg Trainer aims to distill the complexities of high-level PVP battling into an easy to digest format, while also maintaing much of the depth that inspired the initial idea.</p>
			<p className='text'>Egg Trainer is a web game, being built with web technologies, and actually falls into a niche genre called "Persistent Browser Based Games". Egg Trainer also draws inspiration from prominent PBBGs from the late 90s and early 2000s, namely <a href='https://www.kingsofchaos.com/'>Kings of Chaos</a>.</p>
			<h2 className='text'>Help, Where Do I Start?</h2>
			<hr />
			<br />
			<p className='text'>Where would any game be without a wiki? Although this wiki can't be modified directly (you need to open a <a href='https://github.com/krgamestudios/eggtrainer-wiki'>merge request on github</a>), this guide has been written to help ease newer players into the game. Also available is a chat window in the lower right of the screen, or bottom of the page on mobile, which will connect you to the other players (only visible when logged in). Feel free to ask for help, or to report bugs if you find them.</p>
			<h2 className='text'>Can I Make A Game Like This?</h2>
			<hr />
			<br />
			<p className='text'>YES! In fact, half of Egg Trainer's code - namely the engine - is actually <a href='https://github.com/krgamestudios/MERN-template'>open source on github!</a> - The bespoke engine is kept up to date as new features are added. Feel free to request new features, or to contribute yourself. The engine is considered just as important as the game itself.</p>
			<h2 className='text'>Who Are You?</h2>
			<hr />
			<br />
			<p className='text'>My name is Kayne Ruse, and I've been making games for most of my life. I've released many games in the past (including on the <a href='https://candyraid.com/'>Nintendo Switch</a>), but Egg Trainer is by far my most ambitious project to date.</p>
			<p className='text'>Thank you for playing Egg Trainer!</p>
		</>
	);
};

export default NewPlayerGuide;
