import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

/* PROPS
id: interviewer id (as number)
name:String the name of the interviewer
avatar: url for image (as string)
selected:Boolean true or false declaring that this interviewer is selected
*/

export default function InterviewerListItem(props) {
  const InterviewerListClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  return (
    <li className={InterviewerListClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {<span>{props.selected ? props.name : ""} </span>}
    </li>
  );
}
