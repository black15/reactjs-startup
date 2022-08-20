import FormStyle from '../../styles/ui/form.module.css';

function WrapForm(props) {
	return <div className={FormStyle.form}>{props.children}</div>
}

export default WrapForm;