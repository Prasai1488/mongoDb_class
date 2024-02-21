use("netflix"); //database

// Create :
// db.movies.insertMany([
//   { name: "Cast Away", leadActor: "Tom Hanks", length: 120, releaseYear: 2002 },
//   {
//     name: "Batman",
//     leadActor: "Christian Bale",
//     length: 90,
//     releaseYear: 2000,
//   },
//   {
//     name: "Chakka Panja",
//     leadActor: "Dipak Raj Giri",
//     length: 180,
//     releaseYear: 2017,
//   },
//   {
//     name: "12th fail",
//     leadActor: "Vikrant Massey",
//     length: 90,
//     releaseYear: 2023,
//   },
// ]);

// ? Find movies whose length is 90:
// db.movies.find({ length: 90 });

// ?
// db.movies.findOne({ leadActor: "Vikrant Massey" });

// ? find movie whose name is "Chakka Panja"
// db.movies.findOne({ name: "Chakka Panja" });

// ? find movies which which was released in 2017
// db.movies.find({ releaseYear: 2017 });

// ?
// db.movies.updateOne(
//   { name: "Chakka Panja" },
//   { $set: { releaseYear: 2020 } } // Update the releaseYear to 2020
// );

// ? change batman to batman returns
// db.movies.updateOne(
//     { name: "Batman" },
//     { $set: { name: "Batman Returns" } } // Update the name to "Batman Returns"
// )

// ? change length of Cast away to 90
// db.movies.updateOne(
//   { name: "Cast Away" }, // Filter to find the movie "Cast away"
//   { $set: { length: 90 , releaseYear: 2000} } // Update the length to 90
// );

// ? update those movies whose length is 90 to 105
// db.movies.updateMany(
//   { length: 90 }, // Filter to find the movie with length 90
//   { $set: { length: 105 } } // Update the length to 105
// );

// ? delete movie whose main role is Dipak
// db.movies.deleteOne({ leadActor: "Dipak Raj Giri" });

// ? delete movies whose length is 105
// db.movies.deleteMany({ length: 105 });

//  db.movies.find();

//  db.movies.drop() to drop/delete an entire collection 

