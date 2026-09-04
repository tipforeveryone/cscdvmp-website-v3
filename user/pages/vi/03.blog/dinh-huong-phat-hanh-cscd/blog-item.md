---
title: 'Định hướng phát hành CSCD'
smls_language: vi
published: true
private: true
---

## 1. Các phương án
**Phương án A:** 
  - Phát hành phiên bản tiếng Anh trên Steam (block geo với VN)
  - Chia sẻ miễn phí phiên bản Tiếng Việt (Free Vietnamese Version - FVV).

> Lưu ý: Không gọi là "Phát hành tại Việt Nam" mà là "Chia sẻ miễn phí phiên bản tiếng Việt"

**Phương án B:** Tìm publisher nước ngoài.

## 2. Phương án A
### 2.1 Steam
Việc *phát hành trên Steam* kết hợp với *tự vân hành các hoạt động marketing* là cách tốt nhất để tối đa hóa doanh thu từ thị trường quốc tế, với các đặc điểm sau:
- Khả năng ước tính được con số income tương đối chính xác, cụ thể: `Thực thu của dev = [Doanh số] - [Steam: Fixed 30%] - [Engine royalty: Fixed 5%] - [Các loại thuế khi về VN]`
- Tận dụng lợi thế tiếp cận thị trường tiềm năng, đặc điểm mặc định của Steam (nếu thuật toán của nó không có biến động gì đặc biệt)

### 2.2 Geo block và FVV
Mục đích:
  - Hạn chế tối đa việc phát sinh doanh thu tới từ VN
  - Vi phạm về giấy phép phát hành game tại VN

Block geo khiến người dùng có khả năng truy cập Steam mà không cần tới VPN ở VN không thể tiến hành thanh toán. Trong trường hợp người dùng sử dụng VPN, và người đó *biết tiếng Việt* (không chỉ riêng người VN) thì giữa 2 việc: 
  1. Mất công kết nối VPN + Mua game trên Steam
  2. Download thẳng FVV hoàn toàn miễn phí.

Thì khả năng cao là người dùng sẽ chọn hướng thứ 2, một bộ lọc tự nhiên cho "phiên bản tiếng Việt"

Với trường hợp xấu nhất: bằng cách nào đó, vẫn tồn tại doanh thu tới từ VN + đủ lớn để bị chú ý -> con số nộp phạt (cố định) + thu hồi khoản thu tới từ VN sẽ ở mức thấp nhất.

> Để hạn chế tối đa điều này, cần truyền thông tốt về FVV và có chính sách thông thoáng với tất cả người dùng có nhu cầu.

### 2.3 FVV thay vì phát hành tại VN?
Phân tích lý do:
1. Tập khách hàng mục tiêu của game trên thế giới hẹp và khó tính. Mô tả phễu: FPS Players > Tactical element > Hardcore element
2. Game cùng loại không nhiều: Ready or Not, Ground Branch, Zero Hour, Operator, Bodycam, Squad, Hell Let Loose v..v.. Có thể coi đây như các sản phẩm cạnh tranh trực tiếp, đồng thời dễ bị mang ra để so sánh, đối chiếu.
3. Tại VN, lượng khách hàng tiềm năng còn khiêm tốn hơn, nhất là khi so với lượng người chơi game mobile, game online v..v.. hiện tại.

Nếu phát hành tại VN, giả sử tất cả khách hàng mục tiêu đều đã mua game thì doanh thu cũng khó đạt kỳ vọng (giải thích rõ hơn bên dưới). 

Ngoài ra, dev còn gặp khó khăn khác như:
  - Đăng ký NPH tại VN nhưng bị từ chối, do hầu hết các NPH không có tiền lệ với game offline. 
  - Hệ sinh thái kiếm tiền của NPH VN dựa chủ yếu vào các game có thể bán vật phẩm, gói quảng cáo v..v.. mang lại doanh thu ổn đinh.
  - Chưa có chính sách rõ ràng dành cho game offline thậm chí là multiplayer với match making. 
  - Khả năng mở rộng thị trường không cao với ngách tactical + hardcore. nếu có, sẽ chỉ mang tính thử sức.

