import React from 'react';

const NewPlayerGuide = props => {
	return (
		<>
			<h1 className='text centered'>New Player Guide</h1>
			<hr />
			<br />
			<p className='text'>Welcome to the wonderful world of Egg Trainer!</p>
			<p className='text'>In this game, you'll be able to buy eggs, hatch them, and train the creatures within for battle! The ultimate goal of this game is to create a fun, engaging and fair battle meta-game for players to explore.</p>
			<p className='text'>After you first sign up, you'll have 500 silver - enough to buy your first two eggs. After purchasing two common eggs (it's recommended to buy different elements), hatch both of them to reveal what's inside. Once this is done, set both to breed from the inspect page. Then, wait...</p>
			<p className='text'>...for up to 8 hours.</p>
			<p className='text'>This game is very slow to begin, so patience is the key. As long as you have two creatures breeding, they'll produce a new egg three times a day. You can either sell this egg, or hatch it to reveal a new creature! Selling eggs is how you gain more silver - releasing hatched creatures doesn't net you anything.</p>
			<p className='text'>Once you have enough silver, your next step should be to buy either a higher-rarity egg, or a magnifying glass, which reveals the stats of the creatures you have.</p>
		</>
	);
};

export default NewPlayerGuide;
