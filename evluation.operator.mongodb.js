use("IMDB");

// ? evaluation operators:
// ? $regex
// ? $expr

// ? find movies whose summary includes "Starling City"
// db.movies.find({ summary: { $regex: "Starling City", $options:"i" } });

// ? find movies whose summary included "Pacific"
// db.movies.find({ summary: { $regex: "pacific",$options:"i" } });

// ? movies whose name includes morty:
// db.movies.find({ name: { $regex: "morty", $options:"i" } });

// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);

// ? produts whose order is greater than volume:
// db.sales.find({
//   $expr: {
//     $gt: ["$order", "$volume"],
//   },
// });

// ? order greater than 50
// db.sales.find({
//     $expr: {
//       $gt: ["$order", 50],
//     },
//   });

// db.sales.find({ order: { $gt: 50 } });
