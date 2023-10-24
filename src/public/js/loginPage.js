// sau khi bấm submit -> thì request lên server để compare username và password (hash)

// => server sẽ trả về 1 json cho client (chứa trạng thái đăng nhâp thành công hay thất bại)

// => nếu reject thất bại => reload lại login hooặc hiện thông báo login fail
// => nếu resolve thanh cong => localStores để lưu thông tin user vào