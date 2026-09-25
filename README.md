# 나눔 씽크 링크 허브

네이버 블로그 · 유튜브 · 쇼핑커넥트(제휴 마케팅) 링크를 한곳에 모아 보여주는 정적 홈페이지입니다.

## 링크 연결하기

`script.js` 상단의 `LINKS` 객체에 실제 URL을 채워 넣으면 버튼이 자동으로 활성화됩니다.

```js
const LINKS = {
  "naver-blog": "https://blog.naver.com/nanumtk72",
  "youtube": "https://www.youtube.com/@TV-NanumThink",
  "coupang-partners": "https://partners.coupang.com/#affiliate/ws",
  "naver-shopping-connect": "https://brandconnect.naver.com/991798090653408/affiliate/products",
  "toss-shopping-share": "https://sharelink.toss.im/home",
};
```

값이 비어 있는 동안 해당 버튼은 흐리게 표시되고 "링크 준비중" 배지가 붙습니다.

## 로컬에서 확인하기

파일이 전부 정적이므로 `index.html`을 브라우저로 열거나, 아래처럼 간단한 서버로 띄워도 됩니다.

```bash
python3 -m http.server 8000
```

## 배포

GitHub Pages, Netlify, Vercel 등 정적 호스팅 어디에든 그대로 올리면 됩니다.
GitHub Pages를 쓴다면 저장소 Settings → Pages에서 브랜치를 지정하기만 하면 됩니다.
