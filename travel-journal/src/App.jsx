import JournalNavbar from '/Users/davidobaro/react-travel-journal/travel-journal/src/journal-navbar.jsx';
import JournalCard from '/Users/davidobaro/react-travel-journal/travel-journal/src/journal-body.jsx';
import data from '/Users/davidobaro/react-travel-journal/travel-journal/src/data.js';
import './App.css';

function App() {
	const journalBody = data.map(props => {
		return (<JournalCard key={props.id} {...props} />)
	});

	return (
		<div className='journal-outer-body'>
			<div className='journal-inner-body'>
				<JournalNavbar />
				{journalBody}
			</div>
		</div>
	);
}

export default App;
