import React from "react"


export default function JournalCard(props) {
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
						<p> {props.country} &nbsp; &nbsp;</p>
						<p>{props.mapLink}</p>
					</div>

					<div className='cardContentName'>
						<h1>{props.locationName}</h1>
					</div>
					<div className='cardContentDate'>
						<p>{props.dateTravelled}</p>
					</div>
					<div className='cardContentDescription'>
						<p>{props.description}</p>
					</div>
				</div>
			</div>
			<hr></hr>
		</div>
	);
}
