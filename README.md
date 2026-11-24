# CleanCopy

**Copy clean URLs with one click.**

[English](#english) | [日本語](#日本語)

## English

### Overview

CleanCopy is a lightweight Chrome extension that removes unnecessary tracking parameters from URLs and copies clean links to your clipboard.

### Features

- Remove tracking parameters such as `utm_*`, `fbclid`, and `gclid`.
- Copy clean URLs with one click.
- Support keyboard shortcuts.
- Copy page and link URLs from the context menu.
- Preserve original URL encoding and detected signed URLs.
- Display success and error feedback.
- Process URLs locally without collecting user data.

### Example

**Before:**

`https://example.com/?id=123&utm_source=google&fbclid=abc`

**After:**

`https://example.com/?id=123`

### Tech Stack

- Vanilla TypeScript
- Chrome Extension Manifest V3
- Chrome Offscreen API
- Chrome Commands API
- Zero runtime dependencies

### Installation

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build`.
4. Open `chrome://extensions/`.
5. Enable Developer mode.
6. Click **Load unpacked** and select the project directory.

### Usage

Click the CleanCopy icon, use a keyboard shortcut(Ctrl +M), or select an option from the right-click menu.

Keyboard shortcuts can be configured at `chrome://extensions/shortcuts`.

---

## 日本語

**ワンクリックでURLをきれいに。**

### 概要

CleanCopyは、URLから不要なトラッキングパラメータを削除し、クリーンなURLをクリップボードにコピーする軽量なChrome拡張機能です。

### 主な機能

- `utm_*`、`fbclid`、`gclid` などのトラッキングパラメータを削除
- ワンクリックでURLをコピー
- キーボードショートカットに対応
- 右クリックメニューからページやリンクのURLをコピー
- 元のURLエンコーディングと検出された署名付きURLを保持
- コピーの成功・失敗をアイコン上に表示
- ユーザーデータを収集せず、ローカル環境で処理

### 使用技術

- Vanilla TypeScript
- Chrome Extension Manifest V3
- Chrome Offscreen API
- Chrome Commands API
- 外部ランタイムライブラリ不要

### インストール方法

1. 本リポジトリをクローンします。
2. `npm install` を実行します。
3. `npm run build` を実行します。
4. `chrome://extensions/` を開きます。
5. デベロッパーモードを有効にします。
6. 「パッケージ化されていない拡張機能を読み込む」をクリックし、プロジェクトのディレクトリを選択します。

### 使い方

拡張機能のアイコン、キーボードショートカット(Ctrl +M)、または右クリックメニューからクリーンなURLをコピーできます。

ショートカットは `chrome://extensions/shortcuts` から変更できます。