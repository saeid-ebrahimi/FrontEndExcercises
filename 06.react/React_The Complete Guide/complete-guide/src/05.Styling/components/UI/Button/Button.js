import React from 'react';
import styled from "styled-components";
import  styles from "./Button.module.css"

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
