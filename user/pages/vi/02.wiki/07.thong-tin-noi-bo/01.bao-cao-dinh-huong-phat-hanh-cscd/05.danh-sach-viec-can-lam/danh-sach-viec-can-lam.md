---
title: 'Danh sách việc cần làm'
template: wiki
smls_language: vi
published: true
private: true
---

*Legion Team — CSCD: Vietnam Mobile Police*
*Trích từ "Báo cáo: doanh thu quốc tế và hướng đi an toàn" — tạm loại trừ Trục rủi ro 1 (nội dung & hình ảnh lực lượng vũ trang) theo yêu cầu*

---

## Ưu tiên 1 — Làm ngay, không cần vốn, không cần pháp nhân

1. **Viết thỏa thuận hợp tác nội bộ giữa hai thành viên.** Tối thiểu gồm: tỷ lệ sở hữu IP, quyền quyết định khi bất đồng, phân chia doanh thu theo từng nguồn, điều kiện và hệ quả khi một bên rời đi, xác nhận code/asset mỗi bên tạo ra thuộc về dự án chung. Đây là trục rủi ro có xác suất xảy ra cao nhất trong toàn bộ báo cáo, và là điều kiện tiên quyết cho mọi hướng đi sau này kể cả Phương án B.
2. **Tính lại toàn bộ mô hình tài chính với mức khấu trừ 30% tại Mỹ.** Hiệp định thuế VN–Mỹ chưa có hiệu lực nên không có ưu đãi giảm khấu trừ. Ngưỡng hòa vốn của Phương án A cần được tính lại: sau ~30% chiết khấu Valve và 30% khấu trừ Mỹ, số thực nhận trước thuế VN chỉ còn khoảng một nửa giá bán.
3. **Ước tính chi phí thật của việc lập doanh nghiệp**: chi phí thành lập, lệ phí môn bài, chi phí kế toán/khai thuế hằng năm, thời gian hành chính. Đây là mắt xích còn để trống, cần có trước khi so sánh ba kịch bản doanh nghiệp/G4.

## Ưu tiên 2 — Kỹ thuật (game engine, build)

4. **Loại bỏ hoàn toàn mọi lệnh gọi mạng ra ngoài trong bản FVV**: không auto-update check, không crash report, không telemetry, không analytics, không license check hay DRM online.
5. **Kiểm tra lại toàn bộ thư viện/SDK/plugin bên thứ ba** để xác nhận không có thành phần nào âm thầm mở kết nối mạng.
6. **Ghi lại bằng văn bản nội bộ** xác nhận bản FVV là bản offline hoàn toàn — làm căn cứ nếu cần giải trình về bản chất kỹ thuật.
7. **Không bao giờ thêm leaderboard, chat, hay bất kỳ hình thức kết nối người chơi nào vào FVV**, kể cả khi cộng đồng yêu cầu. Nếu muốn thử nghiệm, tách thành build/kênh riêng.

## Ưu tiên 3 — Hạ tầng phân phối

8. **Không đặt nút tải xuống, trình phát trực tiếp, hay tài khoản người chơi nào trên cscdvmp.com** — chỉ giữ thông tin dự án, blog, wiki, và liên kết ra ngoài.
9. **Không nhúng iframe/widget itch.io vào cscdvmp.com** — chỉ dùng hyperlink thông thường.
10. **Tách trang Patreon/Donate khỏi luồng thao tác tải game.** Quan trọng vì chế tài mới bao gồm "nộp lại toàn bộ lợi nhuận thu được từ hành vi vi phạm" — nếu Donate gắn liền với việc phân phối FVV, toàn bộ khoản đó có thể bị tính vào.
11. **Chuẩn bị trước (chưa công bố) ít nhất một kênh phân phối dự phòng** đã thử nghiệm thành công (Google Drive, Mega...).
12. **Khai thông tin đăng ký itch.io chính xác theo yêu cầu nền tảng**, bao gồm thông tin thuế cần thiết để nhận payout — không cố che giấu danh tính.

## Ưu tiên 4 — Ngôn ngữ truyền thông

13. **Lập danh sách từ khóa cấm dùng** trong mọi nội dung công khai: "phát hành tại Việt Nam", "ra mắt chính thức", "bán tại Việt Nam" — thay bằng "chia sẻ", "gửi tặng cộng đồng", "phiên bản tiếng Việt miễn phí". Không dùng "FVV" ra ngoài.
14. **Rà lại toàn bộ nội dung đã đăng trước đó** (blog, fanpage, Discord) để sửa các đoạn dùng sai từ khóa.
15. **Thống nhất bộ quy tắc ngôn ngữ trong nội bộ** để cả hai người dùng chung một cách diễn đạt.
16. **Chuẩn bị sẵn một câu trả lời trung tính, nhất quán** cho các câu hỏi khiêu khích kiểu "đây có phải phát hành lách luật không".

## Ưu tiên 5 — Tài chính

17. **Không dùng chung tài khoản** cho doanh thu Steam và donate FVV.
18. **Không quảng bá Steam và FVV trên cùng một trang có yếu tố giao dịch.**
19. **Ghi chép tách bạch mọi khoản thu chi theo từng hoạt động** (Steam, Patreon, Donate).

## Ưu tiên 6 — Quyết định chiến lược (cần thông tin từ Ưu tiên 1–3 trước khi chốt)

20. **Chọn giữa ba kịch bản doanh nghiệp/G4** (không doanh nghiệp/không G4; có doanh nghiệp/không G4; có doanh nghiệp/có G4) — chỉ chốt được sau khi có con số chi phí ở việc 3.
21. **Chốt bộ ngưỡng số liệu** để tự động kích hoạt các quyết định sau này: mốc wishlist quốc tế, mốc doanh thu, mốc thời gian, mốc quy mô cộng đồng FVV.
22. **Tách "chuẩn bị năng lực tiếp cận publisher" ra khỏi "quyết định chính thức theo Phương án B"** — bắt đầu xây traction quốc tế và hoàn thiện vertical slice song song với Phương án A, không đợi A thất bại mới bắt đầu.

## Ưu tiên 7 — Giám sát định kỳ

23. **Rà soát mỗi 3–6 tháng**: nội dung truyền thông, tình trạng kỹ thuật (không có tính năng online mới phát sinh), thay đổi pháp lý.
24. **Theo dõi sửa đổi các nghị định liên quan** — đặc biệt kiểm chứng Nghị định 291/2026/NĐ-CP sửa đổi Nghị định 174/2026.
25. **Gắn việc rà soát định kỳ với bộ ngưỡng số liệu ở việc 21.**

---

*Ghi chú: Trục rủi ro 1 (rà soát nội dung game và quyền sử dụng hình ảnh lực lượng vũ trang) đang được tạm loại khỏi danh sách này theo yêu cầu. Trong báo cáo đầy đủ, đây là trục có mức thiệt hại nghiêm trọng nhất và được xếp ưu tiên cao nhất — nên đưa trở lại khi cần bản danh sách đầy đủ.*
