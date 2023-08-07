import React from 'react';
import styled from "styled-components";
// import './ButtonV1-v1.css';
const ButtonV1 = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  @media (min-width: 760px){
    width: auto;
  }
  &:focus {
  outline: none;
  }
  &:hover,
  &:active {
      background: #ac0e77;
      border-color: #ac0e77;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
`;
// const ButtonV1 = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default ButtonV1;
