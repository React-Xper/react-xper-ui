# Uilerial

**Professional React UI component library** — 30+ components, CSS Modules, TypeScript.

Part of [Techlestial Labs](https://techlestial.vercel.app).

**Live:** [uilerial.vercel.app](https://uilerial.vercel.app) · **Studio:** [uilerial-studio.vercel.app](https://uilerial-studio.vercel.app)

## Install

```bash
# npmjs.com (once published)
npm i @techlestial/uilerial

# GitHub Packages (live now)
npm i @techlestial/uilerial --registry=https://npm.pkg.github.com
```

> **npmjs.com:** CI publish needs a granular token with **Bypass 2FA** on [npmjs.com/settings/~tokens](https://www.npmjs.com/settings/~tokens), or re-run the Release workflow with your 6-digit OTP: `gh workflow run release.yml --repo techlestial/uilerial -f npm_otp=YOUR_CODE`

## Quick start

```tsx
import { Button, Card, ToastContainer } from "@techlestial/uilerial";

export function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <Card title="Hello">
        <Button variant="primary">Ship it</Button>
      </Card>
    </>
  );
}
```

## Components (v2)

Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Card, Carousel, Checkbox, Chip, DataTable, DatePicker, Dialog, Divider, Login, Message, Pagination, Panel, ProgressBar, Rating, Select, Skeleton, Spinner, Switch, Tabs, Tag, Textarea, TextInput, Toast, Toolbar, Translator.

## Build library

```bash
npm run component:build
npm publish --access public   # needs @techlestial npm org + NPM_TOKEN
```

## License

MIT · Kevin Moe Myint Myat
