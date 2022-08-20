import CardStyle from '../../styles/ui/card.module.css';

function Card(props) {

return( 
		<div className={CardStyle.character}>
			{props.children}
		</div>
	);
}

export default Card;