import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
      modalIsOpen : false,
      showBlock: false,
  }
  showModal = () => {
      this.setState({modalIsOpen: true})
  }
  closeModal = () => {
      this.setState({modalIsOpen: false})
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
          <button className={"Button"} onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
          <br/>
          <Transition
              in={this.state.showBlock}
              timeout={300}
              onEnter={() => console.log("onEnter")}
              onEntering={() => console.log("onEntering")}
              onEntered={() => console.log("onEntered")}
              onExit={() => console.log("onExit")}
              onExiting={() => console.log("onExiting")}
              onExited={() => console.log("onExited")}
              mountOnEnter
              unmountOnExit>
              {state => (
                  <div style={{backgroundColor:"red", width: 100, height: 100, margin:"1rem auto",transition: "opacity 300ms ease-out", opacity: state === "exited"? 0:1}}></div>
              )}

          </Transition>
          <br/>
          <Modal show={this.state.modalIsOpen}  closed={this.closeModal} />
          {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} />: null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
