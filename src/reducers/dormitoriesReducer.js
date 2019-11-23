export default (state = [], action) => {
  switch (action.type) {
    case "DORMITORIES":
      return action.payload;
    default:
      return state;
  }
};
