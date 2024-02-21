use("IMDB");

// ! Todays Topic : Delete operation

// ? Delete movies whose genre includes "Drama" and "Thriller"
// db.movies.deleteMany({
//     genre: { $all: ["Drama", "Thriller"] }
//   })

// ? delete a movie whose name is "Manhattan Love Story"
// db.movies.deleteOne({ name: "Manhattan Love Story" });

// ? delete movies whose  network country us "Canada
// db.movies.deleteMany({
//   "network.country.name": "Canada",
// });

// ? delete movies whose rating is greater than 8 and less than or equal to 9
// db.movies.deleteMany({
//   "rating.average": {
//     $gt: 8,
//     $lte: 9,
//   },
// });

 db.movies.find();

 
