import React, { useState } from "react";

import Button from "components/Button";

import InterviewerList from "components/InterviewerList";
import useVisualMode from "hooks/useVisualMode";

/* PROPS
name:String
interviewers:Array
interviewer:Number
onSave:Function
onCancel:Function
*/
const SHOW = "SHOW";

export default function Form(props) {
  const { mode, transition, back } = useVisualMode(SHOW);
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setName("");
    setInterviewer(null);
    props.onCancel();
  };

  // Input error check
  function validate() {
    if (!name) {
      setError("Student name cannot be blank. Please enter a name.");
      return;
    }
    if(!interviewer) {
      setError("An interviewer must be selected. Please select an interviewer.");
      return;
    }
    setError("");
    props.onSave(name, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </form>
        {error && <p>({error})</p>}
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        
        <section className="appointment__actions">
          <Button danger onClick={reset}>
            Cancel
          </Button>
          <Button confirm onClick={() => // validate input field prior save
            validate()
            //props.onSave(name, interviewer)
          }>
          Save</Button>
        </section>
      </section>
    </main>
  );
}
