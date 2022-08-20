import {useEffect} from 'react';

export const DeleteCharacterBtn = (props) => {
	useEffect(() => {
		fetch(`https://react-started-f41c4-default-rtdb.europe-west1.firebasedatabase.app/characters/${props.character_id}.json`, {method: 'DELETE'})

			.then(res => res.json())
			.then( result => {
				console.log('result  : ', result);
			})
			.catch( err => {
				console.log('err : ', err.message)
			})
	}, [props.character_id])

}