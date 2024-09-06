import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import {signIn} from "next-auth/react";


async function createUser(email,password){
  const response = await fetch("/api/auth/signup", {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
  });
  const data = await response.json()
  if (!response.ok){
    throw new Error(data.message || 'Something went wrong!')
  }
  return data
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }
  async function submitHandler(event){
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    if (isLogin){
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword
      });

      console.log(result);
    }
    else{
        try {
          const result = await createUser(enteredEmail,enteredPassword)
        }catch (error){
          console.log(error)
        }
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button type={"submit"}>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
