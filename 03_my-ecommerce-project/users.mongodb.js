use("victo-db");

// Clear existing data สั่งลบข้อมูลที่มีอยู่ใน db
db.users.deleteMany({});

db.users.insertMany([
  {
    "_id": "003",
    "email": "hr_event@gmail.com",
    "pwd": "$2b$10$eImiT",
    "phone": "0812345678",
    "roles": ["customer"],
    "addr_shipping": [
      {
        "addr_id": "001",
        "recv_name": "HR ที่สวยสุดในแผนก",
        "addr_detail": "อาคารแกรนด์ทาวเวอร์ ชั้น 14 เลขที่ 123 ถนนสุขุมวิท",
        "sub_district": "แขวงคลองเตย",
        "district": "คลองเตย",
        "province": "กรุงเทพมหานคร",
        "zip": "10110",
        "is_default": true
      }
    ],
    "created_at": { "$date": "2026-07-09T04:00:00Z" },
    "updated_at": { "$date": "2026-07-09T04:30:00Z" }
  },
  {
    "_id": "001",
    "email": "somchai.checker@customshop.com",
    "pwd": "Admin_Somchai",
    "phone": "0823456789",
    "roles": ["admin"],
    "addr_shipping": [],
    "created_at": { "$date": "2026-07-09T04:00:00Z" },
    "updated_at": { "$date": "2026-07-09T03:15:00Z" }
  },
  {
    "_id": "002",
    "email": "owner.ceo@customshop.com",
    "pwd": "SuperAdmin",
    "phone": "0899999999",
    "roles": ["super_admin"],
    "addr_shipping": [],
    "created_at": { "$date": "2026-07-01T00:00:00Z" },
    "updated_at": { "$date": "2026-07-01T00:00:00Z" }
  }
]);

// Find all staff members 
db.users.find({});