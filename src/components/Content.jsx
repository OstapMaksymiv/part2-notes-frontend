import React from 'react'
import Part from './Part';

function Content(props) {
    const {parts} = props;
    let sum = 0;
    for(let i = 0; i < parts.length; i++){
        sum += parts[i].exercises;
    }
  return (
    <ul>
     {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <b>
        {sum}
      </b>
    </ul>

  )
}

export default Content