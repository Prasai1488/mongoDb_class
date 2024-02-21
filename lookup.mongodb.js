use("IMDB");

// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshowr" },
// ]);

// db.vehicles.insertOne([
//   {
//     name: "FZ",
//     brand: "Yamaha",
//     cc: 250,
//     color: "blue",
//     ownerId: ObjectId("65d5a2dadbb63e6f596e5237"),
//   },
// ]);

// ? lookup:

// db.vehicles.aggregate([
//   { $match: {} },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
// ]);

// !NEW :

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: "90",
//   },
//   {
//     name: "Python",
//     duration: "45",
//   },{
//     name: "Devops",
//     duration: "65",
//   },{
//     name: "AI",
//     duration: "90",
//   },{
//     name: "Flutter",
//     duration: "55",
//   },
// ]);

// db.students.insertOne({
//   name: "Rina",
//   address: "Kalanki",
//   email: "rina@gmail.com",
//   enrolledCourseIds: [
//     ObjectId("65d5a99f326eb52aa2ce2fba"),
//     ObjectId("65d5a99f326eb52aa2ce2fbb"),
//   ],
// });

// ? Lets use $lookup to join these two collection

db.students.aggregate([
  { $match: {} },
  {
    $lookup: {
      from: "courses",
      localField: "enrolledCourseIds",
      foreignField: "_id",
      as: "CourseDetails",
    },
  },
  {
    $project: {
      name: 1,
      _id: 0,
      "CourseDetails.name": 1,
    },
  },
]);
