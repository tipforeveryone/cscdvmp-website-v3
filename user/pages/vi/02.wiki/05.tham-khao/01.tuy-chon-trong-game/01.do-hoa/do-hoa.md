---
title: Đồ họa
template: wiki
smls_language: vi
smls_translations:
    en: /en/wiki/references/game-options/graphic
---

Trang này cung cấp thông tin về chi tiết về các tùy chọn về đồ họa trong game.

Các tùy chọn sẽ được phân loại theo màu sắc, tượng trưng cho mức độ ảnh hưởng tới tốc độ khung hình/giây (FPS):

- <span style="color:green">Màu xanh:</span> Có khả năng tăng FPS
- <span style="color:#b8860b">Màu vàng:</span> Trung tính
- <span style="color:red">Màu đỏ:</span> Có khả năng giảm FPS

## 1. Nhóm Cơ bản

### 1.1 Cấu hình nhanh

Điều chỉnh nhanh các bộ cấu hình đồ họa dành cho máy tính của bạn.

| Mức | Mô tả |
|---|---|
| <span style="color:green">Máy cấu hình thấp</span> | Tắt hoàn toàn hoặc chuyển về mức độ thấp nhất tất cả các tùy chọn |
| <span style="color:green">Thấp</span> | Đưa các tùy chọn cơ bản về mức thấp nhất và tắt các tùy chọn cao cấp |
| <span style="color:#b8860b">Trung Bình</span> | Đưa các tùy chọn cơ bản về mức trung bình và mở một số tùy chọn cao cấp |
| <span style="color:red">Cao</span> | Đưa các tùy chọn về mức cao nhất, kích hoạt toàn bộ các tùy chọn cao cấp |

> 💡 Một số tùy chọn sẽ không bị tác động bởi tùy chọn này như làm mờ chuyển động (Motion blur), Temporal Anti Aliasing, Temporal Super Resolution v..v..

### 1.2 Độ phân giải

Danh sách độ phân giải mà màn hình của người chơi có thể xử lý. Độ phân giải thấp hơn sẽ giúp tăng FPS, ngược lại, độ phân giải lớn sẽ làm giảm FPS.

### 1.3 Chế độ cửa sổ

| Chế độ | Mô tả |
|---|---|
| <span style="color:red">Cửa sổ</span> | Game chạy ở chế độ cửa sổ. Khuyến cáo sử dụng do game đang trong thời gian demo thử nghiệm, có khả năng xảy ra crash hoặc treo game, chế độ cửa sổ sẽ giúp người chơi dễ dàng xử lý. |
| <span style="color:green">Toàn màn hình</span> | Game chạy ở chế độ toàn màn hình. Giúp GPU tập trung tài nguyên tốt hơn vào việc vận hành game |

### 1.4 Đồng bộ dọc (Vsync)

| Trạng thái | Mô tả |
|---|---|
| <span style="color:#b8860b">Bật</span> | Giới hạn khung hình/giây (FPS) ở mức độ làm tươi của màn hình, thường là 60Hz hoặc 75Hz. Nên bật nếu cấu hình máy của người chơi tốt, để tránh hiện tượng xé hình do FPS bị đẩy lên quá cao (200+) |
| <span style="color:#b8860b">Tắt</span> | Hãy tắt đi nếu cấu hình máy ở mức thấp hoặc trung bình để FPS có thể được đẩy lên mức độ cao nhất nếu có thể |

## 2. Kết xuất hình ảnh (Render)

### 2.1 Chất lượng render (Render quality)

| Mức | Mô tả |
|---|---|
| <span style="color:green">Nhanh</span> | Bộ render sử dụng độ sâu màu và mức độ render chất lượng kém hơn bộ tiêu chuẩn, giảm thiểu bộ nhớ tiêu chuẩn và gia tăng FPS |
| <span style="color:red">Tiêu chuẩn</span> | Hãy tắt đi nếu cấu hình máy ở mức thấp hoặc trung bình để FPS có thể được đẩy lên mức độ cao nhất nếu có thể |

### 2.2 Tỉ lệ kết xuất (Render percent)

Tỉ lệ gia tăng hoặc giảm thiểu số lượng pixel được render và trải rộng ra trên màn hình.

