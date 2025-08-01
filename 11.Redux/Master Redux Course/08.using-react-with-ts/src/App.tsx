import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './components/UserForm'
import type { TUser } from './components/types'
import { UserTable } from './components/UserTable'

function App() {
  const [users, setUsers] = useState<TUser[]>([])

  return (
    <>
      <UserForm users={users} setUsers={setUsers} />
      <UserTable users={users} ><h1>All Users</h1> </UserTable>
    </>
  )
}

export default App
