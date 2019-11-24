import api from "../apis";

export const fetchEmployees = () => async (dispatch, getState) => {
  const response = await api.get("/employees");
  dispatch({ type: "EMPLOYEES", payload: response.data });
};

export const fetchDormitories = () => async (dispatch, getState) => {
  const response = await api.get("/dormitories");
  dispatch({ type: "DORMITORIES", payload: response.data });
};

export const updateEmployee = (id, position, dormitory_id) => async (
  dispatch,
  getState
) => {
  let body = JSON.stringify({ Position: position, Dormitory_id: dormitory_id });
  try {
    const response = await api.put(`/employees/${id}`, body, {
      headers: { "Content-type": "application/json" }
    });
  } catch (e) {
    window.alert(`Cannot Update This Employee\nThis EMPLOYEE has been updated`);
  }
};

export const deleteEmployee = id => async (dispatch, getState) => {
  try {
    const response = await api.delete(`/employees/${id}`);
  } catch (e) {
    window.alert(`Cannot Delete This Employee`);
  }
};

export const createEmployee = data => async (dispatch, getState) => {
  let body = JSON.stringify(data);
  try {
    const response = await api.post("/employees", body, {
      headers: { "Content-type": "application/json" }
    });
  } catch (e) {
    window.alert("Cannot Create the EMPLOYEE");
  }
};

export const getEmployeesInDormitory = dormitory_id => async (
  dispatch,
  getState
) => {
  const response = await api.get(`/dormitories/${dormitory_id}/employees`);
  return response.data;
};
