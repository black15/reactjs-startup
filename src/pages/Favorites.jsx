import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import Character from '../components/characters/Character';

function Favorites(){
	const favoritesCtx = useContext(FavoritesContext);
	const allFavChar = favoritesCtx.favorites;
	return (
			<div>
				<h1>Favorites Characters</h1>
				{allFavChar.map(character => 
						<Character character={character}/>
					)}
			</div>
		);
}

export default Favorites;