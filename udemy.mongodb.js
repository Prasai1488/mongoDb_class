use("Udemy"); //?name of the database(db) is Udemy here

//? Create collection using many:
// db.courses.insertMany([
//   {
//     name: "Web Development Bootcamp",
//     duration: "10 weeks",
//     price: 99,
//     ratings: 4.9,
//   },
//   {
//     name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
//     duration: "8 weeks",
//     price: 129,
//     ratings: 4.7,
//   },
//   {
//     name: "The Complete JavaScript Course 2024: Build Real Projects!",
//     duration: "6 weeks",
//     price: 89,
//     ratings: 4.6,
//   },
//   {
//     name: "Python for Data Science and Machine Learning Bootcamp",
//     duration: "12 weeks",
//     price: 149,
//     ratings: 4.8,
//   },
//   {
//     name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
//     duration: "8 weeks",
//     price: 89,
//     ratings: 4.9,
//   },
// ]);

//? Lets create another collection called freeCourses:
// db.freeCourses.insertMany([
//   {
//     name: "Introduction to Python Programming",
//     duration: "4 weeks",
//     ratings: 4.3,
//   },
//   { name: "HTML5 and CSS3 Fundamentals", duration: "3 weeks", ratings: 4.2 },
//   {
//     name: "JavaScript Basics for Beginners",
//     duration: "4 weeks",
//     ratings: 4.4,
//   },
// ]);

//? Lets find the documents with rating 4.9 from courses collection
// db.courses.find({ ratings: 4.9 });

//? Lets find one document with ratings 4.3 from freeCourses table:
// db.freeCourses.findOne({ ratings: 4.3 });

//? Lets update some document from freeCourses collection with the document named "JavaScript Basics for Beginners"
// db.freeCourses.updateOne(
//   { name: "JavaScript Basics for Beginners" },
//   {
//     $set: {
//       duration: "6 weeks",
//       ratings: 5.0,
//     },
//   }
// );

// find all documents from the collection called Free courses:
// db.freeCourses.find();

// ? lets create one last collection called author
// db.authors.insertMany([
//   { name: "Jhon Doe", age: 40, experience: "10 years" },
//   { name: "Jack Smith", age: 30, experience: "10 years" },
//   { name: "Sam Sulek", age: 29, experience: "5 years" },
// ]);

// ? Lets add a new field called retaledField into a document inside authors collection:
// db.authors.updateOne(
//   { name: "Sam Sulek" },
//   {
//     $set: {
//       retaledField: "Python teacher",
//     },
//   }
// );

// ? lets add a new field called relatedField inside documents of authors:
// db.authors.updateMany(
//   { experience: "10 years" },
//   {
//     $set: {
//       relatedField: "React teacher",
//     },
//   }
// );

//? lets delete those documents having the ratings of 4.9 inside courses collection:
// db.courses.deleteMany({ ratings: 4.9 });

// ? lets find those documents with price range between $100 to $200 from courses collection
// db.courses.find({ price: { $gte: 100, $lte: 200 } })



//   db.courses.find();
