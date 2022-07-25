export const signUpAction = (data) => {
  return {
    type: "SIGN_UP",
    payload: data,
  };
};

export const deleteUserAction = (data) => {
  return {
    type: "DELETE_USER",
    payload: data,
  };
};

export const updateUserAction = (data) => {
  return {
    type: "UPDATE_USER",
    payload: data,
  };
};
