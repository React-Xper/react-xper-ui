# React Xper UI — Vertical Slices

| Slice | Status |
|-------|--------|
| Component library (`component:build`) | ✅ |
| Marketing landing (`site/`) | ✅ |
| `/docs` static reference | ✅ |
| `/demo` CRA showcase | ✅ |
| CI + npm release workflow | ✅ |
| Vercel deploy | ⏳ after push |
| Storybook (optional) | 🔜 |

## CD

- `npm run build:vercel` — demo at `/demo`, marketing at `/`
- Tag `v*` → npm publish (needs `NPM_TOKEN`)
