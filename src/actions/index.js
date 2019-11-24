import api from "../apis";

export const fetchEmployees = () => async (dispatch, getState) => {
  //const response = await api.get("/employees");
  const response = {
    data: [
      {
        Ssn: 1,
        First_name: "somchai",
        Last_name: "luklerd",
        Position: "Officer",
        Phone_number: "0812345678",
        Birthdate: "2541-01-01",
        Address: "Bangkok",
        Start_date: "2019-11-18",
        Dormitory_id: "1"
      },
      {
        Ssn: 2,
        First_name: "somying",
        Last_name: "luklean",
        Position: "Repair Man",
        Phone_number: "0887654321",
        Birthdate: "2542-02-02",
        Address: "Songkhla",
        Start_date: "2019-11-18",
        Dormitory_id: "2"
      }
    ]
  };
  dispatch({ type: "EMPLOYEES", payload: response.data });
};

export const fetchDormitories = () => async (dispatch, getState) => {
  //const response = await api.get("/domitories");
  const response = {
    data: [
      {
        Id: 1,
        Name: "chuanchom",
        Number_of_room: 25,
        Number_of_student: 100,
        Description: "have air con",
        Electricity_rate: 1.0,
        Water_rate: 1.0,
        Room_rate: 3500.0,
        Admin_id: "1"
      },
      {
        Id: 2,
        Name: "jumpa",
        Number_of_room: 30,
        Number_of_student: 100,
        Description: "no air con",
        Electricity_rate: 1.0,
        Water_rate: 1.0,
        Room_rate: 2500.0,
        Admin_id: "2"
      }
    ]
  };
  dispatch({ type: "DORMITORIES", payload: response.data });
};
