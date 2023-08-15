import employeeReducer, { initialState } from "./employee.reducer";

describe("employeeReducer", () => {
  it("should handle ADD_EMPLOYEE action", () => {
    const newEmployee = {
      id: 1,
      name: "John Doe",
      role: "Developer",
      salary: 50000
    };
    const action = {
      type: "ADD_EMPLOYEE",
      payload: newEmployee
    };
    const expectedState = {
      employees: [newEmployee]
    };
    expect(employeeReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_SALARY action", () => {
    const initialStateWithEmployee = {
      employees: [{ id: 1, name: "John Doe", role: "Developer", salary: 50000 }]
    };
    const action = {
      type: "UPDATE_SALARY",
      payload: { id: 1, salary: 55000 }
    };
    const expectedState = {
      employees: [{ id: 1, name: "John Doe", role: "Developer", salary: 55000 }]
    };
    expect(employeeReducer(initialStateWithEmployee, action)).toEqual(
      expectedState
    );
  });

  it("should handle REMOVE_EMPLOYEE action", () => {
    const initialStateWithEmployee = {
      employees: [{ id: 1, name: "John Doe", role: "Developer", salary: 50000 }]
    };
    const action = {
      type: "REMOVE_EMPLOYEE",
      payload: { id: 1 }
    };
    expect(employeeReducer(initialStateWithEmployee, action)).toEqual(
      initialState
    );
  });

  it("should handle FILTER_EMPLOYEES action", () => {
    const initialStateWithEmployees = {
      employees: [
        { id: 1, name: "John Doe", role: "Developer", salary: 50000 },
        { id: 2, name: "Jane Smith", role: "Manager", salary: 60000 },
        { id: 3, name: "Alice", role: "Developer", salary: 51000 }
      ]
    };
    const action = {
      type: "FILTER_EMPLOYEES",
      payload: { role: "Developer" }
    };
    const expectedState = {
      employees: [
        { id: 1, name: "John Doe", role: "Developer", salary: 50000 },
        { id: 3, name: "Alice", role: "Developer", salary: 51000 }
      ]
    };
    expect(employeeReducer(initialStateWithEmployees, action)).toEqual(
      expectedState
    );
  });
});
