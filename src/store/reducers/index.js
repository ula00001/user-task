import usersList from "./users-list";

const reducer = (state, action) => {
  return {
    usersList: usersList(state, action),
  };
};

export default reducer;
