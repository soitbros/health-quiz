import React from 'react';
import ReactDOM from 'react-dom';
class Answers extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {value: 0, answer: "Not at all"},
      {value: 1, answer: "Several days"},
      {value: 2, answer: "More than half the days"},
      {value: 3, answer: "Nearly every day"}
    ]}
  }
  render(){
    let answers = this.state.data.map ( answer => {
      return <AnswerList questionKey={this.props.questionKey} updateScore={this.props.updateScore} key={answer.value} data={answer} />
    })
    return <div>
    <ul>{answers}</ul>
    </div>
  }
}

const AnswerList = (props) => {

  //props.data.value = 0,1,2,3
  return <li>
          <input type="radio" name={props.questionKey} value={props.data.value} onClick={props.updateScore}>
          </input>
          {props.data.answer}
         </li>
}

export default Answers
