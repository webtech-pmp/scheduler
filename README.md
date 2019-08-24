# Interview Scheduler

This \***\*S\*\***ingle \***\*P\*\***age \***\*A\*\***pplication uses `React Hooks` instead of `class` components.

This React application allows users to book and cancel interviews.

The SPA uses `Jest` as the test framework and `Storybook` as the visual testbed for individual component building.

The Scheduler client application uses `Create React App`. The Scheduler API server application uses `Express`.

The client [http://localhost:3000/](http://localhost:3000/) and back-end [http://localhost:3001/](http://localhost:3001/)server run concurrently. Requests are proxied from the Webpack development server to the API server.

# Technical Specifications

- React
- Webpack
- Axios
- Storybook
- Jest

# Getting Started

## Setup

1. Fork repository
2. Clone your fork of this repository
3. Install dependencies with `npm install`.
4. Start the web server with `npm start`.
5. View on browser: [http://localhost:3000/](http://localhost:3000/)

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

# Dependencies

- React
- React-DOM
- axios
- @testing-library/react-hooks

# Final Product

!["Screenshot of Homepage"](https://github.com/webtech-pmp/scheduler/blob/master/docs/initial-view.png)

> Figure 1. Homepage (Initial View)

!["Screenshot of on hover (existing appointment)"](https://github.com/webtech-pmp/scheduler/blob/master/docs/on-hover-existing.png)

> Figure 2. On Hover: Existing Appointment

!["Screenshot of adding appointment"](https://github.com/webtech-pmp/scheduler/blob/master/docs/add-interview.png)

> Figure 3. Add Appointment

!["Screenshot of appointment information"](https://github.com/webtech-pmp/scheduler/blob/master/docs/add-interview-info.png)

> Figure 4. Appointment Information

!["Screenshot of Delete Confirmation message"](https://github.com/webtech-pmp/scheduler/blob/master/docs/confirm-delete.png)

> Figure 5. Delete Confirmation message

!["Screenshot of error message when no student name is input"](https://github.com/webtech-pmp/scheduler/blob/master/docs/error-message-if-no-student-selected.png)

> Figure 6. Error message: no student name input

!["Screenshot of error message when no interviewer is selected"](https://github.com/webtech-pmp/scheduler/blob/master/docs/error-message-if-no-interviewer.png)

> Figure 7. Error message: no interviewer selected
