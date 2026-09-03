---
title: Cấu trúc Gun Data
template: wiki
smls_language: vi
smls_translations:
    en: /en/wiki/modding-tools/gun-data-editor/reference/gun-data-structure
---

## 1. Giới thiệu

**Gun Data** là tập hợp các thông số (gọi tắt là data) của một khẩu súng, được GDE đóng gói thành một file dữ liệu (gunname.dat), file này sẽ được sử dụng bởi cả main game và chính GDE.

Data được chuẩn bị thông qua 2 hình thức:

1. **Nhập bằng tay** vào object trong Titan Engine Model Editor. Đây là các thông số ít thay đổi như tên súng, cách vận hành, chỉ số kỹ thuật, gia tốc đầu nòng, tốc độ bắn v..v..
2. **Nhập theo thời gian thực**: Dành cho các thông số mang tính ước lượng, cần thay đổi để tìm ra trạng thái tốt nhất như hướng văng vỏ đạn, cảm biến thân súng, bố trí mount/attachment v..v..

---

## 2. Data nhập tay

Các vị trí nhập data được bố trí rải rác qua nhiều object, các object có mối liên hệ parrent-child. Tham khảo biểu đồ dưới đây để nhanh chóng nắm bắt cấu trúc object chứa data nhập tay.

<a href="https://i.gyazo.com/3cf421e764b28a53906132a7714f970b.jpg" target="_blank" rel="noopener"><img src="https://i.gyazo.com/3cf421e764b28a53906132a7714f970b.jpg" alt="" loading="lazy"></a>

### 2.1 Model CB Gun

Model vũ khí được import vào GDE, đặt tên là `body`, thuộc `OBJ_GUN`, bao gồm các nhóm data:

