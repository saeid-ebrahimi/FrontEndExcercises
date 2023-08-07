import logo from './logo.svg';
import './App.css';

function Header(props){
  return ( <h1 title={"an title for header"}>{props.title}</h1>)  //JSX syntax
  //return React.createElement("h1",{title:"an title for header"}, props.title) // JS Syntax
}
function Heading(){
  return ( <h1>this is an h1 heading</h1>)
}

function App() {
  return (
      <div className={"App"}>
        This is the starting code for "Your first component" ungraded lab
        <Header title={"Hello React"}/>
        <Heading/>
      </div>


  );
  //return React.createElement(Header, {title: "Hello React"})
}

export default App;
