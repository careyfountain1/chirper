import React, { Component } from 'react';

const App = () => {
  let element = <h1>Welcome to React</h1>;
  return element;
}
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      text: '',
      list: [],
      chirp: '',
    }
  }
}

export default App;
