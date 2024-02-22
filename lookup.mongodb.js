use("IMDB");

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

// db.students.aggregate([
//   { $match: {} },
//   {
//     $lookup: {
//       from: "courses",
//       localField: "enrolledCourseIds",
//       foreignField: "_id",
//       as: "CourseDetails",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       "CourseDetails.name": 1,
//     },
//   },
// ]);


