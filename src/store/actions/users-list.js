const usersRequested = () => {
  return {type: "FETCH_USERS_REQUESTED"};
};

const usersLoaded = (newItems) => {
  return {type: "FETCH_USERS_SUCCESS", payload: newItems};
};

const usersError = (error) => {
  return {type: "FETCH_USERS_FAILURE", payload: error};
};

const fetchUsers = (storeService, link, variant) => () => (dispatch) => {
  console.log(storeService, link, variant)
  dispatch(usersRequested());
  storeService
    .getResource(link, "", variant)
    .then((data) => dispatch(usersLoaded(data)))
    .catch((error) => dispatch(usersError(error)));
};

export {fetchUsers};
