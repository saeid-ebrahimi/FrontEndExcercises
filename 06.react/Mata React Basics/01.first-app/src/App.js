import logo from './logo.svg';

import './App.css';
import Header from "./Header";
import Heading from "./Heading";
import Card from "./Card";
import RegisterForm from "./RegisterForm";
import {useState} from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
function App() {
    const [fruits] = useState([
        {fruitName: "apple", id:1},
        {fruitName: "pear", id:2},
        {fruitName: "plum", id:3},
        ])

    const handleClick = () => {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum)
        let userInput = prompt("type a number: ")
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
    }

  return (
      <div className={"App"}>
          <Header title={"There is a title for first app"}/>
          <Heading firstName={"Bob"}/>
          <Heading firstName={"Any name other than Bob"}/>
          <h2>Add Three Card Elements</h2>
          <Card h2={"First card's h2"} h3={"First card's h3"}/>
          <Card h2={"Second card's h2"} h3={"Second card's h3"}/>
          <Card h2={"Third card's h2"} h3={"Third card's h3"}/>
          <h2>Add a Button and handle a click event</h2>
          <button onClick={handleClick}>Guess the number between 1 and 3</button>
          <div>
              <RegisterForm/>
          </div>
          <div>
              <h2>Where should the state go?</h2>
              <Fruits fruits={fruits}/>
              <FruitsCounter fruits={fruits}/>
          </div>
      </div>
  );
}

export default App;
