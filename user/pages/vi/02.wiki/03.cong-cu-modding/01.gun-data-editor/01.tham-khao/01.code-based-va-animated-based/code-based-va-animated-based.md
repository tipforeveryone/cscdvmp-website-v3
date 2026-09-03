---
title: Khái niệm Code-based và Animated-based
template: wiki
smls_language: vi
smls_translations:
    en: /en/wiki/modding-tools/gun-data-editor/reference/code-based-and-animation-based
---

## 1. Giới thiệu

- **Code-based (CB)** và **Animation-based (AB)** là hai luồng xử lý hiển thị (model/animation) cho đôi tay và súng dưới góc nhìn FPS.
- **GDE** là công cụ giúp modder đưa vũ khí của mình vào game một cách nhanh chóng và tiện lợi, đảm bảo các yêu cầu từ cả hai luồng một cách chính xác nhất.

---

## 2. Đặc điểm

- Luồng **CB** có vai trò cốt lõi để súng có thể vận hành với các thông số tối thiểu.
- **CB** mang lại flow nhanh chóng, đổi lại là sự "nghèo nàn" về animation so với luồng AB.
- Luồng AB tuy độc lập nhưng vẫn phụ thuộc một phần vào **CB** về mặt vận hành.
- CB có thể hoạt động mà không cần **AB**, nhưng không có **AB** đồng nghĩa với việc thiếu đi các animation đẹp mắt, thứ mang lại linh hồn thực sự cho gunplay.
- Trong giai đoạn cần test nhanh, **CB** sẽ đảm bảo khả năng vận hành trong khi **AB** là một phần "bổ sung" quan trọng.

---

## 3. Code-based Hand/Gun (C_Hand/Gun)

- **C_Hand** là model đôi tay *mặc định*, tích hợp thẳng vào package của game.
- **C_Gun** có 2 vai trò, dùng trong **FPS View** và **"World model"** của vũ khí.
- **C_Hand** là parent của **C_Gun**, **C_Hand** sẽ áp dụng các pose thích hợp, khớp với mesh của **C_Gun**.
- Mọi hoạt động của **C_Hand** và **C_Gun** được phối hợp bởi các thuật toán "procedural".

### 3.1 C_Hand Animation

- Animation của **C_Hand** là dạng 1-frame, có 3 poses gồm:
    - **Pose normal**
        - Bàn tay phải nắm vào hand grip, ngón tay trỏ đặt vào nhưng không siết cò súng.
        - Bàn tay trái nắm vào hand guard của **C_Gun**
    - **Pose mount**
        - Bàn tay phải tương tự pose normal,
        - Tay trái, nắm vào băng đạn (nếu có) của **C_Gun**
    - **Pose shield**: Tư thế trong lúc cầm khiên chắn đạn

### 3.2 C_Gun Animation

- **C_Gun** có 3 animation, trong đó 2 x **1-frame** và 1 x **motion**
    - Pose **original**: Vị trí mặc định.
    - Pose **dry**: Vị trí khi bolt bị lock, thường được dùng cho pistol hoặc súng có cơ chế bolt-lock, nếu pose **dry** không được cung cấp, **C_Gun** sẽ sử dụng pose **original** để thay thế.
    - Motion **shoot**: bolt chuyển động trọn một hành trình từ vị trí ban đầu, giật về vị trí nhả vỏ đạn và quay về.

---

## 4. Animation-based Hand/Gun (A_Hand/Gun)

- Trong phần mềm 3D, animation của **A_Hand** và **A_Gun** được tạo ra đồng bộ. Tuy nhiên, trong game, 2 đối tượng này lại được xử lý riêng biệt. Nguyên nhân là do hệ thống attachment sẽ cần **A_Gun** độc lập để có thể gắn vào.
- Thực tế, **A_Hand** và **A_Gun** sẽ chạy 2 animation giống nhau song song, tạo ra cảm giác khớp vào làm 1.
