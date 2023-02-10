
import Main from './components/MainComponent';

import './App.css';
import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      dishes: DISHES
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    )
  }
}

export default App;
