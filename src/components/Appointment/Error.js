import React from "React";

/* PROPS
message:String eg. "Could not delete appointment."
onClose:Function to be called when the user clicks the Close button
*/

export default function Error(props) {
  return (
    <main class="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">Could not delete appointment</h3>
      </section>
      <img
        class="appointment__error-close"
        src="images/close.png"
        alt="Close"
      />
    </main>
  );
}
