use("IMDB");

// ?pagination
// ? $skip
// ? $limit


db.movies.aggregate([
   {$match:{}},

  //  {
  //   $skip:5
  //  },

   {
    $limit:5
   },

   { $unwind: "$genres" },
   
  {
    $project: {
      _id: 0,
      id: 1,
      name: 1,
      genres:1,
      // averageRating:"$rating.average",
    },
  },
]);





// // db.movies.find();