- [Nhóm cho luồng AB](#nhom-luong-ab)
- [Nhóm thông số cơ bản](#thongsocoban)
- [Nhóm thông tin cơ bản](#thongtincoban)
- [Nhóm cho luồng CB](#nhom-luong-cb)
- [Nhóm chế độ bắn](#chedoban)
- [Các data khác](#datakhac)

<a href="https://i.gyazo.com/1a4d6613b29f1590f83c0e2f16ccc147.jpg" target="_blank" rel="noopener"><img src="https://i.gyazo.com/1a4d6613b29f1590f83c0e2f16ccc147.jpg" alt="" loading="lazy"></a>

<h4 id="nhom-luong-ab">2.1.1 Nhóm cho luồng AB</h4>

> [!NOTE]
> Có thể bỏ trống nếu súng không sử dụng luồng AB

| | |
|---|---|
| anim base gun | UID object model **AB Gun** |
| anim base hand | UID object model **AB Hand** |
| anim base sound | UID là file âm thanh sử dụng cho luồng AB (*Hiện chưa sử dụng*) |

<h4 id="thongsocoban">2.1.2 Nhóm thông số cơ bản</h4>

| | |
|---|---|
| attr cost | Giá của khẩu súng với đơn vị Credit trong game |
| attr damage scale | - Tăng giảm tỉ lệ gây sát thương/1 phát bắn, giá trị càng cao, sát thương càng được nhân lên.<br>- Mặc định là 1, tương đương với sát thương của AK47<br>- Nếu nhập thông số là 2, thì sát thương của súng này sẽ gấp đôi AK47 |
| attr draw delay | - Thời gian rút súng súng (ms) khi sử dụng luồng CB<br>- Nếu có luồng AB, thời gian rút súng sẽ phụ thuộc vào độ dài của animation `weapon-in` |
| attr muzzle velocity | - Gia tốc đầu nòng (m/s).<br>- Khuyến nghị nhập thông tin thực của súng, ví dụ AK47 là 715 m/s |
| attr rate of fire | - Tốc độ bắn (rpm)<br>- Khuyến nghị nhập thông tin thực của súng, ví dụ AK là 600 viên/phút |
| attr recoil | - Độ giật **cơ bản**, thông số này sẽ chịu tác động của nhiều yếu tố khác để có được độ giật cuối cùng trong game<br>- Mặc định là 0.07<br>- Số càng lớn, súng càng giật |
| attr recover time | - Thời gian súng được đưa về vị trí ban đầu sau mỗi phát bắn (ms)<br>- Mặc định là 80ms. Đây là con số phù hợp với hầu hết các loại súng. |

<h4 id="thongtincoban">2.1.3 Nhóm thông tin cơ bản</h4>

| | |
|---|---|
| basic author | Điền tên tác giả (không bắt buộc) |
| basic gun code | - Đây là trường **bắt buộc**. Cần đảm bảo được tính **duy nhất**.<br>- Dạng chữ cái in thường, không dấu cách. Ví dụ `ak47` (đúng), `ak 47` (sai)<br>- Thường sẽ được đặt ngắn gọn theo tên súng như `ak47`, `m4a1`, `mp5a3` v..v.. hoặc `what_ever`, `myrandom_gun` v..v.. |
| basic intro en | Phần giới thiệu bằng tiếng Anh |
| basic intro vi | Phần giới thiệu bằng tiếng Việt |
| basic name en | Tên tiếng Anh, ví dụ AK-47, FN-2000 v..v.. |
| basic name vn | Tên tiếng Việt (thường là trùng với tiếng anh) |
| basic version | Phiên bản hiện tại (không bắt buộc) |

<h4 id="nhom-luong-cb">2.1.4 Nhóm cho luồng CB</h4>

> [!WARNING]
> Đây là nhóm data bắt buộc

| | |
|---|---|
| code base gun anim | UID object animation của **CB Gun** |
| code base hand anim | UID object animation của **CB Hand** |
| code base reload duration | Thời gian **CB Gun** thực hiện reload (model **CB Gun** sẽ ẩn khỏi màn hình trong quá trình reload) |
| code base sound | UID object sound của **CBG** |

<h4 id="chedoban">2.1.5 Nhóm chế độ bắn</h4>

| | |
|---|---|
| firemode burst double | Chế độ bắn đôi (ví dụ AN94) |
| firemode burst triple | Chế độ bắn ba viên (3 rounds bust) |
| firemode full auto | Chế độ tự động (full automatic) |
| firemode single delay | Thời gian giãn cách giữa 2 phát bắn bán tự động, semi-auto (ms), giúp hạn chế người chơi click/bắn liên tục với các súng có độ giật cao như sniper rifle |

<h4 id="datakhac">2.1.6 Các data khác</h4>

| | |
|---|---|
| gun built in suppressor | Đánh dấu nếu súng được tích hợp nòng giảm thanh (ví dụ MP5SD) |
| gun mag object | UID object băng đạn. |
| gun max shell | Số đạn tối đa có thể chứa trong súng dạng nạp đạn từng viên, không bao gồm viên có trong buồn đạn. |
| gun mechanic operation | Kiểu vận hành của súng:<br>- Bolt action (`OPERATION_BOLT`)<br>- Gas operation (`OPERATION_GAS`)<br>- Pump action (`OPERATION_PUMP`)<br>- Locked back action (`OPERATION_PISTOL`) |
| gun mechanic reload | Kiểu thay đạn của súng:<br>- Đặt từng viên (`RELOAD_SINGLE_INSERT`)<br>- Thay băng đạn (`RELOAD_MAGAZINE`)<br>- Stripper clip (`RELOAD_STRIPPER_CLIP`) |
| gun separated sight | Đánh dấu nếu súng có ironsight có thể tách rời, đây là súng có phần mesh ironsight (thước ngắm và đầu ruồi) gắn liền với CB Gun mesh, mesh ironsight sẽ được ẩn đi khi có attachment ống ngắm quang học lắp vào. |
| gun thumbnail image | UID object hình đại diện của súng |
| gun type | Chủng loại súng thuộc về:<br>- Súng trường tấn công (`GUNTYPE_ASSAULT_RIFLE`)<br>- Súng tiểu liên (`GUNTYPE_SMG`)<br>- Súng ngắn (`GUNTYPE_PISTOL`)<br>- Súng bắn tỉa (`GUNTYPE_SNIPER_RIFLE`)<br>- Súng bắn đạn hoa cải (`GUNTYPE_SHOTGUN`)<br>- Súng trung liên (`GUNTYPE_LMG`)<br>- Súng bắn góc (`GUNTYPE_CORNERSHOT`) |
| gun viewoffset | - Độ lệch của súng khi không ngắm bắn<br>- Mặc định là `(0, 0, 0.13)`, hầu như được giữ nguyên cho mọi súng |

### 2.2 Các object thuộc luồng AB

Phần này sẽ trình bày về các object thuộc lớp sâu hơn, được đề cập đến trong [2.1.1 Nhóm dành cho luồng](#nhom-luong-ab)

Cả 2 model **AB Hand** và **AB Gun** đều có riêng cho mình một object nằm bên trong, object này chứa tập hợp các animation, gọi là Animation set object `OBJ_ANIM_BASE_GUN_ANIM`). Trong đó, mỗi slot tương ứng với một animaton, được chia ra thành các nhóm

- Nhóm liên quan tới **băng đạn**: magin, magin-dry, magout, magout-boltlock
- Nhóm pose **mount:** mounted, mounted-fire, mounted-fire-dry, mounted-fire-dry-boltlock
- Nhóm pose **normal:** normal, normal-fire, normal-fire-dry, normal-fire-dry-boltlock
- Nhóm **reload:** reload, reload-dry, reload-fast, reload-fast-dry
- Các animation khác: weapon-deploy, weapon-in, weapon-inspect, weapon-out

<a href="https://i.gyazo.com/7f2cf696340f23bcb8e0619dc80f7dbe.jpg" target="_blank" rel="noopener"><img src="https://i.gyazo.com/7f2cf696340f23bcb8e0619dc80f7dbe.jpg" alt="" style="max-width:400px;width:100%;height:auto;" loading="lazy"></a>

> [!TIP]
> Tham khảo [Danh sách animation luồng AB](/vi/wiki/cong-cu-modding/gun-data-editor/tham-khao/danh-sach-animation-luong-ab) để đọc mô tả kỹ hơn cho từng animation

### 2.3 Các object dành cho luồng CB

**Animation set**

- Dành cho **CB Hand**: mounted, normal, normal-left, shield
- Dành cho **CB Gun**: dry, original, shoot

> [!TIP]
> Tham khảo thêm thông tin về các animation này tại [Khái niệm Code-based và Animation-based](/vi/wiki/cong-cu-modding/gun-data-editor/tham-khao/code-based-va-animated-based)

**Sound set**

Object này chứa tập hợp các file âm thanh có mức ưu tiên khác nhau và có thể thay thế cho nhau theo quy tắc: Outdoor > Indoor | 1p > 3p | normal > suppressed

Ví dụ về ưu tiên và thay thế: Nếu âm thanh indoor **chưa được chuẩn bị**, hệ thống sẽ sử dụng âm thanh outdoor để **thay thế**.

Riêng với cặp **normal > suppressed** mặc dù có áp dụng cơ chế ưu tiên, nhưng vì suppressed là một kiểu âm thành khác, nó khuyến cáo được chuẩn bị để tránh tình trạng bắn súng giảm thanh lại phát âm thanh khi chưa lắp giảm thanh.

Danh sách các slot âm thanh trong sound set (mục đích của chúng đúng như tên gọi) trong đó: 1p là tiếng súng cho góc nhìn thứ nhất, 3p cho góc nhìn thứ 3.

- 1p fire indoor normal
- 1p fire indoor suppressed
- 1p fire outdoor normal
- 1p fire outdoor suppressed
- 3p fire indoor normal
- 3p fire indoor suppressed
- 3p fire outdoor normal
- 3p fire outdoor suppressed
- mag in: Cắm băng đạn vào thân súng
- mag out: Rút băng đạn khỏi thân súng
- reload finish: Thường là tiếng kéo bolt

### 2.4 Model băng đạn và hình đại diện

- Một số vũ khí không sử dụng băng đạn, tuy nhiên vẫn object chứa thông tin về băng đạn.
- Hình đại diện của súng và các bước chuẩn bị sẽ được đề cập trong tutorial tương ứng.

---

## 3. Data nhập theo thời gian thực

Các data này không xác định bằng cách điền thông tin vào các ô nhập của object mà được điều chỉnh trực tiếp trong viewport của GDE, chúng đều là các thông số khó ước lượng, cần vừa quan sát vừa điều chỉnh, bao gồm 2 nhóm:

### 3.1 Vị trí neo trên súng

> [!NOTE]
> Cột CB và AB trong bảng mang ý nghĩa "Thông số được dùng trong…"

| **Điểm dữ liệu** | **Vai trò** | **CB** | **AB** |
|---|---|---|---|
| Vị trí băng đạn (magPos) | Nơi model băng đạn rời được đặt vào súng. | x | |
| Đầu nòng (muzzlePos) | Mốc đầu nòng súng, dùng làm gốc tính hiệu ứng và spawn đường đạn | x | x |
| Báng súng (buttPos) | Mốc báng súng ở phần đuôi súng, dùng để xác định chiều dài vật lý của súng | x | |
| Vị trí vỏ đạn (shellPos) | Nơi vỏ đạn xuất hiện khi bắn | x | x |
| Hướng vỏ đạn văng (shellEjectDirPos) | Hướng vỏ đạn bay tới | x | x |
| Cảm biến (sensorBase, sensorSize) | Phục vụ cho cơ chế mount và block trong game | x | |
| Offset AB Gun (animBaseGunOffset) | Độ lệch của model **AB Gun** với model **CB Gun** | | x |
| Offset AB Hand (animBaseHandOffset) | Độ lệch của model **AB Hand** so với model **AB Gun** | | x |

### 3.2 Vị trí và loại attachment theo từng mount slot

| **Điểm dữ liệu** | **Vai trò** |
|---|---|
| Loại mount (Optic/Barrel/Muzzle) | Quyết định nhóm attachment nào tương thích, gắn được vào mount đó |
| Vị trí gắn attachment | Nơi đặt attachment trên súng, lưu riêng cho từng luồng CB/AB vì hai luồng dùng hai model khác không gian |
| Chiều dài mount | Chiều dài dọc theo mount, dùng làm cơ sở tính vị trí mặc định của attachment trên mount đó |
| Tỉ lệ vị trí mặc định | Vị trí attachment sẽ nằm ở đâu dọc theo chiều dài mount khi chưa can thiệp gì thêm |
| Góc xoay attachment | Hướng xoay của attachment quanh trục mount |
| Vị trí rail (nếu có) | Vị trí gắn riêng cho rail, tách biệt với vị trí gắn của bản thân attachment |
