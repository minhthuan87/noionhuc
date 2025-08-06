// Tạo trái tim ở vị trí x, y với kích thước ngẫu nhiên
function createHeart(x, y) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";

    const size = Math.random() * 30  + 10; // 10-40px
    heart.style.fontSize = size + "px";

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    // Xóa trái tim sau 5s
    setTimeout(() => heart.remove(), 5000);
}

// Tự động tạo tim bay lên từ dưới màn hình
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;
    createHeart(x, y);
}, 300);

// Tạo tim khi di chuyển chuột
document.addEventListener("mousemove", (e) => {
    createHeart(e.clientX, e.clientY);
});

// Tạo tim khi click chuột
document.addEventListener("click", (e) => {
    createHeart(e.clientX, e.clientY);
});

// Popup video

  document.addEventListener("DOMContentLoaded", () => {
    const videoBtn = document.getElementById("videoBtn");
    const popup = document.getElementById("videoPopup");
    const closeBtn = document.querySelector(".close");
    const videoFrame = document.getElementById("videoFrame");

    // Hiện popup và phát video
    videoBtn.addEventListener("click", () => {
        popup.style.display = "flex";
        videoFrame.play(); 
    });

    // Đóng popup
    function closePopup() {
        popup.style.display = "none";
        videoFrame.pause();
        videoFrame.currentTime = 0; // reset về đầu
    }

    closeBtn.addEventListener("click", closePopup);

    popup.addEventListener("click", (e) => {
        if (e.target === popup) closePopup();
    });
});