| Tỉ lệ | Mô tả |
|---|---|
| <span style="color:green">50%</span> | Số lượng pixel kết xuất chỉ còn 50%. Chất lượng tệ, phù hợp các loại màn hình nhỏ |
| <span style="color:green">75%</span> | Số lượng pixel kết xuất chỉ còn 75%. Chất lượng kém, phù hợp các loại màn hình nhỏ |
| <span style="color:#b8860b">100%</span> | Tỉ lệ mặc định. Dành cho màn hình máy tính thông thường. |
| <span style="color:red">150%</span> | Số lượng pixel kết xuất tăng lên 150%. Hình ảnh trở nên sắc nét, phù hợp các màn hình lớn |
| <span style="color:red">200%</span> | Số lượng pixel kết xuất cao nhất. Hình ảnh rất sắc nét, dành cho các màn hình cỡ lớn. |

### 2.3 Phản chiếu (Reflection)

| Mức | Mô tả |
|---|---|
| <span style="color:green">Tắt</span> | Tắt toàn bộ các hiệu ứng phản chiếu |
| <span style="color:green">Thấp</span> | Chỉ áp dụng Cubemap |
| <span style="color:red">Cao</span> | Sử dụng phản chiếu thời gian thực kết hợp Cubemap (Tùy chọn này cần GPU hiệu suất cao, có thể gây ảnh hưởng lớn tới FPS tuy nhiên sẽ mang lại hiệu ứng thị giác chất lượng cao) |

### 2.4 Chất lượng mặt nước (Water surface quality)

| Mức | Mô tả |
|---|---|
| <span style="color:green">Tắt</span> | Mặt nước không phản chiếu |
| <span style="color:green">Thấp</span> | Mặt nước phản chiếu với độ phân giải thấp |
| <span style="color:#b8860b">Trung bình</span> | Mặt nước phản chiếu độ phân giải trung bình |
| <span style="color:red">Cao</span> | Mặt nước phản chiếu độ phân giải cao, bao gồm cả bóng đổ |

### 2.4 Khử răng cưa

| Mức | Mô tả |
|---|---|
| <span style="color:green">Tắt</span> | Tắt toàn bộ việc khử răng cưa |
| <span style="color:#b8860b">Thấp</span> | Áp dụng kỹ thuật FXAA |
| <span style="color:red">Cao</span> | Áp dụng kỹ thuật SMAA và Multi Sampling |

### 2.5 Khử răng cưa Temporal

| Trạng thái | Mô tả |
|---|---|
| Tắt | Tắt khử răng cưa Temporal |
| Bật | Kích hoạt khử răng cưa Temporal. Hình ảnh sẽ trở nên mịn màng và chân thực hơn. Tuy nhiên có một điểm yếu là hình thức khử răng cưa này sẽ tạo ra các bóng mờ (ghost) của hình ảnh được render trong frame trước |

### 2.6 Chi tiết chất liệu (Texture quality)

| Mức | Mô tả |
|---|---|
| Buệệệệ !! | Nó xấu tệ hại, nhưng tiết kiệm tài nguyên tối đa! |
| <span style="color:green">Thấp</span> | Độ phân giải thấp |
| <span style="color:#b8860b">Trung bình</span> | Độ phân giải bình thường |
| <span style="color:red">Cao</span> | Độ phân giải cao nhất |

### 2.7 Bộ lọc chất liệu (Texture filtering)

### 2.8 Làm nét (Sharpen)

### 2.9 Chất lượng ánh sáng (Lighting quality)

### 2.10 Chiều sâu bóng môi trường (Ambience Occlusion)

### 2.11 Temporal Super Resolution

## 3. Đổ bóng

### 3.1 Chất lượng đổ bóng (Shadow quality)

### 3.2 Tầm xa đổ bóng (Shadow distance)

### 3.3 Làm mềm bóng (Shadow soft)

### 3.4 Cỏ đổ bóng (Grass shadow)

### 3.5 Đổ bóng ánh sáng tĩnh (Static light shadow)

### 3.6 Đổ bóng chiếu đèn pin (Flashlight shadow)

### 3.7 Đổ bóng chớp đầu nòng (Muzzle light shadow)

## 4. Hiệu ứng

### 4.1 Chi tiết hiệu ứng (Effect detail)

### 4.2 Chi tiết môi trường (Environment detail)

### 4.3 Chi tiết vật lý (Physic detail)

### 4.4 Tia sáng mặt trời (Sun godrays)

### 4.5 Độ sâu trường nhìn (Depth of Field)

### 4.6 Điều chỉnh sắc độ (Tone mapping)

### 4.7 Ánh sáng lóa (Bloom)

### 4.8 Hiệu ứng Bodycam

### 4.9 Làm mờ chuyển động (Motion blur)

## 5. Mô phỏng thấu kính

### 5.1 Kính ngắm quang học
