const updateUsersList = (state, action) => {
  if (state === undefined) {
    return {
      data: [],
      loading: false,
      success: false,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_USERS_REQUESTED":
      return {
        data: [],
        loading: true,
        success: false,
        error: null,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        data: action.payload,
        loading: false,
        success: true,
        error: null,
      };
    case "FETCH_USERS_FAILURE":
      return {
        data: [],
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state.usersList;
  }
};

export default updateUsersList;
