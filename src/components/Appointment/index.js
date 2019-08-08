import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";

import classNames from "classnames";

/* PROPS
id: key
time: time
*/

export default function Appointment(props) {
  return (
    <article className="appointment" key={props.id}>
      <Header time={props.time} />
      {!props.interview && <Empty />}
      {props.interview && 
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        />}
    </article>
  );
}
