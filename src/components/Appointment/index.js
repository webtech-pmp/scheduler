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
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";
const confirmMessage = "Are you sure you would like to delete?";

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

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function onDelete(event) {
    transition(DELETE, true);
    props
      .deleteInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
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
          onCancel={back}
          name={props.interview.student}
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
          onEdit={() => transition(EDIT)}
        />
      )}

      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}

      {mode === CONFIRM && (
        <Confirm
          message={confirmMessage}
          onCancel={back}
          onConfirm={onDelete}
        />
      )}

      {mode === ERROR_SAVE && (
        <Error
          message="Unable to save"
          onClose={() => {
            back();
          }}
        />
      )}

      {mode === ERROR_DELETE && (
        <Error
          message="Unable to delete"
          onClose={() => {
            back();
          }}
        />
      )}
    </article>
  );
}
