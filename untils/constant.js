export const API_ROOT = 'http://localhost:8017'

// Danh sách 63 tỉnh/thành phố Việt Nam
export const CITIES = [
  'Hà Nội',
  'TP.HCM',
  'Đà Nẵng',
  'Hải Phòng',
  'Cần Thơ',
  'An Giang',
  'Bà Rịa - Vũng Tàu',
  'Bắc Giang',
  'Bắc Kạn',
  'Bạc Liêu',
  'Bắc Ninh',
  'Bến Tre',
  'Bình Định',
  'Bình Dương',
  'Bình Phước',
  'Bình Thuận',
  'Cà Mau',
  'Cao Bằng',
  'Đắk Lắk',
  'Đắk Nông',
  'Điện Biên',
  'Đồng Nai',
  'Đồng Tháp',
  'Gia Lai',
  'Hà Giang',
  'Hà Nam',
  'Hà Tĩnh',
  'Hải Dương',
  'Hậu Giang',
  'Hòa Bình',
  'Hưng Yên',
  'Khánh Hòa',
  'Kiên Giang',
  'Kon Tum',
  'Lai Châu',
  'Lâm Đồng',
  'Lạng Sơn',
  'Lào Cai',
  'Long An',
  'Nam Định',
  'Nghệ An',
  'Ninh Bình',
  'Ninh Thuận',
  'Phú Thọ',
  'Quảng Bình',
  'Quảng Nam',
  'Quảng Ngãi',
  'Quảng Ninh',
  'Quảng Trị',
  'Sóc Trăng',
  'Sơn La',
  'Tây Ninh',
  'Thái Bình',
  'Thái Nguyên',
  'Thanh Hóa',
  'Thừa Thiên Huế',
  'Tiền Giang',
  'Trà Vinh',
  'Tuyên Quang',
  'Vĩnh Long',
  'Vĩnh Phúc',
  'Yên Bái',
  'Phú Yên'
]

