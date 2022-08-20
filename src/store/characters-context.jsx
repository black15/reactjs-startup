import {useState, createContext} from 'react';

const FavoritesContext = createContext({
	characters       : [],
	totalCharacters  : 0,
});
