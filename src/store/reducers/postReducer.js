const initialState = {
  posts: [
    { id: "1", title: "first title", content: "we are the world" },
    { id: "2", title: "second title", content: "we are the world" },
    { id: "3", title: "3rd title", content: "we are the world" }
  ]
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("post created", action.post);
      return state;

    case "CREATE_ERROR_POST":
      console.log(" error encountered ", action.err);
      return state;

    default:
      return state;
  }
};

export default postReducer;
