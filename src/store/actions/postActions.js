// export const createPost = post => {
//   return {
//     type: "CREATE_POST",
//     post: post
//   };
// };

export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call here
    const firestore = getFirestore();
    firestore
      .collection("post")
      .add({ ...post, auhtorName: "Godspower", authorId: 54321 })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_ERROR_POST", err });
      });
  };
};
