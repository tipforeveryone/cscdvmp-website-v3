---
title: 'Báo cáo tách bạch Donate khỏi phân phối FVV'
template: wiki
smls_language: vi
published: true
private: true
previous: /vi/wiki/thong-tin-noi-bo/bao-cao-dinh-huong-phat-hanh-cscd/bao-cao-dieu-chinh
---

*Legion Team — CSCD: Vietnam Mobile Police*
*Phụ lục làm rõ cho mục 3.2, 3.3, 7.4, 7.8 trong [báo cáo chính](/vi/wiki/thong-tin-noi-bo/bao-cao-dinh-huong-phat-hanh-cscd/bao-cao-dieu-chinh)*

---

## 0. Câu hỏi đặt ra

Hai câu hỏi được đặt ra liên tiếp:

1. Tách nội dung trang Donate ra khỏi cscdvmp.com, đưa sang một website khác rồi vẫn dẫn link về trang đó — có ổn không?
2. Nếu không kêu gọi "donate để có game" mà kêu gọi "ủng hộ nhà phát triển để đẩy nhanh tiến độ dự án" — có an toàn không?

Báo cáo này trả lời cả hai, vì chúng là hai lớp của cùng một vấn đề: lớp thứ nhất là **vị trí** (đặt ở đâu), lớp thứ hai là **cách diễn đạt** (nói như thế nào). Cả hai đều là bước đúng hướng, nhưng cả hai đều xử lý bề mặt chứ chưa chắc đã xử lý được gốc rễ nếu làm không đủ nghiêm ngặt.

---

## 1. Nhắc lại đúng bản chất vấn đề

Theo phân tích đã có trong báo cáo chính:

- **Mục 3.3**: rủi ro của cscdvmp.com không nằm ở việc file được host ở đâu, mà nằm ở việc đây là nơi thể hiện "ý chí cung cấp dịch vụ" tới người chơi Việt Nam — có chủ thể rõ ràng (Legion Team), nội dung tiếng Việt, dẫn dắt người chơi tới việc tải game và tới việc donate.
- **Mục 3.2**: nếu Patreon/Donate gắn liền với luồng phân phối FVV, khoản "lợi nhuận thu được từ hành vi vi phạm" theo Nghị định 174/2026 có thể bị tính vào cả khoản donate đó.

Nói ngắn gọn: điều luật quan tâm không phải là **tên miền** hay **câu chữ**, mà là **hành vi cung cấp/dẫn dắt** và **mối liên hệ nhân quả giữa dòng tiền và sản phẩm**. Hai biện pháp được hỏi — tách domain và đổi cách diễn đạt — đều là công cụ tốt để giảm hai thứ đó, nhưng chỉ khi được thực hiện đủ nghiêm ngặt.

---

## 2. Lớp thứ nhất: tách trang Donate sang domain riêng

### 2.1. Điểm được

- Một domain khác (không phải cscdvmp.com) làm cho hai luồng — "thông tin dự án" và "nhận tiền ủng hộ" — không còn nằm chung một trang, chung một URL. Đây là bước tách bạch tốt hơn so với việc để nút Donate ngay trên cscdvmp.com.
- Khớp với nguyên tắc "không dùng chung trang có yếu tố giao dịch" đã có ở mục 7.4 và 7.8 của báo cáo chính.

### 2.2. Điểm chưa được

Tách domain **không xóa được mối liên kết logic** giữa hai trang, nó chỉ xóa mối liên kết vật lý (cùng một URL).

**a) Chủ thể vẫn là một.** Domain donate mới, nếu vẫn do Legion Team đứng tên đăng ký, vẫn xử lý thanh toán về cùng tài khoản, vẫn được cscdvmp.com dẫn dắt tới — thì về bản chất pháp lý, đây vẫn là một chủ thể duy nhất tổ chức hai hoạt động có liên hệ với nhau, chỉ khác là chia làm hai địa chỉ web. Cơ quan quản lý khi truy vết không dừng lại ở tên miền, mà truy theo pháp nhân/cá nhân đứng sau và dòng tiền.

**b) Việc "cùng dẫn link về trang đó" chính là điểm nối lại hai thứ vừa tách.** Nếu cscdvmp.com có link tới trang donate, và trang donate có link ngược lại hoặc nhắc tới CSCD/FVV, thì hai trang vẫn được đọc như một hệ thống thống nhất. Đây là cùng một kiểu lập luận với mục 3.3: "chỉ trỏ link, không host file" không giảm được rủi ro bị xác định là chủ thể cung cấp, vì luật nhìn hành vi dẫn dắt chứ không nhìn nơi đặt file — chỉ khác đối tượng, từ "file game" sang "dòng tiền donate".

