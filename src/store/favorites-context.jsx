import {useState, createContext} from 'react';

const FavoritesContext = createContext({
	favorites       : [],
	totalFavorites  : 0,
	addFavChar      : (character) => {},
	removeFavChar   :	(character_name) => {},
	checkFavChar    :	(character_name) => {},
});

export function FavoritesContextProvider(props){

	const [userFav, setUserFav] = useState(() => {
		const savedFavChars 	 = localStorage.getItem('favorites-characters');
		const initSaved 			 = JSON.parse(savedFavChars);
		return initSaved || [];
	});
	
	const context = {
		favorites      : userFav,
		totalFavorites : userFav.length,
		addFavChar     : addFavoriteCharacter,
		removeFavChar  : removeFavoriteCharacter,
		checkFavChar   : checkFavoriteCharacter
	}

	function addFavoriteCharacter(character){
		setUserFav( prevUserFav => {
			return prevUserFav.concat(character);
		})
	}
	function removeFavoriteCharacter(character_name){
		console.log('Removed from fav')
		setUserFav( prevUserFav => {
			return prevUserFav.filter(character => character.name !== character_name);
		})
	}
	function checkFavoriteCharacter(character_name){
		return userFav.some(character => character.name === character_name)
	}

	return (
			<FavoritesContext.Provider value={context}>
				{props.children}
			</FavoritesContext.Provider>
		);
}

export default FavoritesContext;
