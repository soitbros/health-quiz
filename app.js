import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './questions.js';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      step: 0
    }
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(){
    this.setState({score: this.state.score + 1})
  }

  render(){
    return <div>
    <span>{this.state.score}</span>
    <button onClick={this.updateScore} />
    <Questions updateScore={this.updateScore} />
    </div>
  }

}

export default App
