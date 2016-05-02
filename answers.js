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
      return <AnswerList key={answer.value} data={answer} />
    })
    return <ul>{answers}</ul>
  }
}

const AnswerList = (props) => {
  //props.data.value = 0,1,2,3
  return <li className={props.data.value}>
         {props.data.answer}
         </li>
}

export default Answers
