const initialState = { authError: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login success");
      return { ...state, authError: null };

    case "LOGIN_ERROR":
      return { ...state, authError: "login failed" };

    case "LOG_OUT_SUCCESS":
      console.log("signout success");
      return state;

    default:
      return state;
  }
};

export default authReducer;
