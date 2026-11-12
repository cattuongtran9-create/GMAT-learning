# GMAT//LAB — Học sâu. Hiểu rõ.

Website học GMAT bằng tiếng Việt, dùng câu hỏi tiếng Anh khi phù hợp để luyện kỹ năng đọc đề. Mở **index.html** trong trình duyệt để bắt đầu; toàn bộ chức năng học chạy trên máy, không cần cài thư viện hoặc đăng nhập.

## Cách học

1. Vào **Mạng lưới bài học** để chọn nhánh Quant, Verbal hoặc Data Insights.
2. Mở bài và xem **kiến thức cần học trước**. Đọc phần giảng, tự thử ví dụ rồi đối chiếu từng bước.
3. Làm bài tập trong bài. Có câu chọn một đáp án, nhiều đáp án và nhập số. Số thập phân nhận cả dấu phẩy lẫn dấu chấm; phân số có thể nhập như `1/2`.
4. Ghi bước cần sửa sau khi kiểm tra đáp án. Câu sai xuất hiện trong **Sổ lỗi & ôn tập**.
5. Đánh dấu đã học khi đã đọc và tự giải thích được nội dung. Trạng thái này tách biệt với kết quả luyện tập.
6. Vào **Phòng luyện tập** để tạo bộ câu theo nhánh, độ khó, câu chưa làm hoặc câu cần ôn. Thời gian hiển thị là thời gian đã trôi qua, gồm cả lúc xem giải thích.

## Lưu và chuyển tiến độ

Tiến độ lưu trong `localStorage` của trình duyệt. Trong **Sổ lỗi**, dùng **Xuất tiến độ** để lưu tệp JSON và **Nhập tiến độ** để chuyển sang trình duyệt/máy khác. Nhập hợp nhất kết quả và ưu tiên bản ghi mới hơn; không xóa các bài đã học trước đó. Xóa dữ liệu trình duyệt có thể làm mất tiến độ nếu chưa xuất tệp.

Nếu trình duyệt có dữ liệu `gmatlab-completed` từ bản cũ ở cùng nguồn truy cập, website đọc lại danh sách bài đã học. Một địa chỉ localhost khác cổng hoặc tệp ở thư mục khác có thể dùng vùng lưu trữ khác.

## Chạy qua localhost (tùy chọn)

Mở terminal trong thư mục này và chạy:

```sh
python3 -m http.server 4187 --bind 127.0.0.1
```

Sau đó mở <http://127.0.0.1:4187>. Giữ cùng địa chỉ và cổng để dùng lại tiến độ. Dừng máy chủ bằng Ctrl+C.

## Tài liệu

- [CURRICULUM.md](CURRICULUM.md): danh sách đầy đủ bài học và số phần giảng, ví dụ, bài tập.
- [SOURCE-MAP.md](SOURCE-MAP.md): bản đồ tài liệu của phiên bản trước, được giữ làm nguồn tham khảo.
- Nguồn theo từng chuyên đề nằm ở cuối mỗi bài, ghi trang PDF khi đã đối chiếu.

Các câu hỏi là bài luyện tự biên soạn; nhãn độ khó dùng để sắp chương trình, chưa hiệu chuẩn theo điểm GMAT. Không có thi thích ứng hoặc dự đoán điểm. Bài hình học là bổ trợ, không bắt buộc trong lộ trình chính.

Bản cập nhật tiếp tục nội dung cũ, bổ sung chuyên đề và trình đọc mới. Tài liệu PDF và toàn văn trích xuất gốc vẫn nằm trong thư mục dự án trước; không cần sao chép chúng để chạy website.
