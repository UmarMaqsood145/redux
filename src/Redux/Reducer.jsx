const initialState = {
  userData: [],
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      const { id, data } = action.payload;
      return {
        ...state,
        userData: [...state.userData, { id, data }],
      };

    case "DELETE_USER":
      return {
        ...state,
        userData: action.payload,
      };

    case "UPDATE_USER":
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

export default signUpReducer;
