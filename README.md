<div align="center">

![Wetube Routing Lab](docs/readme-banner.svg)

# Wetube Routing Lab

A small Express exercise for learning the routes behind a video-sharing site.

**English** · [한국어](README.ko.md)

![project: learning](https://img.shields.io/badge/project-learning-4ade80?style=flat-square) ![stack: Express](https://img.shields.io/badge/stack-Express-4ade80?style=flat-square)

[Repository](https://github.com/wilgon456/wetube)

</div>

---

## What is implemented

An Express server with request logging, routers and controller functions. Controllers currently return short text responses; video playback, uploads, database storage and authentication are not implemented.

## Run locally

```bash
git clone https://github.com/wilgon456/wetube.git
cd wetube
npm ci
npm run dev
```

Open **http://localhost:4000**. The development command runs the server through Nodemon and Babel.

## Routes

| Area | Registered paths |
| --- | --- |
| Main | `/`, `/join`, `/login`, `/search` |
| Users | `/users/logout`, `/users/edit`, `/users/remove` |
| Videos | `/videos/upload`, `/videos/:id`, `/videos/:id/edit`, `/videos/:id/delete` |

The user-detail route in `src/router/userRouter.js` is currently written as `":id"` without a leading slash, so `/users/:id` is not correctly configured yet.

## Structure

`src/server.js` mounts the routers. `src/router/` maps URLs to handlers, and `src/controllers/` holds the current text-response handlers. This repository is a learning scaffold, not a complete YouTube clone.
