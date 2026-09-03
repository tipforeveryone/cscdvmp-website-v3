---
title: "Luồng CB phần 1: Chuẩn bị các asset quan trọng"
template: wiki
smls_language: vi
smls_translations:
    en: /en/wiki/modding-tools/gun-data-editor/step-by-step-guide/prepare-key-assets
next: /vi/wiki/cong-cu-modding/gun-data-editor/huong-dan-tung-buoc/export-import-data-code-based
---

## 1. Tổng quan

Bài viết này sẽ hướng dẫn bạn đưa một model súng bất kỳ vào GDE, gồm các bước:

1. **Chuẩn bị model** CB Gun và CB Hand trong phần mềm 3D.
2. **Export** ra định dạng .fbx và **import** vào GDE.
3. **Cấu hình** các đối tượng đã import.
4. Xậy dựng **thông số** vũ khí, chuẩn bị **file âm thanh**
5. Publish **data và package**
6. **Thử nghiệm** trong game

Có 3 đối tượng cần chuẩn bị, bao gồm:

1. **Model súng:** Đã được rigging/skinning phần bolt.
2. **Model băng đạn**: Có thể bỏ qua nếu súng không sử dụng
3. **Model đôi tay**: Đã được rigging/skinning.

Người viết mặc định rằng bạn **đã có kinh nghiệm** trong việc sử dụng phần mềm 3D, cụ thể là **Blender**, dù vậy bạn hoàn toàn có thể áp dụng nội dung bài viết cho các phần mềm 3D khác (C4D, 3DMax, Maya v..v..).

> [!NOTE]
> Model súng sử dụng trong bài viết là AKM. Tuy nhiên, đừng ngần ngại lựa chọn model súng khác để thực hành.

---

<h2 id="chuanbi-cbgun">2. Chuẩn bị model súng (CB Gun)</h2>

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/prepare-gun-model-1785603699.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/prepare-gun-model-1785603699.jpg?width=920" alt="" loading="lazy"></a>

### 2.1 Polycount

Lượng tris của model theo luồng CB **phụ thuộc vào độ phức tạp** của súng mà nó mô phỏng. Khuyến nghị từ **70k trở xuống**, khoảng 40k đến 50k là vừa phải cho một model minh họa như AKM ở cấp độ **LOD0**, ổn cho cả **FPS view** và **World view** (kết hợp với các LOD1+) với súng lục, thì từ 10k đến 25k là ổn.

### 2.2 "body" và "mag"

Model súng thường có nhiều bộ phận, các bộ phận này cần được **join và đặt lại tên theo tiêu chuẩn**.

> [!WARNING]
> Hãy lưu một file .blend mới trước khi thực hiện join, tránh ảnh hưởng tới file gốc.

1. Chọn tất cả các mesh của súng **trừ mesh băng đạn**.
2. Ấn **Ctrl+J** để join, đổi tên mesh mới là "**body**" và mesh băng đạn là "**mag**".

Hình minh họa dưới đây cho thấy mesh của model trước và sau khi join.

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/akm-element-before-merge-1785600554.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/akm-element-before-merge-1785600554.jpg?width=920" alt="" loading="lazy"></a>
<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/akm-element-after-merge-1785600577.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/akm-element-after-merge-1785600577.jpg?width=920" alt="" loading="lazy"></a>

> [!TIP]
> Bạn có thể xóa bớt các mesh mà người chơi không nhìn thấy (nếu có) rồi mới join, việc này giúp tối ưu lượng tris.

> [!NOTE]
> Kể từ thời điểm này, khi bài viết đề cập tới "toàn bộ model" hoặc không nói cụ thể object nào, nghĩa là thao tác đó sẽ áp dụng cho cả 2 mesh là "body" và "mag"

### 2.3 Hướng

Khi export model ra fbx và import vào engine, trục **Y-** của model trong blender sẽ trở thành trục **Z+** của engine (còn gọi là forward vector)

1. Xoay toàn bộ model để nòng súng hướng về phía trục Y-
2. Tiến hành **Apply rotation**.

> [!NOTE]
> Trong các hình minh họa ở trên, hướng của nòng súng vốn đã đặt đúng theo trục Y-

### 2.4 Kích thước

1. Đưa tiêu chuẩn đo đạc của blender về hệ metric (**1 đơn vị** độ dài sẽ tương đương với **1 mét**)
2. Đặt kích thước model về **con số thực tế**. Ví dụ AKM có chiều dài bao gồm báng súng là 880mm, ta sẽ scale toàn bộ model về sấp sỉ kích thước này (theo trục Y)
3. Tiến hành **Apply scale**.

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/gun-scale-1785601874.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/gun-scale-1785601874.jpg?width=920" alt="" loading="lazy"></a>

