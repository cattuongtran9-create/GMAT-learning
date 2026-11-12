// Original Vietnamese lessons and exercises. Page references are PDF extraction markers,
// not printed-page numbers. No calculator, official question reproduction, or score model.
window.GMAT_DEEP_PACKS = window.GMAT_DEEP_PACKS || [];
window.GMAT_DEEP_PACKS.push({
  lessons: [
    {id:'quant-percent-chains',section:'quant',type:'QUANT · SPECIALIST',number:'3.1',title:'Chuỗi phần trăm và tìm ngược giá gốc',description:'Theo dõi base qua nhiều lần thay đổi; phục hồi giá gốc và mức tăng bù.',duration:'36 min',level:'Intermediate',modalTitle:'Chuỗi phần trăm và tìm ngược giá gốc',modalEyebrow:'QUANT · SUCCESSIVE & REVERSE PERCENTS',modalDescription:'Dùng multiplier để theo dõi giá trị qua từng thời điểm, rồi đảo phép nhân khi đề cho kết quả cuối. Phân biệt percent change với percentage points.',example:'Giảm 25% rồi tăng 20% → multiplier 3/4 × 6/5 = 9/10.\nGiá cuối 180 → giá đầu 180 ÷ 0.9 = 200.'},
    {id:'quant-mixture-conservation',section:'quant',type:'QUANT · SPECIALIST',number:'4.6',title:'Pha trộn: bảo toàn lượng chất',description:'Nồng độ, thêm nước, bay hơi và rút rồi bù bằng phương trình lượng chất.',duration:'38 min',level:'Intermediate',modalTitle:'Pha trộn: bảo toàn lượng chất',modalEyebrow:'QUANT · MIXTURES & CONCENTRATION',modalDescription:'Theo dõi riêng tổng dung dịch và lượng chất tan. Mỗi thao tác làm thay đổi tử số, mẫu số hoặc cả hai theo một quy tắc cụ thể.',example:'12 L dung dịch 25% chứa 3 L chất tan.\nThêm 8 L nước → 3/20 = 15%, nếu thể tích cộng được.'},
    {id:'quant-relative-motion',section:'quant',type:'QUANT · SPECIALIST',number:'4.1',title:'Đuổi kịp, gặp nhau và hành trình khứ hồi',description:'Chọn đồng hồ chung, tốc độ thu hẹp khoảng cách và trọng số thời gian.',duration:'38 min',level:'Intermediate',modalTitle:'Đuổi kịp, gặp nhau và hành trình khứ hồi',modalEyebrow:'QUANT · RELATIVE MOTION & ROUND TRIPS',modalDescription:'Thời gian xuất phát lệch nhau và quãng đường bằng nhau tạo những quan hệ khác nhau. Tách chặng trước khi lập phương trình.',example:'Đi 40 km/h, về 60 km/h trên cùng quãng đường: average speed = 48 km/h.\nKhoảng cách bằng nhau không có nghĩa thời gian bằng nhau.'},
    {id:'quant-work-schedules',section:'quant',type:'QUANT · SPECIALIST',number:'4.2',title:'Năng suất theo ca và lịch thay đổi',description:'Người đến muộn, nghỉ giữa chừng, ca luân phiên và thay đổi năng suất.',duration:'39 min',level:'Intermediate',modalTitle:'Năng suất theo ca và lịch thay đổi',modalEyebrow:'QUANT · VARIABLE WORK SCHEDULES',modalDescription:'Chia thời gian tại các mốc thay đổi rate. Mỗi chặng đóng góp rate × time; hoàn thành khi tổng phần việc đạt đúng một job.',example:'A làm 1/8 job/h trong 2 giờ → xong 1/4 job.\nA+B làm 3/8 job/h → phần còn lại cần 2 giờ.'},
    {id:'quant-weighted-bounds',section:'quant',type:'QUANT · SPECIALIST',number:'6.1',title:'Trung bình có trọng số: suy ngược và chặn giá trị',description:'Khôi phục tỷ lệ nhóm, tìm số lượng nguyên và phân biệt bound với giá trị đạt được.',duration:'37 min',level:'Intermediate',modalTitle:'Trung bình có trọng số: suy ngược và chặn giá trị',modalEyebrow:'QUANT · WEIGHTED AVERAGES & BOUNDS',modalDescription:'Mean là tổng được phân bổ lại. Dùng độ lệch quanh mean để suy tỷ lệ, rồi kết hợp ràng buộc số nguyên khi cần cực trị.',example:'Hai nhóm mean 50 và 80, mean chung 68.\nSố người nhóm 50 : nhóm 80 = (80−68):(68−50) = 2:3.'},
    {id:'quant-integer-cycles',section:'quant',type:'QUANT · SPECIALIST',number:'9.6',title:'Ràng buộc nguyên và chu kỳ số dư',description:'Ghép điều kiện đồng dư, đếm nghiệm trong khoảng và định vị lũy thừa trong chu kỳ.',duration:'40 min',level:'Advanced',modalTitle:'Ràng buộc nguyên và chu kỳ số dư',modalEyebrow:'QUANT · INTEGER CONSTRAINTS & CYCLES',modalDescription:'Dạng n = dq + r biến số nguyên chưa biết thành một họ có cấu trúc. Chu kỳ và bounds giúp xử lý số lớn mà không khai triển.',example:'n ≡ 2 (mod 5), n ≡ 1 (mod 3) → n = 7 + 15k.\nĐiều kiện khoảng quyết định những k nào hợp lệ.'},
    {id:'quant-restricted-counting',section:'quant',type:'QUANT · SPECIALIST',number:'20.1',title:'Đếm dưới ràng buộc: khối, khe và phần bù',description:'Xử lý đứng cạnh, không đứng cạnh, chữ số đầu và nhóm có thành phần bắt buộc.',duration:'42 min',level:'Advanced',modalTitle:'Đếm dưới ràng buộc: khối, khe và phần bù',modalEyebrow:'QUANT · COUNTING WITH RESTRICTIONS',modalDescription:'Định nghĩa một kết quả trước khi đếm. Chọn block, gap, complement hoặc các case rời nhau để mỗi kết quả xuất hiện đúng một lần.',example:'5 người phân biệt; A và B phải cạnh nhau.\nCoi AB là một khối: 4! × 2! = 48 cách.'},
    {id:'quant-conditional-draws',section:'quant',type:'QUANT · SPECIALIST',number:'20.2',title:'Xác suất có điều kiện khi rút không hoàn lại',description:'Cập nhật hộp sau mỗi lượt và thu hẹp không gian mẫu theo thông tin được biết.',duration:'42 min',level:'Advanced',modalTitle:'Xác suất có điều kiện khi rút không hoàn lại',modalEyebrow:'QUANT · CONDITIONAL PROBABILITY',modalDescription:'Không hoàn lại làm các lượt rút phụ thuộc. Điều kiện về lượt đầu khác điều kiện về cả cặp; xác định đúng sự kiện được biết trước khi tính.',example:'Hộp 4 đỏ, 3 xanh. Biết lượt đầu đỏ → P(lượt hai đỏ) = 3/6.\nBiết cả cặp có ít nhất một đỏ → không gian mẫu khác.'}
  ],
  plans: {
    'quant-percent-chains': {
      goals:['Viết và đảo chuỗi multiplier với đúng base.','Tìm mức tăng cần thiết để phục hồi một mức giảm.','Phân biệt phần trăm, điểm phần trăm và thay đổi tuyệt đối.'],
      blocks:[
        ['Base là lượng đang được lấy phần trăm','Mỗi phần trăm phải đi cùng một base: lượng nào được xem là 100%? Nếu giá tăng 15%, giá mới bằng 115% giá cũ, tức 1.15 lần giá cũ. Nếu sau đó giảm 10%, base của lần giảm là giá vừa tăng. Ghi ba mốc ban đầu, trung gian, cuối sẽ làm lộ sự thay đổi mẫu số. Cách này còn hữu ích khi đề dùng các từ original price, marked price và sale price trong cùng câu.'],
        ['Chuỗi thay đổi là tích các multiplier','Gọi giá ban đầu là P. Tăng a rồi giảm b, với a và b viết dưới dạng decimal, cho P(1+a)(1−b). Khai triển multiplier được 1+a−b−ab; tích ab giải thích vì sao chỉ cộng các tỷ lệ thường sai. Khi hai tỷ lệ bằng nhau r, multiplier là 1−r² nên kết quả thấp hơn ban đầu nếu 0<r<1. Chọn P=100 để nhìn trực quan khi đề chỉ hỏi thay đổi tương đối và không có khoản tiền cố định.'],
        ['Tìm ngược bằng phép chia','Khi biết giá cuối F và multiplier tổng m khác 0, giá đầu là F/m. Không trừ lại cùng một phần trăm của F, vì phép trừ ấy dùng base khác. Có thể đi ngược từng chặng: chia cho multiplier cuối, rồi chia cho multiplier trước. Trước khi tính, dự đoán chiều: nếu toàn chuỗi làm giảm giá thì giá gốc phải lớn hơn F. Nếu giảm 100%, thông tin giá cuối bằng 0 không đủ để phục hồi giá gốc.'],
        ['Mức phục hồi không đối xứng','Sau mức giảm r, phần còn lại là 1−r lần ban đầu. Để trở về mức cũ, multiplier phục hồi phải là 1/(1−r); tỷ lệ tăng là r/(1−r). Giảm 40% để lại 60, nên cần tăng 40 trên base 60, tức 2/3. Việc tăng bù lớn hơn mức giảm không phải ngoại lệ: cùng một lượng tuyệt đối đang được chia cho mẫu số nhỏ hơn. Công thức này áp dụng khi 0≤r<1 và mục tiêu là đúng mức ban đầu.'],
        ['Phân biệt percent với percentage points','Một tỷ lệ chuyển từ 24% sang 30% tăng 6 percentage points, nhưng tăng tương đối 6/24 = 25%. Đối tượng được so sánh ở đây là hai tỷ lệ, nên vẫn dùng quy tắc change/original. Với doanh thu bằng giá nhân lượng bán, mỗi đại lượng có multiplier riêng; nhân chúng để tìm multiplier doanh thu. Không dùng phần trăm lợi nhuận thay cho doanh thu nếu đề chưa cung cấp thông tin về chi phí.'],
        ['Tính nhẩm bằng phân số và kiểm tra thứ tự','Đổi các mức quen thuộc thành phân số trước khi nhân: giảm 25% là 3/4, tăng 20% là 6/5. Rút gọn chéo để giảm tính toán. Hai thay đổi thuần phần trăm với tỷ lệ cố định có thể đổi thứ tự vì phép nhân giao hoán. Tuy nhiên, một coupon trừ số tiền cố định không phải multiplier: giảm 20% rồi trừ 10 thường khác trừ 10 rồi giảm 20%. Hãy viết phép toán theo đúng trình tự thay vì nhớ một khẩu quyết chung.']
      ],
      worked:{question:'Một món hàng giảm 25%, rồi tăng 20% trên giá đã giảm. Giá cuối là 180. Giá ban đầu bằng bao nhiêu?',steps:['Gọi giá đầu là P; hai multiplier lần lượt là 3/4 và 6/5.','Nhân và rút gọn: (3/4)(6/5)=9/10.','Lập (9/10)P=180; suy ra P=180×10/9=200.','Kiểm tra xuôi: 200→150→180; giá cuối thấp hơn giá đầu 10%.'],answer:'200.'},
      workedMore:{question:'Giá mỗi sản phẩm giảm 20%, lượng bán tăng 25%. Sau đó lượng bán phải tăng thêm bao nhiêu phần trăm, giữ nguyên giá mới, để doanh thu cao hơn ban đầu 10%?',steps:['Gọi doanh thu ban đầu là PQ.','Sau hai thay đổi, doanh thu là (0.8P)(1.25Q)=PQ.','Gọi multiplier tăng lượng bán thêm là k; doanh thu cuối là kPQ.','Mục tiêu 1.1PQ cho k=1.1; tỷ lệ tăng thêm là 10%, tính trên lượng bán sau khi đã tăng 25%.'],answer:'10% trên lượng bán hiện tại.'},
      traps:['Cộng các tỷ lệ liên tiếp dù chúng dùng base khác nhau.','Tìm giá gốc bằng cách cộng lại tỷ lệ giảm trên giá cuối.','Đổi thứ tự một khoản giảm cố định và một mức giảm phần trăm.'],
      check:{prompt:'Một mức giảm 30% tương ứng với multiplier nào?',options:['0.3','0.7','1.3','1/0.7'],answer:1,why:'Còn lại 100%−30%=70% giá trị ban đầu, nên nhân 0.7.'},
      practice:[
        {mode:'numeric',prompt:'Giá 240 tăng 25%. Giá mới bằng bao nhiêu?',answer:'300',why:'25%=1/4; phần tăng là 60. Giá mới 240+60=300.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Một giá giảm 20%, rồi giảm tiếp 10%. Giá cuối 144. Giá ban đầu bằng bao nhiêu?',answer:'200',why:'Multiplier tổng (4/5)(9/10)=18/25. Giá đầu 144×25/18=200; kiểm tra 200→160→144.',hint:'Chia giá cuối cho tích các multiplier.',difficulty:'Intermediate'},
        {mode:'single',prompt:'Một lượng giảm 40%. Cần tăng bao nhiêu phần trăm trên lượng còn lại để trở về ban đầu?',options:['40%','60%','66⅔%','80%'],answer:2,why:'Chọn ban đầu 100: còn 60, cần thêm 40. Tỷ lệ phục hồi là 40/60=2/3, tức 66⅔%.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Giá niêm yết P được giảm 20%, sau đó trừ coupon 18. Khách trả 126. Nếu áp dụng coupon 18 trước rồi mới giảm 20%, khách sẽ trả bao nhiêu?',answer:'129.6',why:'0.8P−18=126 nên P=180. Đổi trình tự cho (180−18)×0.8=162×4/5=129.6.',difficulty:'Advanced'}
      ],
      source:'Đọc Math Review và phần percent change trong các trang PDF dưới đây; lời giảng, chuỗi biến đổi và bài tập được viết mới.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 73–74',label:'3.3 Percents'},{book:'Manhattan Prep · GMAT Foundations of Math',pages:'PDF 356–362',label:'Percent comparisons and successive changes'}],
      summary:['Khóa base trước mỗi phần trăm.','Đi xuôi nhân multiplier; đi ngược chia multiplier.','Khôi phục sau giảm r cần tăng r/(1−r).']
    },
    'quant-mixture-conservation': {
      goals:['Lập phương trình theo lượng chất tan và tổng dung dịch.','Phân biệt thêm nước, bay hơi và rút dung dịch.','Kiểm tra nồng độ và điều kiện thể tích.'],
      blocks:[
        ['Hai đại lượng phải được theo dõi riêng','Concentration là lượng chất tan chia tổng dung dịch, theo cùng cơ sở đo. Nếu đề dùng phần trăm khối lượng, tính cả hai bằng khối lượng; nếu dùng phần trăm thể tích, tính bằng thể tích và chỉ cộng thể tích khi đề cho phép. Một dung dịch 20% có 0.2Q đơn vị chất tan trong Q đơn vị tổng. Viết cột total, concentration, solute giúp tránh cộng trực tiếp các tỷ lệ mà bỏ qua lượng dung dịch mỗi loại.'],
        ['Pha hai dung dịch là cộng lượng chất','Nếu hai dung dịch có lượng A, B và nồng độ a, b, lượng chất tan sau trộn là aA+bB. Tổng dung dịch là A+B, nên nồng độ chung c=(aA+bB)/(A+B), với giả thiết không mất chất và các lượng cộng được. Đây là weighted average: loại nhiều hơn kéo nồng độ chung gần mình hơn. Khi A,B đều dương và a<b, phải có a<c<b; một kết quả vượt khoảng này báo mô hình hoặc phép tính sai.'],
        ['Suy tỷ lệ từ khoảng cách nồng độ','Từ aA+bB=c(A+B), chuyển vế được (c−a)A=(b−c)B. Vì vậy A:B=(b−c):(c−a), khi a<c<b. Đây là cơ sở của alligation, không phải một mẹo hoán đổi số tùy ý. Khoảng cách từ nồng độ thấp tới mục tiêu càng lớn thì cần tương đối nhiều dung dịch cao. Sau khi tìm ratio, vẫn phải dùng tổng lượng hoặc một lượng đã biết để xác định số lít cụ thể.'],
        ['Thêm nước và bay hơi có tử số giữ nguyên','Thêm nước tinh khiết làm tăng tổng lượng nhưng không thêm chất tan; nồng độ giảm. Nếu chỉ nước bay hơi và chất tan không bay hơi, tổng lượng giảm còn lượng chất tan giữ nguyên; nồng độ tăng. Với lượng chất tan S cố định, mục tiêu c cần tổng lượng S/c. So sánh tổng mới với tổng cũ để tìm lượng thêm hoặc bớt. Đề phải cho phép quá trình ấy; không tự giả định mọi chất đều không bay hơi.'],
        ['Rút rồi bù phải cập nhật lượng chất','Khi dung dịch đã trộn đều, rút một phần f tổng lượng cũng rút đúng phần f lượng chất tan. Nếu bù cùng lượng nước tinh khiết, tổng trở về mức ban đầu còn lượng chất tan nhân 1−f. Lặp lại hai lần cùng tỷ phần cho multiplier (1−f)², không phải 1−2f. Nếu bù một dung dịch có nồng độ b, cần cộng thêm lượng chất tan do phần bù mang vào trước khi tính nồng độ mới.'],
        ['Chọn đơn vị giúp tính tay gọn','Nếu mọi nồng độ là phần trăm trên cùng cơ sở, có thể viết phương trình bằng số phần trăm nguyên, chẳng hạn 12A+36B=20(A+B); hệ số 1/100 đã được nhân bỏ ở cả hai vế. Không được bỏ hệ số ấy chỉ ở một vế. Luôn kiểm tra đáp số bằng lượng chất tan, vì một nồng độ có vẻ hợp lý vẫn có thể đi cùng lượng pha sai. Với rút rồi bù, đánh dấu thời điểm trộn đều giữa các lần rút.']
      ],
      worked:{question:'Pha 9 L dung dịch muối 10% với dung dịch 40% để được 20%. Các tỷ lệ theo thể tích; thể tích cộng được và không mất chất. Cần bao nhiêu lít loại 40%?',steps:['Gọi x là số lít loại 40%; tổng sau trộn là 9+x.','Lượng chất tan là 0.1×9+0.4x.','Đặt 0.9+0.4x=0.2(9+x), nên 0.2x=0.9.','x=4.5; kiểm tra 2.7 L chất tan trong 13.5 L tổng cho 20%.'],answer:'4.5 L.'},
      workedMore:{question:'Bình chứa 20 L dung dịch 30%. Rút 5 L, bù 5 L nước, trộn đều; lặp lại thao tác đó một lần nữa. Tính nồng độ cuối theo thể tích, giả sử thể tích cộng được.',steps:['Ban đầu lượng chất tan là 20×0.3=6 L.','Mỗi lần rút lấy đi 5/20=1/4 lượng chất tan hiện có.','Sau hai lần, còn 6×(3/4)²=27/8 L chất tan.','Tổng vẫn 20 L; nồng độ (27/8)/20=27/160=16.875%.'],answer:'16.875%.'},
      traps:['Lấy trung bình hai nồng độ khi hai lượng pha không bằng nhau.','Coi rút dung dịch giống bay hơi nước: rút dung dịch cũng làm mất chất tan.','Lần rút thứ hai vẫn dùng lượng chất tan ban đầu thay vì lượng đã cập nhật.'],
      check:{prompt:'Thêm nước tinh khiết vào dung dịch, không làm mất chất tan, giữ nguyên đại lượng nào?',options:['Tổng dung dịch','Nồng độ','Lượng chất tan','Tỷ lệ nước'],answer:2,why:'Nước thêm vào tăng mẫu số; lượng chất tan ở tử số giữ nguyên.'},
      practice:[
        {mode:'numeric',prompt:'Một dung dịch 15% theo khối lượng có tổng khối lượng 40 kg. Khối lượng chất tan bằng bao nhiêu kg? Nhập số.',answer:'6',why:'Lượng chất tan bằng 15/100×40=6.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Pha 8 L dung dịch 15% với x L dung dịch 45% để được 25%. Các tỷ lệ theo thể tích và thể tích cộng được. Tìm x.',answer:'4',why:'15×8+45x=25(8+x); 20x=80 nên x=4. Kiểm tra 3 L chất tan trong 12 L tổng.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Có 30 kg dung dịch muối 12% theo khối lượng. Chỉ nước bay hơi; cần bao nhiêu kg nước bay hơi để nồng độ thành 18%?',answer:'10',why:'Chất tan giữ nguyên 30×0.12=3.6 kg. Tổng mới 3.6/0.18=20 kg; lượng nước bay hơi 30−20=10.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Có 24 L dung dịch 25%. Mỗi lần rút 6 L rồi bù 6 L dung dịch 5%, sau đó trộn đều. Làm hai lần. Nồng độ cuối là bao nhiêu phần trăm? Thể tích cộng được; nhập số không kèm %.',answer:'16.25',why:'Ban đầu chất tan 6 L. Lần một: 6×3/4+6×0.05=4.8 L. Lần hai: 4.8×3/4+0.3=3.9 L. Nồng độ 3.9/24=13/80=16.25%.',hint:'Phần bù cũng mang vào chất tan.',difficulty:'Advanced'}
      ],
      source:'Mô hình bảo toàn và weighted mixture dựa trên Math Review; các trường hợp bay hơi và rút–bù được triển khai bằng suy luận, với bài tập tự viết.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 83–85',label:'Mixture Problems; Statistics'}],
      summary:['Concentration × total = solute.','Thêm nước giữ tử số; rút dung dịch giảm cả tử và mẫu.','Rút–bù nhiều lần cần cập nhật từng bước.']
    },
    'quant-relative-motion': {
      goals:['Đặt cùng mốc thời gian cho các vật chuyển động.','Tính relative speed từ sự thay đổi khoảng cách.','Tính tốc độ khứ hồi từ tổng quãng đường và thời gian.'],
      blocks:[
        ['Một đồng hồ chung cho cả bài','Hai người đi cùng một tuyến nhưng xuất phát khác giờ không có cùng thời gian di chuyển. Chọn t=0 tại một sự kiện rõ ràng, thường là lúc người thứ hai xuất phát. Quãng đường người đi trước đã đi trở thành khoảng cách dẫn đầu ở thời điểm đó. Nếu dùng t tính từ lúc người thứ nhất đi, thời gian của người thứ hai có thể là t−h. Kiểm tra t≥h để phương trình không mô tả một người chuyển động trước khi họ xuất phát.'],
        ['Relative speed đo khoảng cách đang đổi','Khi hai vật tiến về nhau trên đường thẳng, mỗi giờ cả hai đều làm giảm khoảng cách, nên closing speed là tổng hai tốc độ. Khi cùng chiều và người sau nhanh hơn, khoảng cách giảm theo hiệu nhanh trừ chậm. Điều kiện bắt kịp là hiệu dương và hai vật tiếp tục cùng quy luật tới lúc gặp. Nếu cùng chiều mà người sau chậm hơn, một phép chia cho hiệu âm không thể tạo thời gian đuổi kịp trong tương lai.'],
        ['Đừng nhầm thời gian đuổi với tổng thời gian','Nếu người chậm đi trước h giờ với tốc độ u, khoảng cách dẫn đầu là uh. Người nhanh tốc độ v>u cần uh/(v−u) giờ kể từ lúc mình xuất phát để bắt kịp. Tổng thời gian tính từ lúc người chậm đi phải cộng thêm h. Sau khi tìm thời gian, kiểm tra bằng vị trí hai người trên cùng trục. Đây là cách phát hiện lỗi dùng đúng công thức nhưng trả lời nhầm chiếc đồng hồ đề đang hỏi.'],
        ['Khứ hồi phải cộng thời gian từng chặng','Average speed luôn bằng tổng distance chia tổng elapsed time theo phạm vi đề hỏi. Với hai chặng cùng độ dài d, tốc độ u và v, thời gian là d/u+d/v; tốc độ chung là 2uv/(u+v). Công thức này cần khoảng cách hai chặng bằng nhau và không có thời gian nghỉ. Chặng chậm kéo mean xuống vì chiếm nhiều thời gian hơn. Nếu hai chặng có thời gian bằng nhau, lúc ấy mới lấy trung bình số học của hai tốc độ.'],
        ['Thời gian nghỉ và dòng chảy là những chặng riêng','Một lần nghỉ đóng góp thời gian nhưng không đóng góp quãng đường. Vì vậy average speed tính cho toàn hành trình phải tính cả thời gian nghỉ nếu đề bao gồm nó. Với thuyền, vận tốc so với bờ là tốc độ trong nước yên cộng hoặc trừ tốc độ dòng chảy theo hướng. Để có hành trình ngược dòng, tốc độ thuyền trong nước yên phải lớn hơn tốc độ dòng. Không cộng tốc độ dòng vào cả hai chiều rồi lấy trung bình.'],
        ['Bảng chặng giúp tránh ẩn thừa','Viết mỗi chặng thành một dòng với distance, rate, time; điền hai đại lượng để suy đại lượng thứ ba. Nếu đề chỉ cho tỷ lệ tốc độ và hỏi tỷ lệ thời gian trên cùng quãng đường, dùng quan hệ nghịch đảo mà không đặt quãng đường cụ thể. Có thể chọn quãng đường là bội chung của các tốc độ để chia nhẩm dễ. Tuy nhiên, giữ quãng đường thật khi đề có thời gian nghỉ cố định hoặc thông tin tuyệt đối cần được bảo toàn.']
      ],
      worked:{question:'Một xe đạp đi với tốc độ 18 km/h. Sau 40 phút, xe máy xuất phát cùng điểm, cùng chiều với tốc độ 42 km/h. Hai xe giữ tốc độ. Xe máy đi bao lâu thì bắt kịp?',steps:['Đổi 40 phút thành 2/3 giờ.','Khi xe máy đi, xe đạp dẫn 18×2/3=12 km.','Closing speed là 42−18=24 km/h.','Thời gian đuổi là 12/24=1/2 giờ; kiểm tra xe máy đi 21 km, xe đạp đi 18×7/6=21 km.'],answer:'0.5 giờ, tức 30 phút sau khi xe máy xuất phát.'},
      workedMore:{question:'Một xe đi 72 km với tốc độ 36 km/h, nghỉ 30 phút rồi về cùng đường với tốc độ 48 km/h. Tốc độ trung bình tính cả nghỉ là bao nhiêu?',steps:['Tổng quãng đường là 72+72=144 km.','Thời gian lượt đi 72/36=2 giờ; lượt về 72/48=1.5 giờ.','Cộng cả nghỉ: 2+1.5+0.5=4 giờ.','Average speed=144/4=36 km/h; không lấy trung bình hai tốc độ rồi trừ thời gian nghỉ.'],answer:'36 km/h.'},
      traps:['Trừ tốc độ khi hai vật tiến về nhau hoặc cộng tốc độ khi đuổi cùng chiều.','Dùng cùng thời gian chuyển động cho hai người xuất phát lệch giờ.','Lấy trung bình số học cho khứ hồi có quãng đường bằng nhau.'],
      check:{prompt:'Hai người cách nhau 90 km và tiến về nhau với tốc độ 20 và 25 km/h. Closing speed là bao nhiêu?',options:['5 km/h','22.5 km/h','45 km/h','90 km/h'],answer:2,why:'Mỗi giờ hai người giảm tổng cộng 20+25=45 km khoảng cách.'},
      practice:[
        {mode:'numeric',prompt:'Hai xe cách nhau 150 km, cùng lúc tiến về nhau với tốc độ 40 và 35 km/h, không dừng. Gặp nhau sau bao nhiêu giờ?',answer:'2',why:'Closing speed=75 km/h; 150/75=2 giờ.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Người đi xe đạp tốc độ 12 km/h xuất phát trước 30 phút. Người thứ hai đi cùng đường, cùng chiều với tốc độ 20 km/h. Kể từ lúc người thứ hai xuất phát, cần bao nhiêu phút để bắt kịp?',answer:'45',why:'Dẫn đầu 12×0.5=6 km; tốc độ đuổi 8 km/h. Thời gian 6/8=3/4 giờ=45 phút.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Xe đi và về trên cùng một tuyến, không nghỉ, với tốc độ 30 và 50 km/h. Tốc độ trung bình của toàn chuyến bằng bao nhiêu km/h?',answer:'37.5',why:'Chọn mỗi chiều 150 km: mất 5+3=8 giờ, đi 300 km. Average=300/8=37.5.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Thuyền có tốc độ trong nước yên 10 km/h, dòng nước 2 km/h. Thuyền đi 24 km xuôi dòng rồi quay về 24 km ngược dòng, không nghỉ. Một thuyền khác đi cùng quãng đường tổng trong nước yên với tốc độ 12 km/h. Thuyền đầu mất nhiều hơn bao nhiêu giờ?',answer:'1',why:'Thuyền đầu mất 24/12+24/8=2+3=5 giờ. Thuyền thứ hai mất 48/12=4 giờ. Chênh lệch 1 giờ.',difficulty:'Advanced'}
      ],
      source:'Đọc định nghĩa average speed và cách tách chặng trong hai nguồn; bài đuổi kịp, dòng chảy và dữ kiện đều được viết mới.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 81',label:'Distance, rate and average speed'},{book:'Manhattan Prep · GMAT Foundations of Math',pages:'PDF 619–622',label:'Rate × Time = Distance; total distance and time'}],
      summary:['Chọn đồng hồ chung và ghi khoảng dẫn đầu.','Tính tốc độ thay đổi khoảng cách.','Average speed dùng tổng distance / tổng time.']
    },
    'quant-work-schedules': {
      goals:['Chia lịch làm việc tại mọi mốc thay đổi rate.','Tính phần việc còn lại trước khi đổi nhóm hoặc đổi ca.','Dừng tại đúng thời điểm hoàn thành trong ca cuối.'],
      blocks:[
        ['Chọn một đơn vị công việc nhất quán','Một người hoàn thành toàn bộ công việc trong a giờ có rate 1/a job mỗi giờ, nếu rate không đổi. Có thể thay một job bằng số đơn vị thuận tiện, chẳng hạn 24 đơn vị khi các thời gian chia hết cho 24. Hai cách cho cùng tỷ lệ và cùng thời gian. Điều kiện quan trọng là mọi người làm cùng loại công việc và phần hoàn thành cộng được; nếu người sau phải chờ công đoạn trước, không được tự động cộng các rate.'],
        ['Chia timeline tại mỗi thay đổi','Người đến, người rời, máy nghỉ hoặc năng suất đổi đều tạo một chặng mới. Trong một chặng có rate tổng r không đổi và độ dài t, phần việc là rt. Cộng các phần ấy để bằng một job. Viết timeline trước giúp thấy ai thật sự đang làm trong mỗi đoạn. Nếu hai người cùng làm rồi một người nghỉ, thời gian cùng làm không thể được gán cho cả phần việc còn lại sau khi đã có người rời.'],
        ['Dùng phần còn lại làm cầu nối','Sau chặng đầu hoàn thành w job, chặng sau chỉ cần làm 1−w, không làm lại toàn bộ một job. Nếu rate chặng sau là r, thời gian thêm là (1−w)/r. Thời gian toàn lịch bằng các chặng đã trôi qua cộng thời gian thêm này. Trước khi chia, kiểm tra 0≤w≤1: w>1 có nghĩa công việc đã kết thúc trước mốc bạn đang giả định, nên cần quay lại tìm điểm hoàn thành trong chặng trước.'],
        ['Ca luân phiên có thể gom theo chu kỳ','Nếu lịch lặp đều, chẳng hạn A làm một giờ rồi B làm một giờ, tính công việc mỗi chu kỳ hai giờ. Dùng một số chu kỳ hoàn chỉnh mà tổng chưa vượt một job, sau đó xử lý từng ca còn lại. Không làm tròn số chu kỳ lên rồi trả lời luôn, vì công việc thường hoàn thành giữa một ca. Thứ tự A rồi B có thể ảnh hưởng thời điểm hoàn thành dù năng suất tổng của mỗi chu kỳ không đổi.'],
        ['Năng suất thay đổi khác thời gian thay đổi','Tăng rate 25% nghĩa mỗi giờ làm được 1.25 lần trước; với cùng khối lượng, thời gian mới bằng thời gian cũ chia 1.25, tức còn 80%. Nếu chỉ một người tăng rate, chỉ nhân phần rate của người ấy. Với vòi thoát hoặc lỗi làm mất phần việc, có thể dùng rate âm nếu đề nói quá trình đó diễn ra đồng thời và không đổi. Net rate phải dương để hoàn thành phần còn thiếu trong tương lai.'],
        ['Giải ẩn thời điểm và kiểm tra lịch','Khi cần tìm lúc một người rời, có thể ghi tổng giờ mỗi người thực sự làm rồi cộng contribution. Chẳng hạn A làm t giờ, B làm suốt T giờ thì t/a+T/b=1; ràng buộc 0≤t≤T là một phần của bài. Nếu nghiệm t>T, lịch giả định không thể xảy ra. Cuối cùng thay từng thời gian vào bảng công việc; tổng đúng một job và mọi mốc đúng trình tự mới xác nhận lời giải phù hợp.']
      ],
      worked:{question:'A làm một mình xong việc trong 8 giờ, B trong 4 giờ. A làm trước 2 giờ; sau đó B tham gia, cả hai tiếp tục với rate không đổi. Tổng thời gian từ lúc A bắt đầu là bao nhiêu?',steps:['Chọn một job; rate A=1/8, B=1/4 job/h.','A làm trước 2 giờ được 2/8=1/4 job, còn 3/4.','Khi cùng làm, rate=1/8+1/4=3/8; cần thêm (3/4)/(3/8)=2 giờ.','Tổng là 2+2=4 giờ; kiểm tra A làm 4/8 và B làm 2/4, cộng bằng 1.'],answer:'4 giờ.'},
      workedMore:{question:'A làm một mình xong việc trong 6 giờ, B trong 9 giờ. Hai người luân phiên mỗi người 1 giờ, A làm trước; rate không đổi và dừng ngay khi xong. Cần tổng cộng bao nhiêu giờ?',steps:['Một chu kỳ A rồi B hoàn thành 1/6+1/9=5/18 job trong 2 giờ.','Sau 3 chu kỳ, đã làm 15/18=5/6 job trong 6 giờ.','Phần còn lại 1/6 job đúng bằng công việc A làm trong một giờ.','A hoàn thành ở cuối giờ thứ 7; không cần ca B tiếp theo.'],answer:'7 giờ.'},
      traps:['Cộng thời gian hoàn thành riêng thay vì cộng rate.','Chia một job cho rate chặng cuối dù một phần đã hoàn thành.','Tính trọn chu kỳ cuối khi việc kết thúc giữa ca.'],
      check:{prompt:'Máy làm được 1/12 job mỗi giờ. Sau 3 giờ liên tục, còn lại bao nhiêu job?',options:['1/4','3/4','1/9','4'],answer:1,why:'Đã xong 3×1/12=1/4; phần còn lại 1−1/4=3/4.'},
      practice:[
        {mode:'numeric',prompt:'Một máy làm được 1/5 job mỗi giờ. Máy làm 2 giờ thì hoàn thành bao nhiêu phần của job? Nhập phân số hoặc decimal.',answer:'2/5',why:'Work=rate×time=(1/5)×2=2/5.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'A làm riêng xong trong 10 giờ, B trong 15 giờ. Cùng làm 3 giờ, rồi A nghỉ. B cần thêm bao nhiêu giờ để hoàn thành?',answer:'7.5',why:'Rate chung=1/10+1/15=1/6. Ba giờ xong 1/2; B làm phần còn lại trong (1/2)/(1/15)=15/2=7.5 giờ.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'A làm riêng xong trong 12 giờ, B trong 6 giờ. Cả hai bắt đầu cùng lúc; B rời sau x giờ, A tiếp tục. Việc xong đúng 8 giờ từ lúc bắt đầu. Tìm x.',answer:'2',why:'A làm suốt 8 giờ nên xong 8/12=2/3. B đóng góp 1/3 với rate 1/6 nên làm 2 giờ; 0≤2≤8 hợp lịch.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'A làm riêng xong trong 8 giờ, B trong 12 giờ. Lịch lặp: A làm 1 giờ, rồi B làm 2 giờ. A bắt đầu; dừng ngay khi xong. Tổng thời gian là bao nhiêu giờ?',answer:'10',why:'Mỗi chu kỳ 3 giờ xong 1/8+2/12=7/24. Ba chu kỳ xong 21/24 trong 9 giờ; còn 3/24=1/8 nên A cần đúng 1 giờ nữa. Tổng 10.',hint:'Tính chu kỳ đầy đủ rồi xét riêng ca cuối.',difficulty:'Advanced'}
      ],
      source:'Đọc mô hình work rate và phân biệt các trường hợp cùng làm/làm riêng; lịch ca và bài tập được phát triển mới.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 81–83',label:'Work Problems'},{book:'Manhattan Prep · GMAT Foundations of Math',pages:'PDF 622–625',label:'Define the Work Unit and Add Rates'}],
      summary:['Chia chặng khi người hoặc rate thay đổi.','Cộng rate × time, không cộng thời gian hoàn thành riêng.','Trong ca cuối chỉ làm phần còn thiếu.']
    },
    'quant-weighted-bounds': {
      goals:['Suy tỷ lệ số lượng từ mean của hai nhóm và mean chung.','Dùng bound và điều kiện số nguyên để kiểm tra khả thi.','Tìm cực trị bằng phân bổ tổng với đầy đủ ràng buộc.'],
      blocks:[
        ['Trọng số đến từ đơn vị ở mẫu số','Mean của một nhóm bằng tổng chia số phần tử, nên khi gộp nhóm phải khôi phục tổng bằng mean × count. Với giá trung bình mỗi kilogram, trọng số là kilogram; với tỷ lệ đạt của học sinh, trọng số là số học sinh. Tên gọi average không tự quyết định trọng số. Viết đơn vị cạnh mỗi tích để biết tổng đang cộng là điểm, tiền hay số người. Chỉ khi hai trọng số bằng nhau mới lấy trung bình đơn giản hai mean.'],
        ['Độ lệch quanh mean phải cân bằng','Giả sử nhóm thấp có mean a và m phần tử, nhóm cao mean b và n phần tử. Mean chung c thỏa m(c−a)=n(b−c): tổng phần thiếu dưới c bằng tổng phần dư trên c. Vì vậy m:n=(b−c):(c−a), khi a<c<b. Nhóm nào có mean gần c hơn phải có trọng số lớn hơn để cân bằng. Lập luận này giúp tự kiểm tra chiều của ratio, tránh nhớ máy móc công thức rồi đảo nhầm hai nhóm.'],
        ['Bounds cho biết điều có thể và không thể','Với trọng số không âm và ít nhất một trọng số dương, weighted average nằm trong khoảng từ giá trị nhỏ nhất đến lớn nhất. Nếu cả hai trọng số dương và hai giá trị khác nhau, mean phải lớn hơn đầu mút thấp và nhỏ hơn đầu mút cao. Muốn bằng đúng đầu mút, trọng số của giá trị khác phải bằng 0. Bound chưa chứng minh một mean cụ thể đạt được khi số người nguyên hoặc quy mô nhóm bị giới hạn.'],
        ['Số lượng nguyên biến ratio thành điều kiện chia hết','Nếu suy ra số người hai nhóm có ratio 3:5 ở dạng tối giản, tổng người phải là bội của 8. Một tổng bằng 30 sẽ không phù hợp dù mean chung nằm đúng giữa hai mean nhóm. Khi mean chỉ được làm tròn, ratio suy ra không nhất thiết chính xác; phải phân biệt dữ liệu exact với approximate. Với dữ liệu exact, đặt số lượng là 3k và 5k rồi buộc k là số nguyên dương để sử dụng hết điều kiện.'],
        ['Cực trị cần giữ các phần còn lại hợp lệ','Biết tổng và muốn tối đa một phần tử, hãy tối thiểu hóa tổng những phần tử còn lại trong miền cho phép. Nếu chúng là số nguyên dương phân biệt, không thể đặt tất cả bằng 1; cần dùng các số nhỏ nhất khác nhau. Sau khi suy ra candidate, phải dựng một bộ thật đạt giá trị ấy. Một cận trên chỉ cho biết không thể vượt; việc dựng bộ hợp lệ mới chứng minh đó là maximum chứ không phải một cận quá lỏng.'],
        ['Thay một phần tử: nhìn tổng độ lệch','Khi giữ nguyên count N và thay x bằng y, tổng đổi y−x nên mean đổi (y−x)/N. Khi thêm một phần tử, count cũng đổi; nếu mean cũ là c, số thêm c+d tạo mean mới c+d/(N+1). Cách nhìn độ lệch giảm phép nhân với các số lớn. Nó cũng giải thích vì sao thêm số đúng bằng mean không đổi mean, còn thêm số lớn hơn mean làm mean tăng nhưng không tăng đến tận số vừa thêm.']
      ],
      worked:{question:'Hai nhóm có mean lần lượt 52 và 76. Mean chung là 67, tổng cộng 40 người. Nhóm mean 76 có bao nhiêu người?',steps:['Gọi số người hai nhóm là m và n; m+n=40.','Độ thiếu nhóm thấp là 67−52=15; độ dư nhóm cao là 76−67=9.','Cân bằng 15m=9n cho m:n=3:5.','Tổng 8 phần bằng 40 nên mỗi phần 5 người; n=25. Kiểm tra (15×52+25×76)/40=67.'],answer:'25 người.'},
      workedMore:{question:'Bốn số nguyên dương phân biệt có mean 9. Giá trị lớn nhất có thể của số lớn nhất là bao nhiêu?',steps:['Tổng bốn số là 4×9=36.','Ba số nhỏ còn lại phải có tổng ít nhất 1+2+3=6 vì dương và phân biệt.','Số lớn nhất không vượt 36−6=30.','Bộ 1,2,3,30 đạt tổng 36 và thỏa mọi điều kiện, nên cận 30 đạt được.'],answer:'30.'},
      traps:['Gộp mean mà bỏ qua quy mô nhóm.','Suy mean ở trong khoảng là đủ khả thi dù số người phải nguyên.','Đưa ra cận cực trị nhưng không kiểm tra một bộ đạt được cận ấy.'],
      check:{prompt:'Hai nhóm đều có ít nhất một người, mean lần lượt 40 và 70. Mean chung phải thỏa điều gì?',options:['Bằng 55','Lớn hơn 40 và nhỏ hơn 70','Có thể bằng 40','Lớn hơn hoặc bằng 70'],answer:1,why:'Cả hai trọng số dương nên mean lớn hơn 40 và nhỏ hơn 70; chỉ bằng 55 nếu quy mô bằng nhau.'},
      practice:[
        {mode:'numeric',prompt:'Có 2 hộp, mỗi hộp chứa 8 viên, và 3 hộp, mỗi hộp chứa 13 viên. Trung bình mỗi hộp có bao nhiêu viên?',answer:'11',why:'Tổng viên 2×8+3×13=55; có 5 hộp nên mean=11.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Nhóm A có mean 60, nhóm B có mean 84; mean chung 75. Nếu có tổng cộng 32 người, nhóm B có bao nhiêu người?',answer:'20',why:'A:B=(84−75):(75−60)=9:15=3:5. Có 8 phần, mỗi phần 4 người; B có 20.',difficulty:'Intermediate'},
        {mode:'single',prompt:'Hai nhóm đều không rỗng có mean chính xác 10 và 16; mean chung chính xác 14. Tổng số người nào sau đây có thể xảy ra?',options:['10','14','18','20'],answer:2,why:'Nhóm thấp:cao=(16−14):(14−10)=1:2; tổng phải là bội của 3. Chỉ 18 thỏa, với hai nhóm 6 và 12 người.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Năm số nguyên dương phân biệt có mean 12. Giá trị lớn nhất có thể của số lớn thứ hai là bao nhiêu?',answer:'26',why:'Sắp a<b<c<d<e, tổng 60. Có a+b+c≥1+2+3=6 và e≥d+1; do đó 60≥6+d+(d+1), suy ra d≤26. Bộ 1,2,3,26,28 đạt tổng 60 nên maximum là 26.',hint:'Số lớn nhất cũng phải lớn hơn số đang tối đa hóa.',difficulty:'Advanced'}
      ],
      source:'Định nghĩa mean theo Math Review; cách khai thác miền nguyên tham khảo Manhattan Advanced Quant. Các suy luận weighted bounds và bài tập là nội dung mới.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 83–85',label:'Mixtures and arithmetic mean'},{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 192–195',label:'Use the Constraints; countable quantities'}],
      summary:['Khôi phục tổng trước khi gộp mean.','Độ thiếu × số lượng = độ dư × số lượng.','Muốn chứng minh maximum, vừa chặn vừa dựng bộ đạt cận.']
    },
    'quant-integer-cycles': {
      goals:['Ghép điều kiện số dư và khoảng giá trị.','Tìm chu kỳ lũy thừa bằng các số dư nhỏ.','Đếm nghiệm nguyên có cấu trúc, không liệt kê mọi số.'],
      blocks:[
        ['Số dư mô tả cả một họ số','Với divisor d là số nguyên dương, viết n=dq+r, trong đó q nguyên và 0≤r<d. Cách viết này giữ lại mọi số có cùng remainder, không chỉ một ví dụ thuận tiện. Khi n không âm, q không âm; nếu n có thể âm, q cũng có thể âm. Đừng dùng n=r như một đẳng thức chung. Việc thay một số bằng remainder chỉ bảo toàn kết quả của phép toán theo cùng modulus, không bảo toàn mọi giá trị tuyệt đối.'],
        ['Cộng và nhân số dư rồi chuẩn hóa','Nếu n=dq+r, biểu thức kn+c có cùng số dư với kr+c khi chia d, vì phần kdq chia hết cho d. Sau khi tính kr+c, tiếp tục lấy số dư chuẩn; nó có thể đang lớn hơn d hoặc âm. Với phép nhân hai số cũng làm tương tự. Riêng phép chia không được thực hiện tùy tiện trong đồng dư: từ hai số cùng dư không suy ra thương của chúng vẫn cùng dư nếu chưa có điều kiện hợp lệ.'],
        ['Ghép hai điều kiện bằng thay thế','Một điều kiện n=5q+2 và điều kiện chia 3 dư 1 cho 5q+2 ≡ 1 (mod 3). Rút gọn thành 2q ≡ 2 (mod 3), nên q=3k+1; từ đó n=15k+7. Đây là họ nghiệm đầy đủ, được tìm bằng các remainder nhỏ của q. Khoảng giá trị của n sẽ lọc k sau. Không cần gọi tên định lý phức tạp khi chỉ có vài lớp dư để kiểm tra bằng tay.'],
        ['Không phải mọi cặp remainder đều tương thích','Nếu divisor có thừa số chung, hai điều kiện có thể mâu thuẫn. Chẳng hạn n chia 4 dư 1 thì n lẻ; n chia 6 dư 2 thì n chẵn, nên không có nghiệm. Kiểm tra parity và các ước chung trước khi tìm số cụ thể. Nếu hai điều kiện tương thích, những nghiệm kế tiếp thường cách nhau LCM của các divisor; chỉ dùng khoảng cách đó sau khi đã tìm được một nghiệm và chứng minh điều kiện lặp lại.'],
        ['Chu kỳ lũy thừa cần mốc bắt đầu rõ ràng','Để tìm số dư của aⁿ, tính các remainder của a, a², a³ cho đến khi thấy trạng thái lặp. Nhân cùng a từ một remainder cho ra remainder tiếp theo xác định, nên khi trạng thái lặp, phần tiếp theo lặp theo. Một chu kỳ có thể có đoạn đầu riêng; đừng giả định mọi dãy bắt đầu chu kỳ ngay tại n=1. Với chữ số cuối của 3ⁿ, chu kỳ 3,9,7,1 bắt đầu từ n=1 và có độ dài 4.'],
        ['Đếm chỉ số và xử lý dư bằng không','Khi họ nghiệm là n=n₀+Lk, biến khoảng của n thành khoảng của k rồi đếm các số nguyên trong đó. Có lấy endpoints hay không phụ thuộc dấu bất đẳng thức. Với chu kỳ dài L đánh số từ 1, n chia L dư 0 ứng với vị trí L, không phải một vị trí mới mang số 0. Kiểm tra bằng một số mũ nhỏ chia hết cho L là cách nhanh để tránh lỗi lệch một vị trí trong bài lũy thừa rất lớn.']
      ],
      worked:{question:'Có bao nhiêu số nguyên n trong khoảng 20≤n≤100 thỏa n chia 5 dư 2 và chia 3 dư 1?',steps:['Từ n=5q+2 và n≡1 (mod 3), suy ra 2q+2≡1 (mod 3).','Do đó q≡1 (mod 3), đặt q=3k+1 và n=15k+7.','Thế vào khoảng: 20≤15k+7≤100, nên 13/15≤k≤93/15.','k nguyên nhận 1,2,3,4,5,6; tương ứng n=22,37,52,67,82,97.'],answer:'6 số nguyên.'},
      workedMore:{question:'Tìm chữ số hàng đơn vị của 3⁴⁶+2⁴⁶.',steps:['Chữ số cuối của 3ⁿ lặp 3,9,7,1 theo chu kỳ 4 từ n=1.','46 chia 4 dư 2 nên 3⁴⁶ kết thúc bằng 9.','Chữ số cuối của 2ⁿ lặp 2,4,8,6; vị trí 2 cho chữ số 4.','Tổng chữ số cuối 9+4=13; chuẩn hóa theo modulo 10 cho chữ số 3.'],answer:'3.'},
      traps:['Coi số dư bằng chính số ban đầu trong mọi phép tính.','Bỏ qua tính tương thích của hai điều kiện chia dư.','Gán số mũ chia hết độ dài chu kỳ vào vị trí đầu thay vì cuối.'],
      check:{prompt:'Khi chia một số nguyên cho 7, giá trị nào sau đây không thể là số dư chuẩn?',options:['0','3','6','7'],answer:3,why:'Số dư chuẩn phải thỏa 0≤r<7, nên 7 phải được đổi thành thêm một quotient và remainder 0.'},
      practice:[
        {mode:'numeric',prompt:'n là số nguyên dương chia 6 dư 4. Số 3n+5 chia 6 dư bao nhiêu?',answer:'5',why:'3n+5 có cùng số dư với 3×4+5=17; 17=6×2+5.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Số nguyên dương nhỏ nhất chia 7 dư 2 và chia 5 dư 4 là bao nhiêu?',answer:'9',why:'Các số dương chia 7 dư 2 bắt đầu 2,9,16,…; 2 không thỏa điều kiện chia 5, còn 9 chia 5 dư 4, nên 9 nhỏ nhất.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Chữ số hàng đơn vị của 7⁶⁴ là bao nhiêu?',answer:'1',why:'Chu kỳ 7,9,3,1 có độ dài 4. Vì 64 chia 4 dư 0, chọn vị trí 4 là 1.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Có bao nhiêu số nguyên n với 100<n<300 thỏa n chia 8 dư 3 và chia 6 dư 5?',answer:'9',why:'n=8k+3; theo modulo 6 có 2k+3≡5, nên k≡1 (mod 3). Đặt k=3t+1, n=24t+11. Khoảng cho 89<24t<289, tức t=4,…,12: có 9 giá trị.',hint:'Ghép điều kiện trước khi áp dụng khoảng.',difficulty:'Advanced'}
      ],
      source:'Đã đọc Math Review về quotient/remainder và Manhattan về constraints, cycles. Các bộ số, phép ghép và câu hỏi được tạo mới.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 37–40',label:'Factors, multiples, remainders and parity'},{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 192–195, 265–266',label:'Use the Constraints; remainder and counting patterns'}],
      summary:['Viết n=dq+r với 0≤r<d.','Ghép đồng dư rồi dùng bound để lọc chỉ số nguyên.','Dư 0 của số mũ ứng với cuối chu kỳ bắt đầu tại 1.']
    },
    'quant-restricted-counting': {
      goals:['Phân biệt order, replacement và vật phân biệt.','Chọn block, gap, complement hoặc cases rời nhau.','Kiểm tra mỗi kết quả được đếm đúng một lần.'],
      blocks:[
        ['Định nghĩa một kết quả trước khi tính','Một nhóm ba người không có chức danh khác một nhóm ba người nhận ba vị trí riêng. Với nhóm không thứ tự, đổi chỗ tên không tạo kết quả mới; với ba vị trí, việc đổi người ở vị trí tạo kết quả mới. Ghi rõ các vật có phân biệt không, được lặp lại không và số 0 có được đứng đầu không. Ba câu hỏi này quyết định phép đếm trước khi bạn chọn factorial hay combination, nên không thể suy công thức chỉ từ chữ choose.'],
        ['Ưu tiên vị trí bị hạn chế nhiều nhất','Khi tạo số chẵn từ một tập chữ số, vị trí cuối chịu điều kiện chẵn; khi tạo số có nhiều chữ số, vị trí đầu không được là 0. Có thể đếm theo thứ tự vị trí thuận tiện, không nhất thiết trái sang phải. Nếu số lựa chọn ở đầu phụ thuộc việc cuối có dùng 0 hay chưa, tách hai case cuối bằng 0 và cuối khác 0. Nhân cùng một số lựa chọn cho tất cả case sẽ đếm sai.'],
        ['Đứng cạnh: gom thành block','Nếu A và B bắt buộc đứng cạnh nhau trong một hàng, gom họ thành một block và sắp block cùng các người còn lại. Bên trong block có hai thứ tự AB và BA nếu không bị giới hạn. Khi nhiều người cùng một block, đếm thứ tự nội bộ riêng. Kỹ thuật này dùng cho hàng tuyến tính với các người phân biệt; bàn tròn có đối xứng quay khác, còn điều kiện chỉ một cặp bất kỳ đứng cạnh có thể cần chia case.'],
        ['Không đứng cạnh: tạo gaps','Để đặt hai người đặc biệt không cạnh nhau giữa các người thường, sắp các người thường trước rồi dùng các khe, kể cả hai đầu. Nếu có m người thường thì có m+1 khe; đặt mỗi người đặc biệt vào một khe khác nhau. Cách này bảo đảm tự động có người thường ngăn cách họ. Nếu người đặc biệt phân biệt, cần đếm cả việc chọn khe và gán người vào khe; chỉ chọn khe sẽ thiếu các thứ tự của họ.'],
        ['Phần bù thường gọn cho ít nhất một','Nếu điều kiện là at least one, hãy so độ khó của đếm trực tiếp với đếm không có ai thuộc nhóm đó. Tổng số trừ số vi phạm cho số hợp lệ, miễn hai phép đếm dùng cùng kiểu kết quả: cùng là nhóm không thứ tự hoặc cùng là sắp hàng. Với nhiều điều kiện loại trừ chồng nhau, không trừ từng loại vi phạm độc lập mà bỏ phần giao; có thể dùng inclusion-exclusion hoặc một partition các case rời nhau.'],
        ['Kiểm tra tính đầy đủ và không trùng','Sau khi lập phép đếm, mô tả ngược cách tạo một kết quả bất kỳ: nó phải rơi vào đúng một case và được xây dựng đúng một lần. Quy tắc nhân không yêu cầu xác suất độc lập; nó cần số lựa chọn tiếp theo được tính đúng cho mỗi nhánh. Nếu mọi nhánh cùng có k lựa chọn, nhân k; nếu khác nhau, tách nhóm nhánh rồi cộng. Một ví dụ nhỏ tự liệt kê thường phát hiện được hệ số thừa như 2! hoặc thiếu như số thứ tự nội bộ.']
      ],
      worked:{question:'Sáu người phân biệt đứng thành một hàng. A và B không được đứng cạnh nhau. Có bao nhiêu cách?',steps:['Tổng số cách sắp sáu người là 6!=720.','Đếm vi phạm: gom A,B thành một block, cùng bốn người khác tạo 5 đối tượng.','Có 5! cách sắp đối tượng và 2 cách bên trong block, nên vi phạm 240.','Hợp lệ 720−240=480; phần bù loại đúng những hàng A,B cạnh nhau.'],answer:'480 cách.'},
      workedMore:{question:'Dùng các chữ số 0,1,2,3,4, không lặp chữ số, lập số chẵn có ba chữ số. Có bao nhiêu số?',steps:['Case cuối là 0: hàng trăm có 4 lựa chọn, hàng chục còn 3, được 12 số.','Case cuối là 2 hoặc 4: có 2 lựa chọn cho cuối.','Trong mỗi case cuối khác 0, hàng trăm có 3 chữ số khác 0 còn lại; hàng chục có 3 lựa chọn, gồm cả 0.','Hai case rời nhau và đầy đủ: tổng 12+2×3×3=30 số.'],answer:'30 số.'},
      traps:['Chia cho k! dù các vị trí có chức danh khác nhau.','Gom block nhưng quên thứ tự bên trong.','Áp dụng quy tắc nhân với số lựa chọn thay đổi theo nhánh mà không tách case.'],
      check:{prompt:'Chọn một ban 3 người từ 8 người, không chức danh. Công thức đếm nào đúng?',options:['8×7×6','8×7×6/3!','8³','3⁸'],answer:1,why:'Mỗi nhóm được đếm 3! lần trong lựa chọn có thứ tự, nên chia cho 3!; kết quả 56.'},
      practice:[
        {mode:'numeric',prompt:'Có 7 người. Chọn một trưởng nhóm và một phó nhóm, không ai giữ cả hai chức vụ. Có bao nhiêu cách?',answer:'42',why:'Trưởng có 7 lựa chọn, phó có 6. Hai chức vụ phân biệt nên 7×6=42, không chia 2.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Năm người phân biệt xếp thành hàng. A và B phải đứng cạnh nhau. Có bao nhiêu cách?',answer:'48',why:'Một block AB cộng ba người khác là 4 đối tượng: 4! cách. Bên trong block có AB hoặc BA, nên 4!×2=48.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Chọn nhóm 3 người từ 4 kỹ sư và 3 nhà thiết kế, mọi người phân biệt, không chức danh. Nhóm phải có ít nhất một nhà thiết kế. Có bao nhiêu nhóm?',answer:'31',why:'Tổng C(7,3)=35. Nhóm không có nhà thiết kế là C(4,3)=4. Hợp lệ 35−4=31.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Bảy người phân biệt gồm A, B và năm người khác đứng thành một hàng. A không ở hai đầu hàng, và A không cạnh B. Có bao nhiêu cách?',answer:'2400',why:'A có 5 vị trí nội bộ. Với mỗi vị trí A, B không được ở A hoặc hai vị trí sát A, nên có 4 vị trí. Năm người còn lại xếp 5! cách: 5×4×120=2400.',hint:'Cố định vị trí A trước, rồi đếm vị trí hợp lệ của B.',difficulty:'Advanced'}
      ],
      source:'Đọc quy tắc nhân, permutations và combinations của Math Review cùng hướng chia bài thành subproblems của Manhattan. Các ràng buộc và ví dụ được viết mới.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 92–93',label:'Counting Methods'},{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 266',label:'Break into subproblems; total minus unsuitable items'}],
      summary:['Khóa định nghĩa một kết quả.','Đếm vị trí hạn chế trước; dùng block, gap hoặc phần bù.','Cases phải bao quát và không trùng.']
    },
    'quant-conditional-draws': {
      goals:['Cập nhật tử và mẫu sau lượt rút không hoàn lại.','Phân biệt sự kiện được biết với sự kiện cần tìm.','Dùng tỷ lệ trong không gian mẫu đã thu hẹp.'],
      blocks:[
        ['Không hoàn lại làm trạng thái hộp thay đổi','Khi rút một vật và giữ lại, tổng số vật giảm một; số vật thuộc màu vừa rút cũng giảm một. Vì vậy xác suất lượt sau phụ thuộc kết quả lượt trước. Một nhánh rút đỏ rồi xanh có xác suất P(đỏ đầu)×P(xanh sau | đỏ đầu). Quy tắc nhân vẫn dùng được, nhưng thừa số thứ hai phải là conditional probability của trạng thái đã cập nhật. Không được giữ nguyên cả hai phân số chỉ vì hai lượt đều ngẫu nhiên.'],
        ['Điều kiện chính là không gian mẫu mới','P(A|B) hỏi tỷ lệ xảy ra A trong những kết quả đã thỏa B. Nếu các kết quả nhỏ đồng khả năng, đếm số kết quả ở cả A và B rồi chia số kết quả thuộc B. Dạng tổng quát là P(A và B)/P(B), cần P(B)>0. Tử số phải là giao chứ không phải toàn bộ A. Đọc từ given, knowing hoặc biết rằng trước khi tính để xác định những kết quả nào đã bị loại khỏi mẫu số.'],
        ['Biết lượt đầu khác biết cả cặp','Biết lượt đầu đỏ cho phép cập nhật hộp trực tiếp: bỏ một đỏ rồi xét lượt hai. Biết cặp có ít nhất một đỏ lại không cho biết đỏ nằm ở lượt nào; các cặp đỏ–xanh và xanh–đỏ đều còn hợp lệ. Đừng tự thay điều kiện thứ hai bằng điều kiện thứ nhất. Hai câu có thể dùng cùng một hộp và cùng hai lượt rút nhưng xác suất khác nhau vì thông tin được cung cấp lọc ra hai không gian mẫu khác nhau.'],
        ['Chọn mô hình có thứ tự hoặc không thứ tự','Nếu chọn đều ngẫu nhiên hai vật khác nhau, có thể dùng các cặp có thứ tự hoặc các cặp không thứ tự. Cặp có thứ tự hợp với tree theo lượt; cặp không thứ tự hợp với combination nếu câu hỏi không phân biệt lượt. Tử và mẫu phải theo cùng mô hình. Những nhãn màu như đỏ–đỏ, đỏ–xanh, xanh–xanh thường không đồng khả năng, vì mỗi nhãn đại diện số cặp vật khác nhau. Hãy đếm vật cụ thể hoặc dùng xác suất nhánh.'],
        ['Phần bù vẫn phải nằm trong điều kiện','Để tính xác suất ít nhất một đỏ trong hai lượt, có thể lấy 1 trừ xác suất cả hai không đỏ. Nhưng nếu đã biết B, công thức cần là 1−P(không A | B), không phải 1−P(không A) của hộp gốc. Khi điều kiện là ít nhất một đỏ, mẫu số có thể tính bằng tổng cặp trừ cặp toàn xanh. Cách này giữ các phép đếm nhỏ và tránh liệt kê nhiều nhánh, đồng thời giải thích rõ sự thay đổi denominator.'],
        ['Đối xứng không đồng nghĩa độc lập','Trong một lượt rút thứ hai chưa biết kết quả lượt đầu, mỗi vật ban đầu vẫn có cơ hội như nhau xuất hiện ở vị trí thứ hai. Vì vậy xác suất marginal của lượt hai đỏ bằng tỷ lệ đỏ ban đầu. Điều đó không làm hai lượt độc lập: sau khi biết lượt đầu đỏ, tỷ lệ đỏ ở lượt hai đã giảm. Phân biệt chưa quan sát và đã biết giúp tránh dùng tính đối xứng để xóa mất thông tin điều kiện của đề.']
      ],
      worked:{question:'Hộp có 5 bi đỏ và 3 bi xanh; rút ngẫu nhiên 2 bi không hoàn lại. Biết ít nhất một bi đỏ. Xác suất cả hai đỏ là bao nhiêu?',steps:['Đếm cặp không thứ tự đồng khả năng: tổng C(8,2)=28 cặp.','Các cặp toàn xanh là C(3,2)=3, nên điều kiện giữ 28−3=25 cặp.','Số cặp cả hai đỏ là C(5,2)=10; tất cả đều thỏa điều kiện.','Xác suất có điều kiện là 10/25=2/5; mẫu số không còn là 28.'],answer:'2/5.'},
      workedMore:{question:'Hộp có 4 đỏ và 2 xanh; rút tuần tự hai bi không hoàn lại. Biết hai bi khác màu. Xác suất lượt đầu đỏ là bao nhiêu?',steps:['P(đỏ rồi xanh)=(4/6)(2/5)=4/15.','P(xanh rồi đỏ)=(2/6)(4/5)=4/15.','Điều kiện khác màu gồm hai nhánh rời nhau, tổng xác suất 8/15.','P(đỏ đầu | khác màu)=(4/15)/(8/15)=1/2; không dùng 4/6 vì đã có thông tin về cả cặp.'],answer:'1/2.'},
      traps:['Giữ mẫu số ban đầu ở lượt rút không hoàn lại thứ hai.','Coi các tổ hợp màu là các kết quả đồng khả năng.','Đồng nhất biết lượt đầu đỏ với biết ít nhất một đỏ.'],
      check:{prompt:'Hộp có 4 đỏ, 3 xanh. Biết đã rút một đỏ và không hoàn lại. Xác suất lượt tiếp theo đỏ là bao nhiêu?',options:['4/7','3/7','3/6','4/6'],answer:2,why:'Còn 3 đỏ trong 6 bi, nên xác suất 3/6=1/2.'},
      practice:[
        {mode:'numeric',prompt:'Hộp có 3 đỏ và 2 xanh. Rút ngẫu nhiên hai bi không hoàn lại. Xác suất cả hai xanh bằng bao nhiêu? Nhập phân số hoặc decimal.',answer:'1/10',why:'P(xanh đầu)=2/5; sau đó còn 1 xanh trong 4 bi. Tích (2/5)(1/4)=1/10.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Hộp có 5 đỏ, 4 xanh. Rút hai bi không hoàn lại. Biết lượt đầu xanh. Xác suất lượt thứ hai đỏ là bao nhiêu?',answer:'5/8',why:'Lượt đầu xanh để lại toàn bộ 5 đỏ và 3 xanh, tổng 8. Xác suất đỏ tiếp theo là 5/8.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Hộp có 3 đỏ, 3 xanh. Rút ngẫu nhiên hai bi không hoàn lại. Biết ít nhất một đỏ. Xác suất cả hai đỏ là bao nhiêu?',answer:'1/4',why:'Có C(6,2)=15 cặp; bỏ C(3,2)=3 cặp toàn xanh, còn 12. Cặp đỏ–đỏ có 3, nên 3/12=1/4.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Hộp có 4 đỏ, 3 xanh, 2 vàng. Chọn ngẫu nhiên 3 bi không hoàn lại. Biết nhóm có đúng 1 bi vàng. Xác suất hai bi còn lại khác màu nhau là bao nhiêu?',answer:'4/7',why:'Trong điều kiện đúng 1 vàng, chọn 1 vàng từ 2 và 2 bi từ 7 bi không vàng: mẫu 2×C(7,2)=42. Thuận lợi: 2×4×3=24. Tỷ lệ 24/42=4/7.',hint:'Hệ số chọn bi vàng xuất hiện ở cả tử và mẫu.',difficulty:'Advanced'}
      ],
      source:'Đã đọc định nghĩa xác suất, independent/dependent events và conditional multiplication trong Math Review. Hộp bi, dữ kiện và lời giải đều tự viết.',
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 94, 96–99',label:'Probability; independence, dependence and conditioning'}],
      summary:['Cập nhật hộp trên mỗi nhánh.','Điều kiện B thay đổi mẫu số thành những kết quả thỏa B.','Đối xứng marginal không chứng minh independence.']
    }
  },
  enrichments: {
    'arithmetic': {
      blocks:[
        ['Tính theo cấu trúc thay vì theo độ dài','Một biểu thức có nhiều số không nhất thiết cần nhiều phép tính. Phân phối a(b+c)=ab+ac cho phép chọn hướng có số gọn hơn: nhân với tổng hoặc tách tích thành hai phần. Chẳng hạn 19×31 có thể là 20×31−31. Khi các phân số cùng nhân một số chia hết cho mẫu, phân phối trước có thể tránh quy đồng. Giữ ngoặc rõ ràng để phép trừ tác động lên toàn bộ phần cần trừ, đặc biệt khi có số âm.'],
        ['Rút gọn nhân tử, không gạch bỏ số hạng','Trong một tích chia cho một tích, có thể chia cả tử và mẫu cho cùng nhân tử khác 0. Nhưng trong tổng, chỉ một số hạng có nhân tử ấy chưa đủ để gạch bỏ nó khỏi toàn biểu thức. Với (6+18)/6, hãy chia cả hai số hạng hoặc cộng trước; kết quả là 1+3. Sau khi rút gọn, ước lượng bậc độ lớn để kiểm tra: chia một số dương cho phân số nhỏ hơn 1 làm kết quả lớn hơn số ban đầu.']
      ],
      workedExamples:[{question:'Tính nhẩm 48×(5/6−3/8).',steps:['48 chia hết cho cả 6 và 8 nên có thể phân phối.','48×5/6=8×5=40.','48×3/8=6×3=18.','Lấy 40−18=22; kiểm tra ngoặc là 11/24 và 48×11/24 cũng bằng 22.'],answer:'22.'}],
      practice:[
        {mode:'numeric',prompt:'Tính 72×(7/9−1/4).',answer:'38',why:'Phân phối: 72×7/9=56, 72×1/4=18; hiệu là 38.',difficulty:'Beginner'},
        {mode:'single',prompt:'Cách rút gọn nào đúng với (18+30)/6?',options:['3+30','18+5','3+5','48'],answer:2,why:'Phải chia cả hai số hạng cho 6: 18/6+30/6=3+5=8.',difficulty:'Beginner'}
      ],
      summary:['Chọn hướng phân phối làm phép tính ngắn hơn.','Rút gọn chỉ áp dụng cho nhân tử chung của toàn tử và mẫu.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 45–49',label:'Arithmetic operations; factoring and common factors'}]
    },
    'prime-factors': {
      blocks:[
        ['Số chính phương được nhận ra từ số mũ','Trong phân tích prime factorization của số nguyên dương, một perfect square có mọi số mũ chẵn vì khi bình phương, từng số mũ đều nhân đôi. Muốn nhân một số với số nguyên dương nhỏ nhất để thành square, chỉ bổ sung một bản sao của các prime đang có số mũ lẻ. Không cần nhân thêm các prime đã đủ chẵn. Với perfect cube, tư duy tương tự nhưng số mũ phải là bội của 3; kiểm tra từng prime riêng rồi ghép lại.'],
        ['Ước chung và bội chung chọn số mũ khác nhau','Một ước chung không được dùng nhiều bản sao của prime hơn bất kỳ số đầu vào nào, nên GCD lấy số mũ nhỏ nhất. Một bội chung phải chứa đủ mọi prime cần thiết, nên LCM lấy số mũ lớn nhất. Quy tắc này vẫn đúng nếu prime không xuất hiện trong một số: coi số mũ bằng 0. Khi đếm ước dương của một số, mỗi exponent của ước có thể chọn từ 0 đến số mũ hiện có, rồi nhân số lựa chọn.']
      ],
      workedExamples:[{question:'Số nguyên dương m nhỏ nhất để 180m là số chính phương bằng bao nhiêu?',steps:['Phân tích 180=2²×3²×5.','Hai số mũ của 2 và 3 đã chẵn; số mũ của 5 là 1.','Bổ sung một 5 cho số mũ thành 2, nên m=5.','Kiểm tra 180×5=900=30²; thêm prime khác hoặc nhiều 5 hơn chỉ làm m lớn hơn.'],answer:'5.'}],
      practice:[
        {mode:'numeric',prompt:'108 có bao nhiêu ước nguyên dương?',answer:'12',why:'108=2²×3³. Ước có 3 lựa chọn số mũ của 2 và 4 lựa chọn số mũ của 3, nên 12.',difficulty:'Intermediate'},
        {mode:'multi',prompt:'Chọn tất cả số là ước của 360.',options:['24','45','48','72'],answer:[0,1,3],why:'360=2³×3²×5. Các số 24,45,72 đều dùng số mũ không vượt giới hạn; 48 cần 2⁴ nên không là ước.',difficulty:'Intermediate'}
      ],
      summary:['Square: mọi exponent chẵn; cube: mọi exponent chia hết cho 3.','GCD lấy số mũ nhỏ nhất, LCM lấy lớn nhất.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 39–41',label:'Prime factorization, divisibility and roots'}]
    },
    'algebra': {
      blocks:[
        ['Biến đổi phải giữ miền xác định','Hai biểu thức rút gọn giống nhau vẫn có thể có miền khác nhau. Chẳng hạn (x²−9)/(x−3) rút thành x+3 chỉ khi x≠3; điều kiện ấy không biến mất sau khi gạch nhân tử. Khi giải x(x−4)=0, chia ngay cho x sẽ đánh mất nghiệm x=0. Hãy viết các giá trị bị loại trước khi biến đổi, dùng tính chất tích bằng 0 để tách trường hợp và cuối cùng kiểm tra nghiệm trong biểu thức gốc.'],
        ['Function notation là phép thay thế có thứ tự','Ký hiệu f(x) là đầu ra của quy tắc f tại đầu vào x, không phải tích f nhân x. Nếu cần f(f(a)), tính đầu ra trong cùng rồi dùng nó làm đầu vào mới. Nếu đề hỏi f(x+1), thay toàn bộ x bằng x+1, dùng ngoặc để bảo toàn cấu trúc. Với f(x)=x², f(x+1)=(x+1)² còn f(x)+1=x²+1; đây là hai thao tác khác nhau vì số 1 được cộng ở hai thời điểm.']
      ],
      workedExamples:[{question:'Cho f(x)=2x−3 với x thực. Tìm f(f(4)).',steps:['Đầu vào của hàm bên trong là 4.','Tính f(4)=2×4−3=5.','Dùng 5 làm đầu vào hàm bên ngoài: f(5)=2×5−3.','Kết quả 7; có thể kiểm tra f(f(x))=4x−9 rồi thay x=4.'],answer:'7.'}],
      practice:[
        {mode:'numeric',prompt:'Cho x=7. Tính (x²−16)/(x−4).',answer:'11',why:'Điều kiện x≠4 được thỏa. Tử=(x−4)(x+4), nên giá trị là x+4=11.',difficulty:'Intermediate'},
        {mode:'multi',prompt:'Chọn tất cả nghiệm thực của x(x−5)=0.',options:['0','−5','5','1'],answer:[0,2],why:'Một trong hai nhân tử bằng 0: x=0 hoặc x−5=0. Do đó nghiệm là 0 và 5; không chia mất trường hợp x=0.',difficulty:'Beginner'}
      ],
      summary:['Rút gọn không xóa điều kiện của biểu thức gốc.','Trong hàm hợp, tính từ trong ra ngoài.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 49, 53–54, 58–60',label:'Equivalent equations, factoring and functions'}]
    },
    'hard-quant': {
      blocks:[
        ['Thử số để bác bỏ và để khám phá','Một counterexample hợp lệ đủ bác bỏ mệnh đề luôn đúng, nhưng vài ví dụ thuận lợi chưa đủ chứng minh nó. Khi kiểm tra phát biểu về số thực, thử số âm, 0, phân số giữa 0 và 1, và số lớn hơn 1 nếu miền cho phép. Những vùng này tạo hành vi khác nhau khi bình phương hoặc lấy nghịch đảo. Sau khi tìm pattern, chuyển nó thành lập luận bao quát hoặc chia case đầy đủ; đừng biến kết quả thử số thành bằng chứng vượt phạm vi.'],
        ['Bài tối ưu cần cận và trường hợp đạt','Khi đề hỏi least hoặc greatest, một giá trị khả thi mới chỉ là ứng viên. Bạn cần giải thích vì sao mọi giá trị khác không tốt hơn. Với tích cố định của hai số nguyên dương, liệt kê các factor pairs gần nhau rồi so tổng; khoảng cách giữa hai thừa số nhỏ thường giúp tổng nhỏ. Nếu dùng bất đẳng thức để có cận, vẫn kiểm tra điều kiện equality và integer. Một cận liên tục có thể không đạt được bằng các số nguyên mà đề yêu cầu.']
      ],
      workedExamples:[{question:'a,b là số nguyên dương và ab=48. Giá trị nhỏ nhất của a+b là bao nhiêu?',steps:['Có thể giả sử a≤b vì đổi chỗ không đổi tổng.','Khi đó a²≤48 nên a≤6; các ước của 48 trong khoảng là 1,2,3,4,6.','Các cặp tương ứng cho tổng 49,26,19,16,14.','Nhỏ nhất là 14, đạt tại (6,8); danh sách đầy đủ vì đã xét mọi ước a≤√48.'],answer:'14.'}],
      practice:[
        {mode:'numeric',prompt:'a,b là số nguyên dương, ab=72. Tìm giá trị nhỏ nhất của a+b.',answer:'17',why:'Xét a≤b: các cặp (1,72),(2,36),(3,24),(4,18),(6,12),(8,9) có tổng 73,38,27,22,18,17. Nhỏ nhất 17.',difficulty:'Advanced'},
        {mode:'single',prompt:'Phát biểu nào đúng với mọi số thực x?',options:['x²>x','x²≥x','x²≥0','1/x luôn xác định'],answer:2,why:'Bình phương số thực luôn không âm. x=0 bác bỏ phát biểu đầu; x=1/2 bác bỏ phát biểu thứ hai; x=0 làm 1/x không xác định.',difficulty:'Intermediate'}
      ],
      summary:['Thử số bác bỏ được claim phổ quát, nhưng không tự chứng minh claim.','Một cực trị cần lập luận bao quát và ví dụ đạt được.'],
      sourceRefs:[{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 192–196, 266',label:'Use the Constraints; breaking a problem into cases'}]
    },
    'fractions-ratios': {
      blocks:[
        ['Ghép ratio qua đại lượng chung','Hai ratio A:B và B:C chỉ ghép được khi phần dành cho B đã cùng quy mô. Nếu A:B=2:3 còn B:C=4:5, đổi B thành 12 phần trong cả hai quan hệ rồi được A:B:C=8:12:15. Không ghép trực tiếp 2:3:5 vì hai số mô tả B ban đầu không tương đương về số phần. Sau khi có ratio ba nhóm, tổng và chênh lệch được tính bằng cùng multiplier k; thông tin tuyệt đối sẽ xác định k.'],
        ['Thêm lượng bằng nhau giữ hiệu, không giữ ratio','Nếu hai nhóm cùng được thêm t phần tử, hiệu A−B không đổi nhưng ratio thường tiến gần 1 hơn. Viết A=ak, B=bk và ratio mới là (ak+t)/(bk+t); không cộng t vào các số phần a,b trừ khi k=1 đã được chứng minh. Phương trình có thể tìm được k, nhưng vẫn kiểm tra số lượng nguyên và dương theo đề. Thêm cùng tỷ lệ phần trăm thì ngược lại: ratio giữ nguyên vì cả hai lượng nhân cùng multiplier.']
      ],
      workedExamples:[{question:'A:B=3:4 và B:C=6:5. Biết A+B+C=62. Tìm A.',steps:['Đưa B về 12 phần: ratio đầu nhân 3 thành 9:12.','Ratio sau nhân 2 thành 12:10, nên A:B:C=9:12:10.','Tổng là 31 phần, mỗi phần 62/31=2.','A=9×2=18; kiểm tra B=24, C=20 thỏa cả hai ratio.'],answer:'18.'}],
      practice:[
        {mode:'numeric',prompt:'A:B=4:7, với B−A=21. Tìm A.',answer:'28',why:'Hiệu 3 phần bằng 21 nên mỗi phần 7; A=4×7=28.',difficulty:'Beginner'},
        {mode:'numeric',prompt:'Hai hộp có số bi theo ratio 2:5. Thêm 6 bi vào mỗi hộp thì ratio thành 1:2. Ban đầu hộp ít hơn có bao nhiêu bi?',answer:'12',why:'Đặt hai lượng 2k,5k. Từ 2(2k+6)=5k+6 có k=6, nên hộp ít hơn có 12 bi.',difficulty:'Intermediate'}
      ],
      summary:['Ghép ratio bằng cách chuẩn hóa đại lượng chung.','Thêm bằng nhau giữ hiệu; nhân bằng nhau giữ ratio.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 47–49, 74',label:'Algebraic translation and ratio/percent relationships'}]
    },
    'rates-work': {
      blocks:[
        ['Hai cách chọn đơn vị cho cùng bài','Chọn một job thường tạo rate phân số, còn chọn tổng công việc bằng bội chung các thời gian có thể tạo rate nguyên. Nếu A làm xong trong 6 giờ và B trong 10 giờ, coi job là 30 đơn vị: A làm 5 và B làm 3 đơn vị mỗi giờ. Thời gian vẫn bằng tổng work chia combined rate. Đơn vị tự chọn chỉ là cách đổi thang đo; phải đổi toàn bộ công việc và mọi rate cùng lúc để giữ tỷ lệ.'],
        ['Đọc điều kiện cộng năng suất','Cộng rates chỉ hợp lệ khi phần việc của mỗi người đóng góp độc lập vào cùng một tổng, trong cùng đơn vị thời gian. Nếu máy thứ hai xử lý sản phẩm do máy thứ nhất vừa tạo ra, tốc độ dây chuyền có thể bị giới hạn bởi công đoạn chậm hơn; không cộng đơn giản. Khi đề nói làm cùng với rate không đổi, dùng tổng. Khi có rò rỉ đồng thời, dùng rate vào trừ rate ra và kiểm tra net rate trước khi tính thời gian.']
      ],
      workedExamples:[{question:'Hai máy hoàn thành cùng một lô hàng lần lượt trong 6 và 10 giờ. Nếu có thể chia lô để hai máy làm đồng thời với rate không đổi, cần bao nhiêu giờ?',steps:['Chọn lô hàng gồm 30 đơn vị công việc.','Rate hai máy là 30/6=5 và 30/10=3 đơn vị/h.','Rate chung là 8 đơn vị/h.','Thời gian=30/8=15/4 giờ; nhỏ hơn cả hai thời gian làm riêng, phù hợp.'],answer:'15/4 giờ.'}],
      practice:[
        {mode:'numeric',prompt:'Hai máy có thể cùng làm một lô trong 4 giờ. Máy A làm riêng trong 6 giờ. Máy B làm riêng cần bao nhiêu giờ? Các rate không đổi và cộng được.',answer:'12',why:'Rate B=1/4−1/6=1/12 job/h, nên cần 12 giờ cho một job.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Vòi vào cấp 9 L/phút, vòi thoát xả 3 L/phút đồng thời với rate không đổi. Cần bao nhiêu phút để tăng lượng nước trong bồn thêm 42 L?',answer:'7',why:'Net rate=9−3=6 L/phút; thời gian=42/6=7 phút.',difficulty:'Beginner'}
      ],
      summary:['Đổi unit có thể loại phân số nhưng không thay mô hình.','Chỉ cộng rates khi các contribution thật sự cộng được.'],
      sourceRefs:[{book:'Manhattan Prep · GMAT Foundations of Math',pages:'PDF 622–625',label:'Define the Work Unit and Add Rates'}]
    },
    'averages-statistics': {
      blocks:[
        ['Mean và median phản ứng khác với outlier','Mean sử dụng mọi giá trị nên một số rất lớn có thể đẩy mean lên đáng kể. Median phụ thuộc vị trí sau sắp xếp, nên tăng tiếp giá trị lớn nhất có thể giữ nguyên median khi thứ tự không đổi. Khi thay một phần tử, tính tổng mới để tìm mean; khi hỏi median, hãy xét vị trí giữa. Không suy luận mean bằng median chỉ vì dữ liệu đều dương hoặc vì số phần tử lẻ; cần cấu trúc đối xứng hay dữ kiện cụ thể.'],
        ['Dịch và co giãn một tập dữ liệu','Cộng c vào mọi giá trị làm mean và median tăng c, nhưng range và standard deviation giữ nguyên vì mọi khoảng cách không đổi. Nhân mọi giá trị với k làm mean nhân k, range và standard deviation nhân |k|; độ phân tán không thể âm. Khi k âm, thứ tự bị đảo nhưng median vẫn nhân k. Những quan hệ này thường cho câu trả lời không cần tính standard deviation trực tiếp, miễn cùng phép biến đổi được áp dụng cho mọi phần tử.']
      ],
      workedExamples:[{question:'Tập dữ liệu 4,7,7,10,12 được đổi thành 4,7,7,10,32. Mean và median đổi thế nào?',steps:['Tổng cũ=40 nên mean cũ=8; giá trị giữa thứ ba là 7.','Giá trị cuối tăng 20, count giữ 5 nên mean tăng 20/5=4.','Mean mới=12; tập vẫn sắp tăng và phần tử thứ ba vẫn 7.','Median không đổi; range tăng từ 8 lên 28, cho thấy outlier ảnh hưởng độ phân tán.'],answer:'Mean tăng từ 8 lên 12; median giữ 7.'}],
      practice:[
        {mode:'numeric',prompt:'Tám số có mean 17. Thay một số 9 bằng 25 thì mean mới bằng bao nhiêu?',answer:'19',why:'Tổng tăng 16 trong khi count là 8, nên mean tăng 2: 17+2=19.',difficulty:'Intermediate'},
        {mode:'multi',prompt:'Cộng 6 vào mọi phần tử của một tập dữ liệu. Chọn tất cả đại lượng chắc chắn không đổi.',options:['Mean','Range','Standard deviation','Median'],answer:[1,2],why:'Phép tịnh tiến giữ mọi khoảng cách, nên range và standard deviation giữ nguyên; mean và median tăng 6.',difficulty:'Intermediate'}
      ],
      summary:['Mean theo tổng; median theo vị trí.','Tịnh tiến giữ độ phân tán; co giãn nhân độ phân tán với |k|.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 84–86',label:'Mean, median, range and standard deviation'}]
    },
    'equations-inequalities': {
      blocks:[
        ['Nhân với biểu thức chưa biết dấu cần chia case','Khi nhân một inequality với x, bạn chưa biết có đảo dấu hay không nếu chưa biết dấu x. Với 1/x>2, phải giữ x≠0 và xét hai miền: x>0 cho 1>2x; x<0 cho 1<2x, điều không thể. Vì vậy nghiệm chỉ nằm ở phía dương. Cách khác là chuyển về một phân thức rồi lập sign chart. Chọn cách ít case, nhưng không lược bỏ thông tin về dấu của mẫu số.'],
        ['Khoảng cách ngoài một đoạn tạo hai miền','Điều kiện |x−a|≥r với r>0 nói x cách a ít nhất r. Nó gồm x≤a−r hoặc x≥a+r, không phải một interval ở giữa. Từ hoặc ở đây là union; nếu đề thêm một điều kiện khác bằng và, lấy giao với điều kiện mới. Nếu x phải nguyên, chỉ đếm integer trong tập giao sau cùng. Kiểm tra endpoints bằng thay trực tiếp giúp phân biệt dấu strict với dấu có bằng.']
      ],
      workedExamples:[{question:'Giải 1/x>2 trong tập số thực.',steps:['Miền xác định x≠0.','Nếu x>0, nhân x giữ chiều: 1>2x, cho 0<x<1/2.','Nếu x<0, nhân x đảo chiều: 1<2x; vế phải âm nên không thể.','Hợp hai case chỉ còn 0<x<1/2; x=1/2 bị loại vì bất đẳng thức strict.'],answer:'0<x<1/2.'}],
      practice:[
        {mode:'numeric',prompt:'Có bao nhiêu số nguyên x thỏa |x−2|≤3?',answer:'7',why:'−3≤x−2≤3 cho −1≤x≤5. Các integer từ −1 đến 5 có 5−(−1)+1=7.',difficulty:'Intermediate'},
        {mode:'single',prompt:'Điều kiện |x+1|>4 tương đương với điều gì?',options:['−5<x<3','x<−5 hoặc x>3','x≤−5 hoặc x≥3','x>−5 và x<3'],answer:1,why:'Khoảng cách từ x đến −1 lớn hơn 4 tạo hai miền ngoài: x<−1−4 hoặc x>−1+4. Endpoints không được lấy.',difficulty:'Intermediate'}
      ],
      summary:['Không nhân inequality với biểu thức chưa biết dấu mà bỏ case.','Absolute value ngoài khoảng tạo union hai miền.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 36–37, 57–58',label:'Absolute value and inequalities'},{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 196',label:'Integer bounds and denominator signs'}]
    },
    'counting-probability': {
      blocks:[
        ['Quy tắc nhân đếm các nhánh, không đòi independence','Trong counting, nhân số lựa chọn từng bước khi mỗi nhánh có cùng số lựa chọn tiếp theo. Việc bước sau còn ít lựa chọn vì không hoàn lại không ngăn phép nhân; nó chỉ đổi thừa số, như 6×5. Trong probability, phép nhân tổng quát là P(A)×P(B|A); chỉ khi independent mới thay P(B|A) bằng P(B). Phân biệt hai ý này để không từ chối một phép đếm hợp lệ hoặc nhân hai xác suất marginal sai.'],
        ['Kết quả đồng khả năng phải đủ chi tiết','Công thức favorable/total chỉ đúng khi các outcomes được đếm có cùng xác suất. Tung hai đồng xu công bằng có bốn chuỗi đồng khả năng HH,HT,TH,TT; ba nhãn không ngửa, một ngửa, hai ngửa không đồng khả năng. Khi gộp outcomes thành nhóm, nhóm có nhiều outcomes nhỏ hơn sẽ nặng xác suất hơn. Với phép rút bi, có thể đánh số từng bi rồi đếm cặp; màu là thuộc tính của kết quả chứ không tự bảo đảm các nhóm màu đều nhau.']
      ],
      workedExamples:[{question:'Tung hai đồng xu công bằng độc lập. Xác suất có đúng một mặt ngửa là bao nhiêu?',steps:['Liệt kê bốn chuỗi HH,HT,TH,TT với H là ngửa.','Mỗi chuỗi có xác suất 1/2×1/2=1/4.','Đúng một ngửa gồm HT và TH, là hai outcomes khác nhau.','Cộng 1/4+1/4=1/2; không lấy 1/3 theo ba nhãn số mặt ngửa.'],answer:'1/2.'}],
      practice:[
        {mode:'numeric',prompt:'Một mã gồm 2 chữ cái khác nhau chọn từ A,B,C,D,E,F. Thứ tự quan trọng. Có bao nhiêu mã?',answer:'30',why:'Vị trí đầu có 6 lựa chọn, vị trí sau còn 5; tổng 6×5=30.',difficulty:'Beginner'},
        {mode:'single',prompt:'Gieo một xúc xắc công bằng 6 mặt. A là ra số chẵn, B là ra số lẻ. Quan hệ nào đúng?',options:['A và B độc lập','A và B mutually exclusive nhưng không độc lập','A và B cùng xảy ra với xác suất 1/4','A và B là cùng một sự kiện'],answer:1,why:'A∩B rỗng nên P(A và B)=0, trong khi P(A)P(B)=1/4. Hai sự kiện loại trừ nhau không độc lập trong trường hợp này.',difficulty:'Intermediate'}
      ],
      summary:['Counting multiplication và independent probability là hai điều kiện khác nhau.','Chỉ chia số outcomes khi chúng đồng khả năng.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 92–94, 96–99',label:'Counting and probability rules'}]
    },
    'hard-algebra': {
      blocks:[
        ['Biểu thức đối xứng giúp bỏ qua từng nghiệm','Khi đề cho tổng s=a+b và tích p=ab, nhiều target được viết trực tiếp bằng s,p. Từ (a+b)²=a²+2ab+b² suy ra a²+b²=s²−2p; từ (a+b)³ có thể suy a³+b³=s³−3ps. Cách này tránh tìm riêng a,b, đặc biệt khi roots chứa căn. Với target có mẫu, kiểm tra tích khác 0 trước; với target không đối xứng như a−b, tổng và tích có thể chưa cho biết dấu cần chọn.'],
        ['Đặt biến phụ phải giữ điều kiện của biến mới','Nếu x² lặp lại, đặt t=x² giúp biểu thức bậc bốn thành quadratic theo t, nhưng với x thực phải giữ t≥0. Một nghiệm âm của quadratic theo t không tạo nghiệm x thực. Với t=x+1/x, điều kiện x≠0 cũng chưa phải toàn bộ: x thực cho t≤−2 hoặc t≥2. Mọi phép đổi biến đều cần một bước quay về biến ban đầu để kiểm tra miền, số nghiệm và liệu target đã được xác định duy nhất hay chưa.']
      ],
      workedExamples:[{question:'Hai số thực a,b thỏa a+b=8 và ab=12. Tính a³+b³.',steps:['Dùng (a+b)³=a³+b³+3ab(a+b).','Chuyển vế: a³+b³=(a+b)³−3ab(a+b).','Thay tổng 8 và tích 12: 8³−3×12×8.','Tính 512−288=224; không cần xác định riêng a và b.'],answer:'224.'}],
      practice:[
        {mode:'numeric',prompt:'a+b=7 và ab=10. Tính 1/a+1/b.',answer:'7/10',why:'ab=10≠0 nên hai mẫu hợp lệ. Quy đồng được (a+b)/(ab)=7/10.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Phương trình x⁴−5x²+4=0 có bao nhiêu nghiệm thực phân biệt?',answer:'4',why:'Đặt t=x²≥0: t²−5t+4=(t−1)(t−4)=0. Cả t=1,4 hợp lệ, tạo x=±1,±2, tổng 4 nghiệm.',difficulty:'Advanced'}
      ],
      summary:['Tạo target từ tổng và tích thay vì giải từng root.','Biến phụ có miền riêng cần được giữ lại.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 49, 53–57',label:'Algebraic multiplication, factoring and quadratic roots'}]
    },
    'geometry-coordinate': {
      blocks:[
        ['Enrichment tùy chọn: slope và các ngoại lệ','Bài này là phần bổ trợ tùy chọn, không là prerequisite của các bài chuyên sâu. Với hai điểm có hoành độ khác nhau, slope đo độ thay đổi y trên một đơn vị x. Giữ cùng thứ tự trừ ở cả tử và mẫu; đổi thứ tự cả hai không đổi kết quả. Đường đứng có mẫu bằng 0 nên slope không xác định; đường ngang có slope 0. Quy tắc hai đường vuông góc có tích slopes bằng −1 chỉ dùng khi cả hai slopes đều xác định.'],
        ['Khoảng cách đến từ một tam giác vuông','Hai điểm trong mặt phẳng tạo hai độ dịch chuyển ngang và dọc. Hai độ dịch chuyển này là hai cạnh góc vuông, nên bình phương khoảng cách bằng tổng bình phương chúng. Dấu của từng độ dịch chuyển biến mất sau bình phương; distance luôn không âm. Nếu tịnh tiến cả hai điểm cùng một vector, các chênh lệch không đổi nên distance giữ nguyên. Sketch chỉ để thấy quan hệ: không suy độ dài từ hình vẽ chưa được bảo đảm đúng tỷ lệ.']
      ],
      workedExamples:[{question:'Phần bổ trợ tùy chọn: tính khoảng cách giữa P(−2,3) và Q(4,11).',steps:['Chênh lệch theo x là 4−(−2)=6.','Chênh lệch theo y là 11−3=8.','Bình phương distance là 6²+8²=36+64=100.','Lấy căn không âm được distance=10; tương ứng tam giác 6–8–10.'],answer:'10 đơn vị độ dài.'}],
      practice:[
        {mode:'numeric',prompt:'Phần bổ trợ tùy chọn: slope của đường qua (−3,8) và (1,−4) là bao nhiêu?',answer:'-3',why:'Slope=[−4−8]/[1−(−3)]=−12/4=−3.',difficulty:'Intermediate'},
        {mode:'multi',prompt:'Phần bổ trợ tùy chọn: chọn tất cả đường vuông góc với y=2x+5.',options:['y=−x/2+1','y=2x−1','x=0','y=−0.5x−7'],answer:[0,3],why:'Slope cần là −1/2 để tích với 2 bằng −1. Lựa chọn thứ nhất và thứ tư cùng slope −1/2; đường đứng chỉ vuông góc với đường ngang.',difficulty:'Intermediate'}
      ],
      summary:['Đây là enrichment tùy chọn, ngoài đường học bắt buộc.','Slope của đường đứng không xác định; distance dùng các độ dịch chuyển.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 62–63',label:'Coordinate plane and slope'},{book:'Manhattan Prep · GMAT Foundations of Math',pages:'PDF 708–709',label:'Pythagorean relation; dùng làm nền toán bổ trợ'}]
    },
    'number-line-integers': {
      blocks:[
        ['Số nguyên, số nguyên dương và số phân biệt','Integer bao gồm số âm, 0 và số dương; positive integer bắt đầu từ 1, còn nonnegative integer cho phép 0. Distinct nghĩa các giá trị khác nhau, không có nghĩa consecutive. Đọc các từ này trước khi thử số vì chúng thay đổi tập khả thi. Nếu có n số nguyên liên tiếp từ a đến b, tính b−a+1 khi lấy cả hai đầu; với dấu strict, loại các endpoints nếu chúng là integer rồi mới đếm.'],
        ['Phân số âm cần được thử như một miền riêng','Một số âm có absolute value dưới 1 thường cho các hành vi dễ gây nhầm: bình phương thành số dương nhỏ hơn 1, còn nghịch đảo là số âm có absolute value lớn hơn 1. Vì vậy nếu −1<x<0 thì x²>0 và 1/x<−1. Nhân hay chia làm giá trị lớn hơn hoặc nhỏ hơn phụ thuộc cả dấu lẫn độ lớn của thừa số. Đặt một số đại diện như −1/2 để kiểm tra hướng, rồi dùng quy tắc dấu để lý giải toàn miền.']
      ],
      workedExamples:[{question:'Có bao nhiêu số nguyên x thỏa −7<2x+1≤5?',steps:['Trừ 1 ở cả ba vế: −8<2x≤4.','Chia 2 dương nên giữ chiều: −4<x≤2.','Các integer là −3,−2,−1,0,1,2.','Có 6 giá trị; −4 bị loại còn 2 được lấy do hai dấu đầu mút khác nhau.'],answer:'6.'}],
      practice:[
        {mode:'numeric',prompt:'Trên trục số, khoảng cách giữa −11 và 4 bằng bao nhiêu?',answer:'15',why:'Khoảng cách là |4−(−11)|=|15|=15, luôn không âm.',difficulty:'Beginner'},
        {mode:'multi',prompt:'Với số thực x thỏa −1<x<0, chọn tất cả phát biểu luôn đúng.',options:['x²<x','x²>0','1/x<−1','x³>0'],answer:[1,2],why:'x âm khác 0 nên x² dương và lớn hơn x. Nghịch đảo của số âm có absolute value dưới 1 nhỏ hơn −1. Lũy thừa bậc ba vẫn âm.',difficulty:'Intermediate'}
      ],
      summary:['Miền integer và điều kiện distinct quyết định số trường hợp.','Giữ riêng dấu và absolute value khi so sánh.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 36–40',label:'Number line, integers, absolute value and powers'},{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 192–195',label:'Explicit and implicit constraints'}]
    },
    'decimal-estimation': {
      blocks:[
        ['Đổi thang đo đồng thời ở tử và mẫu','Khi chia hai decimal, nhân cả tử và mẫu với cùng một power of 10 để mẫu thành integer. Giá trị phân số không đổi vì bạn đang nhân với 1. Đừng chỉ dời dấu phẩy ở mẫu: thao tác ấy đổi giá trị. Sau khi đưa về số nguyên, rút gọn bằng nhân tử trước khi chia. Với phép nhân decimal, kiểm tra bậc độ lớn riêng: hai số dương nhỏ hơn 1 có tích nhỏ hơn từng số, nên đáp số lớn bất thường cần được xem lại.'],
        ['Ước lượng có chiều để tạo bound','Với các số dương, tăng tử hoặc giảm mẫu làm phân số lớn hơn; giảm tử hoặc tăng mẫu làm nó nhỏ hơn. Đây là cách tạo upper/lower bound có bảo đảm, thay vì làm tròn tùy ý rồi coi kết quả là exact. Nếu bound đã tách được một đáp án duy nhất, có thể dừng. Nếu choices quá gần, dùng phân phối hoặc phân số để tính chính xác. Tránh làm tròn nhiều lần vì sai số có thể cộng dồn hoặc đổi hướng khó kiểm soát.']
      ],
      workedExamples:[{question:'Tính 0.036/0.0045 không dùng máy tính.',steps:['Mẫu có bốn chữ số thập phân; nhân cả tử và mẫu với 10000.','Tử thành 360, mẫu thành 45 nên thương bằng 360/45.','Vì 45×8=360 nên thương là 8.','Kiểm tra 0.0045×8=0.036; tử lớn hơn mẫu nên thương phải lớn hơn 1.'],answer:'8.'}],
      practice:[
        {mode:'numeric',prompt:'Tính (0.24×0.15)/0.06.',answer:'0.6',why:'Nhóm 0.24/0.06=4 rồi nhân 0.15, được 0.6. Tránh tính tích dài trước khi rút gọn.',difficulty:'Beginner'},
        {mode:'single',prompt:'Giá trị 4.9×20.1 nằm trong khoảng nào?',options:['90 đến 95','98 đến 99','100 đến 101','105 đến 110'],answer:1,why:'Dùng 20.1=20+0.1: tích bằng 98+0.49=98.49, nên ở giữa 98 và 99.',difficulty:'Intermediate'}
      ],
      summary:['Đổi decimal quotient bằng cùng multiplier ở cả tử và mẫu.','Ước lượng có hướng tạo bound; đáp án sát nhau cần tính exact.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 41–42, 49, 102',label:'Place value, fraction simplification and estimation'}]
    },
    'divisibility-remainders': {
      blocks:[
        ['Kết hợp chia hết cần LCM, không luôn là tích','Nếu n chia hết cho a và b thì n chia hết cho LCM(a,b). Tích ab chỉ là kết luận bắt buộc khi a và b không có prime chung. Ví dụ chia hết cho 6 và 10 buộc có các prime 2,3,5, nên buộc chia hết cho 30 chứ chưa buộc 60. Viết prime factors trước giúp thấy những bản sao đang được dùng chung. Đây cũng là cách tìm chu kỳ lặp của hai lịch hoặc các bội đáp ứng nhiều điều kiện.'],
        ['Remainder chuẩn không âm kể cả khi n âm','Với divisor d>0, luôn yêu cầu 0≤r<d trong n=dq+r. Khi n âm, quotient phù hợp có thể âm hơn kết quả làm tròn về 0. Chẳng hạn −11=5(−3)+4 nên số dư chuẩn là 4, không phải −1. Cộng hoặc trừ bội của d để đưa về khoảng cho phép. Quy tắc này giúp phép cộng và nhân remainder nhất quán, đồng thời tránh phụ thuộc vào cách một ngôn ngữ lập trình định nghĩa toán tử phần dư.']
      ],
      workedExamples:[{question:'Số nguyên nhỏ nhất lớn hơn 200 và chia hết cho cả 18 lẫn 24 là bao nhiêu?',steps:['Phân tích 18=2×3², 24=2³×3.','LCM lấy số mũ lớn nhất, bằng 2³×3²=72.','Các bội quanh 200 là 72×2=144 và 72×3=216.','216 là bội đầu tiên vượt 200; kiểm tra 216/18=12, 216/24=9.'],answer:'216.'}],
      practice:[
        {mode:'numeric',prompt:'Theo dạng n=5q+r với q nguyên và 0≤r<5, số dư của −17 khi chia 5 là bao nhiêu?',answer:'3',why:'−17=5(−4)+3. Số dư 3 nằm trong khoảng 0 đến 4.',difficulty:'Intermediate'},
        {mode:'multi',prompt:'Một số nguyên dương n chia hết cho cả 6 và 10. Chọn tất cả số mà n chắc chắn chia hết.',options:['30','60','15','20'],answer:[0,2],why:'n là bội của LCM(6,10)=30 nên chia hết cho 30 và 15. n=30 là counterexample cho 60 và 20.',difficulty:'Intermediate'}
      ],
      summary:['Ghép điều kiện chia hết bằng LCM.','Remainder chuẩn luôn ở khoảng 0≤r<d với d>0.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 37–40',label:'Quotient/remainder, divisibility and prime exponents; mở rộng n âm bằng cùng đẳng thức'}]
    },
    'exponents-roots': {
      blocks:[
        ['Số mũ âm là nghịch đảo, không là dấu âm','Với a≠0, a⁻ⁿ=1/aⁿ; số mũ âm không tự làm kết quả âm. Nếu cơ số là phân số, lấy nghịch đảo có thể biến nó thành integer rồi nâng lũy thừa. Dấu của cơ số mới quyết định kết quả âm hay dương khi số mũ nguyên: cơ số âm với số mũ chẵn cho dương, số mũ lẻ cho âm. Giữ ngoặc rõ: (−3)²=9 nhưng −3² theo thứ tự phép toán là −9.'],
        ['Căn chính không tự tạo hai giá trị','Ký hiệu √a với a≥0 chỉ căn không âm, trong khi phương trình x²=a có thể có hai nghiệm. Vì thế √(x²)=|x|, không luôn bằng x. Khi cơ số có thể âm, thay x=−2 giúp thấy vì sao absolute value cần thiết. Để so powers mà không khai triển, đưa về cùng cơ số dương; nếu cơ số lớn hơn 1, exponent lớn cho giá trị lớn hơn, còn nếu cơ số nằm giữa 0 và 1 thì thứ tự đảo.']
      ],
      workedExamples:[{question:'Rút gọn (9³×27²)/3¹⁰.',steps:['Đưa 9 và 27 về powers của 3: 9=3², 27=3³.','Tử thành (3²)³×(3³)²=3⁶×3⁶.','Nhân cùng cơ số rồi chia: 3⁶⁺⁶⁻¹⁰=3².','Giá trị là 9; mọi phép chia hợp lệ vì cơ số 3 khác 0.'],answer:'9.'}],
      practice:[
        {mode:'numeric',prompt:'Tính (1/2)⁻³.',answer:'8',why:'Lấy nghịch đảo cơ số được 2³=8; số mũ âm không làm kết quả âm.',difficulty:'Beginner'},
        {mode:'multi',prompt:'Với x là số thực, chọn tất cả phát biểu đúng trong phạm vi đã nêu.',options:['√(x²)=x với mọi x','√(x²)=|x| với mọi x','x²=16 chỉ có nghiệm x=4','(−2)⁴=16'],answer:[1,3],why:'Căn chính không âm nên √(x²)=|x|. x²=16 còn có nghiệm −4. Bốn thừa số −2 tạo tích dương 16.',difficulty:'Intermediate'}
      ],
      summary:['Số mũ âm yêu cầu cơ số khác 0 và tạo nghịch đảo.','√(x²)=|x|; phân biệt căn chính với nghiệm phương trình.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 39–41, 46',label:'Exponents, roots and exponentiation rules'}]
    },
    'word-problem-models': {
      blocks:[
        ['Phí cố định và phí theo đơn vị phải tách riêng','Một khoản fixed fee được trả một lần, còn unit price nhân với số đơn vị. Nếu tổng chi không vượt ngân sách, mô hình là fixed fee + unit price × quantity ≤ budget, không phải equality trừ khi đề nói dùng hết. Nếu quantity là số vé hoặc sản phẩm nguyên, nghiệm đại số dạng decimal phải được xử lý theo yêu cầu maximum hoặc minimum. Kiểm tra số nguyên liền kề thường chứng minh đáp án tối ưu rõ hơn việc chỉ làm tròn theo thói quen.'],
        ['Theo dõi thời điểm trong bài tuổi và tồn kho','Tuổi tăng cùng một lượng theo thời gian nên chênh lệch tuổi giữ nguyên, nhưng tỷ lệ tuổi thường thay đổi. Nếu hiện tại A=3B, sau h năm phải viết A+h và B+h, không giữ ratio 3:1 trừ khi đề nói vậy. Với tồn kho, số nhận thêm hoặc bán đi có thể khác giữa các nhóm, nên lập before/change/after cho từng đối tượng. Một biến nên chỉ một đại lượng tại một mốc xác định; viết nhãn giúp tránh lấy số đầu kỳ so với số cuối kỳ.']
      ],
      workedExamples:[{question:'Một dịch vụ thu phí cố định 14 và phí 3 cho mỗi sản phẩm. Với ngân sách 48, mua được nhiều nhất bao nhiêu sản phẩm nguyên?',steps:['Gọi n là số sản phẩm nguyên không âm.','Chi phí không vượt ngân sách: 14+3n≤48.','Suy ra n≤34/3=11⅓, nên n lớn nhất có thể là 11.','Kiểm tra n=11 tốn 47, còn n=12 tốn 50 vượt ngân sách.'],answer:'11 sản phẩm.'}],
      practice:[
        {mode:'numeric',prompt:'Một đoàn mua 19 vé. Vé người lớn giá 10, vé trẻ em giá 6; tổng tiền 154. Có bao nhiêu vé người lớn?',answer:'10',why:'Gọi a là vé người lớn, trẻ em 19−a. Có 10a+6(19−a)=154, nên 4a=40 và a=10.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Hiện tại tuổi An gấp ba tuổi Bình. Sau 6 năm, tuổi An gấp hai tuổi Bình. Hiện tại An bao nhiêu tuổi?',answer:'18',why:'Đặt tuổi Bình b, An 3b. Sau 6 năm: 3b+6=2(b+6), nên b=6 và An=18. Kiểm tra sau 6 năm là 24 và 12.',difficulty:'Intermediate'}
      ],
      summary:['Gắn unit và thời điểm vào mỗi biến.','Budget tạo inequality; số lượng nguyên cần kiểm tra giá trị liền kề.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 47–50, 57–58',label:'Translating words, equations and inequalities'},{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 194–195',label:'Countable quantities and implicit constraints'}]
    },
    'linear-equations-systems': {
      blocks:[
        ['Hai dòng chưa chắc là hai điều kiện độc lập','Nếu một equation là bội của equation kia, chúng mô tả cùng một quan hệ nên không bổ sung thông tin. Nếu các hệ số tỷ lệ nhưng hằng số không tỷ lệ, hệ mâu thuẫn. Với hai ẩn thực, hai đường thẳng khác nhau có thể cắt tại một điểm, song song hoặc trùng nhau. Sau elimination, 0=0 cho thấy dòng dư thừa, còn 0=5 cho thấy không nghiệm. Đừng đếm số dòng để kết luận số nghiệm mà bỏ qua cấu trúc.'],
        ['Có thể tìm target mà chưa biết từng biến','Một hệ chưa xác định từng x,y vẫn có thể xác định đúng biểu thức đề hỏi. Nếu 3x+3y=27 thì x+y=9 dù x và y riêng lẻ chưa biết. Khi có hai equations, thử cộng hoặc trừ để tạo hệ số giống target trước khi giải toàn bộ. Cách này tiết kiệm phép tính nhưng phải phân biệt biểu thức tuyến tính với biểu thức phi tuyến; biết x+y chưa tự xác định xy, trừ khi có thêm điều kiện.']
      ],
      workedExamples:[{question:'Biết 4x+3y=29 và 2x+3y=19. Tìm x+y.',steps:['Trừ equation thứ hai khỏi thứ nhất để loại 3y.','Được 2x=10 nên x=5.','Thế vào 2x+3y=19: 10+3y=19 nên y=3.','Target x+y=8; kiểm tra equation còn lại: 20+9=29.'],answer:'8.'}],
      practice:[
        {mode:'numeric',prompt:'Biết 3x+2y=31 và x+y=12. Tìm y.',answer:'5',why:'Lấy equation đầu trừ 2 lần equation sau: x=7. Từ x+y=12 suy y=5.',difficulty:'Intermediate'},
        {mode:'single',prompt:'Trong tập số thực, hệ 2x+4y=10 và x+2y=5 có bao nhiêu cặp nghiệm?',options:['Không có','Đúng một','Vô số','Đúng hai'],answer:2,why:'Equation đầu bằng 2 lần equation sau. Mỗi y thực cho x=5−2y, nên vô số cặp thỏa cả hai.',difficulty:'Intermediate'}
      ],
      summary:['Độc lập của equations quan trọng hơn số dòng.','Tạo trực tiếp target khi có thể.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 49–50, 52–53',label:'Equivalent equations, substitution and elimination'}]
    },
    'quadratics-roots': {
      blocks:[
        ['Bình phương tạo ứng viên, chưa bảo đảm nghiệm','Nếu hai vế bằng nhau thì bình phương chúng cũng bằng nhau, nhưng chiều ngược lại có thể sai vì hai số đối nhau có cùng square. Với equation chứa căn, ghi điều kiện căn xác định và vế không có căn không âm trước khi bình phương. Sau khi giải quadratic thu được, thử từng candidate vào equation gốc. Bước thế ngược không chỉ là kiểm tra tính toán; nó loại các nghiệm ngoại lai được tạo bởi phép biến đổi không tương đương.'],
        ['Nghiệm phân biệt và nghiệm kép','Một quadratic có thể có hai roots khác nhau, một root kép hoặc không có root thực. Nếu biểu thức là (x−a)², root a được lặp theo đại số nhưng chỉ là một giá trị phân biệt. Nếu target hỏi tổng hay tích roots theo hệ số, hãy đọc cách đề đếm roots; nếu hỏi số nghiệm thực phân biệt, chỉ đếm giá trị khác nhau. Với phân thức bằng 0, roots của tử trùng điểm làm mẫu 0 phải bị loại dù factorization trông thuận tiện.']
      ],
      workedExamples:[{question:'Giải √(x+6)=x trong tập số thực.',steps:['Căn xác định cần x≥−6; vì căn không âm và bằng x, cần x≥0.','Bình phương hai vế: x+6=x², hay x²−x−6=0.','Factor (x−3)(x+2)=0 tạo candidates x=3 và x=−2.','Chỉ 3 thỏa x≥0 và √9=3; −2 không thỏa equation gốc vì √4=2.'],answer:'x=3.'}],
      practice:[
        {mode:'numeric',prompt:'r,s là hai nghiệm của x²−9x+14=0. Tính r²+s².',answer:'53',why:'r+s=9, rs=14. Do đó r²+s²=(r+s)²−2rs=81−28=53.',difficulty:'Intermediate'},
        {mode:'single',prompt:'Tập nghiệm thực của (x²−9)/(x−3)=0 là gì?',options:['Chỉ −3','Chỉ 3','−3 và 3','Không có nghiệm'],answer:0,why:'Mẫu yêu cầu x≠3. Tử=(x−3)(x+3) bằng 0 tại ±3, nhưng 3 bị loại; chỉ −3 hợp lệ.',difficulty:'Intermediate'}
      ],
      summary:['Sau bình phương, kiểm tra candidates trong equation gốc.','Root của tử chỉ hợp lệ nếu mẫu khác 0.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 40–41, 53–57',label:'Nonnegative roots, factoring and quadratic solutions'}]
    },
    'sets-overlap': {
      blocks:[
        ['Exactly one khác at least one','Với hai sets A,B, union gồm A only, B only và both. Exactly one chỉ gồm hai vùng only, nên bằng |A|+|B|−2|A∩B|. Nếu biết neither, trước tiên tính union bằng population trừ neither; sau đó suy both từ tổng hai set trừ union. Việc điền các vùng rời nhau giúp đọc đúng câu hỏi cuối, vì một phép tính union chính xác vẫn là đáp án sai nếu đề hỏi số người thuộc đúng một nhóm.'],
        ['Ba sets: giao đôi thường bao gồm giao ba','Theo ký hiệu thông thường, A∩B bao gồm cả người cũng thuộc C. Muốn tìm exactly two trong ba nhóm, cộng ba giao đôi rồi trừ ba lần giao ba, vì một người thuộc cả ba đã xuất hiện trong mỗi giao đôi. Nếu đề cho số thuộc A và B nhưng không C, đó đã là vùng rời nhau và không trừ tiếp. Viết rõ inclusive hay exclusive cạnh từng số để tránh dùng cùng công thức cho hai loại dữ kiện khác nhau.']
      ],
      workedExamples:[{question:'Trong 90 người, 54 học A, 42 học B và 12 không học môn nào. Có bao nhiêu người học đúng một môn?',steps:['Union bằng population trừ neither: 90−12=78.','Both=54+42−78=18.','A only=54−18=36; B only=42−18=24.','Exactly one=36+24=60; kiểm tra 60+18+12=90.'],answer:'60 người.'}],
      practice:[
        {mode:'numeric',prompt:'Trong một population 70 người, 43 thuộc A và 38 thuộc B. Số người thuộc cả A lẫn B ít nhất có thể là bao nhiêu?',answer:'11',why:'Union không vượt 70 nên both≥43+38−70=11. Đạt được bằng 32 người A only, 27 B only và 11 both, tổng 70.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Ba nhóm A,B,C có giao đôi |A∩B|=10, |A∩C|=8, |B∩C|=7. Mỗi giao đôi bao gồm người thuộc cả ba; có 4 người thuộc cả ba. Có bao nhiêu người thuộc đúng hai nhóm?',answer:'13',why:'Các vùng đúng hai là 10−4=6, 8−4=4 và 7−4=3; tổng 13. Tương đương 10+8+7−3×4.',difficulty:'Advanced'}
      ],
      summary:['Exactly one loại cả vùng both.','Giao đôi inclusive chứa giao ba; hãy tách thành các vùng rời nhau.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 89–91',label:'Sets, union, intersection and inclusion-exclusion; mở rộng lập luận vùng rời sang ba sets'}]
    },
    'sequences-series': {
      blocks:[
        ['Quy luật phải được đề xác định','Một danh sách hữu hạn có thể khớp nhiều công thức, nên vài terms đầu chưa chứng minh một quy luật duy nhất. Nếu đề nói arithmetic, geometric hoặc cho recurrence, dùng đúng giả thiết ấy; nếu chỉ đang khám phá pattern, ghi đó là một dự đoán. Với recurrence, cần đủ các initial values để sinh terms tiếp theo. Giữ chỉ số a₁ hay a₀ như đề, vì số lần áp dụng recurrence từ term đầu đến term thứ n khác nhau một bước giữa hai cách đánh số.'],
        ['Geometric sum và đổi biến để lộ cấu trúc','Với geometric sequence có term đầu a và ratio r, tổng n terms là a+ar+…+arⁿ⁻¹. Nhân tổng với r rồi trừ hai biểu thức sẽ triệt tiêu các terms giữa, cho S=a(rⁿ−1)/(r−1) khi r≠1. Nếu r=1, tổng là na. Một recurrence dạng aₙ₊₁=raₙ+c đôi khi thành geometric sau khi cộng cùng hằng số vào mỗi term; phải kiểm tra phép đổi biến trong recurrence và quay lại target ban đầu.']
      ],
      workedExamples:[{question:'Dãy được xác định bởi a₁=5 và aₙ₊₁=2aₙ+3 với n≥1. Tìm a₄.',steps:['Đặt bₙ=aₙ+3 để thử loại hằng số trong recurrence.','bₙ₊₁=aₙ₊₁+3=2aₙ+6=2bₙ, nên b là geometric ratio 2.','b₁=8; từ term 1 đến term 4 có 3 lần nhân 2, nên b₄=8×2³=64.','Quay lại a₄=b₄−3=61; kiểm tra trực tiếp a₂=13, a₃=29, a₄=61.'],answer:'61.'}],
      practice:[
        {mode:'numeric',prompt:'Một arithmetic sequence có a₁=7, common difference 4. Tổng 12 terms đầu bằng bao nhiêu?',answer:'348',why:'a₁₂=7+11×4=51. Tổng=12(7+51)/2=6×58=348.',difficulty:'Intermediate'},
        {mode:'numeric',prompt:'Dãy được xác định bởi b₁=2, bₙ₊₁=3bₙ với n≥1. Tổng b₁+b₂+b₃+b₄ bằng bao nhiêu?',answer:'80',why:'Bốn terms là 2,6,18,54, tổng 80. Hoặc dùng geometric sum 2(3⁴−1)/(3−1)=80.',difficulty:'Intermediate'}
      ],
      summary:['Dùng quy luật được cho; vài terms không chứng minh uniqueness.','Đếm số bước từ chỉ số đầu và giữ điều kiện khi đổi biến.'],
      sourceRefs:[{book:'GMAT Official Guide Quantitative Review 2025–2026',pages:'PDF 105–107',label:'Sequences, recurrence and partial sums'},{book:'Manhattan Prep · GMAT Advanced Quant',pages:'PDF 261, 265–266',label:'Pattern recognition and sequence definitions'}]
    }
  },
  placements: [
    {id:'quant-percent-chains',after:'fractions-ratios'},
    {id:'quant-mixture-conservation',after:'word-problem-models'},
    {id:'quant-relative-motion',after:'rates-work'},
    {id:'quant-work-schedules',after:'quant-relative-motion'},
    {id:'quant-weighted-bounds',after:'averages-statistics'},
    {id:'quant-integer-cycles',after:'exponents-roots'},
    {id:'quant-restricted-counting',after:'counting-probability'},
    {id:'quant-conditional-draws',after:'quant-restricted-counting'}
  ],
  prerequisites: {
    'quant-percent-chains':['fractions-ratios'],
    'quant-mixture-conservation':['fractions-ratios','word-problem-models'],
    'quant-relative-motion':['rates-work'],
    'quant-work-schedules':['rates-work'],
    'quant-weighted-bounds':['averages-statistics','fractions-ratios'],
    'quant-integer-cycles':['divisibility-remainders','exponents-roots'],
    'quant-restricted-counting':['counting-probability'],
    'quant-conditional-draws':['counting-probability']
  },
  crossLinks: {
    'quant-percent-chains':['quant-mixture-conservation','quant-work-schedules'],
    'quant-mixture-conservation':['quant-weighted-bounds','linear-equations-systems'],
    'quant-relative-motion':['quant-weighted-bounds','quant-work-schedules'],
    'quant-work-schedules':['linear-equations-systems','quant-percent-chains'],
    'quant-weighted-bounds':['quant-mixture-conservation','equations-inequalities'],
    'quant-integer-cycles':['prime-factors','sequences-series'],
    'quant-restricted-counting':['sets-overlap','quant-conditional-draws'],
    'quant-conditional-draws':['quant-restricted-counting','sets-overlap']
  }
});
