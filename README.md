# Thái độ làm việc bắt buộc

- Chủ động - Tích cực
- Ham học hỏi, sẵn sàng học cái mới
- Sẵn sàng chia sẻ, giúp đỡ các bạn và mọi người

# Project Rules

- **Commit và Push** lên remote repository **mỗi ngày** (**Trước 18h00**), kể cả chưa làm xong feature.

- Daily hàng ngày trước 9h30' sáng trả lời các câu hỏi sau:

```
Hôm qua bạn đã làm gì?
Hôm nay bạn sẽ làm gì?
Khó khăn gặp phải và hướng giải quyết?
```

- Demo bài tập vào 13h30 thứ 7 hàng tuần

- Phải chủ động hỏi khi gặp khó khăn không giải quyết được. Thứ tự ưu tiên:
  1. Tự tìm kiếm trên internet trước
  2. Hỏi các bạn
  3. Hỏi trên group training
  4. Hỏi Trainer

# Working Process

- Clone project [react-tutorial](https://github.com/thaibm/react-tutorial). Nếu gặp lỗi `Authentication failed`, Kiểm tra credential trên máy tính cá nhân hoặc chuyển sang dùng SSH key.

- `checkout` sang branch `todo-tutorial`.

```
git checkout todo-tutorial
```

- Tạo nhánh mới từ `todo-tutorial` cho bài tập Todo theo format: `<your-name>/<tutorial-name>` - đây sẽ là **nhánh chính** của bạn. Ví dụ:

```
git checkout -b thaibm/todo
```

- Push nhánh chính của bạn lên remote repository. Ví dụ:

```
git push origin thaibm/todo
```

- Tạo nhánh mới theo feature mà bạn đang làm từ nhánh chính. Ví dụ:

```
git checkout -b thaibm/todo/integrate-api
```

- Làm việc trên nhánh theo feature, `add` thay đổi, `commit` rồi push lên remote repository

```
git add .

git commit -m "Integrate api get/edit/create/delete for todo app"

git push origin thaibm/todo/integrate-api
```

- Tạo Pull request merge vào **nhánh chính** của bạn. Ghi rõ nội dung của thay đổi ở Pull Request Title.

- Trainer và các bạn cùng khóa sẽ review code và comment góp ý. **Comment "Done"** sau khi đã fix xong comment.

- Trường hợp có thay đổi như fix comment, update source code trên feature hiện tại, commit rồi push tiếp lên, không tạo pull request mới.

- **_Chú ý:_** **Commit và Push** lên remote repository **mỗi ngày** (**Trước 18h00**), kể cả chưa làm xong feature.

- Học thêm về git:
  - https://git-scm.com/book/en/v2
  - https://learngitbranching.js.org/?locale=vi

# Bài tập

1. [Todo App](https://ops.nccsoft.vn/DefaultCollection/ncc-front-end-training/_git/ncc-react-training) branch `todo-tutorial`. Thời gian hoàn thành: **Tối đa 7 ngày** làm việc.

# Tham khảo

1. [ncc-react-basic](https://github.com/nccasia/ncc-react-basic)
2. [reactjs](https://reactjs.org/docs/getting-started.html)
