import React from "react";

/*  PROPS
time: String eg. "12 pm"
*/

export default function Header(props) {
  
  return (

   <header class="appointment__time">
    <h4 class="text--semi-bold">12pm</h4>
    <hr class="appointment__separator" />
  </header>
  )
}