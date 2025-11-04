const block = document.querySelector('.block');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // موقع عشوائي بسيط
  heart.style.left = Math.random() * 40 + 'px';
  heart.style.top = Math.random() * 20 + 'px';

  block.appendChild(heart);

  // حذف بعد الأنيميشن
  setTimeout(() => {
    heart.remove();
  }, 2000);
}

// كل 300ms يطلق قلب
setInterval(createHeart, 300);