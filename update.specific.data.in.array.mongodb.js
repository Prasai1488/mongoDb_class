use("IMDB");

// ? Todays topic:
// ? $, $[], $[identifier]

// db.football.updateOne(
//   { _id: ObjectId("659fbbac8e46b28b92d7033c"), "scores.sub": "Social" },
//   { $set: { "scores.$.sub": "Nepali" } }
// );

// db.football.updateOne(
//   { name: "Laxman" },
//   { $pull: { scores: { sub: "Math" } } }
// );

// db.football.updateOne(
//   { name: "Laxman" },
//   { $push: { scores: { sub: "English", point: 90 } } }
// );

// db.football.updateOne(
//   { name: "Laxman", "scores.sub": "Science" },
//   { $set: { "scores.$.sub": "MERN" } }
// );

// ? $[]
// db.football.updateOne(
//   { name: "Laxman" },
//   { $set: { "scores.$[].point": 70 } }
// );

// ? decrease point of all sub by 10
// db.football.updateOne(
//   { name:"Laxman" },
//   { $inc: { "scores.$[].point": -10 } }
// );

// ? update Dancing to Hiking
// db.football.updateOne(
//   { name: "Laxman", hobbies: "Dancing" },
//   { $set: { "hobbies.$": "Hiking" } }
// );

// db.football.updateOne(
//   { name: "Laxman" },
//   { $set: { "scores.$[item].point": 40 } },
//   { arrayFilters: [{ "item.point": { $lt: 95 } }] }
// );

db.football.find({ name: "Laxman" });
