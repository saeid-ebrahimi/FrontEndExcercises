
import { useState } from 'react'
import { UserProfile } from './06.RefExplanation/08.ref-for-tracking-prev-prop/components/user-profile';

export default function App() {
  const [userId, setUserId] = useState(101);
  const [role, setRole] = useState("Member");
  return (
    <div style={{ padding: '20px' }}>
      <UserProfile userId={userId} role={role} />

      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <button onClick={() => setUserId((id) => id + 1)}>Change User ID</button>
        <button onClick={() => setRole((r) => (r === 'Member' ? 'Admin' : 'Member'))}>
          Toggle Role
        </button>
      </div>
    </div>
  )
};