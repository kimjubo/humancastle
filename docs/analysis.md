# 원본 분석 (sdlottecastle.kr) — 구조·UX 관찰만, 콘텐츠 복제 없음

## 기술
- WordPress + Elementor(Pro) + Hello 테마, jQuery/Swiper/SmartMenus 등 스크립트 약 22개, CSS 파일 약 34개 → 요청 수 많고 무거움
- GA(gtag) 사용, Cloudflare 경유, 페이지 HTML 약 117KB

## 정보구조(메뉴)
홈 / 사업개요 / 입지가치 / 특화설계(단지 특화·커뮤니티·커뮤니티 층별안내·배치도) / 평면(84ABC·84DEF·113AB·121) / 상담·방문예약
- 메뉴가 9개 별도 페이지 → 페이지 이동 때마다 전체 로딩, 한 흐름으로 보기 어려움
- 하단 고정 전화 연결(tel) 있음

## SEO
- title/description/OG/canonical/robots/JSON-LD 있음
- description이 키워드 나열형, og:image 750×375(권장 1200×630 미달)
- 본문 h1 없음(h1 0개) → 구조 취약

## 접근성·모바일
- 이미지 9개 모두 alt="" (정보 이미지에 대체 텍스트 없음)
- 본문 정보 상당수가 이미지/표 형태로 추정(검색·확대·스크린리더에 불리)
- lazy 이미지 3개뿐, 폰트·스크립트 최적화 미흡
- 메뉴 항목 중 `#` 링크, 잘못된 형태 링크(http://단지내 …) 존재

## 개선 방향 (데모에 반영)
- 단일 페이지 + 앵커 스크롤, 정적 HTML/CSS/JS 3파일, 외부 의존은 Pretendard CDN만
- h1·시맨틱 구조·alt/aria·skip link·focus 스타일·reduced-motion
- 이미지 대신 SVG/CSS, 평면 탭 UI, 방문예약 폼(Web3Forms 연결 준비), 모바일 하단 고정 CTA
