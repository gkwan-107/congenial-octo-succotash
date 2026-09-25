// 아래 LINKS 객체의 값만 실제 링크로 바꾸면 모든 버튼이 자동으로 연결됩니다.
const LINKS = {
  "naver-blog": "https://blog.naver.com/nanumtk72",
  "youtube": "https://www.youtube.com/@TV-NanumThink",
  "coupang-partners": "https://partners.coupang.com/#affiliate/ws",
  "naver-shopping-connect": "https://brandconnect.naver.com/991798090653408/affiliate/products",
  "toss-shopping-share": "https://sharelink.toss.im/home",
  "zoopzoop-shop": "https://zoopzoop.shop/mysite/",
};

document.querySelectorAll("[data-slot]").forEach((el) => {
  const url = LINKS[el.dataset.slot];
  if (url) {
    el.href = url;
  } else {
    el.classList.add("link-disabled");
    el.addEventListener("click", (e) => e.preventDefault());
  }
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
