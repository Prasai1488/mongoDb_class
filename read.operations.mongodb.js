use("IMDB");

//  db.movies.find();

// ? movies with language Japanese
// db.movies.find({ language: "Japanese" });

// ?find movies whose runtime is less than 30
// db.movies.find({ runtime: { $lt: 30 } });

// ? runtime greater than 90
// db.movies.find({ runtime: { $gt: 90 } });

// ? find movies whose rating is less than or equal to 6
//  db.movies.find({ "rating.average": { $lte: 6 } });

// ? movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

// ? movies whose weight is not 75
// db.movies.find({ weight: { $ne: 75 } });

//? find movies where genres includes "Crime"
// db.movies.find({ genres: "Crime" });

// ? Logical operator usind $and
// ? find movies whose weight is greater than 75 and rating is greater than 7
// db.movies.find({
//   $and: [{ weight: { $gt: 75 } },{"rating.average":{$gt: 7}}],
// });

// ? find movies whose genre is "Drama" and "Crime"
// db.movies.find({
//   $and: [{ genres: "Drama" }, { genres: "Crime" }],
// });

// ? find movies whose network country name is "United States" and status is "Running"
// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });

// ? find movies whose rating is greater than 7 and less than equal to 9
//  db.movies.find({ "rating.average": { $gt: 7, $lte: 9 } });

// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],
// });

// ? $or Logical operator
// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "Thriller" }],
// });

// ? find movies whose id is less than 5 or runtime is $lt 30
// db.movies.find({
//   $or: [{ id: { $lt: 5 } }, { runtime: { $lt: 30 } }],
// });

//?Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({ "rating.average": { $gt: 7, $lt: 9 } });

// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });

// ?find movies whose status is Running
// db.movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({ status: "Ended", runtime: 60 });

// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({ weight: 75 }, { "network.country.name": "Canada" });

// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({
//   $or: [{ weight: 96 },{runtime:60}],
// });

// ? find movies whose rating average is not 9
//  db.movies.find({ "rating.average": { $ne: 9 } });

// ? movies whose genres not includes "Thriller"
// db.movies.find({ genres: { $ne: "Thriller" } });

// ? find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

// ?$nor
// ? movies whose genre is neither "Thirller" nor "Drama"
// db.movies.find({ $nor: [{ genres: "Thriller" }, { genres: "Drama" }] });

// ? whose status is neither ended nor language is "English"
// db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });




// ! WE CAN USE $IN or $NIN IF THE COMPARISON IS DONE IN SAME FIELD:
// ? movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9 or 9.3 using $in
// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

// db.movies.find({ genres: { $in: ["Thriller", "Action"] } });

// ? find movies whose genres is neither "Thriller" nor "Crime" nor "Supernatural"
db.movies.find({
  genres: {
    $nin: ["Thriller", "Crime", "Supernatural"],
  },
});

// db.movies.find({
//   $nor: [{ genres: "Thriller" }, { genres: "Crime" }, { genres: "Supernatural" }],
// });
