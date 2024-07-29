import PropTypes from 'prop-types'
function Student(props) {
  return (
    <div className="font-sans text-2xl p-2 m-2  border-2 border-black border-solid">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student:{props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}
Student.propTypes={
     name: PropTypes.string,
     age: PropTypes.number,
     isStudent:PropTypes.bool,
}

export default Student;