### 2.4 Lý do triển khai FVV
Tuy không mang lại doanh thu, nhưng FVV có khả năng tạo hiệu ứng marketing truyền miệng và sự ủng hộ nếu làm đúng cách, như đảm bảo nội dung truyền thông hợp lý, đánh vào cảm xúc khách hàng tiềm năng.

Đề cập đến các game như Phở Anh Hai, Bad parrenting và một số game indie khác do người VN thực hiện, đây hầu hết lại là những game nổi tiếng trong nước thông qua một sự kiện ngẫu nhiên (được streamer nổi tiếng chơi) dẫn đến sự viral ngoài mong đợi của chính dev, nếu không có các sự kiện ngẫu nhiên này, các game đó cũng sẽ như bao game khác, "out of radar"

CSCD được truyền thông từ đầu là game hướng tới gamer VN, bối cảnh VN v..v.. việc có được sự ủng hộ từ trong nước trước khi phát hành quốc tế trở thành một hướng đi phù hợp. Tránh được bẫy hiệu ứng ngược như:
  - "Chả lẽ làm từng đó thời gian, cuối cùng lại âm thầm mang ra bán ở quốc tế? (nhiều ngươi sẽ không hiểu được sự khó khăn đằng sau đã buôc dev phải làm vậy) 
  - "Sao lại block geo VN Steam trong khi game lấy bối cảnh Việt Nam"
  - "Game này làm sao so sánh được với game A, game B, mà cũng bắt mua, lại còn bán qua phát hành qua NPH xyz nữa"
  - Và nhiều quan điểm khác

Khi so sánh, có thể thấy FVV mang lại hiệu ứng tích cực hơn, đủ để chấp nhận đánh đổi doanh thu để đổi lấy truyền thông. Triển khai FVV tốt sẽ tiết kiệm lượng lớn chi phí marketing, xây dựng lực lượng seeding organic, green flag thuần khiết.

Ngoài ra còn thu hút, khơi gợi và củng cố tinh thần tự hào dân tộc về các sản phẩm nước nhà, hiểu quả hơn nữa khi đang trong giai đoạn chưa bão hòa sản phẩm, giảm dần đi khi số lượng các sản phẩm bắt đầu đa dạng hơn cả về số lượng lẫn thể loại.

### 2.5 itch.io và transfer.it đối với FVV
- Vai trò của itch.io: Giúp dev chia sẻ FVV trên một nền tảng quốc tế, tránh vấn đề về pháp lý khi sử dụng cơ sở hạ tầng tại VN
- Itch giới hạn dung lượng 3GB download trực tiếp. CSCD có dung lượng lớn hơn 3GB nên giải pháp là trỏ link tới transfer.it (cũng là một nền tảng quốc tế)
- Sau khi download game, người chơi có thể tự share cho bạn bè nếu muốn hoặc lưu trữ trên Cloud cá nhân. Giả sử các nền tảng này nằm tại VN, thì lúc này, nó lại không còn là trách nhiệm của dev mà đã thuộc về người chơi.
- Lưu ý: Việc đưa link itch (là nền tảng phát hành) trên website cscdvmp.com chỉ là một cách "Chia sẻ nội dung", không thể tính là "phát hành tại VN"

## 3. Phương án B
Sẽ triển khai khi phương án A không mang lại hiệu quả mong đợi, với các dấu hiệu:
  - Doanh thu quốc tế và sự đón nhận dành cho game thông qua Steam kém
  - Nhận diện thêm rủi ro pháp lý phát sinh trong quá trình triển khai phương án A
  - FVV không mang lại lợi ích marketing mong muốn.

Thời gian để "nhận diện" được sự thất bại của phương án A sẽ từ 6 tháng đến 1 năm

Một số vấn đề khi dựa vào NPH nước ngoài
- Dev cần tuân thủ các chính sách chỉa sẻ lợi nhuận cũng như các yêu cầu chỉnh sửa sản phẩm để phục vụ mục đích marketing mà NPH mong muốn.
- Tỉ lệ chia sẻ lợi nhuận chắc chắn sẽ không tối ưu như phương án A

