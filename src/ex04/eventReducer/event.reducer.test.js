import eventReducer, { initialState } from "./event.reducer";

describe("eventReducer", () => {
  it("should handle CREATE_EVENT action", () => {
    const newEvent = {
      id: 1,
      name: "Birthday Party",
      date: "2023-08-20",
      attendees: []
    };
    const action = {
      type: "CREATE_EVENT",
      payload: newEvent
    };
    const expectedState = {
      events: [newEvent]
    };
    expect(eventReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle CANCEL_EVENT action", () => {
    const stateWithEvent = {
      events: [
        { id: 1, name: "Birthday Party", date: "2023-08-20", attendees: [] }
      ]
    };
    const action = {
      type: "CANCEL_EVENT",
      payload: { id: 1 }
    };
    expect(eventReducer(stateWithEvent, action)).toEqual(initialState);
  });

  it("should handle ADD_ATTENDEE action", () => {
    const stateWithEvent = {
      events: [
        { id: 1, name: "Birthday Party", date: "2023-08-20", attendees: [] }
      ]
    };
    const action = {
      type: "ADD_ATTENDEE",
      payload: { eventId: 1, attendee: "John" }
    };
    const expectedState = {
      events: [
        {
          id: 1,
          name: "Birthday Party",
          date: "2023-08-20",
          attendees: ["John"]
        }
      ]
    };
    expect(eventReducer(stateWithEvent, action)).toEqual(expectedState);
  });

  it("should handle REMOVE_ATTENDEE action", () => {
    const stateWithEventAndAttendee = {
      events: [
        {
          id: 1,
          name: "Birthday Party",
          date: "2023-08-20",
          attendees: ["John"]
        }
      ]
    };
    const action = {
      type: "REMOVE_ATTENDEE",
      payload: { eventId: 1, attendee: "John" }
    };
    const expectedState = {
      events: [
        { id: 1, name: "Birthday Party", date: "2023-08-20", attendees: [] }
      ]
    };
    expect(eventReducer(stateWithEventAndAttendee, action)).toEqual(
      expectedState
    );
  });
});
