---
title: "Luồng CB phần 2: Export, import, cài đặt data cơ bản"
template: wiki
smls_language: vi
smls_translations:
    en: /en/wiki/modding-tools/gun-data-editor/step-by-step-guide/export-import-basic-data-setup
previous: /vi/wiki/cong-cu-modding/gun-data-editor/huong-dan-tung-buoc/chuan-bi-asset-code-based
next: /vi/wiki/cong-cu-modding/gun-data-editor/huong-dan-tung-buoc/data-thoi-gian-thuc-cai-dat-phu-kien
---

## 1. Export FBX

### 1.1 Thân súng

- Trong blender, chuyển sang Object Mode
- Chọn object armature và mesh "body"
- Vào menu File > Export > FBX
- Trong hội thoại lưu file, hãy đảm bảo các tùy chọn sau được đánh dấu tick > nhấn "Export FBX"

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-export-fbx-1785724599.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-export-fbx-1785724599.jpg?width=920" alt="" loading="lazy"></a>

> [!TIP]
> Tùy chọn "Only Deform Bones" tuy chưa thực sự cần thiết trong trường hợp này, do bone của CB Gun khá đơn giản, nhưng đây sẽ là một thói quen tốt.

**Một lưu ý trong quá trình export liên quan đến animation:**

- Trong hội thoại export FBX trên, mở rộng phần Animation bạn sẽ thấy có 2 tùy chọn là NLA Strips và All Actions.
- Việc để cả 2 tùy chọn này được tick đôi khi sẽ tạo ra 2 lần animation khi import vào engine, một trong số đó sẽ có dạng "tên armature"|"tên animation"
- Để hạn chế vấn đề này, cách tốt nhất là bạn hãy mở NLA của Blender lên và Push down tất cả các animation cần thiết vào object armature
- Khi export FBX, bỏ chọn All Actions (chỉ để NLA Strips), kết quả là file fbx khi import vào engine sẽ chỉ có các animation có mặt trong NLA.

### 1.2 Băng đạn

- Lựa chọn object mesh "mag"
- Đưa object về vị trí world origin (**Alt + G**)
- Thực hiện việc export tương tự như với object mesh "body". Bạn có thể đặt tên các file fbx này tùy ý, miễn sao thuận tiện

> [!NOTE]
> Việc đưa một object về world origin là rất quan trọng, nó ảnh hưởng tới origin của object trong game. Object "mag" khi được import vào GDE sẽ được điều chỉnh lại vào đúng vị trí của nó nên giờ bạn không phải lo rằng nó bị lệch khỏi model "body"

### 1.3 Model hand

- Trong Object Mode, chọn cả armature và mesh của CB Hand.
- Thực hiện các bước export FBX tương tự như đã làm với model CB Gun và băng đạn
- Lần này, tùy chọn "Only Deform Bones" thực sự quan trọng, bởi armature của CB Hand còn có cả các control-bone, nếu tùy chọn này bị tắt, tất cả hệ thống bone sẽ được export dẫn đến những lỗi không mong muốn.

---

## 2. Import vào GDE

Do GDE là một ứng dụng được xây dựng trên Titan Engine, nên nó sẽ cần được chạy từ Engine để được sử dụng. Trước đó, ta cần import và cấu hình cho các object mà ta đã chuẩn bị ở trên.

### 2.1 Thao tác import

Việc import các object (giờ có thể gọi là asset) vào engine rất đơn giản, chỉ cần **kéo thả** các file fbx vào khung quản lý asset là mọi thứ sẽ tự động diễn ra. Việc bạn cần làm tiếp theo là quản lý các asset này sao cho hợp lý và dễ nhớ khi cần điều chỉnh.

- Trước tiên, hãy tạo một folder mới trong engine, bằng cách click chuột phải vào danh sách bên trái > New > Folder, đặt tên cho folder, ví dụ "akm".
- Sau đó tạo tiếp folder nữa bên trong, đặt tên là "code-based"
- Cuối cùng kéo thả cả 3 file fbx đã export vào folder này.

Sau khi import thành công, các asset trong engine sẽ được sắp xếp như hình minh họa

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/gde-import-asset-cb-folder-1785795408.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/gde-import-asset-cb-folder-1785795408.jpg?width=920" alt="" loading="lazy"></a>

### 2.2 Bổ sung các object elements khác

Ta sẽ tạo thêm 3 object elements mới bằng cách: Click chuột phải vào folder "code-based" > New > Object > Tiến hành đặt tên.

Với mỗi object element, đặt tên lần lượt như sau:

