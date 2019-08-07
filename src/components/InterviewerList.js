import React from "react";

import InterviewerListItem from "components/InterviewerListItem";

/* PROPS
interviewers: Array a list of interviewers
interviewer: current selected interviewer
setInterviewer: Function
*/

export default function InterviewerList(props) {
  return (
    <section class="interviewers">
      <h4 class="interviewers__header text--light">Interviewer</h4>
      <ul class="interviewers__list">
        {props.interviewers.map(interviewer => {
          return (
            <InterviewerListItem
              name={interviewer.name}
              avatar={interviewer.avatar}
              selected={props.value === interviewer.id}
              setInterviewer={() => props.setInterviewer(interviewer.name)}
            />
          );
        })}
      </ul>
    </section>
  );
}
