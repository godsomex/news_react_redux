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

    case "SIGNUP_SUCCESS":
      console.log("profile created ");
      return { ...state, authError: null };

    case "SIGNUP_ERROR":
      console.log("signup error ");
      return { ...state, authError: action.err.message };

    default:
      return state;
  }
};

export default authReducer;
