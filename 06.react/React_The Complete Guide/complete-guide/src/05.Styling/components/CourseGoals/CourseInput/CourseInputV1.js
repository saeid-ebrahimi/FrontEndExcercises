import {useState} from "react"
import './CourseInput.css'
import '../../../UI/Button'
import Button from '../../../UI/Button';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue)
  };

  return(
    <form onSubmit={formSubmitHandler}>
      <label style={{color: !isValid ? "red" : "black"}}>Course Goal</label>
      <input style={{borderColor: !isValid? "red": "#ccc", backgroundColor: !isValid? "salmon": "transparent"}}
       type="text" onChange={goalInputChangeHandler} />
      <Button type={"submit"}>Add Goal</Button>
    </form>
  )
}

export default CourseInput;