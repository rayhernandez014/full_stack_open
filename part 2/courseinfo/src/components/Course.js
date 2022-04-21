const Course = ({course}) => {
    return (
      <>
        <Header header={course.name}/>
        <Content parts={course.parts}/>
      </>
    )
}
  
const Content = ({parts}) => {

    return (
        <>
        {parts.map( (part) => {
            return <Part key={part.id} name={part.name} exercises={part.exercises}/>
        })}
        <Total parts={parts}/>
        </>
    )

}
  
const Part = ({name, exercises}) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}
  
const Header = ({header}) => {
    return (
        <>
        <h2>
            {header}
        </h2>
        </>
    )
}
  
const Total = ({parts}) => {

    const total = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

    return (
        <>
        <b>
            Total of {total} exercises
        </b>
        </>
    )
}

export default Course