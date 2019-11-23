import api from "../apis";

export const fetchEmployees = () => async (dispatch, getState) => {
  //const response = await api.get("/employees");
  const response = {
    data: [
      { id: 1, name: "saint" },
      { id: 2, name: "kong" }
    ]
  };
  dispatch({ type: "EMPLOYEES", payload: response.data });
};

export const fetchDormitories = () => async (dispatch, getState) => {
  //const response = await api.get("/domitories");
  const response = {
    data: [
      { id: 1, name: "ChuanChom" },
      { id: 2, name: "JumPa" }
    ]
  };
  dispatch({ type: "DORMITORIES", payload: response.data });
};