**c) Có thể tạo ấn tượng che giấu nếu làm không khéo.** Một domain donate tách riêng, nếu không có lý do độc lập rõ ràng để tồn tại (ví dụ nó cũng phục vụ các dự án khác của Legion Team, không chỉ CSCD), sẽ dễ bị đọc là "cố ý tách ra để né trách nhiệm" hơn là "tách bạch tự nhiên". Điều này ngược với tinh thần ở mục 8, nhóm 2, việc 15 của báo cáo chính — không nên tạo ấn tượng che giấu khi bản thân hoạt động được cho là hợp pháp.

### 2.3. Điều kiện để biện pháp này thực sự có tác dụng

Chỉ riêng việc tách domain không tự làm được — cần thêm:

- **Không đặt tên miền donate có chứa "CSCD" hoặc gợi nhắc trực tiếp tới game.** Nếu không, việc tách domain chỉ là hình thức.
- **Diễn đạt trên trang donate không nhắc tới việc donate để "được chơi", "ủng hộ để có bản game"**, hay bất kỳ điều gì gắn donate với hành vi tải/nhận FVV.
- **Không đặt link donate ngay cạnh hoặc ngay sau link tải game** trên cscdvmp.com — vị trí đặt link cũng là một tín hiệu về ý đồ liên kết hai luồng.
- **Không dùng chung tài khoản nhận tiền** giữa donate và bất kỳ hoạt động thương mại nào khác (mục 7.8 đã nêu) — tách domain không thay thế được việc tách tài khoản.

---

## 3. Lớp thứ hai: đổi cách diễn đạt từ "donate để có game" sang "ủng hộ tiến độ dự án"

### 3.1. Vì sao cách đóng khung này về lý thuyết đúng hướng

Có sự khác biệt thật giữa hai mô hình, không chỉ là khác câu chữ:

| | Mô hình A — donate để có game | Mô hình B — ủng hộ tiến độ dự án |
|---|---|---|
| Bản chất kinh tế | Gần với trao đổi: tiền đổi lấy quyền truy cập sản phẩm | Patronage: trả tiền vì muốn nhà phát triển tiếp tục làm việc |
| Sản phẩm | Gắn trực tiếp với việc "mở khóa"/"nhận" | Tồn tại độc lập với việc ai đó có donate hay không |
| Gần giống | Bán hàng trá hình dưới tên gọi khác | Ủng hộ sáng tạo không ràng buộc đối giá (mô hình Patreon/Ko-fi phổ biến) |

Mô hình A khó phân biệt về bản chất kinh tế với việc bán game — chỉ khác tên gọi. Mô hình B, nếu đúng như mô tả, có cấu trúc khác hẳn: không có đối giá.

### 3.2. Vì sao ranh giới này rất dễ vỡ trong thực tế

Việc gọi tên đúng ("ủng hộ tiến độ") không tự động làm cho *cấu trúc thật* trở thành mô hình B. Bốn điểm sau cần được kiểm tra nghiêm ngặt — chỉ cần một điểm sai là toàn bộ khung sụp trở lại thành mô hình A trên thực chất:

**a) Có đối giá ẩn không?**
Nếu người donate được: quyền truy cập sớm bản build, tên trong credit gắn với việc "đã giúp game hoàn thành", huy hiệu Discord đặc biệt liên quan tới game, hay bất kỳ hình thức "trả ơn bằng nội dung game" nào — đây vẫn là đối giá, chỉ diễn đạt gián tiếp. Đối giá không cần là chính bản FVV mới tính; bất kỳ lợi ích nào gắn với game đều có thể bị coi là bán hàng trá hình.

**b) Thời điểm và ngữ cảnh đặt lời kêu gọi.**
Nếu lời kêu gọi "ủng hộ tiến độ" xuất hiện ngay tại thời điểm/trang mà người dùng vừa tải game xong, hoặc trình bày kiểu "cảm ơn vì đã tải, giờ hãy ủng hộ để có bản cập nhật tiếp theo" — thì về trải nghiệm người dùng, đây vẫn là một chuỗi nhân quả: tải game → được nhắc donate. Cơ quan xem xét không nhất thiết đọc câu chữ, mà đọc trình tự và ngữ cảnh trình bày.

**c) Tỷ lệ donate có tương quan với việc phát hành/cập nhật FVV không?**
Nếu donate tăng đột biến mỗi khi có bản cập nhật FVV mới, hoặc nếu nhóm truyền thông kiểu "nhờ donate mà chúng tôi ra được bản cập nhật này" — dữ liệu thực tế tự nó chứng minh có mối liên hệ nhân quả giữa dòng tiền và sản phẩm, bất kể câu chữ trên trang donate nói gì.

