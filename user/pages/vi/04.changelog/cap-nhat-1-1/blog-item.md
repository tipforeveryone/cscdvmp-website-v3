---
title: 'Cập nhật 1.1'
date: '2026-03-14'
smls_language: vi
published: true
smls_translations:
    en: /en/blog/update-1-1
---

**Ngày phát hành:** 14 tháng 3, 2026

## Tính năng mới

- **Chế độ ra lệnh chiến thuật:** Người chơi có thể phát nhiều lệnh di chuyển cho từng chiến sĩ riêng lẻ hoặc theo nhóm, giúp phối hợp đội hình nhanh hơn.
- **Kiểm tra card đồ họa khi khởi động lần đầu:** Tính năng này giúp người chơi xác minh và chọn đúng card đồ họa, tránh các lỗi rendering có thể xảy ra nếu game sử dụng card tích hợp thay vì card rời.
- **Tinh gọn việc chọn thành viên đội** ở cả màn hình briefing bản đồ và roster đội: Người chơi giờ chỉ cần chọn vai trò cho mỗi vị trí, game sẽ tự động chọn chiến sĩ và vũ khí phù hợp từ kho vũ khí.
- **Tính năng chụp ảnh màn hình**: Dùng F11 để chụp ảnh bao gồm cả HUD, và F12 để chụp riêng cảnh được render. Tất cả ảnh chụp được lưu trong thư mục `Documents/cscdvmp/screenshots`.

## Cải tiến

- Nâng cấp lên phiên bản engine mới nhất.
- Cải thiện kết hợp giữa High Anti-aliasing và Temporal Anti-aliasing (TAA) để tránh hiện tượng mờ khi nhân vật di chuyển.
- Cải thiện hiệu suất rendering phản chiếu.
- Cải thiện hiệu suất rendering phản chiếu trên mặt nước.
- Cải tiến tùy chọn Environment Detail: giờ cho phép kiểm soát tốt hơn việc ẩn các vật thể phụ để tăng hiệu suất.
- Cải thiện tùy chọn Shadow Range: kiểm soát chi tiết hơn.
- Nâng cao đáng kể hiệu suất hệ thống ánh sáng.
- Tùy chọn Render Quality giờ có thêm các thông số bổ sung.

## Sửa lỗi

- Nhiều lỗi crash khi bắt đầu trận đấu và trong một số thời điểm trong game.
- Hiện tượng rendering bị mờ khi bật High Anti-aliasing và TAA.
- Hiện tượng giật khi di chuyển nhân vật.
