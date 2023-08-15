export const initialState = {
  employees: []
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case "UPDATE_SALARY":
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id
            ? { ...emp, salary: action.payload.salary }
            : emp
        )
      };
    case "REMOVE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload.id)
      };
    case "FILTER_EMPLOYEES":
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.role === action.payload.role
        )
      };
    default:
      return state;
  }
}
export default employeeReducer;
