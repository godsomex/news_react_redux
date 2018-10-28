const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotifications = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(post => console.log("notification added", post));
};

exports.postPosted = functions.firestore
  .document("post/{postId}")
  .onCreate(post => {
    const posts = post.data();
    const notification = {
      content: "posted a new article",
      user: `${posts.authorName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotifications(notification);
  });

exports.newUserAlert = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(newuser => {
      const newUser = newuser.data();
      const notification = {
        content: "New Techie Joined",
        user: `${newUser.authorName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotifications(notification);
    });
});
