import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
   const buttonClass = classNames("button", {
      "button--danger": props.danger,
      "button--confirm": props.confirm
   });

   return ( 
      <button 
      className = {buttonClass} 
      onClick = {props.onClick}
      disabled = {props.disabled}
      > 
      {props.children}
      </button>
   );
}