# 🍃 MongoDB Cheat Sheet

> รวมคำสั่ง MongoDB ที่ใช้งานบ่อย
---

## 📁 การจัดการฐานข้อมูล (Database)

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `show dbs` | แสดงฐานข้อมูลทั้งหมด |
| `db` | แสดงชื่อฐานข้อมูลปัจจุบัน |
| `use acme` | สร้างหรือสลับไปใช้ฐานข้อมูล `acme` |
| `db.dropDatabase()` | ลบฐานข้อมูลปัจจุบัน |

---

## 📦 การจัดการคอลเลกชัน (Collection)

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `db.createCollection('posts')` | สร้างคอลเลกชันชื่อ `posts` |
| `show collections` | แสดงคอลเลกชันทั้งหมด |

---

## ✍️ การเพิ่มข้อมูล (Insert)

### เพิ่มเอกสารเดี่ยว

```js
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

### เพิ่มเอกสารหลายรายการ

```js
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

---

## 🔍 การค้นหาข้อมูล (Query)

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `db.posts.find()` | ดึงข้อมูลทั้งหมด |
| `db.posts.find().pretty()` | ดึงข้อมูลทั้งหมด แสดงผล formatted |
| `db.posts.find({ category: 'News' })` | ค้นหาเอกสารที่ `category` เป็น `News` |
| `db.posts.findOne({ category: 'News' })` | ค้นหาเอกสารแรกที่ตรงเงื่อนไข |

### เลือกเฉพาะฟิลด์ที่ต้องการ

```js
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```
> **หมายเหตุ:** ใส่ `1` หมายถึงต้องการแสดงฟิลด์นั้น, `0` หมายถึงไม่ต้องการ

---

## 🔄 การเรียงลำดับ, จำกัดจำนวน, และนับ

### เรียงลำดับ (Sort)

```js
// น้อยไปมาก (ascending)
db.posts.find().sort({ title: 1 }).pretty()

// มากไปน้อย (descending)
db.posts.find().sort({ title: -1 }).pretty()
```

### จำกัดจำนวน (Limit)

```js
db.posts.find().limit(2).pretty()
```

### ต่อคำสั่งแบบลูกโซ่ (Chaining)

```js
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

### นับจำนวน (Count)

```js
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

### วนลูป (forEach)

```js
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

---

## ✏️ การแก้ไขข้อมูล (Update)

### อัปเดตเอกสาร (แทนที่ทั้งเอกสาร)

```js
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true   // ถ้าไม่เจอให้สร้างใหม่
})
```

### อัปเดตเฉพาะบางฟิลด์ (`$set`)

```js
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

### เพิ่มค่า (`$inc`)

```js
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5   // เพิ่มค่า likes ขึ้น 5
  }
})
```

### เปลี่ยนชื่อฟิลด์ (`$rename`)

```js
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'   // เปลี่ยนชื่อฟิลด์จาก likes เป็น views
  }
})
```

---

## 🗑️ การลบข้อมูล (Delete)

```js
db.posts.remove({ title: 'Post Four' })
```

---

## 📎 เอกสารย่อย (Sub-Documents)

### เพิ่ม sub-document

```js
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

### ค้นหาจาก element ใน array (`$elemMatch`)

```js
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
     }
  }
})
```

---

## 📊 ตัวดำเนินการเปรียบเทียบ (Comparison Operators)

| คำสั่ง | ความหมาย |
|--------|----------|
| `{ views: { $gt: 2 } }` | **มากกว่า** (greater than) 2 |
| `{ views: { $gte: 7 } }` | **มากกว่าหรือเท่ากับ** (greater than or equal) 7 |
| `{ views: { $lt: 7 } }` | **น้อยกว่า** (less than) 7 |
| `{ views: { $lte: 7 } }` | **น้อยกว่าหรือเท่ากับ** (less than or equal) 7 |
| `{ category: { $ne: "News" } }` | **ไม่เท่ากับ** (not equal) News |
| `{ category: { $in: ["News", "Tech"] } }` | **อยู่ในรายการ** |
| `{ category: { $nin: ["News", "Tech"] } }` | **ไม่อยู่ในรายการ** |

---

## 🧠 ตัวดำเนินการทางตรรกะ (Logical Operators)

| คำสั่ง | ความหมาย |
|--------|----------|
| `{ $and: [ { category: "News" }, { "user.name": "John" } ] }` | **และ** — ตรงทุกเงื่อนไข |
| `{ $or: [ { category: "News" }, { category: "Tech" } ] }` | **หรือ** — ตรงเงื่อนไขใดเงื่อนไขหนึ่ง |
| `{ $nor: [ { category: "News" }, { category: "Tech" } ] }` | **ไม่ตรงเลย** — ไม่ตรงทุกเงื่อนไข |

---

## 🔎 การค้นหาข้อความ (Text Search)

### สร้างดัชนีสำหรับข้อความ

```js
db.posts.createIndex({ title: 'text' })
```

### ค้นหาข้อความ

```js
db.posts.find({
  $text: {
    $search: "\"Post O\""
  }
})
```

---

## 🛠️ คำสั่งเพิ่มเติม (Extra)

### การจัดการดัชนี (Index Management)

```js
// ดูดัชนีทั้งหมด
db.posts.getIndexes()

// ลบดัชนี
db.posts.dropIndex({ title: 1 })
```

### อัปเดตและลบแบบใหม่ (MongoDB 3.2+)

```js
// อัปเดตเอกสารแรกที่ตรงเงื่อนไข
db.posts.updateOne(
  { title: "Post One" },
  { $set: { body: "Updated body" } }
)

// อัปเดตทุกเอกสารที่ตรงเงื่อนไข
db.posts.updateMany(
  { category: "News" },
  { $set: { category: "Updated News" } }
)

// ลบเอกสารแรกที่ตรงเงื่อนไข
db.posts.deleteOne({ title: "Post Four" })

// ลบทุกเอกสารที่ตรงเงื่อนไข
db.posts.deleteMany({ category: "Entertainment" })
```

