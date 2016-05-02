import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './answers.js';
class Questions extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id: 1, question: "Little interest or pleasure in doing things?"},
      {id: 2, question: "Feeling down, depressed, or hopeless?"},
      {id: 3, question: "Trouble falling or staying asleep, or sleeping too much?"},
      {id: 4, question: "Feeling tired or having little energy?"},
      {id: 5, question: "Poor appetite or overeating?"},
      {id: 6, question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?"},
      {id: 7, question: "Trouble concentrating on things, such as reading the newspaper or watching television?"},
      {id: 8, question: "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?"},
      {id: 9, question: "Thoughts that you would be better off dead, or of hurting yourself in some way?"}
    ]}
  }

  render(){
    let questions = this.state.data.map( question => {
      return <QuestionList updateScore={this.props.updateScore} key={question.id} data={question} />
    })
    return <div>
    {questions}
    </div>
  }
}

const QuestionList = (props) => {
  return <div>
    <div className="question">{props.data.question}</div>
    <button onClick={props.updateScore} />
    <Answers updateScore={props.updateScore} questionKey={props.data.id} />
    </div>
}

export default Questions