### 2.5 Vị trí

Khi **ngắm bắn bằng ironsight** trong game, model súng sẽ được đưa đến vị trí mà ở đó forward vector của camera **trùng với đường thẳng đi qua thước ngắm/đầu ruồi**.

Ta sẽ thực hiện điều tương tự trong Blender.

1. Đưa camera về vị trí world origin (**Alt + G**), đảm bảo forward vector của camera trùng với trục **Y-**
2. Chuyển chế độ view của camera sang **Othorgraphic**, đổi góc nhìn thành camera.
3. Di chuyển model súng theo trục **XZ** sao cho thước ngắm và đầu ruồi nằm ở điểm giao tại world origin (trung tâm của camera view).

    <a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/model-position-cam-ortho-1785602131.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/model-position-cam-ortho-1785602131.jpg?width=920" alt="" loading="lazy"></a>

4. Chuyển lại chế độ view của camera về **Perspective**, đặt FOV là 55 độ (tương đương với FOV mặc định trong game).
5. Di chuyển model súng theo trục **Y** cho đến khi ưng ý, góc nhìn này sẽ gần sát với góc nhìn trong game.

    *Lưu ý: Đây là view tương ứng với trạng thái "ngắm bắn sâu" trong game, hãy đảm bảo ironsight của vũ khí được quan sát rõ với tỉ lệ hợp lý, không nên để mesh "body" ở quá xa vì khi sử dụng "ngắm bắn nhanh" model súng sẽ tự động đưa xa khỏi camera.*

    <a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/model-position-cam-perspective-1785623513.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/model-position-cam-perspective-1785623513.jpg?width=920" alt="" loading="lazy"></a>

6. Tiến hành **Apply position cho "body"**.
7. Với mesh "mag", chỉnh vị trí sao cho world origin nằm vào phần đỉnh của băng đạn, có thể **ẩn "body"** và chuyển sang **side view** để dễ quan sát.

    <a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/model-position-mag-1785602360.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/model-position-mag-1785602360.jpg?width=920" alt="" loading="lazy"></a>

8. Tiến hành **Apply position cho object "mag"**

> [!TIP]
> Bạn có thể thực hiện mọi thao tác chỉnh sửa về Vị trí, Kích thước và Hướng rồi sau đó áp dụng Apply All Transforms sẽ nhanh hơn

### 2.6 Animation

Trước tiên, hãy kiểm tra toàn bộ các mesh của model có mesh nào đang bị gán keyframe không. Nếu có, hãy xóa keyframe của mesh đó đi.

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/recalculate-no-meshframe-1785618118.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/recalculate-no-meshframe-1785618118.jpg?width=920" alt="" loading="lazy"></a>

Ẩn mesh "mag" vì phần dưới đây chỉ dành cho mesh "body".

- Tạo một hệ armature với các bone được đặt tên như trong hình minh họa
- Bone "bolt" sẽ là child của bone "weaponBase" dưới dạng **Offset**
- Phần mesh bolt của súng được gán skin weight **1.0** vào bone "bolt", **0.0** vào bone "weaponBase"
- Các phần mesh còn lại, gán skin weight **1.0** vào bone "weaponBase", **0.0** vào bone "bolt"

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/bone-weight-bolt-and-weaponbase-1785624175.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/bone-weight-bolt-and-weaponbase-1785624175.jpg?width=920" alt="" loading="lazy"></a>

> [!WARNING]
> Lưu ý: Trước khi tiến hành làm animation cho mesh bolt, hãy kiểm tra mesh của chốt an toàn (safety switch) đã được đặt ở vị trí "off" hay chưa, đặc biệt là với dòng súng AK. Nếu chưa, hãy xoay lại phần mesh đó cho hợp lý, vì trên thực tế bolt không thể di chuyển nếu safety switch đang ở trạng thái "on"

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/safety-switch-off-1785620597.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/safety-switch-off-1785620597.jpg?width=920" alt="" loading="lazy"></a>

- Tạo keyframe ở 3 vị trí trên timeline: **0, 10, 20.**
- Ở frame 10, di chuyển bone "bolt" tới vị trí thể hiện hành trình giật tối đa của mesh bolt

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cb-akm-bolt-anim-1785624465.gif" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cb-akm-bolt-anim-1785624465.gif?width=920" alt="" loading="lazy" style="width: 100%; height: auto;"></a>

