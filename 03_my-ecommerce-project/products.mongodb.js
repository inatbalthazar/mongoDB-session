use("victo-db");

db.products.deleteMany({});

db.products.insertMany([
  {
    "_id": ObjectId("668c223456789abcdef10001"),
    "sku": "APP-COT-001",
    "name": "เสื้อยืดคอกลมผ้า Cotton 100% เกรดพรีเมียม",
    "category": "apparel",
    "base_price": NumberDecimal("120.00"),
    "description": "เสื้อยืดเปล่าทรง Unisex เนื้อผ้านุ่ม ระบายอากาศได้ดี เหมาะสำหรับงานสกรีนและปักโลโก้ทีม",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:00:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10002"),
    "sku": "APP-POL-002",
    "name": "เสื้อโปโลผ้า Kanoko จั๊มพ์แขน",
    "category": "apparel",
    "base_price": NumberDecimal("250.00"),
    "description": "เสื้อโปโลมีปก เนื้อผ้าอยู่ทรง ไม่ย้วยง่าย เหมาะสำหรับทำเสื้อฟอร์มพนักงานและงานอีเวนต์บริษัท",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:05:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10003"),
    "sku": "TRO-CRY-001",
    "name": "ถ้วยรางวัลคริสตัลโมเดลทรงดาวเกียรติยศ",
    "category": "trophy",
    "base_price": NumberDecimal("1500.00"),
    "description": "ถ้วยรางวัลคริสตัลแท้เล่นแสงไฟ ฐานอะคริลิกดำหนา เหมาะสำหรับรางวัลพนักงานดีเด่นหรือการแข่งขันทางการ",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:10:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10004"),
    "sku": "TRO-PLA-002",
    "name": "โมเดลถ้วยรางวัลโมเดิร์น (3D Printing Custom)",
    "category": "trophy",
    "base_price": NumberDecimal("850.00"),
    "description": "โมเดลฐานพลาสติกรูปทรงฟรีฟอร์ม เหมาะสำหรับขึ้นงานคัสตอมด้วยเครื่องพิมพ์สามมิติตามแบบลูกค้า",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:15:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10005"),
    "sku": "MED-GLD-001",
    "name": "เหรียญรางวัลโลหะซิงค์อัลลอย ชุบทองเงา",
    "category": "medal",
    "base_price": NumberDecimal("65.00"),
    "description": "เหรียญรางวัลขนาดมาตรฐาน 6 ซม. พื้นผิวเรียบเงา พร้อมพื้นที่วงกลมสำหรับติดสติกเกอร์หรือหยอดเรซินโลโก้",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:20:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10006"),
    "sku": "MED-SLV-002",
    "name": "เหรียญรางวัลสปอร์ต ชุบเงินรมดำ",
    "category": "medal",
    "base_price": NumberDecimal("60.00"),
    "description": "เหรียญรางวัลลวดลายไดคัทสำเร็จรูป สไตล์คลาสสิก แข็งแรงทนทาน ไม่เป็นสนิมง่าย",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:22:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10007"),
    "sku": "WRB-SIL-001",
    "name": "สายรัดข้อมือซิลิโคนปั๊มจม (Silicone Wristband)",
    "category": "wristband",
    "base_price": NumberDecimal("15.00"),
    "description": "ริสต์แบนด์ซิลิโคนแท้ 100% ยืดหยุ่นสูง ทนน้ำทนความร้อน รองรับการปั๊มลึกลงเนื้อผิวตามฟอนต์ที่เลือก",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:30:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10008"),
    "sku": "WRB-GLW-002",
    "name": "สายรัดข้อมือซิลิโคนเรืองแสง (Glow in the Dark)",
    "category": "wristband",
    "base_price": NumberDecimal("25.00"),
    "description": "ริสต์แบนด์เนื้อพิเศษสามารถเรืองแสงสีเขียว/ฟ้าได้ในที่มืด เหมาะสำหรับงานปาร์ตี้ คอนเสิร์ต และมินิมาราธอนกลางคืน",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:33:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10009"),
    "sku": "BDG-TIN-001",
    "name": "เข็มกลัดวงกลมฝาเหล็ก ขนาด 5.8 ซม.",
    "category": "badge",
    "base_price": NumberDecimal("12.00"),
    "description": "เข็มกลัดด้านหลังเป็นพินโลหะ ด้านหน้าหุ้มพลาสติกใสกันน้ำ ลายพิมพ์สีสดคมชัด เหมาะสำหรับทำของแจกแฟนคลับ",
    "is_active": true,
    "created_at": new Date("2026-07-09T06:40:00Z")
  },
  {
    "_id": ObjectId("668c223456789abcdef10010"),
    "sku": "BDG-MAG-002",
    "name": "เข็มกลัดแม่เหล็กสี่เหลี่ยมผืนผ้า",
    "category": "badge",
    "base_price": NumberDecimal("45.00"),
    "description": "ป้ายชื่อเข็มกลัดแบบแถบแม่เหล็กแรงดึงดูดสูง ไม่ทำลายเนื้อผ้าเสื้อสูท เหมาะสำหรับงานป้ายชื่อผู้บริหารและพนักงานต้อนรับ",
    "is_active": false,
    "created_at": new Date("2026-07-09T06:45:00Z")
  }
]);

db.products.find({});
