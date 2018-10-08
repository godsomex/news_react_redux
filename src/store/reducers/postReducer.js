const initialState = {
  posts: [
    { id: "1", title: "first title", content: "we are the world" },
    { id: "2", title: "second title", content: "we are the world" },
    { id: "3", title: "3rd title", content: "we are the world" }
  ]
};
const postReducer = (state = initialState, action) => {
  return state;
};

export default postReducer;