**d) Ngôn ngữ có nhất quán ở MỌI kênh không?**
Đây là điểm đã nêu ở mục 7.5 báo cáo chính — không chỉ trang donate cần nói đúng "ủng hộ tiến độ", mà fanpage, Discord, trả lời phỏng vấn cũng phải nhất quán. Nếu trang donate viết "ủng hộ nhà phát triển" nhưng một bài đăng Discord viết "cảm ơn mọi người đã donate để game có bản mới", bài Discord đó là bằng chứng phản bác lại toàn bộ khung đã dựng trên trang donate.

### 3.3. Câu chữ là điều kiện cần, không phải điều kiện đủ

Một trang donate ghi đúng "ủng hộ nhà phát triển để đẩy nhanh tiến độ" nhưng vẫn đặt cạnh nút tải FVV, vẫn thưởng quyền lợi liên quan tới game, và vẫn được nhắc tới trong các bài đăng khác như "nhờ donate mà có bản mới" — thì về thực chất pháp lý gần như không khác gì việc ghi thẳng "donate để có game".

### 3.4. Cách làm để khung này thực sự vững

- Trang donate/ủng hộ nên **độc lập hoàn toàn về mặt trải nghiệm** — không đặt cùng trang, không đặt kế bên link tải FVV, và lý tưởng nhất là không chỉ gắn với riêng CSCD mà với Legion Team nói chung (nếu có nhiều dự án).
- Không cấp bất kỳ quyền lợi nào gắn trực tiếp với game: không early access, không credit-vì-đã-giúp-hoàn-thành-game, không nội dung độc quyền trong game.
- Nếu có credit người ủng hộ, diễn đạt kiểu "cảm ơn những người đã đồng hành cùng Legion Team" thay vì "cảm ơn đã giúp hoàn thành CSCD".
- Tuyệt đối tránh mọi câu truyền thông kiểu "nhờ donate mà ra bản mới" ở bất kỳ kênh nào — đây là câu dễ tự phá vỡ toàn bộ khung nhất.

---

## 4. Đánh giá tổng hợp: hai lớp biện pháp cộng lại thì sao?

Hai câu hỏi ban đầu — tách domain và đổi cách diễn đạt — thực chất là hai lớp phòng thủ **bổ sung cho nhau**, không thay thế nhau:

| Lớp | Xử lý được | Không xử lý được nếu làm một mình |
|---|---|---|
| Tách domain | Mối liên kết vật lý (cùng URL, cùng trang) | Mối liên kết logic (chủ thể chung, dẫn link qua lại, dòng tiền chung) |
| Đổi cách diễn đạt | Câu chữ mô tả mục đích donate | Đối giá ẩn, ngữ cảnh đặt lời kêu gọi, tương quan dữ liệu thực tế, nhất quán đa kênh |

Làm cả hai cùng lúc, và làm đúng các điều kiện đi kèm ở mục 2.3 và 3.4, sẽ giảm rủi ro đáng kể hơn so với chỉ làm một lớp. Nhưng **không có tổ hợp nào trong hai lớp này loại bỏ hoàn toàn rủi ro** — đúng với nguyên tắc nền đã nêu ở mục 7.0 báo cáo chính: mục tiêu là giảm xác suất bị chú ý và giảm mức độ nghiêm trọng nếu bị chú ý, không phải loại bỏ rủi ro tuyệt đối.

---

## 5. Khuyến nghị hành động cụ thể

1. **Tách trang Donate sang domain riêng**, không chứa tên "CSCD" hoặc bất kỳ từ khóa nào gợi nhắc trực tiếp tới game.
2. **Đổi toàn bộ câu chữ kêu gọi** từ "donate để có game/ủng hộ để nhận bản FVV" sang "ủng hộ Legion Team để duy trì và phát triển dự án" — áp dụng nhất quán ở mọi kênh, không chỉ trang donate.
3. **Rà soát và loại bỏ mọi quyền lợi gắn với game** hiện đang cấp cho người donate (early access, credit trong game, nội dung độc quyền).
4. **Không đặt link donate cạnh hoặc ngay sau link tải FVV** trên cscdvmp.com hoặc bất kỳ trang nào.
5. **Không dùng chung tài khoản nhận tiền** giữa donate và các hoạt động khác.
6. **Rà lại lịch sử truyền thông** (fanpage, Discord, blog) để tìm và sửa các câu đã lỡ gắn donate với việc "có được" game hoặc "nhờ donate mà ra bản mới".
7. **Theo dõi định kỳ tương quan giữa lượng donate và các đợt cập nhật FVV** — nếu có tương quan rõ, cần điều chỉnh lại cách và thời điểm truyền thông về cập nhật, tách nó khỏi các đợt kêu gọi donate.

---

*Tài liệu nội bộ — Legion Team*