- Nhập tên action này là "shoot".
- Tạo thêm action mới, đặt tên là "original", action này chỉ có 1 frame ở frame 0, khi bolt chưa di chuyển.

> [!NOTE]
> Vì AKM không có vị trí thể hiện hết đạn "dry" nên không cần tạo action cho trạng thái này, nhưng nó sẽ có mặt ở các súng sử dụng cơ chế "lock back"

Đến đây, ta đã chuẩn bị xong phần model cho súng, gồm: Hướng xoay, kích thước, vị trí và animation

### 2.7 Material/Texture

Các mesh part của model vũ khí có thể sẽ **chứa nhiều material**, kéo theo số lượng texture lớn. Nếu không được tối ưu hóa, việc sử dụng model CB Gun trong game sẽ hao tốn tài nguyên hệ thống hơn mức cần thiết.

Tuy không bắt buộc, nhưng dưới đây là một số gợi ý hữu ích để model được tối ưu nhất cho game.

#### 2.7.1 Số lượng material

Đối với bất kỳ engine nào, một model (mesh) được cho là tối ưu khi chỉ có 1 material/1 bộ texture kèm theo, giúp giảm đáng kể thời gian load dữ liệu của GPU. Do đó, nếu model của được bake về 1 material duy nhất cho toàn bộ mesh thì sẽ là tốt nhất!

Tuy nhiên quá trình bake texture đòi hỏi nhiều công sức, kinh nghiệm và thời gian. Nếu bạn cảm thấy mình không muốn "đụng tay" vào việc bake, các giải pháp tiếp theo cũng mang lại những tối ưu nhất định.

#### 2.7.2 Texture size

Hầu hết các model sau giai đoạn sản xuất sẽ kèm theo một bộ texture 4k hoặc 8k, tuy nhiên với game, độ phân giải texture thường không yêu cầu cao tới vậy. Dưới đây là một số mẹo để bạn xác định kích thước texture phù hợp với engine của game.

Đầu tiên, thực hiện resize texture dựa trên diện tích hiển thị thực tế: Ví dụ mesh "body" của AKM có 3 material, trong đó phần hiển thị băng đạn có diện tích hiển thị nhỏ hơn nhiều so với phần nòng và thân súng, như vậy độ phân giải texture dành cho "mag" không nhất thiết phải cao như 2 phần còn lại.

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-material-size-1785715929.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbgun-material-size-1785715929.jpg?width=920" alt="" loading="lazy"></a>

Nếu model chỉ có duy nhất 1 material, bạn hoàn toàn có thể sử dụng kích thước 4k, do diện tích hiển thị texture/material tổng thể khá lớn. Tuy nhiên khi số lượng material tăng lên, hãy giảm độ phân giải texture cho mỗi material đi miễn sao đảm bảo một mật độ hiển thị phù hợp.

Ví dụ: với model AKM trong ví dụ, thay vì mỗi bộ texture đều dùng 4k, ta nên chia ra:

- Material "body": 2k (2048 × 2048)
- Material "barrel" 2k (2048 × 2048)
- Material "mag": 1k (1024 × 1024)

#### 2.7.3 Normal texture size

Đối với normal texture, tuy không bắt buộc nhưng khuyến nghị đưa về kích thước nhỏ hơn nhằm tối ưu bộ nhớ và tăng khả năng xử lý cho GPU. Đương nhiên việc giảm kích thước đồng nghĩa chất lượng thấp đi, dù vậy trong đa số trường hợp, điều này sẽ mang lại lợi ích đáng kể, đặc biệt là với các model có kích thước vừa và nhỏ.

Cụ thể, nếu độ phân giải của các texture color, metallic, roughness là 2048 × 2048, thì normal texture chỉ cần dừng ở 1024 × 1024 là ổn. Trên thực tế, dung lượng để lưu trữ texture normal cũng lớn nhiều lần so với các texture còn lại. Thậm chí có những model còn không sử dụng normal texture khi không thực sự cần thiết

#### 2.7.4 Đặt tên material/texture

Để tạo sự đồng nhất và sự tiện lợi, người viết bài đưa ra một số quy tắc trong việc đặt tên material-texture (không bắt buộc)

- Tên material **sử dụng chữ thường**, phân cách nhau bằng dấu gạch ngang (-) nội dung ngắn gọn, nên **trùng với tên mesh** object mà nó phục vụ. Ví dụ "body", "barrel", "mag".
- Tên texture được đặt tương tự theo cách đặt tên material, thêm các hậu tố -color-[style], -normal, -roughness, -metallic. Ví dụ: "body-color-red", "body-normal", "body-roughness", "body-metallic".

