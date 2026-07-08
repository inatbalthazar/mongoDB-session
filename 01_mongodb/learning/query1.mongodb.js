use("sample_mflix");

// Exercise 1

// Fetch all documents from comments collection.
// db.comments.find();

// 1.1) Fetch only one user from comments collection by _id = ObjectId(“5a9427648b0beebeb69579f5”).
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5" )});

// 1.2) Fetch all users from comments collection by email = “john_bishop@fakegmail.com”.
db.comments.find({ email: "john_bishop@fakegmail.com" });

// 1.3) Fetch only one user from comments collection by name = “John Bishop”.
db.comments.findOne({ name: "John Bishop" });