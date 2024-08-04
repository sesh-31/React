import React from 'react';
import List from './List.jsx'
function App() {

  const fruits=[{id:1 ,name:"apple",calories:95},
                {id:2,name:"orange",calories:45},
                {id:3,name:"banana",calories:105},
                {id:4,name:"coconut",calories:159}];

   const vegetables=[{id:5 ,name:"potatoes",calories:110},
                {id:6,name:"celery",calories:15},
                {id:7,name:"broccoli",calories:50},
                {id:8,name:"carrot",calories:25}];

return(
  <>
  {fruits.length>0? <List items={fruits} category="Fruits"/> :null}
  {vegetables.length>0? <List items={vegetables} category="Vegetable"/> :null}
</>
);}

export default App;
