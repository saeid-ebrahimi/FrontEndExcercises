import { useState } from 'react';
import UserList from './UserList';
import './App.css';
import UserForm from './UserForm';
export type User = { email: string; name: string }

function App() {
  const [users, setUsers] = useState<User[]>([])

  const onAddUser = (user: User) => {
    setUsers([...users, user])
  }
  return (
    <div className="App">
      <UserForm onAddUser={onAddUser} />
      <hr style={{ width: "100%" }} />
      <UserList users={users} />
    </div>
  );
}

export default App;
