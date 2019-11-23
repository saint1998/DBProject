export default (state = [], action) => {
  switch (action.type) {
    case "EMPLOYEES":
      return action.payload;
    default:
      return state;
  }
};
