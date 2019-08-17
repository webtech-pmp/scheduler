// Dependencies
import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";

import useVisualMode from "hooks/useVisualMode";
import axios from "axios";

/* PROPS
id: key
time: time
*/

//CONST

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const CONFIRM = "CONFIRM";
const DELETE = "DELETE";
const EDIT = "EDIT";
const SAVE = "SAVE";
const confirmMessage = "Are your sure you would like to delete?";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVE);
    props.bookInterview(props.id, interview).then(() => transition(SHOW));
  }

  function onDelete(event) {
    const interview = null;
    transition(DELETE, true);
    props.deleteInterview(props.id, interview).then(() => transition(EMPTY));
  }

  return (
    <article className="appointment" key={props.id}>
      <Header time={props.time} />

      {mode === EMPTY && (
        <Empty
          onAdd={() => {
            transition(CREATE);
          }}
        />
      )}

      {mode === SAVE && <Status message="Saving" />}

      {mode === DELETE && <Status message="Deleting" />}

      {mode === EDIT && (
        <Form
          onSave={(name, interviewer) => save(name, interviewer)}
          onCancel={() => {
            transition(SHOW);
          }}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
        />
      )}

      {mode === SHOW && (
        <Show
          appointment={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => {
            transition(EMPTY);
          }}
          onSave={save}
        />
      )}

      {mode === CONFIRM && (
        <Confirm
          message={confirmMessage}
          onCancel={() => {
            transition(SHOW);
          }}
          onConfirm={onDelete}
        />
      )}
    </article>
  );
}
