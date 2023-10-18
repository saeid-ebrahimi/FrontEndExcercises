import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
const INITIAL_USERS = [ {name:"Alex", age: "26", id:"0.98"}, {name: "Max", age:"30", id:"0.82"}]
function App() {
    const [usersList, setUsersList] = useState(INITIAL_USERS);
    const addUserHandler = (userName, userAge) => {
        setUsersList( (prevState) => ([...prevState, {name: userName, age:userAge, id: Math.random().toString()}]))
    }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
