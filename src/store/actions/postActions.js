// export const createPost = post => {
//   return {
//     type: "CREATE_POST",
//     post: post
//   };
// };

export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call here

    //get firebase database object called firestore
    const firestore = getFirestore();
    //get user details from the state
    const profile = getState().firebase.profile;
    //get auth id from the state
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("post")
      .add({ ...post, authorName: profile.username, authorId: authorId })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_ERROR_POST", err });
      });
  };
};
