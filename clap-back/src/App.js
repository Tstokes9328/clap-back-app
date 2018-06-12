import React, { Component } from 'react';

//Style Sheet
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({input: value})
  }

  render() {

    const clapBack = this.state.input.split('').map((element) => {
      if(element === ' '){
        return '👏';
      }
      return element;
    })

    return (
      <div className="App">
        <div className="title-container">
          <p>Clap</p>
          <p>👏</p>
          <p>Back</p>
        </div>

        <div className="input-box-container">
          <h1>Type 👏 Some 👏 Fire</h1>
          <textarea type="text" size="70" onChange={(event) => this.handleChange(event.target.value)}>
          </textarea>
        </div>

        <div className="copy-paste-container">
          <h1>Copy & Paste</h1>
          <div className="answer-box">
            {clapBack}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
