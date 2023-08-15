export const initialState = {
  events: []
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case "CANCEL_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload.id)
      };
    case "ADD_ATTENDEE":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.eventId
            ? {
                ...event,
                attendees: [...event.attendees, action.payload.attendee]
              }
            : event
        )
      };
    case "REMOVE_ATTENDEE":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.eventId
            ? {
                ...event,
                attendees: event.attendees.filter(
                  (att) => att !== action.payload.attendee
                )
              }
            : event
        )
      };
    default:
      return state;
  }
}

export default eventReducer;
