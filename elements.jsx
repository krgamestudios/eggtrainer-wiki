import React, { useState, useEffect } from 'react';

const Elements = props => {
	const [elements, setElements] = useState(null);

	useEffect(async () => {
		const result = await fetch(`${process.env.STAT_URI}/stat/v1/elements/all`);

		if (!result.ok) {
			return null;
		}

		setElements(await result.json());
	}, []);

	if (!elements) {
		return <p className='text centered middle'>Loading element chart...</p>;
	}

	//spacer
	const unshift = a => {
		return ['_space', ...a];
	};

	const topRow = Object.keys(elements);

	//When I wrote this, only god and I knew what it did.
	//Now, only god knows.
	return (
		<>
			<h1 className='text centered'>Elements!</h1>
			<hr />
			<p className='text'>On this page, you can see the elemental matchup chart. Attackers down the side, defenders across the top. The numbers on the chart are multipliers.</p>
			<br />
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<div className='table noCollapse' style={{ maxWidth: 600, maxHeight: 600, border: '1px solid black' }}>
					{unshift(Object.keys(elements)).map((offenseKey, offenseIndex) => {
						return (
							<div className='row' key={offenseIndex}>
								{unshift(elements[offenseKey] ? Object.keys(elements[offenseKey]) : topRow).map((defenceKey, defenceIndex) => {
									//render each "cell" of the table, taking care on the edges too
									if (offenseIndex == 0 && defenceIndex == 0) {
										return <div className='col' key={defenceIndex} />
									}

									//top row
									if (offenseIndex == 0) {
										return (
											<div className='col centered middle' key={defenceIndex}>
												<img alt={defenceKey} src={`/img/icons/100/${defenceKey}-100.png`} style={{maxWidth: '50px'}} />
											</div>
										);
									}

									//down the side
									if (defenceIndex == 0) {
										return (
											<div className='col centered middle' key={defenceIndex}>
												<img alt={offenseKey} src={`/img/icons/100/${offenseKey}-100.png`} style={{maxWidth: '50px'}} />
											</div>
										);
									}

									//print out the multiplier
									const style = {
										paddingTop: '0.5em',
										backgroundColor: elements[offenseKey][defenceKey] > 1 ? 'green' : elements[offenseKey][defenceKey] < 1 ? 'red' : '',
										color: elements[offenseKey][defenceKey] == 1 ? 'black' : 'white',
									};

									return (
										<div className='col centered middle' style={style} key={defenceIndex}>
											<p className='text'>{elements[offenseKey][defenceKey] == 1 ? '-' : elements[offenseKey][defenceKey]}</p>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Elements;
