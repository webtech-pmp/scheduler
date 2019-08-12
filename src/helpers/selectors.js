export function getAppointmentsForDay(state, day) {
  let result = [];
  let appointmentArray = '';
  for (let appointmentDay of state.days) {
    if (appointmentDay.name === day) {
      appointmentArray = appointmentDay.appointments
      for (let appNumber of appointmentArray) {
        result.push(state.appointments[appNumber])
      }
    }
  }
  return result;
}
