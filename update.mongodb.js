use("IMDB");
// ?update operators :
// ? $set
// ? update name from "Alish" to "Laxman"
// db.football.updateOne({ name: "Alish" }, { $set: { name: "Laxman" } });

//? update name from Unique to Jibana and age to 21
//  db.football.updateOne({ name: "Unique" }, { $set: { name: "Jibana" } });
//  db.football.updateOne({ name: "Jibana" }, { $set: { age: 21 } });
// db.football.updateOne({ name: "Jibana" }, { $set: { contactNumber: "9854763217" } });

// db.football.updateMany(
//     { name: "Unique" },
//     [
//       { $set: { name: "Jibana" } },
//       { $set: { age: 21 } },
//     ]
//   );

// ? update name from "Prakash" to "Prithvi"
// ? age to 22 contactNumber to "9851023456"
// db.football.updateOne({ name: "Prakash" }, [
//   { $set: { name: "Prithvi" } },
//   { $set: { age: 22 } },
//   { $set: { contactNumber: "9851023456" } },
// ]);

// db.football.updateOne(
//     { name: "Prakash" },
//     {
//       $set: {
//         name: "Prithvi",
//         age: 22,
//         contactNumber: "9851023456"
//       }
//     }
//   );

// ? update name from "Nischal" to "Suvechha", age to 20 and number to "9865321478" and isNepali to true
// db.football.find({name:"Nischal"});

// db.football.updateOne(
//   { name: "Nischal" },
//   {
//     $set: {
//       name: "Suvechha",
//       age: 20,
//       contactNumber: "9865321478",
//       isNepali: true,
//     },
//   }
// );

// db.football.find();

// ? increase age of Jibana by 40
// db.football.updateOne({ name: "Jibana" }, { $inc: { age: 40 } });

// db.football.find({ name: "Jibana" });

// ? decrease age by 45
// db.football.updateOne({ name: "Jibana" }, { $inc: { age: -45 } });

// ? increase  age of all by 10
// db.football.updateMany({}, { $inc: { age: 10 } });

  db.football.find();


// ? $mul
// db.football.updateOne({ name: "Suvechha" }, { $mul: { age: 2 } });

// ? divide age of prithvi by 2
// db.football.updateOne(
//     { name:"Prithvi"},
//     {
//       $mul: {
//         age: 0.5
//       }
//     }
//   );
  














// ? Find all documents in the users collection where the hobbies array contains both "reading" and "gardening" and the array size is exactly 2.
