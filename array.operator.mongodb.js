use("IMDB");

// db.students.insertMany([
//     {
//       name: "Manish",
//       favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//       hobbies: [
//         {
//           name: "Badminton",
//           frequency: 5,
//         },
//         {
//           name: "PubG",
//           frequency: 7,
//         },
//         {
//           name: "Dancing",
//           frequency: 2,
//         },
//       ],
//     },

//     {
//       name: "Sona",
//       favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//       hobbies: [
//         {
//           name: "Singing",
//           frequency: 4,
//         },
//         {
//           name: "Football",
//           frequency: 5,
//         },
//         {
//           name: "Volleyball",
//           frequency: 3,
//         },
//       ],
//     },

//     {
//       name: "Arun",
//       favoriteSingers: ["Aatif", "Sushant", "Udit"],
//       hobbies: [
//         {
//           name: "PubG",
//           frequency: 5,
//         },
//         {
//           name: "Singing",
//           frequency: 7,
//         },
//         {
//           name: "Bikes",
//           frequency: 2,
//         },
//       ],
//     },
//   ]);

// db.students.insertOne({
//     name: "Rina",
//     favoriteSingers: ["Neha", "Tony"],
//     hobbies: [
//       {
//         name: "Dancing",
//         frequency: 10,
//       },
//     ],
//   });

//   db.students.find();

// ! Array read operations
//? $all (only works with array)
//? $elemMatch (works only with array)
//? $size (only with array)

// ? find students whose fav singer includes arijit and shreya:
// db.students.find({
//   favoriteSingers: { $all: ["Arijit", "Shreya"] },
// });

// ? find students who has only 2 favSinger
// db.students.find({ favoriteSingers: { $size: 2 } });

// ? students who has only 1 hobby
// db.students.find({ hobbies: { $size: 3 } });

//// db.students.find({
////   $and: [{ "hobbies.name": "PubG" }, { "hobbies.frequency": { $gt: 6 } }],
//// });

// ? hobies : PubG and frequency $gt : 6
// db.students.find({
//   hobbies: { $elemMatch: { name: "PubG", frequency: { $gt: 6 } } },
// });

// ? find students whose hobby is "Singing" and
// ? frequency is greater than or equals to 5
// db.students.find({
//   hobbies: { $elemMatch: { name: "Singing", frequency: { $gte: 5 } } },
// });



