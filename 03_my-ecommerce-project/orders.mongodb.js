use("victo-db");

db.orders.deleteMany({});

db.orders.insertMany([
  {
    "_id": ObjectId("668c333456789abcdef20001"),
    "order_number": "ORD-2026-0001",
    "order_status": "processing",
    "customer_snapshot": {
      "user_id": ObjectId("668c123456789abcdef00001"),
      "username": "GrandSport_Admin",
      "email": "hr_event@grandcorp.com",
      "phone_number": "0812345678"
    },
    "shipping_address_snapshot": {
      "recipient_name": "คุณวิชาญ (ผู้ประสานงานค่ายลูกเสือ)",
      "recipient_phone": "0898765432",
      "address_line1": "ค่ายลูกเสือลานกางเต็นท์แกรนด์ เลขที่ 99 หมู่ 4",
      "address_line2": null,
      "sub_district": "เพ",
      "district": "เมืองระยอง",
      "province": "ระยอง",
      "postal_code": "21160"
    },
    "financials": {
      "total_amount": NumberDecimal("144000.00"),
      "shipping_fee": NumberDecimal("500.00"),
      "net_amount": NumberDecimal("144500.00"),
      "payment_status": "paid",
      "payment_method": "credit_card",
      "transaction_ref": "TXN-9988776655",
      "paid_at": new Date("2026-07-09T07:15:00Z")
    },
    "tracking_number": null,
    "created_at": new Date("2026-07-09T07:00:00Z"),
    "updated_at": new Date("2026-07-09T07:30:00Z"),
    "items": [
      {
        "item_id": ObjectId("668c443456789abcdef30001"),
        "product_id": ObjectId("668c223456789abcdef10001"),
        "product_name": "เสื้อยืดคอกลมผ้า Cotton 100% เกรดพรีเมียม",
        "category": "apparel",
        "quantity": NumberInt(1200),
        "unit_price": NumberDecimal("120.00"),
        "review_status": "approved",
        "customization": {
          "selected_size": "L",
          "uploaded_image_url": "https://storage.customshop.com/designs/grandsport_logo.png",
          "custom_text": "Grand Teamwork 2026",
          "additional_note": "สกรีนโลโก้ตรงหน้าอกซ้าย และข้อความกลางหลัง"
        },
        "review_history": [
          {
            "admin_id": ObjectId("668c123456789abcdef00003"),
            "status": "approved",
            "admin_comment": "ผ่าน ไฟล์รูปภาพมีความคมชัดสูง",
            "reviewed_at": new Date("2026-07-09T07:30:00Z")
          }
        ]
      }
    ]
  },
  {
    "_id": ObjectId("668c333456789abcdef20002"),
    "order_number": "ORD-2026-0002",
    "order_status": "printing_3d",
    "customer_snapshot": {
      "user_id": ObjectId("668c123456789abcdef00002"),
      "username": "Esports_Promoter_X",
      "email": "tourney_master@gmail.com",
      "phone_number": "0865554433"
    },
    "shipping_address_snapshot": {
      "recipient_name": "นายกิตติศักดิ์ เรืองฤทธิ์",
      "recipient_phone": "0865554433",
      "address_line1": "บ้านพักเลขที่ 45/6 ซอยลาดพร้าว 101",
      "address_line2": "หมู่บ้านร่มรื่น",
      "sub_district": "คลองจั่น",
      "district": "บางกะปิ",
      "province": "กรุงเทพมหานคร",
      "postal_code": "10240"
    },
    "financials": {
      "total_amount": NumberDecimal("11725.00"),
      "shipping_fee": NumberDecimal("150.00"),
      "net_amount": NumberDecimal("11875.00"),
      "payment_status": "paid",
      "payment_method": "promptpay",
      "transaction_ref": "SLIP-20260709-0099",
      "paid_at": new Date("2026-07-09T08:10:00Z")
    },
    "tracking_number": null,
    "created_at": new Date("2026-07-09T08:00:00Z"),
    "updated_at": new Date("2026-07-09T08:35:00Z"),
    "items": [
      {
        "item_id": ObjectId("668c443456789abcdef30002"),
        "product_id": ObjectId("668c223456789abcdef10004"),
        "product_name": "โมเดลถ้วยรางวัลโมเดิร์น (3D Printing Custom)",
        "category": "trophy",
        "quantity": NumberInt(3),
        "unit_price": NumberDecimal("850.00"),
        "review_status": "approved",
        "customization": {
          "selected_size": null,
          "uploaded_image_url": "https://storage.customshop.com/designs/esport_cup_3d.obj",
          "custom_text": "CHAMPION - VALORANT 2026",
          "additional_note": "ต้องการฐานสีดำ ตัวถ้วยฉีดเรซินสีทองเงา"
        },
        "review_history": [
          {
            "admin_id": ObjectId("668c123456789abcdef00003"),
            "status": "approved",
            "admin_comment": "โมเดล 3D ถูกต้อง ไม่มีส่วนลอยตัวที่พิมพ์ไม่ได้",
            "reviewed_at": new Date("2026-07-09T08:20:00Z")
          }
        ]
      },
      {
        "item_id": ObjectId("668c443456789abcdef30003"),
        "product_id": ObjectId("668c223456789abcdef10008"),
        "product_name": "สายรัดข้อมือซิลิโคนเรืองแสง (Glow in the Dark)",
        "category": "wristband",
        "quantity": NumberInt(367),
        "unit_price": NumberDecimal("25.00"),
        "review_status": "approved",
        "customization": {
          "selected_size": null,
          "uploaded_image_url": "https://storage.customshop.com/designs/wristband_text.png",
          "custom_text": "ESPORTS TOURNAMENT",
          "additional_note": "ขอเรืองแสงเป็นสีเขียวทั้งหมด"
        },
        "review_history": [
          {
            "admin_id": ObjectId("668c123456789abcdef00003"),
            "status": "approved",
            "admin_comment": "ฟอนต์อักษรหนาพอสำหรับการปั๊มจม",
            "reviewed_at": new Date("2026-07-09T08:35:00Z")
          }
        ]
      }
    ]
  },
  {
    "_id": ObjectId("668c333456789abcdef20003"),
    "order_number": "ORD-2026-0003",
    "order_status": "shipped",
    "customer_snapshot": {
      "user_id": ObjectId("668c123456789abcdef00002"),
      "username": "Esports_Promoter_X",
      "email": "tourney_master@gmail.com",
      "phone_number": "0865554433"
    },
    "shipping_address_snapshot": {
      "recipient_name": "นายกิตติศักดิ์ เรืองฤทธิ์",
      "recipient_phone": "0865554433",
      "address_line1": "บ้านพักเลขที่ 45/6 ซอยลาดพร้าว 101",
      "address_line2": "หมู่บ้านร่มรื่น",
      "sub_district": "คลองจั่น",
      "district": "บางกะปิ",
      "province": "กรุงเทพมหานคร",
      "postal_code": "10240"
    },
    "financials": {
      "total_amount": NumberDecimal("1200.00"),
      "shipping_fee": NumberDecimal("40.00"),
      "net_amount": NumberDecimal("1240.00"),
      "payment_status": "paid",
      "payment_method": "promptpay",
      "transaction_ref": "SLIP-20260709-0812",
      "paid_at": new Date("2026-07-09T09:05:00Z")
    },
    "tracking_number": "TH123456789TH",
    "created_at": new Date("2026-07-09T09:00:00Z"),
    "updated_at": new Date("2026-07-09T11:00:00Z"),
    "items": [
      {
        "item_id": ObjectId("668c443456789abcdef30004"),
        "product_id": ObjectId("668c223456789abcdef10009"),
        "product_name": "เข็มกลัดวงกลมฝาเหล็ก ขนาด 5.8 ซม.",
        "category": "badge",
        "quantity": NumberInt(100),
        "unit_price": NumberDecimal("12.00"),
        "review_status": "approved",
        "customization": {
          "selected_size": null,
          "uploaded_image_url": "https://storage.customshop.com/designs/badge_fanart.png",
          "custom_text": "LUCKY FAN",
          "additional_note": "แพ็คแยกชิ้นใส่ถุงแก้วใสให้ด้วยครับ"
        },
        "review_history": [
          {
            "admin_id": ObjectId("668c123456789abcdef00003"),
            "status": "approved",
            "admin_comment": "ภาพผ่านเกณฑ์",
            "reviewed_at": new Date("2026-07-09T09:20:00Z")
          }
        ]
      }
    ]
  },
  {
    "_id": ObjectId("668c333456789abcdef20004"),
    "order_number": "ORD-2026-0004",
    "order_status": "pending_review",
    "customer_snapshot": {
      "user_id": ObjectId("668c123456789abcdef00001"),
      "username": "GrandSport_Admin",
      "email": "hr_event@grandcorp.com",
      "phone_number": "0812345678"
    },
    "shipping_address_snapshot": {
      "recipient_name": "คุณสมศักดิ์ รักดี (ฝ่าย HR)",
      "recipient_phone": "0812345678",
      "address_line1": "อาคารแกรนด์ทาวเวอร์ ชั้น 14 เลขที่ 123 ถนนสุขุมวิท",
      "address_line2": "แขวงคลองเตย",
      "sub_district": "คลองเตย",
      "district": "คลองเตย",
      "province": "กรุงเทพมหานคร",
      "postal_code": "10110"
    },
    "financials": {
      "total_amount": NumberDecimal("6500.00"),
      "shipping_fee": NumberDecimal("80.00"),
      "net_amount": NumberDecimal("6580.00"),
      "payment_status": "pending",
      "payment_method": null,
      "transaction_ref": null,
      "paid_at": null
    },
    "tracking_number": null,
    "created_at": new Date("2026-07-09T13:45:00Z"),
    "updated_at": new Date("2026-07-09T13:45:00Z"),
    "items": [
      {
        "item_id": ObjectId("668c443456789abcdef30005"),
        "product_id": ObjectId("668c223456789abcdef10005"),
        "product_name": "เหรียญรางวัลโลหะซิงค์อัลลอย ชุบทองเงา",
        "category": "medal",
        "quantity": NumberInt(100),
        "unit_price": NumberDecimal("65.00"),
        "review_status": "pending",
        "customization": {
          "selected_size": null,
          "uploaded_image_url": "https://storage.customshop.com/designs/company_logo_draft.png",
          "custom_text": "EXCELLENT AWARDS",
          "additional_note": "รอแอดมินตรวจแบบรูปภาพก่อนโอนเงิน"
        },
        "review_history": []
      }
    ]
  },
  {
    "_id": ObjectId("668c333456789abcdef20005"),
    "order_number": "ORD-2026-0005",
    "order_status": "cancelled",
    "customer_snapshot": {
      "user_id": ObjectId("668c123456789abcdef00001"),
      "username": "GrandSport_Admin",
      "email": "hr_event@grandcorp.com",
      "phone_number": "0812345678"
    },
    "shipping_address_snapshot": {
      "recipient_name": "คุณสมศักดิ์ รักดี (ฝ่าย HR)",
      "recipient_phone": "0812345678",
      "address_line1": "อาคารแกรนด์ทาวเวอร์ ชั้น 14 เลขที่ 123 ถนนสุขุมวิท",
      "address_line2": "แขวงคลองเตย",
      "sub_district": "คลองเตย",
      "district": "คลองเตย",
      "province": "กรุงเทพมหานคร",
      "postal_code": "10110"
    },
    "financials": {
      "total_amount": NumberDecimal("12500.00"),
      "shipping_fee": NumberDecimal("120.00"),
      "net_amount": NumberDecimal("12620.00"),
      "payment_status": "failed",
      "payment_method": "promptpay",
      "transaction_ref": "SLIP-CANCEL-X",
      "paid_at": null
    },
    "tracking_number": null,
    "created_at": new Date("2026-07-09T10:00:00Z"),
    "updated_at": new Date("2026-07-09T10:45:00Z"),
    "items": [
      {
        "item_id": ObjectId("668c443456789abcdef30006"),
        "product_id": ObjectId("668c223456789abcdef10002"),
        "product_name": "เสื้อโปโลผ้า Kanoko จั๊มพ์แขน",
        "category": "apparel",
        "quantity": NumberInt(50),
        "unit_price": NumberDecimal("250.00"),
        "review_status": "rejected_illegal",
        "customization": {
          "selected_size": "M",
          "uploaded_image_url": "https://storage.customshop.com/designs/fake_brand_logo.png",
          "custom_text": "VIP CLUB",
          "additional_note": "สกรีนลายแบรนด์เนม"
        },
        "review_history": [
          {
            "admin_id": ObjectId("668c123456789abcdef00003"),
            "status": "rejected_illegal",
            "admin_comment": "ปฏิเสธการผลิต: ตรวจพบโลโก้ลิขสิทธิ์เครื่องหมายการค้าปลอมแปลงผิดกฎหมาย",
            "reviewed_at": new Date("2026-07-09T10:45:00Z")
          }
        ]
      }
    ]
  }
]);

db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "customer_snapshot.user_id",
      foreignField: "_id",
      as: "customer_info"
    }
  },
  { $unwind: "$customer_info" }
]);
