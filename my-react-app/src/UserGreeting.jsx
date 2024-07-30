import PropTypes from 'prop-types';

function UserGreeting(props){
    //first method ......
    // if(props.isLoggedIn){
    //     return <h1>Welcome back, {props.username}!</h1>;
    // }else{
    //     return <h1>Please log in.</h1>;
    // } 
    //another method ........
//     return(props.isLoggedIn  ? <h2 className="text-lg bg-lime-500 p-5 rounded-lg m-6">welcome back {props.username}</h2> : 
//     <h2 className="text-lg bg-red-500 p-5 rounded-lg m-6">Please log in to continue</h2>)
//    }
//best method....
  const welcomeMessage= <h2 className="text-lg bg-lime-500 p-5 rounded-lg m-6" >
                        welcome back {props.username}</h2>
  const loginPromt=<h2 className="text-lg bg-red-500 p-5 rounded-lg m-6">
                        Please login to continue </h2>

  return props.isLoggedIn ? welcomeMessage : loginPromt;
}
UserGreeting.proptypes={
    isLoggedIn: PropTypes.bool,
    username:PropTypes.string
  }
  UserGreeting.defaultProps ={
    isLoggedIn: false,
    username: "Guest"
  }
   export default UserGreeting