# 河南双人旅行地图

一个纯前端的交互式旅行规划地图，覆盖河南 36 处景点与 9 条国庆假期路线。

**在线访问**：见仓库 About 处的链接。

## 功能

- **景点地图**：36 处景点按推荐值（1–5）打点，支持按地区筛选；鼠标悬停标记可预览 1:1 景观图，点击查看游玩时长、门票预约、推荐理由与视频评价出处。
- **行程规划**：9 条路线（5 日 / 6 日 / 7 日），其中 6C / 6D / 6E 三条来自公开旅行社与攻略方案的结构化整理。路线模式下按 `D1`、`D2` 标注每日节点并附景点名，连线上标注驾车 / 高铁耗时（含国庆拥堵加成口径）。
- 每个景点提供高德地图一键导航链接。

## 技术栈

- [vinext](https://www.npmjs.com/package/vinext)（Vite + Next.js App Router 兼容层）
- React 19 + TypeScript
- Tailwind CSS v4
- Leaflet + OpenStreetMap 瓦片

## 目录结构

```
app/          页面与数据
  page.tsx      景点数据（Place）、地图渲染、视图切换
  routes.ts     路线数据（RoutePlan / RouteDay / TransportLeg）
  globals.css   样式
  layout.tsx    metadata
public/places/  景点 1:1 预览图（36 张）
docs/           预构建的静态站点（相对路径版，用于 GitHub Pages / Vercel）
scripts/        景点配图下载与裁切脚本
```

## 本地开发

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # 产物在 dist/
```

## 部署说明

`docs/` 是已构建好的静态站点，所有资源引用均为**相对路径**，因此可以直接托管在：

- **GitHub Pages**：Settings → Pages → Source 选 `main` 分支 `/docs` 目录（`docs/.nojekyll` 已就位，避免 Jekyll 忽略 `_next` 目录）。
- **Vercel / Netlify / 任意静态服务器**：把 `docs/` 作为输出目录，无需构建步骤（见 `vercel.json`）。

重新构建静态产物后，需要把绝对路径改写为相对路径再放进 `docs/`，否则子路径部署会 404。

## 数据来源

景点评价部分参考了 B 站视频 [《河南省 5A 景区从夯到拉》](https://www.bilibili.com/video/BV1JXDkByENP/)（UP：张志明-jimmy），配图来自 Wikimedia Commons 等公开来源，路线结构参考公开旅行社线路与攻略。交通耗时为规划口径，出行前请用高德 / 12306 复核实时路况与车次。