> [!NOTE]
> Việc đặt tên như trên mang lại một số lợi ích:
>
> - Xác định khoảng cách 2 chữ thông qua (-) thay vì dấu cách, đôi khi việc đặt tên xảy ra hiện tượng 2 dấu cách, dẫn đến những lỗi typo không cần thiết có thể gây ra bug. Ngoài ra, không sử dụng gạch dưới (_) vì khi bôi đen chữ (ví dụ để rename) thì thường chọn cả chữ thay vì từng từ.
> - Việc dùng chữ thường giúp phân biệt với các biến Enum trong lập trình thường được viết dạng ALLCAPS.

---

## 3. Chuẩn bị model đôi tay (CB Hand)

**CB Hand** là object có sẵn trong package của game, nhiệm vụ của nó là thể hiện **các pose phù hợp** với **CB Gun** mà nó phục vụ.

Ví dụ, đối với súng A, pose normal (tay trái cầm hand-guard) sẽ khác với pose normal đối với súng B, do mesh hand-guard của 2 súng này khác nhau, nên các ngón tay cần được chỉnh lại vị trí nhằm thể hiện động tác "nắm chắc" vào mesh của từng súng.

Như vậy với mỗi **CB Gun** được đưa vào game, ta cần **chỉnh lại pose tương ứng cho CB Hand**.

> [!TIP]
> Nếu pose dành cho súng A **không quá khác biệt** so với pose cho súng B, thì cả 2 súng có thể **dùng chung một bộ pose**, đỡ phải chỉnh pose cho cả 2 súng!

### 3.1 Copy CB Gun

Để đảm bảo sự tiện lợi, nhóm phát triển xin cung cấp **file blend cho CB Hand**, file đã có các **control-bone**, bạn chỉ việc chỉnh lại pose là được:

1. Tải file [**CBHand.blend**](https://transfer.it/t/uCJfWN8zhZAZ)
2. Trong file, bạn sẽ thấy model CB Hand đã được định vị tại world origin.

    *Lưu ý: Cả **CB Hand** và **CB Gun** đều cần điểm gốc nằm ở world origin để có thể hoạt động bình thường cả trong game, blender lẫn GDE. Do đó khuyến cáo không nên thay đổi vị trí **CB Hand**.*

    <a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-default-restpose-1785683672.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-default-restpose-1785683672.jpg?width=920" alt="" loading="lazy"></a>

3. Mở file .blend của **CB Gun** (AKM) đã thực hiện ở bước [Chuẩn bị model súng](#chuanbi-cbgun), copy 2 mesh "body" và "mag" sang file **CB Hand**. CB Gun ở đây chỉ có tác dụng tham khảo để chỉnh pose cho CB Hand được chính xác.

    *Lưu ý: Có thể cần chỉnh lại vị trí băng đạn về đúng vị trí ban đầu gắn vào thân súng, do trước đó ta đã đưa nó về world origin để Apply position.*

    <a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-paste-cbgun-1785684591.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-paste-cbgun-1785684591.jpg?width=920" alt="" loading="lazy"></a>

### 3.2 Chỉnh pose

1. Chọn armature dành cho mesh CB Hand, trong mục Properties, chuyển từ **Rest Position** sang **Pose Position**.
2. Điều chỉnh các control-bone để đạt được 2 pose **normal** và **mount** cho CB Hand (theo như hình minh họa bên dưới).

    *Lưu ý: File đã có sẵn 2 action tương ứng là "normal" và "mount" cho armature mesh CB Hand, bạn có thể chỉnh pose từ 2 action này hoặc tạo action mới nếu muốn.*

<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-normal-1785723647.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-normal-1785723647.jpg?width=920" alt="" loading="lazy"></a>
<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-normal-cam-1785723672.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-normal-cam-1785723672.jpg?width=920" alt="" loading="lazy"></a>
<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-mount-1785723700.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-mount-1785723700.jpg?width=920" alt="" loading="lazy"></a>
<a href="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-mount-cam-1785723714.jpg" target="_blank" rel="noopener"><img src="https://cdn.eniston.com/bases/6d152843-e75d-4d19-aa0d-ad54dd9ab12a/attachments/cbhand-pose-mount-cam-1785723714.jpg?width=920" alt="" loading="lazy"></a>

> [!TIP]
> Đến đây bạn đã hoàn thành xong việc chuẩn bị cho 2 model CB Hand và CB Gun.
