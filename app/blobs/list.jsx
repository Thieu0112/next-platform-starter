<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Chúc Bạn Học Giỏi</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #121212;
      overflow: hidden;
      font-family: 'Segoe UI', sans-serif;
    }

    .falling-text {
      position: absolute;
      top: -50px;
      color: #00ffcc;
      opacity: 0.9;
      white-space: nowrap;
      animation-name: fall;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes fall {
      0% {
        transform: translateY(-100px);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh);
        opacity: 0;
      }
    }

    /* 6 lớp chữ với kích cỡ và tốc độ khác nhau */
    .size1 { font-size: 16px; animation-duration: 6s; }
    .size2 { font-size: 20px; animation-duration: 8s; }
    .size3 { font-size: 24px; animation-duration: 10s; }
    .size4 { font-size: 28px; animation-duration: 12s; }
    .size5 { font-size: 32px; animation-duration: 14s; }
    .size6 { font-size: 36px; animation-duration: 16s; }
  </style>
</head>
<body>

<script>
  const messages = [
    "Chúc bạn học giỏi và thi đỗ cao!",
    "Mỗi ngày học một chút, vững vàng tương lai!",
    "Cố gắng hôm nay là thành công ngày mai!",
    "Không gì là không thể nếu bạn cố gắng!",
    "Học giỏi để mở rộng chân trời tri thức!"
  ];

  function createFallingText() {
    const text = document.createElement('div');
    text.classList.add('falling-text');

    // Gán nội dung
    text.textContent = messages[Math.floor(Math.random() * messages.length)];

    // Gán kích cỡ ngẫu nhiên
    const sizeClass = 'size' + (Math.floor(Math.random() * 6) + 1);
    text.classList.add(sizeClass);

    // Vị trí ngang ngẫu nhiên
    text.style.left = Math.random() * window.innerWidth + 'px';

    // Thêm vào trang
    document.body.appendChild(text);

    // Xoá sau 20 giây
    setTimeout(() => {
      document.body.removeChild(text);
    }, 20000);
  }

  // Tạo liên tục
  setInterval(createFallingText, 700);
</script>

</body>
</html>
