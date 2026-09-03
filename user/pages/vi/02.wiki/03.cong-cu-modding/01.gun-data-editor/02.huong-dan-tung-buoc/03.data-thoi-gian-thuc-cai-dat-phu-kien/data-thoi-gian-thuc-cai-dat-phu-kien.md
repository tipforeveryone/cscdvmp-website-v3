---
title: "Luồng CB phần 3: Data thời gian thực, cài đặt phụ kiện"
template: wiki
smls_language: vi
smls_translations:
    en: /en/wiki/modding-tools/gun-data-editor/step-by-step-guide/realtime-data-accessory-setup
previous: /vi/wiki/cong-cu-modding/gun-data-editor/huong-dan-tung-buoc/export-import-data-code-based
---

## 1. Tổng quan

Sau các bước chuẩn bị trong [Phần 1](/vi/wiki/cong-cu-modding/gun-data-editor/huong-dan-tung-buoc/chuan-bi-asset-code-based) và [Phần 2](/vi/wiki/cong-cu-modding/gun-data-editor/huong-dan-tung-buoc/export-import-data-code-based). Ta đến với phần 3 của đưa model súng vào game theo luồng code-based. Trong phần này, bạn sẽ điều chỉnh data cho súng theo thời gian thực trong môi trường GDE, bao gồm:

1. Các điểm neo quan trọng.
2. Cấu hình phụ kiện dựa vào hệ thống mount
3. Lưu dữ liệu (.dat) và xuất file package (.pak)

## 2. Khai báo cấu hình

Tìm trong danh sách asset element có tên **_Config** và mở nó ra, bạn có thể điều chỉnh một số tùy chọn:

```cpp
bool officialGun = false;
// Mặc định để là 'false' vì súng của bạn không thuộc về nhóm các vũ khí được cung cấp bởi nhà phát triển

bool exportAsPack = true;
// Bạn có thể có nhiều súng trong GDE và đặt chúng vào thành 1 gói khi hoàn tất
// Để giá trị là TRUE sẽ giúp GDE lưu dữ liệu cho toàn bộ súng trong pack thay vì 1 súng riêng lẻ

Str packName = "your_pack_name";
// Sử dụng khi 'exportAsPack` ở trên có giá trị TRUE
// Đặt tên theo nguyên tắc: Không dấu cách, không viết hoa

/******************************************************************************/
// Đăng ký cho từng súng có mặt trong pack của bạn tại đây
// Các súng được đăng ký sẽ xuất hiện trong danh sách của GDE
void Register_Guns()
{
    Register_Gun(/*Kéo object element là model CG Gun vào đây/*);

    // Bạn có thể copy function 'Register_Gun()' ở trên nhiều lần
    // mỗi lần tương ứng với một súng

    Set_Working_Model("gun_code_cua_ban");
    // Nhập gun code của súng mà bạn muốn xuất hiện đầu tiên khi bắt đầu khởi động GDE
    // Bạn buộc phải nhập một gun code nào đó, không được để function này trống.
}
```

Kéo thả object element có tên "CB Gun - AKM" trong danh sách element vào thành nội dung **bên trong dấu ngoặc đơn** của function `Register_Gun()` đồng thời nhập `akm_tut` vào function `Set_Workking_Model()` để nó trở thành `Set_Working_Model("akm_tut");`

## 3. Khởi chạy GDE

Ấn nút Play để Engine bắt đầu khởi chạy GDE, trong lần đầu chạy sẽ cần một chút thời gian để GDE được engine biên dịch. Nếu bạn chưa quen với GDE, xin mời tham khảo [Giao diện Gun Data Editor](https://wikivi.cscdvmp.com/gun-data-editor/giao-dien-gun-data-editor)

Chúng ta sẽ bắt đầu điều chỉnh data của các vũ khí đã được khai báo ở bước trên (AKM)

### 3.1 Các điểm neo

Khác với data nhập bằng tay mà bạn từng thao tác, các điểm neo này là tọa độ giá trị local với hệ quy chiếu là điểm gốc (origin) và hướng (orientation) của model súng. Dựa vào các điểm này, các tính toán sẽ được thực hiện khi có sự kiện diễn ra như khai hỏa, gặp vật cản v..v..

> [!NOTE]
> Thông tin chi tiết các điểm neo xem tại [Cấu trúc Gun Data](/vi/wiki/cong-cu-modding/gun-data-editor/tham-khao/cau-truc-gun-data)
