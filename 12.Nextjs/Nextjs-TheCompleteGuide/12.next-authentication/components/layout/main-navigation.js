import Link from 'next/link';
import {useSession, signOut} from "next-auth/react";
import classes from './main-navigation.module.css';

function MainNavigation() {
  const {data:session, status:loading} =  useSession();
    console.log(session)
    async function logoutHandler(){
        await signOut()
    }
  return (
    <header className={classes.header}>
      <Link href='/'>
          <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
            {!session && !loading && <li>
                <Link href='/auth'>Login</Link>
            </li>}
          <li>
              {session && <Link href='/profile'>Profile</Link>}
          </li>
          <li>
              {session && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
