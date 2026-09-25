# 나눔 씽크 홈페이지

경제 · 재테크 정보를 전하는 "나눔 씽크"의 랜딩페이지입니다. 소개, 블로그/유튜브 콘텐츠 안내,
추천 쇼핑(제휴 마케팅) 링크 섹션으로 구성되어 있습니다.

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

저장소 기본 브랜치(`claude/brave-faraday-i0m0wu`)에 푸시되면 `.github/workflows/deploy-pages.yml`이
자동으로 GitHub Pages에 배포합니다. 별도 빌드 없이 정적 파일 그대로 서빙됩니다.

배포 주소: https://gkwan-107.github.io/congenial-octo-succotash/
