use("IMDB");

var documents = [
  {
    _id: 1,
    name: "iPhone 12",
    tags: ["electronics", "smartphone"],
  },
  {
    _id: 2,
    name: "Samsung Galaxy S21",
    tags: ["electronics", "smartphone", "android"],
  },
  {
    _id: 3,
    name: "Sony PlayStation 5",
    tags: ["electronics", "gaming"],
  },
];

// db.products.insertMany(documents);

// ?Find all documents in the products collection where the tags array contains both "electronics" and "smartphone".
// db.products.find({$and:[{tags:"electronics"},{tags:"smartphone"}]});
// db.products.find({ tags: { $all: ["electronics", "smartphone"] } });

documents = [
  {
    _id: 1,
    customer: "Alice",
    items: [
      { product_id: 101, quantity: 2 },
      { product_id: 102, quantity: 8 },
      { product_id: 103, quantity: 3 },
    ],
  },
  {
    _id: 2,
    customer: "Bob",
    items: [
      { product_id: 104, quantity: 5 },
      { product_id: 105, quantity: 6 },
      { product_id: 106, quantity: 4 },
    ],
  },
];

// db.orders.insertMany(documents);

// ?Find all documents in the orders collection where the items array contains at least one item with quantity greater than 5.
// db.orders.find({items:{$elemMatch:{quantity:{$gt:5}}}});
// db.orders.find({ "items.quantity": { $gt: 5 } });
// db.orders.find();

documents = [
  {
    _id: 1,
    name: "Alice",
    hobbies: ["reading", "gardening"],
  },
  {
    _id: 2,
    name: "Bob",
    hobbies: ["gardening", "cooking"],
  },
  {
    _id: 3,
    name: "Charlie",
    hobbies: ["reading", "gardening", "painting"],
  },
];

// db.users.insertMany(documents);
// ? Find all documents in the users collection where the hobbies array contains both "reading" and "gardening" and the array size is exactly 2.
// db.users.find({ hobbies: { $all: ["reading", "gardening"] } });

// db.users.find({
//   $and: [{ hobbies: { $all: ["reading", "gardening"] } },
//   {hobbies: { $size: 2 }}]
// });

// db.users.find();

// ? set the name of alice to Ram in users collection:
// db.users.updateOne({name:"Alice"},{$set:{name:"Christian"}});

// db.users.find();
// db.users.updateOne({ name: "Bob" }, { $unset: { hobbies: "" } });

db.orders.find();

// db.orders.updateMany({}, { $unset: { items: "" } });
