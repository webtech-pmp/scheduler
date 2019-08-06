import React from "react";

import DayListItem from "components/DayListItem";

/*  PROPS
days:Array a list of day objects
day:String the currently selected day
setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
*/

export default function DayList(props) {
  return (
    <div>
      {props.days.map(day => {
        return (
          <DayListItem
            key={day.id}
            selected={day.name === props.day}
            name={day.name}
            spots={day.spots}
            setDay={() => props.setDay(day.name)}
          />
        );
      })}
    </div>
  );
}
