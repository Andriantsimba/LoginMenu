import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';

class  App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      {/* <h1>Week 3 Assignment</h1> */}
        <Login/>

    </div>
  );
}
}

export default App;
