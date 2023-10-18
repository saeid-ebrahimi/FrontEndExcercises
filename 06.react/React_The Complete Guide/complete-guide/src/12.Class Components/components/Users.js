import {Component} from 'react';
// import { useState} from "react";
import User from './User';
import classes from './Users.module.css';

class Users extends Component{
  // cannot use hooks in class-based components
  constructor() {
    super();
    this.state = {
      showUsers:true,
      more:"Test"
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.users.length === 0){
          throw new Error("No users provided!");
      }
  }

    toggleUsersHandler(){
    this.setState((curState) => ({showUsers: !curState.showUsers}))
  }
 render() {
   const usersList = (
       <ul>
         {this.props.users.map((user) => (
             <User key={user.id} name={user.name} />
         ))}
       </ul>
   );
   return (
       <div className={classes.users}>
         <button onClick={this.toggleUsersHandler.bind(this)}>
           {this.state.showUsers ? 'Hide' : 'Show'} Users
         </button>
         {this.state.showUsers && usersList}
       </div>
   );
 }
}
/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};
*/
export default Users;