Tuy nhiên, có một vài lợi thế: 
- Dev sẽ không còn cần quan tâm nhiều tới mảng truyền thông, tránh mọi vấn đề pháp lý trong nước.
- Dev dành tài nguyên để phát triển tựa game khác.

## 4. Các vấn đề khác
### 4.1 Cảm quan về "Kỳ vọng dành cho sự ủng hộ từ trong nước"
Đầu tiên, mình sẽ không kỳ vọng vào một "sự ủng hộ" ở mức viral như với Phở Anh Hai, Flappy bird, bởi đây đều là các event ngẫu nhiên, không liên quan tới chủ đích hay mục đích có tính toán. Càng không mong đợi vào việc tạo ra một làn sóng tích cực với thị trường nội địa để dành chú ý từ thị trường quốc tế.

Thực tế, dev chỉ cần dành được sự *ủng hộ tuyệt đối* từ chính tập *khách hàng tiềm năng* ở trong nước là ổn. 

Nguyên nhân: Không phải ai cũng biết tới một tựa game dù nó được truyền thông chủ động, với nguyên lý: không đúng insight thì không quan tâm, và một khi không quan tâm, sẽ rất khó để tạo ra sự ủng hộ. Ví dụ, một người chỉ quan tâm tới game nuôi cá, thì việc một game Hardcore tactical shooter xuất hiện sẽ không làm người đó để ý.

Nên nếu CSCD có thể viral thì nó cũng chỉ cần viral trong tập khách hàng tiềm năng của nó, cùng lắm là mở rộng được những người thuộc ngành công an hoặc khiến các gamer FPS (tập lớn hơn) muốn trải nghiệm.

Việc khách hàng tiềm năng tại VN hẹp mang lại một hệ quả: họ đã và đang *trùng với tập khách hàng quốc tế*, nhờ vào đặc điểm: chỉ có thể quan tâm vào một vài sản phẩm cố định trên thị trường. Nói cách khác, dù là gamer tactical hardcore ở VN hay quốc tế thì cũng đều chỉ biết đến RoN, Squad, GB v..v.. nên việc CSCD tham gia sẽ chỉ như một sự bổ sung cho "menu" vốn đã hạn hẹp của tập người chơi này. Mấu chốt là "món này mới".

Thực tế là gamer tactical shooter ở VN đã "join the chat" với thế giới trong mảng game mình quan tâm từ rất lâu rồi. Do đó sẽ rất khó để tách biệt rõ rệt giữa "Thị trường trong nước" và "thị trường nước ngoài". Trừ khi tại VN đã có hàng tá các game giống CSCD, phục vụ riêng người chơi VN, trong bối cảnh đó, việc đầu tư vào thị trường trong nước, để cạnh tranh và thu hút người chơi trong nước mới thực sự là một hướng đầu tư, do thị trường trong nước phải ở mức nào đó.

Việc cố tách một thị trường rất nhỏ ra khỏi thị trường tuy lớn hơn nhưng vốn dĩ cũng nhỏ là không "đáng" với những gì có thể đạt được về mặt doanh thu.

### 4.2 Thỏa mãn khách hàng tiềm năng trong nước mang lại ích lợi gì? 

Nhờ vào sự quan tâm sẵn có cùng với gamer quốc tế (như đã nói ở trên), những gamer tactical shooter tại VN sẽ trở thành một lực lượng ủng hộ tốt và quan trọng hơn là đúng insight thẳng với gamer quốc tế, nhờ vậy có thể triển khai marketing truyền miệng *ra thẳng thế giới* chứ không phải trải qua thị trường VN nữa. 

Mục đích của dev sẽ là như vậy, thỏa mãn tập khách hàng tiềm năng ở trong nước.

Việc giao cho nhóm khách hàng này đặc quyền tiếp cận với FVV cùng tinh thần phấn khởi sẽ mang lại lợi ích lớn hơn so với việc mong muốn họ bỏ tiền ra để mua một sản phẩm "lính mới", mà khả năng cao sẽ cần nhiều thời gian để đạt đến state như RoN, Squad, Operator, 6 Days in Fallujah...

