import React, {useState, useReducer, useEffect, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from "../UI/Input/Input";

import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if(action.type === "USER_INPUT"){
    return {value:action.val, isValid: action.val.includes('@')}
  }
  if(action.type === "INPUT_BLUR"){
    return {value:state.value, isValid: state.value.includes("@")}
  }
  return {value:"", isValid: false}
}

const passReducer = (state, action) => {
  if(action.type === "PASS_INPUT"){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }if(action.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value:"", isValid:false};
}

const Login = () => {
  const authCtx = useContext(AuthContext)
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer ,{value:"", isValid: null})

  const [passState, dispatchPass] = useReducer(passReducer, {value:"", isValid: null})

  const {isValid: emailIsValid} = emailState
  const {isValid: passIsValid} = passState

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passIsValid)
    },500)
    return () => {
      clearTimeout(identifier)
    }
  }, [emailIsValid, passIsValid])
  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT", val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type:"PASS_INPUT", val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPass({type:"INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passState.value);
    }else if(!emailIsValid){
      emailInputRef.current.focus();
    }else if(!passIsValid){
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
            type={"email"}
            label={"E-Mail"}
            id={"email"}
            isValid={emailIsValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            value={emailState.value}
            ref={emailInputRef}
        />
        <Input
            type={"password"}
            label={"Password"}
            id={"password"}
            isValid={passIsValid}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            value={passState.value}
            ref={passwordInputRef}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
