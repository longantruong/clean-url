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


### Roadmap

CleanCopy aims to evolve from a lightweight URL cleaner into a privacy-first and security-focused URL sharing tool.

- [x] Tracking parameter removal
- [x] One-click URL copying
- [x] Keyboard shortcuts
- [x] Context menu integration
- [x] Signed URL protection
- [ ] Sensitive URL Detection — Detect potentially exposed tokens, API keys, passwords, and credentials.
- [ ] Malicious URL Detection — Identify suspicious protocols, encoded payloads, misleading domains, and potentially dangerous download links.
- [ ] URL Security Warnings — Display security warnings before copying potentially risky URLs.
- [ ] Custom Cleaning Rules — Allow users to define custom tracking parameters and domain-specific rules.
- [ ] Privacy Dashboard — Display locally stored privacy and security statistics without retaining browsing history.
- [ ] Threat Intelligence Integration — Optionally identify known malicious URLs using privacy-preserving threat intelligence.
- [ ] AI-powered URL Risk Detection — Explore lightweight, on-device machine learning for suspicious URL classification.

### Design Principles

- Privacy by Design
- Security by Design
- Local-first processing
- Least privilege
- Zero runtime dependencies
- No user tracking
- No browsing history collection

Security detection is intended to assist users in identifying potential risks, not to guarantee that a URL or website is safe.
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

### 今後の開発予定（ロードマップ）

CleanCopyは、軽量なURLクリーニングツールから、プライバシーとセキュリティを重視したURL共有ツールへの進化を目指しています。

- [x] トラッキングパラメータの削除
- [x] ワンクリックでURLをコピー
- [x] キーボードショートカット
- [x] 右クリックメニューとの連携
- [x] 署名付きURLの保護
- [ ] 機密情報の検出 — URLに含まれるトークン、APIキー、パスワード、認証情報などを検出
- [ ] 悪意のあるURLの検出 — 不審なプロトコル、エンコードされたペイロード、偽装の可能性があるドメイン、危険性のあるダウンロードリンクなどを検出
- [ ] URLセキュリティ警告 — リスクのあるURLをコピーする前に警告を表示
- [ ] カスタムクリーニングルール — 独自のパラメータやドメインごとのルールを設定
- [ ] プライバシーダッシュボード — 閲覧履歴を保存せず、ローカルに保存されたプライバシーおよびセキュリティ統計を表示
- [ ] 脅威インテリジェンス連携 — プライバシーに配慮した方法で既知の悪意のあるURLを検出するオプション機能
- [ ] AIによるURLリスク検出 — デバイス上で動作する軽量な機械学習モデルによる不審なURLの分類を検討

### 設計方針

- Privacy by Design（プライバシー・バイ・デザイン）
- Security by Design（セキュリティ・バイ・デザイン）
- ローカル処理を優先
- 最小権限の原則
- 外部ランタイムライブラリ不要
- ユーザーの追跡なし
- 閲覧履歴の収集なし

セキュリティ検出機能は、潜在的なリスクの発見を支援するものであり、URLやWebサイトの安全性を保証するものではありません。