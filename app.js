import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './questions.js';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      questionValues: {}
    }
    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(questionKey, answerValue){
    this.state.questionValues[questionKey] = answerValue;
    let sum = 0;
    Object.keys(this.state.questionValues).forEach((currentQuestionKey)=>{
      sum += this.state.questionValues[currentQuestionKey]
    })
    this.setState({score: sum})
  }

  

  render(){
    return <div>
    <span>{this.state.score}</span>
    <Questions updateScore={this.updateScore} />
    </div>
  }

}

export default App
