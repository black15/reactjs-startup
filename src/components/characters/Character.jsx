import Card from '../ui/Card';
import {AddToFavoritesButton} from '../favorites/AddToFavorites';
import '../../styles/ui/Character.css';

function Character(props){

	const deleteCharacterBtn = async () => {
		await fetch(`https://react-started-f41c4-default-rtdb.europe-west1.firebasedatabase.app/characters/${props.character.id}.json`, {method: 'DELETE'})
	}
	console.log('character : ', props.character.id)
	return (
			<Card>
				<li key={props.character.name}>
					<div>
						<div>
							<img src={props.character.image} alt="Character" />
						</div>
						<span>{props.character.name}</span>
						<button onClick={deleteCharacterBtn}> DELETe</button>
					</div>
					<div>
						<AddToFavoritesButton character={props.character} />
					</div>
				</li>
			</Card>
		);
}

export default Character;