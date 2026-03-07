# @muduiclaw/ui — AGENTS.md

## 项目信息
- **路径**: `/Users/mudui/projects/shared-ui`
- **目标**: 共享 UI 组件包，infra-dashboard 和 xhs-dashboard 共用
- **验证**: `npm run build`

## 技术栈
- React + Tailwind CSS 4 + shadcn/ui (New York)
- TypeScript, npm, ESM
- GitHub Packages (`@muduiclaw/ui`)

## 设计规范 (Blue-Book)
- **主色**: `#0F4C81`，圆角 `4px`
- 所有 token 在此定义，下游项目引用不 copy

## 不要做
- 不在下游项目 copy 组件（import 共享包）
- 改 token 前评估对 infra-dashboard 和 xhs-dashboard 的影响

## 教训
