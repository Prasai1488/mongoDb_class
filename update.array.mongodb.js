use("IMDB");

// ? $push

// db.football.find({ name: "Laxman" });
//  db.football.updateOne({ name: "Laxman" }, { $push: { hobbies: "Dancing" } });

// db.football.updateOne({ name: "Laxman" }, { $push: { hobbies: {$each:["Singing","Riding"]} } });

// ? $addToSet: push value to array if that item is not already there but does not add value if its already existing
// db.football.updateOne({ name: "Laxman" }, { $addToSet: { hobbies: "Dancing" } });

// db.football.updateOne({ name: "Laxman" }, { $addToSet: { hobbies: {$each:["Singing","Book"]} } });

// ? add Hiking and Cricket to hobbies of Prithvi:
// db.football.updateOne(
//   { name: "Prithvi" },
//   { $addToSet: { hobbies: { $each: ["Hiking", "Cricket"] } }
//  }
// );

// ? add Cycling and Driving to Jibanas wedding
// db.football.updateOne(
//     { name: "Jibana" },
//     { $addToSet: { hobbies: { $each: ["Cycling", "Driving"] } }
//    }
//   );

// ? add sub: English and point 61 to Suvechhas scores

// db.football.find({ name: "Suvechha" });

// db.football.updateOne(
//   { name: "Suvechha" },
//   {
//     $push: {
//       scores: {
//         $each: [{ sub: "English", point: 61 }],
//       },
//     },
//   }
// );

// ? $pop
//  db.football.updateOne({ name: "Laxman" }, { $pop: { hobbies: -1 } });

// ? remove last and first item from Jibanas scores
// db.football.updateOne({ name: "Jibana" }, { $pop: { scores: 1 } });

// db.football.updateOne({ name: "Jibana" }, { $pop: { scores: -1 } });

// ? $pull
// ? remove scores for Suvechha whose point is $gt 60
// db.football.updateOne(
//   { name: "Suvechha" },
//   {
//     $pull: {
//       scores: {
//         point: { $gt: 60 },
//       },
//     },
//   }
// );

// ? remove cycling from laxman hobbies
// db.football.updateOne({ name: "Laxman" }, { $pull: { hobbies: "Cycling" } });

// ! remove Cricket and Basketball from Prithvi hobbies
// db.football.updateOne(
//   { name: "Prithvi" },
//   { $pull: { hobbies: { $in: ["Cricket", "Basketball"] } } }
// );

// ? $pullAll
// db.football.updateOne(
//   {name:"Laxman"},
//   { $pullAll: { hobbies: ["Cricket", "Basketball"] } }
// );



db.football.findOne({ name: "Prithvi" });
