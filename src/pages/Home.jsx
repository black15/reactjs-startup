import {useState, useEffect} from 'react';
import Character from '../components/characters/Character';
import Style from '../styles/home.module.css';

function Home(){

	const [items, setItems] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://react-started-f41c4-default-rtdb.europe-west1.firebasedatabase.app/characters.json')
			.then(res => res.json())
			.then( result => {

				const characters = [];

				for (var key in result){
					const character = {
						id: key,
						...result[key]
					};
					characters.push(character);
				}

				setIsLoaded(true);
				setItems(characters);
			})
			.catch( err => {
				setError(err);
			})
	}, [items])
	
	if(error) {
		return <div>Error: {error.message}</div>;
	}

	else if (!isLoaded) {
		return <div><h2>Loading...</h2></div>;
	}

	else {
		if(items.length !== 0){
			return (
			<div className={Style.characters}>
				<ul>
					{items.map( character => 
						<Character Style={Style} character={character} />
					)}
				</ul>
			</div>
			);
		}
		else {
			return (
			<div className={Style.characters}>
				<h1>No Characters in DB</h1>
			</div>
			);
		}
	}
}

export default Home;