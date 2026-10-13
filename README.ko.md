<div align="center">

![Wetube Routing Lab](docs/readme-banner.svg)

# Wetube Routing Lab

동영상 공유 사이트의 경로 구성을 익히는 작은 Express 학습 프로젝트입니다.

[English](README.md) · **한국어**

![project: learning](https://img.shields.io/badge/project-learning-4ade80?style=flat-square) ![stack: Express](https://img.shields.io/badge/stack-Express-4ade80?style=flat-square)

[Repository](https://github.com/wilgon456/wetube)

</div>

---

## 구현된 내용

요청 로그·라우터·컨트롤러 함수를 갖춘 Express 서버입니다. 현재 컨트롤러는 짧은 텍스트를 반환합니다. 동영상 재생·업로드·데이터베이스 저장·인증은 구현되지 않았습니다.

## 로컬 실행

```bash
git clone https://github.com/wilgon456/wetube.git
cd wetube
npm ci
npm run dev
```

**http://localhost:4000**을 엽니다. 개발 명령은 Nodemon과 Babel로 서버를 실행합니다.

## 경로

| 영역 | 등록된 경로 |
| --- | --- |
| 기본 | `/`, `/join`, `/login`, `/search` |
| 사용자 | `/users/logout`, `/users/edit`, `/users/remove` |
| 동영상 | `/videos/upload`, `/videos/:id`, `/videos/:id/edit`, `/videos/:id/delete` |

`src/router/userRouter.js`의 사용자 상세 경로는 앞의 슬래시 없이 `":id"`로 작성되어 있어 `/users/:id`가 아직 올바르게 설정되지 않았습니다.

## 구성

`src/server.js`에서 라우터를 연결하고, `src/router/`에서 URL과 함수를 연결합니다. `src/controllers/`에는 현재 텍스트 응답 함수가 있습니다. 완성된 유튜브 복제 서비스가 아닌 학습용 기초 구조입니다.
