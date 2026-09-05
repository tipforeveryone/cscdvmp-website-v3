---
title: "Cập nhật 1.4"
date: "2026-05-01"
smls_language: vi
published: true
smls_translations:
    en: /en/updates/update-1-4
---

**Ngày phát hành:** 1 tháng 5, 2026

## 1. Tính năng mới

**Màn hình quản lý chiến sĩ**

- Đây là màn hình hiển thị thông tin của từng chiến sĩ có mặt trong hồ sơ của người chơi, bao gồm thông tin cá nhân, cấp bậc, điểm kinh nghiệm, trạng thái hiện tại, tiến độ kỹ năng và đặc biệt là bảng thành tích cá nhân với rất nhiều chỉ số thú vị.
- Màn hình này có tên là "Hồ sơ chiến sĩ" thay cho danh sách chiến sĩ được thể hiện khá sơ sài trước đây trong màn hình Team Roster
- Việc ghi nhận chiến tích của các chiến sĩ trong màn chơi cũng được mở rộng tương xứng.
- Người chơi có thể truy cập màn hình này ngay từ danh sách đội mà không cần rời khỏi luồng chuẩn bị trận.
- Mỗi chiến sĩ sẽ có ảnh đại diện riêng, được chọn ngẫu nhiên từ thư viện 32 hình đại diện khi tạo mới.
- Nhân vật CSCD tại màn hình Team Roster đã cầm vũ khí đại diện cho nhân vật được chọn hoặc đang được xem chi tiết. Các hoạt họa liên quan còn thô và xấu, nhưng sẽ được cải thiện trong các phiên bản tiếp theo.

**Hệ thống cấp bậc và điểm kinh nghiệm**

- Hệ thống cấp bậc của các chiến sĩ đã được thêm vào! (Tìm hiểu danh sách các cấp bậc tại đây). Cấp bậc của chiến sĩ có quan hệ mật thiết với hệ thống điểm kinh nghiệm (EXP). Thông qua các thành tích có được trong chiến đấu sau mỗi màn chơi, các chiến sĩ sẽ tích lũy EXP và dần thăng cấp.
- Trong bản snapshot lần này, yếu tố cấp bậc chưa có tác động lên gameplay, tuy nhiên vai trò của nó sẽ được thể hiện trong bản snapshot tiếp theo. Cụ thể: Khi được thăng cấp, mỗi chiến sĩ sẽ được trao một lượng **điểm kỹ năng** nhất định. Người chơi có thể phân bổ tùy ý các điểm kỹ năng này, tạo ra sự tác động trực tiếp đến sức chiến đấu của từng chiến sĩ.

**Sắp xếp đội hình tự động**

- Trong màn hình quản lý đội, người chơi có thể sắp xếp lại thứ tự các thành viên trong nhóm theo vai trò chỉ với một nút bấm, thứ tự ưu tiên mặc định là Trinh sát dẫn đầu, tiếp theo là Tấn công, Bắn tỉa, Kỹ thuật, và cuối cùng là Cứu thương.

**Tư thế ngắm bắn tác động đến độ ổn định của đường ngắm**

- Độ mỏi của tay (arm fatigue) được giảm thiểu đáng kể khi người chơi ngắm bắn ở tư thế ngồi, kết hợp với các thao tác ngắm bắn sâu và nín thở sẽ mang đến một phát bắn có độ chuẩn xác cao.

## 2. Tối ưu hóa và sửa lỗi

- Nhờ cải thiện các thuật toán xử lý cốt lõi, hiệu năng đồ họa của game đã được nâng cao đáng kể. Game linh động hơn trong việc **chỉ render những gì người chơi thực sự nhìn thấy,** những vật thể nằm ngoài tầm mắt hoặc bị che khuất sẽ được bỏ qua để giảm tài nguyên xử lý, mang lại sự cân bằng hợp lý giữa CPU và GPU, giúp game chạy mượt mà hơn.
- Điều tương tự cũng được áp dụng với hệ thống AI và animation của nhân vật, nhờ đó lượng tài nguyên tính toán dành cho các nhân vật trong game được phân bổ hợp lý hơn, giúp giảm tải cho CPU.
- Trước đây, khi game được cập nhật hoặc người chơi dùng bản snapshot mới, hệ thống hồ sơ của phiên bản cũ (được lưu trên máy) có thể sẽ không tương thích với phiên bản mới, dẫn đến game bị crash. Người chơi buộc phải xóa hồ sơ cũ một cách thủ công. Bản snapshot này đã xử lý vấn đề này một cách tự động bằng cách bổ sung tính năng phát hiện ra sự không tương và yêu cầu tạo hồ sơ mới, giúp quá trình trải nghiệm phiên bản mới của game được diễn ra thuận lợi (Điều này sẽ thường xuyên xảy ra vì game đang trên con đường phát triển.
- Một số lỗi liên quan đến crash game cũng đã được phát hiện và xử lý.
