import {NavLink} from 'react-router-dom';
import { useContext, useState } from 'react';
import FavoritesContext from '../store/favorites-context';
import SearchCard from './ui/SearchCard';
import '../styles/header.css';

function Header(){
	const favoritesCtx = useContext(FavoritesContext);
	const favCharsCount = favoritesCtx.totalFavorites;
	const [filtredChars, setFiltredChars] = useState([]);	
	
	const characters = [];

	const changed = (e) => {
		fetch('https://react-started-f41c4-default-rtdb.europe-west1.firebasedatabase.app/characters.json')
			.then(res => res.json())
			.then( result => {

				const characters = [];

				for (var key in result){
					if(e.target.value){
						if (result[key].name.includes(e.target.value)){
						console.log('result : ', result[key])
						const character = {
							id: key,
							...result[key]
						};
							characters.push(result[key]);
						}
					}
				}
				if(characters) {
					setFiltredChars(characters);
				}
			})
	}
	return(
		<div className="header">
			<div className="logo">
				<h1>REACT</h1>
				<div className='searchForm'>
					<input type="search" placeholder='Search...' onChange={changed}/>
				</div>
					<SearchCard characters={filtredChars} />
			</div>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/new">Add Character</NavLink></li>
				<li><NavLink to="/favorites">Favorites {favCharsCount ? <small>{favCharsCount}</small> : ''}</NavLink></li>
			</ul>
		</div>
		);

}

export default Header;