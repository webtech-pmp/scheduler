import React from "react";

// import classNames from "classnames";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  
  return (  
    <div>
      {props.days.map((day)=>{
        return <DayListItem
                  selected = {
                    day.name === props.day
                  }
                  id = {
                    day.id
                  }
                  name = {
                    day.name
                  }
                  spots = {
                    day.spots
                  }
                  setDay={() => props.setDay(day.name)}
                  />
      })}
      
    </div>

/* 
map?
id = {days.id} , name = {days.name}, spots = {days.spots} 

*/
    );
}

/* 
          days ={[]}
          day = {day.name === props.day} 
          setDay = {
            props.setDay
          }*/