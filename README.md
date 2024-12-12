# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

## Directory structures

src\
├── assets ... 画像素材等を配置する \
├── components ... 共通コンポーネントを配置する\
│ ├── common\
│ │ ├── buttons ... ボタンコンポーネント\
│ │ ├── modals ... モーダルコンポーネント\
│ │ ├── ui ... wrapperなど\
│ └── layout ...ページレイアウト\
├── context ... contextを配置する\
├── firebase ... firebase設定情報、API呼び出しを格納\
├── pages\
│ ├── commonPages ...404画面など\
│ ├── LoginPage ...ログイン用画面\
│ └── RootPage ...ダッシュボード\
├── stories ...storybook用\
├── types ...型置き場\
└── utils ...共通の関数置き場\