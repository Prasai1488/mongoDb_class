use("IMDB");

// db.teachers.insertOne({
//   name: "Sambhav",
//   hobbies: ["Cycling", "Dancing", "Singing", "Book"],
// });

db.teachers.aggregate([{ $unwind: "$hobbies" }]);
