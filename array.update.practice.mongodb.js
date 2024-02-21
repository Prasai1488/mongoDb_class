use("IMDB");

var document_1 = [
  {
    _id: ObjectId("61e20e24628425225a1e651d"),
    username: "user1",
    followers: ["userId2", "userId3"],
    following: ["userId4", "userId5"],
    likedPosts: ["postId1", "postId3"],
  },
  {
    _id: ObjectId("61e20e24628425225a1e651f"),
    username: "user2",
    followers: ["userId1"],
    following: ["userId3"],
    likedPosts: ["postId2"],
  },
];

var document_2 = [
  {
    _id: ObjectId("61e20e24628425225a1e651e"),
    userId: "userId1",
    content: "This is a sample post.",
    likes: ["userId2", "userId3", "userId5"],
  },
  {
    _id: ObjectId("61e20e24628425225a1e6520"),
    userId: "userId2",
    content: "Another sample post.",
    likes: ["userId1", "userId3"],
  },
];

// db.userss.insertMany(document_1);
// db.posts.insertMany(document_2);

// ? $push - Add a Follower: How would you use $push to add a new follower with the ID "userId6" to the user with the username "user1"?
// db.userss.updateOne({ username: "user1" }, { $push: { followers: "userId6" } });

// ? Using $addToSet, add the user with the ID "userId6" to the following array of the user with the username "user2". Ensure that duplicate entries are not added.
// db.userss.updateOne(
//   { username: "user2" },
//   { $addToSet: { following: "userId6" } }
// );

// ? Use $pull to remove the post with the ID "postId1" from the likedPosts array of the user with the username "user1".
// db.userss.updateOne(
//   { username: "user1" },
//   { $pull: { likedPosts: "postId1" } }
// );

// ? How would you use $push to add a new user with the ID "userId4" to the likes array of the post with the content "This is a sample post."?
// db.posts.updateOne(
//   { content: "This is a sample post." },
//   { $push: { likes: "userId4" } }
// );

// ?Using $pull, remove the user with the ID "userId3" from the likes array of the post with the content "Another sample post."
// db.posts.updateOne(
//   { content: "Another sample post." },
//   { $pull: { likes: "userId3" } }
// );

// ? inside likeposts of user2 of the users collection, add a new value called "postId8"
// db.userss.updateOne(
//   { username: "user2" },
//   { $push: { likedPosts: "postId8" } }
// );

// ? Use $pop to remove the last element from the likedPosts array of the user with the username "user2", representing the removal of the latest liked post.
//  db.userss.updateOne({ username: "user2" }, { $pop: { likedPosts: -1 } });

 db.userss.find({ username: "user2" });
