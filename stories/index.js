import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";

import DayListItem from "components/DayListItem";
import DayList from "components/DayList";

import InterviewerListItem from "components/InterviewerListItem";
import InterviewList from "components/InterviewerList";

// Button
storiesOf("Button", module)
  .addParameters({
    backgrounds: [
      {
        name: "dark",
        value: "#222f3e",
        default: true
      }
    ]
  })
  .add("Base", () => <Button> Base </Button>)
  .add("Confirm", () => <Button confirm> Confirm </Button>)
  .add("Danger", () => <Button danger> Cancel </Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}> Clickable </Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled{" "}
    </Button>
  ));

// DayListItem
storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [
      {
        name: "dark",
        value: "#222f3e",
        default: true
      }
    ]
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />)
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />)
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} />
  ));
// Day status placeholder data
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0
  }
];
// DayList
storiesOf("DayList", module)
  .addParameters({
    backgrounds: [
      {
        name: "dark",
        value: "#222f3e",
        default: true
      }
    ]
  })
  .add("Monday", () => (
    <DayList days={days} day={"Monday"} setDay={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
  ));

// Interviewer placeholder data
const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};
//InteriewerListItem
storiesOf("InterviewerListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
    />
  ))
  .add("Selected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected
    />
  ))
  .add("Clickable", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={action("setInterviewer")}
    />
  ));
  