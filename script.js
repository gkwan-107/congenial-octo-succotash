// 아래 LINKS 객체의 값만 실제 링크로 바꾸면 모든 버튼이 자동으로 연결됩니다.
const LINKS = {
  "naver-blog": "",
  "youtube": "",
  "coupang-partners": "",
  "naver-shopping-connect": "",
  "toss-shopping-share": "",
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
