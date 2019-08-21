// Dependencies
import { useReducer, useEffect } from "react";
import axios from "axios";

// Const
const SET_DAY = "SET_DAY";
const SET_DAYS = "SET_DAYS";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

export default function useApplicationData() {
  //will return an object with four keys:

  // The state object will maintain the same structure.
  // The setDay action can be used to set the current day.
  // The bookInterview action makes an HTTP request and updates the local state.
  // The cancelInterview action makes an HTTP request and updates the local state.

  const reducer = function(state, action) {
    switch (action.type) {
      case SET_DAY:
        return { ...state, day: action.day };

      case SET_DAYS:
        return { ...state, days: action.days };

      case SET_APPLICATION_DATA:
        return {
          ...state,
          days: action.days,
          appointments: action.appointments,
          interviewers: action.interviewers
        };

      case SET_INTERVIEW: {
        const appointment = {
          ...state.appointments[action.id],
          interview: action.interview && { ...action.interview } // if null set to null else spread to new object
        };
        const appointments = {
          ...state.appointments,
          [action.id]: appointment
        };

        return {
          ...state,
          appointments
        };
      }

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => dispatch({ type: SET_DAY, day });

  function bookInterview(id, interview) {
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview });
    });
  }

  function deleteInterview(id) {
    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        dispatch({ type: SET_INTERVIEW, id, interview: null });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then(response => {
        dispatch({
          type: SET_APPLICATION_DATA,
          days: response[0].data,
          appointments: response[1].data,
          interviewers: response[2].data
        });
    });
  }, []);

  return {
    state,
    setDay,
    dispatch,
    bookInterview,
    deleteInterview
  };
}
