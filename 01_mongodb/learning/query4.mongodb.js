use("sample_mflix");

// Exercise 4

// 4.1) How many movies mentioned American in their plot?
db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();

// 4.2) How many movies does end plot (sentence) with the word street.
db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count();

// 4.3) What does the data of above examples look like?
db.movies.findOne({ plot: { $regex: "street.$", $options: "i" } });
