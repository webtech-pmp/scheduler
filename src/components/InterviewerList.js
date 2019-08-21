import React from "react";

import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

/* PROPS
interviewers: Array a list of interviewers
interviewer: current selected interviewer
setInterviewer: Function
*/

export default function InterviewerList(props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map(interviewer => {
          return (
            <InterviewerListItem
              key={interviewer.id}
              name={interviewer.name}
              avatar={interviewer.avatar}
              selected={interviewer.id === props.interviewer}
              setInterviewer={() => props.onChange(interviewer.id)}
            />
          );
        })}
      </ul>
    </section>
  );
}
