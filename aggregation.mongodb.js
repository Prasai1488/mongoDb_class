use("IMDB");

// ? pipeline stages
// ?$match
// ?$sort
// ?$limit
// ?$skip
// ?$project
// ?$group
// ?unwind
// ?$lookup

// ? $match: Filters documents based on specified conditions.
// ? $project: Shapes the output by including or excluding specific fields
// ? $sort : stage in MongoDB’s aggregation pipeline allows you to sort documents based on specified fields


db.movies.aggregate([
  // Stage 1 : Lets use $match to filter documents based on our needs:
  {
    $match: {
      
      "rating.average": { $gte: 8 },
    },
  },
    

  //   Stage 2 : Lets use $project to get only those field we need:

  {
    $project: {
      _id: 0,
      name: 1,
      scheduleDay: { $first: "$schedule.days" },

      firstGenre: { $arrayElemAt: ["$genres", 0] },

      averageRating: "$rating.average",
    },
  },

  // {
    // Stage 3: Lets use sort
  //   $sort: {
  //     averageRating: -1,
  //   },
  // },

  {
    $limit: 5
  }
]);

// db.movies.find();
