import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

/* PROPS
name:String the name of the day
spots:Number the number of spots remaining
selected:Boolean true or false declaring that this day is selected
setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
*/

function Spot(count) {
  if (count === 0) return "no spots remaining";
  if (count === 1) return "1 spot remaining";
  return `${count} spots remaining`;
}

export default function DayListItem(props) {
  const dayListClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected
  });
  return (
    <li className={dayListClass} onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text-light">{Spot(props.spots)} </h3>
    </li>
  );
}
