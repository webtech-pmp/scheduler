import React from "react";

/* PROPS
onAdd:Function to be called when the user clicks the Add button
*/

export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img 
        className="appointment__add-button" 
        src="images/add.png" 
        alt="Add"
        onClick={props.onAdd}
       />
    </main>
  );
}
