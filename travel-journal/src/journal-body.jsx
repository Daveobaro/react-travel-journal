import React from 'react';

export default function JournalCard(props) {
	let horizontalLine;
	if (props.id !== '3') {
		horizontalLine = <hr width='100%' size='1' color='lightgrey' noshade />;
	} else if (props.id === 3) {
		horizontalLine = ' ';
	}

	return (
		<div className='cardSection'>
			<div className='cardBody'>
				<div className='cardImage'>
					<img
						src={props.coverImage}
						alt={props.altText}
						className='setImage'
					/>
				</div>
				<div className='cardContent'>
					<div className='cardContentHeader'>
						<p>
							{' '}
							<i class='fa-solid fa-location-dot icon'></i> {props.country}{' '}
							&nbsp; &nbsp;
						</p>
						<p>View on Google Maps</p>
					</div>

					<div className='cardContentName'>
						<h2>{props.locationName}</h2>
					</div>
					<div className='cardContentDate'>
						<p>{props.dateTravelled}</p>
					</div>
					<div className='cardContentDescription'>
						<p>{props.description}</p>
					</div>
				</div>
			</div>
			{horizontalLine}
		</div>
	);
}
