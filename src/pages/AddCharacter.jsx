import { useNavigate } from 'react-router-dom';
import WrapForm from '../components/ui/FormWrapper';
import AddCharacterForm from '../components/characters/AddCharacterForm';

function AddCharacter(){
  
  let take_me_to = useNavigate();

  async function addCharacterHandler(characterData){
    try{
      await fetch('https://react-started-f41c4-default-rtdb.europe-west1.firebasedatabase.app/characters.json', {
        method: 'POST',
        body: JSON.stringify(characterData),
        headers: {
          'Content-type': 'application/json'
        }
      });

      take_me_to('/');
    }
    catch (err){
      console.log(err.message);
    }
  }
  return (
    <WrapForm>
      <h1>Add New Character</h1>
      <AddCharacterForm onAddCharacter={addCharacterHandler}/>
    </WrapForm>
    );
}

export default AddCharacter;