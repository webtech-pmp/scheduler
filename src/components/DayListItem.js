import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

function Spot(count) {
  if (count === 0) {
    return "no spots remaining";
  } else if (count === 1) {
    return "1 spot remaining";
  } else {
    return count + " spots remaining";
  }
}

export default function DayListItem(props) {
  const dayListClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected
  });
  return ( 
    <div 
    className = {dayListClass} onClick={props.setDay}> 
    <h2>{props.name}</h2>
    <p>{Spot(props.spots)} </p> 
    </div>);
  }