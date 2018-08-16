import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      payload : []
    }

   this.displayPayload = this.displayPayload.bind(this)
  }

  componentDidMount(){
    this.getPayload();
  }

  getPayload = () => {
    fetch('/api/stuff')
      .then(res => res.json())
      .then(payload => this.setState(payload))
  }

  displayPayload  = () => {
    const {payload} = this.state;
    console.log(payload)
   if(payload){
    
      return payload.map((item, index) => {
         return(

         <div key={index}>
            <h1>{item.name}</h1>
            <div>
            <p>{item.gender}</p>
            <p>{item.age}</p>
            </div>
          </div>
         )
       })
     
   }else{
     return(
       <h1>Payload empty</h1>
     )
   }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      {this.displayPayload()}
      </div>
    );
  }
}

export default App;
