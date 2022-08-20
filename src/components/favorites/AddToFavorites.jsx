import {useContext, useEffect} from 'react';
import FavoritesContext from '../../store/favorites-context';


export const AddToFavoritesButton = (props) => {
	const favoritesCtx = useContext(FavoritesContext);
	const checkIfCharFav = favoritesCtx.checkFavChar(props.character.name)

	function toggleFavBtnStatus(){
		if(checkIfCharFav){
			favoritesCtx.removeFavChar(props.character.name);
		}
		else {
			favoritesCtx.addFavChar({
				name: props.character.name,
				image: props.character.image
			});
		}
	}
	useEffect( ()=>{
		localStorage.setItem('favorites-characters', JSON.stringify(favoritesCtx.favorites));
	}, [favoritesCtx.favorites])
	return (
					<button onClick={toggleFavBtnStatus} className={checkIfCharFav ? 'activeFav' : undefined}>
						{checkIfCharFav ? 'Remove from Favorites' : 'Add to Favorites'}
					</button>	
				);
}