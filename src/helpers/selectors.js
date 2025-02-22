//Appointments
export function getAppointmentsForDay(state, day) {
  let result = [];
  let appointmentArray = "";
  for (let appointmentDay of state.days) {
    if (appointmentDay.name === day) {
      appointmentArray = appointmentDay.appointments;
      for (let appointmentNumber of appointmentArray) {
        result.push(state.appointments[appointmentNumber]);
      }
    }
  }
  return result;
}
// Interview
export function getInterview(state, interview) {
  if (interview) {
    const interview_Id = interview.interviewer;
    const interviewAppointment = { ...interview };
    interviewAppointment.interviewer = state.interviewers[interview_Id];
    return interviewAppointment;
  } else {
    return null;
  }
}
// Interviewers
export function getInterviewersForDay(state, day) {
  let result = [];
  for (let appointmentDay of state.days) {
    if (appointmentDay.name === day) {
      for (let interview_Id of appointmentDay.interviewers) {
        result.push(state.interviewers[interview_Id]);
      }
    }
  }
  return result;
}
