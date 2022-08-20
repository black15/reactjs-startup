import CardStyle from '../../styles/search.module.css';

function SearchCard (props) {
	
	const characters = props.characters;
	return (
		<div className={CardStyle.container}>
			{characters.map( character => 
					<div className={CardStyle.card}>
						<span>{character.name}</span>
						<img src={character.image} alt='Character'/>
					</div>
				)}
		</div>
	);

	
}

export default SearchCard;