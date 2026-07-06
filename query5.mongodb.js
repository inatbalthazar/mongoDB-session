use("sample_mflix");

// Exercise 5

// 5.1) What are top 5 runtime movies?
db.movies.find().sort({ runtime: -1 }).limit(5);

// 5.2) What are top 5 runtime movies that less than 60 minutes?
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5);

// 5.3) I was born in 1955, which 3 movies should I watch in next 10 years?
// db.movies.find({ year: { $gte: 1955, $lt: 1965 } }).limit(3); **คำตอบก่อนจะดูเฉลย ทำให้รู้ว่าต้อง sort year ไม่งั้นมันจะส่งมาไม่เรียงปี**
db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3);

// 5.4) How many movies were released during 1990 - 2000?
// db.movies.find({ year: { $gte: 1990, $lt: 2001 } }).count(); **คำตอบก่อนจะดูเฉลย เรียก field ผิด ต้องเป็น released**
db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count()