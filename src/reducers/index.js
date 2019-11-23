import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import dormitoriesReducer from "./dormitoriesReducer";

export default combineReducers({
  employees: employeesReducer,
  dormitories: dormitoriesReducer
});
