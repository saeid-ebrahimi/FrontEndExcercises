import React, {useState, useCallback} from 'react';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const allowToggleHandler = () => {
    setAllowToggle(prevState => !prevState);
  }
  console.log("APP Evaluated")
  const toggleParagraphHandler = useCallback (() => {  // to react.memo works for props like functions
    if (allowToggle){
      setShowParagraph(prevState => !prevState);
    }
  }, [allowToggle])
  return (
    <div className="app">
      <h1>Hi there!</h1>
        {/*{showParagraph && <p>This is new!</p>}*/}
        {/*<DemoOutput show={showParagraph}/>*/}
        <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
