import React from 'react';

const FantasticCreatures = props => {
	return (
		<>
			<h1 className='text centered'>Fantastic Creatures!</h1>
			<hr />
			<h2 className='text left'>Cuckoo Egg</h2>
			<hr />
			<br />
			<div className='spoiler'>
				<p className='text'>Normally, if you have 20 or more eggs, your creatures won't breed. This was implemented to prevent game-breaking after being away for a long time. Instead, one of the existing eggs is swapped for a cuckoo egg whenever the egg-laying would normally happen (assuming you don't have a cuckoo egg already).</p>
				<p className='text'>The egg's sprite won't change, however - you need to look closely at the description (which will indicate that something is unusual about that egg) and the rarity (which will be a question mark) to find it.</p>
				<p className='text'>Then, just incubate that strange egg normally.</p>
			</div>
		</>
	);
};

export default FantasticCreatures;
