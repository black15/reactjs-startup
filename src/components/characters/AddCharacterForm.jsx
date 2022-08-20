import {useState} from 'react';
import FormStyle from '../../styles/ui/form.module.css';

function AddCharacterForm(props){

  /* const nameInputRef  = useRef();
  const imageInputRef = useRef(); */
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function getName(e) {
    setName(e.target.value);
  }
  function getImage(e) {
    setImage(e.target.value);
  }

  function formSubmited(e){
    e.preventDefault();
    /* console.log(nameInputRef.current.value);
    console.log(imageInputRef.current.value);*/

    const characterData = {
      'name': name,
      'image': image,
    }
    props.onAddCharacter(characterData);
  }

  return (
    <div className={FormStyle.container}>
      <form method="post" onSubmit={formSubmited}>
        <div className={FormStyle.inputblock}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="char_name" id="name" onChange={getName}/* ref={nameInputRef} *//>
        </div>
        <div className={FormStyle.inputblock}>
          <label htmlFor="image">Image: </label>
          <input type="url" name="char_img" id="image" onChange={getImage}/* ref={imageInputRef} *//>
        </div>
        <input type="submit" value="Save" />
      </form>
    </div>
    );
}

export default AddCharacterForm;