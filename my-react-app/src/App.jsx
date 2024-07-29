import React from 'react';
import Student from './Student.jsx';

function App() {
  return (
    <>
      <Student name="Spongbob" age={30} isStudent={true}/>
      <Student name="Pattrick" age={42} isStudent={false}/>
      <Student name="Sqiudward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      </>
  );
}

export default App;