1. "CB Gun - Animset": Cung cấp các animation parameter cho CB Gun.
2. "CB Hand - Animset": Cung cấp các animation parameter cho CB Hand.
3. "CB Soundset": Cung cấp các sound parameter cho luồng CB.

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/gde-import-add-more-cb-assets-1785796161.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/gde-import-add-more-cb-assets-1785796161.jpg?width=920" alt="" loading="lazy"></a>

---

## 3. Cài đặt data

Với mỗi object element đã có, **click đúp** để mở **object editor** tương ứng > Vào tab **Params** > Thao tác cho từng object theo các bước dưới đây:

### 3.1 CB Gun - AKM

- Trong mục Class > Chọn **OBJ_GUN**
- Danh sách các thông số dành cho chính asset là model súng AKM sẽ xuất hiện. Tham khảo chi tiết từng thông số tại [Cấu trúc Gun Data](/vi/wiki/cong-cu-modding/gun-data-editor/tham-khao/cau-truc-gun-data)
- Nhập "basic gun code"
- Lần lượt thực hiện thao tác kéo thả các object element đã tạo vào các slot parameter tương ứng

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-config-1785799568.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-config-1785799568.jpg?width=920" alt="" loading="lazy" style="width: 100%; height: auto;"></a>

### 3.2 CB Gun - AKM mag

- Trong mục Class > Chọn **OBJ_MAGAZINE**
- Nhập đầy đủ các thông số dành cho băng đạn. Tham khảo chi tiết từng thông số tại [Cấu trúc Magazine Data](https://wikivi.cscdvmp.com/gun-data-editor/cau-truc-magazine-data)
- Đối với slot parameter "thumbnail image", làm theo hướng dẫn [Tạo hình đại diện cho CB Gun và Mag](https://wikivi.cscdvmp.com/gun-data-editor/tao-hinh-dai-dien-cho-cb-gun-va-mag)
- Sau khi có được hình đại diện, tiến hành **kéo thả file ảnh (png)** vào thành child của object element "CB Gun - AKM mag" > Đổi tên là "akm-mag-thumbnail" (không bắt buộc)
- Kéo object "akm-mag-thumbnail" trên vào slot parameter "thumbnail image".

### 3.3 CB Gun - Animset

- Trong mục Class > Chọn **OBJ_CODE_BASE_GUN_ANIM**
- Kéo thả các animation thuộc về "CB Gun - AKM" vào các slot tương ứng của "CB Gun - Animset"

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-anim-config-1785803594.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-anim-config-1785803594.jpg?width=920" alt="" loading="lazy"></a>

### 3.4 CB Hand - AKM

- Trong mục Class > Chọn **OBJ_HAND**
- Việc lựa chọn class cho object element "CB Hand - AKM" chỉ mang tính tượng trưng, không tác động đến sự vận hành của GDE.
- Trong tương lai, nhóm phát triển sẽ thực hiện việc cho phép người dùng sử dụng CB Hand của riêng mình.

> [!NOTE]
> Mục đích của thao tác import CB Hand vào engine chủ yếu là để lấy được 2 animation elements (normal và mount pose) một cách nhanh chóng và tự động.
>
> Bạn có thể tạo một animation element > trỏ tới file fbx chứa animation > nhập tên animation > Hoàn tất import. Tuy nhiên cách này không nhanh bằng việc import cả model tay.

### 3.5 CB Hand - Animset

- Trong mục Class > Chọn **OBJ_CODE_BASE_HAND_ANIM**
- Kéo thả các animation thuộc về "CB Hand - AKM" vào các slot tương ứng của "CB Hand - Animset"

### 3.6 CB Soundset

- Trong mục Class > Chọn **OBJ_CODE_BASE_SOUND**
- Import các file âm thanh cần thiết cho luồng CB vào Engine, nằm bên trong object element "CB Soundset". Các file âm thanh này cần đảm bảo theo [Tiêu chuẩn âm thanh CB/AB](https://wikivi.cscdvmp.com/gun-data-editor/tieu-chuan-file-am-thanh-cb-ab)
- Kéo thả từng sound elements vào các slot parameter tương ứng.

> [!WARNING]
> Để chuẩn bị đầy đủ một âm thanh đảm bảo chất lượng và thể hiện được uy lực của súng sẽ cần một sound editor giỏi hoặc một thư viện âm thanh hữu ích, trong khuôn khổ của bài hướng dẫn này, sẽ chỉ có một vài sound element tối thiểu được dùng để minh họa.

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cb-soundset-1785813173.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cb-soundset-1785813173.jpg?width=920" alt="" loading="lazy"></a>
