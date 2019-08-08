import React from "react";

/* PROPS
message:String eg. "Deleting"
*/

export default function Status(props) {
  return (
    <main class="appointment__card appointment__card--status">
      <img
        class="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 class="text--semi-bold">{props.message}</h1>
    </main>
  );
}