Thật ra, việc "không được ủng hộ" khá khó xảy ra với những khách hàng tiềm năng sau khi họ có được sự quan tâm thật sự, bởi một khi đã ủng hộ, họ sẽ rất trung thành, đây là đặc điểm của thị trường ngách, trừ khi dev gây ra điều gì đó thật sự đáng thất vọng. Những ai vốn đã không quan tâm (ngoài insight) thì họ cũng sẽ không để tâm dù thế nào đi nữa.

### 4.3 Liên quan đến Wishlist tới từ VN

Đang tiếc, nếu như không có vấn đề liên quan đến pháp lý thì lượng wishlist từ VN đã có thể trở thành một nguồn tài nguyên đáng giá, nhưng việc dev phải đối phó với thực tế không thể phát hành thoải mái trên steam đã làm hỏng lợi thế này, thậm chí còn biến nó thành một nguy cơ nếu phát sinh doanh thu từ VN

Do đó dev buộc phải chấp nhận việc wishlist tới từ VN không đồng nghĩa với việc có doanh thu tương ứng, nhưng tính tới thời điểm hiện tại, ít nhất các wishlist VN cũng cho thấy mức độ quan tâm của game thủ trong nước.

Nhưng, hãy cứ giả sử mọi chuyện đều ổn thỏa về chính sách, thì con số wishlist VN (cỡ 5k+) có phản ánh được nhu cầu của thị trường không? Câu trả lời là có và rõ ràng là không thấp tháp gì.

Cứ cho là mình đã tận dụng tốt data organic và những ai quan tâm đã đều đặt game vào wishlist, nhưng trong số wishlist đó, sẽ có bao nhiều người thực sự quyết định xuống tiền? Dễ thấy sẽ chỉ những gamer thực sự quan tâm tới tactical shooter là có khả năng, tiếp theo là những người mua để trải nghiệm, để ủng hộ, họ sẽ chiếm bao nhiều % so với lượng wishlist VN. Có vài trăm người đã là một con số ấn tượng.

Ta thấy được rõ hơn độ hẹp của thị trường, so sánh với các game indie khác (kể cả không cùng thể loại) có những game có tới hàng trăm ngàn, thậm chí đến cả triệu wishlist thẳng từ international. Khi đó lượng wishlist từ VN với khả năng convert của nó trở nên quá ít ỏi. Patreon của cSCD, lượng sub cũng vài ngàn, nhưng lượng người thực sự donate vẫn là con số 0, nên có thể đây cũng là bức tranh tương tự với wishlist VN trên steam.

Vậy giá trị ở đây là gì ? Chính là số wishlist còn lại, tới trực tiếp từ International. Đương nhiên, nó ít. Nhưng nó cho thấy CSCD rất "fresh". Mọi thứ truyền thông hiện tại của dev đang phần nhiều có nội dung Tiếng Việt. Nên với góc nhìn của international, mình mới chỉ bắt đầu. 

Lợi thế ở đây chính là: Nền sản phẩm đặt chân tới giai đoạn viable product, khá hơn rất nhiều so với hàng trăm ngàn game indie khác. Nên với những gì CSCD có ở thời điểm hiện tại + với góc độ "mới bắt đầu" thì thực sự nó là bàn đạp rất tốt, để tạo ra các content marketing phù hợp để bắt đầu quá trình show up cho international, thay vì một vài prototype gameplay như trước.

## 5. Hướng đi tiếp theo
- Kiên định hướng tới phương án A, sẵn sàng chuyển đổi sang phương án B nếu cần thiết
- Với thị trường trong nước: Tập trung chủ yếu vào việc chăm sóc cho các khách hàng tiềm năng bằng cách tạo ra quyền lợi đặc thù cho họ thông qua FVV, tuy số lượng không đủ để tạo nên doanh thu đột phá nhưng lại rất hữu dụng trong việc gây dựng lực lượng ủng hộ và lan tỏa *trực tiếp* tới thị trường quốc tế.
- Với thị trường quốc tế: Gia tăng nội dung phù hợp international, chuẩn bị core game tốt nhất có thể để thực sự bước vào giai đoạn "khởi đầu" với góc nhìn của thị trường quốc tế.