// Bảng ánh xạ phí vận chuyển theo tỉnh/thành (kho tại TP.HCM)
export const SHIPPING_RATES = {
  'Hà Nội': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'TP.HCM': { distance: 5, baseFee: 25000, rate: 6000 }, // 55,000 VND
  'Đà Nẵng': { distance: 15, baseFee: 20000, rate: 5500 }, // 102,500 VND
  'Hải Phòng': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Cần Thơ': { distance: 10, baseFee: 25000, rate: 6000 }, // 85,000 VND
  'An Giang': { distance: 10, baseFee: 25000, rate: 6000 }, // 85,000 VND
  'Bà Rịa - Vũng Tàu': { distance: 8, baseFee: 25000, rate: 6000 }, // 73,000 VND
  'Bắc Giang': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Bắc Kạn': { distance: 22, baseFee: 20000, rate: 5000 }, // 130,000 VND
  'Bạc Liêu': { distance: 12, baseFee: 25000, rate: 6000 }, // 97,000 VND
  'Bắc Ninh': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Bến Tre': { distance: 8, baseFee: 25000, rate: 6000 }, // 73,000 VND
  'Bình Định': { distance: 14, baseFee: 20000, rate: 5500 }, // 97,000 VND
  'Bình Dương': { distance: 6, baseFee: 25000, rate: 6000 }, // 61,000 VND
  'Bình Phước': { distance: 8, baseFee: 25000, rate: 6000 }, // 73,000 VND
  'Bình Thuận': { distance: 10, baseFee: 20000, rate: 5500 }, // 75,000 VND
  'Cà Mau': { distance: 12, baseFee: 25000, rate: 6000 }, // 97,000 VND
  'Cao Bằng': { distance: 22, baseFee: 20000, rate: 5000 }, // 130,000 VND
  'Đắk Lắk': { distance: 12, baseFee: 20000, rate: 5500 }, // 86,000 VND
  'Đắk Nông': { distance: 12, baseFee: 20000, rate: 5500 }, // 86,000 VND
  'Điện Biên': { distance: 25, baseFee: 20000, rate: 5000 }, // 145,000 VND
  'Đồng Nai': { distance: 6, baseFee: 25000, rate: 6000 }, // 61,000 VND
  'Đồng Tháp': { distance: 10, baseFee: 25000, rate: 6000 }, // 85,000 VND
  'Gia Lai': { distance: 12, baseFee: 20000, rate: 5500 }, // 86,000 VND
  'Hà Giang': { distance: 22, baseFee: 20000, rate: 5000 }, // 130,000 VND
  'Hà Nam': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Hà Tĩnh': { distance: 18, baseFee: 20000, rate: 5000 }, // 110,000 VND
  'Hải Dương': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Hậu Giang': { distance: 10, baseFee: 25000, rate: 6000 }, // 85,000 VND
  'Hòa Bình': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Hưng Yên': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Khánh Hòa': { distance: 12, baseFee: 20000, rate: 5500 }, // 86,000 VND
  'Kiên Giang': { distance: 12, baseFee: 25000, rate: 6000 }, // 97,000 VND
  'Kon Tum': { distance: 12, baseFee: 20000, rate: 5500 }, // 86,000 VND
  'Lai Châu': { distance: 25, baseFee: 20000, rate: 5000 }, // 145,000 VND
  'Lâm Đồng': { distance: 10, baseFee: 20000, rate: 5500 }, // 75,000 VND
  'Lạng Sơn': { distance: 22, baseFee: 20000, rate: 5000 }, // 130,000 VND
  'Lào Cai': { distance: 22, baseFee: 20000, rate: 5000 }, // 130,000 VND
  'Long An': { distance: 6, baseFee: 25000, rate: 6000 }, // 61,000 VND
  'Nam Định': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Nghệ An': { distance: 18, baseFee: 20000, rate: 5000 }, // 110,000 VND
  'Ninh Bình': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Ninh Thuận': { distance: 10, baseFee: 20000, rate: 5500 }, // 75,000 VND
  'Phú Thọ': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Quảng Bình': { distance: 16, baseFee: 20000, rate: 5000 }, // 100,000 VND
  'Quảng Nam': { distance: 14, baseFee: 20000, rate: 5500 }, // 97,000 VND
  'Quảng Ngãi': { distance: 14, baseFee: 20000, rate: 5500 }, // 97,000 VND
  'Quảng Ninh': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Quảng Trị': { distance: 16, baseFee: 20000, rate: 5000 }, // 100,000 VND
  'Sóc Trăng': { distance: 10, baseFee: 25000, rate: 6000 }, // 85,000 VND
  'Sơn La': { distance: 22, baseFee: 20000, rate: 5000 }, // 130,000 VND
  'Tây Ninh': { distance: 8, baseFee: 25000, rate: 6000 }, // 73,000 VND
  'Thái Bình': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Thái Nguyên': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Thanh Hóa': { distance: 18, baseFee: 20000, rate: 5000 }, // 110,000 VND
  'Thừa Thiên Huế': { distance: 14, baseFee: 20000, rate: 5500 }, // 97,000 VND
  'Tiền Giang': { distance: 8, baseFee: 25000, rate: 6000 }, // 73,000 VND
  'Trà Vinh': { distance: 10, baseFee: 25000, rate: 6000 }, // 85,000 VND
  'Tuyên Quang': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Vĩnh Long': { distance: 10, baseFee: 25000, rate: 6000 }, // 85,000 VND
  'Vĩnh Phúc': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Yên Bái': { distance: 20, baseFee: 20000, rate: 5000 }, // 120,000 VND
  'Phú Yên': { distance: 14, baseFee: 20000, rate: 5500 }, // 97,000 VND
  'default': { distance: 15, baseFee: 20000, rate: 5000 } // 95,000 VND
}


// Địa chỉ kho mặc định
export const WAREHOUSE_ADDRESS = '97 đường Man Thiện, phường Hiệp Phú, Quận 9, Thành phố Thủ Đức, Thành phố Hồ Chí Minh'
