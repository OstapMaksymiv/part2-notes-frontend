import Content from "./Content"
import Header from "./Header"


function Course(props) {
  return (
    <div>
        <Header name={props.course}/>
        <Content parts={props.course.parts} />

    </div>
  )
}

export default Course