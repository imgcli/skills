# brand-wheel

**Tier:** Animation · **Vibe:** playful · **Natural length:** 139f @ 30fps for six items; each extra item adds 20 (`brandWheelDuration(n)`)

A fixed lead word beside a wheel of brand pills that rolls through the platforms you ship to, with blurred rows above and below, then a cursor clicks the last one. Known brands (X, YouTube, LinkedIn, Instagram, TikTok, Product Hunt, Google, Shopify, Meta, Stripe) get their mark; anything else gets its initial.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/brand-wheel.json
```

Lands at `components/imgcli/brand-wheel/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `lead` | `string` | `"launch on"` |
| `items` | `string` | see source |
| `accent` | `string` | — |
| `cursor` | `boolean` | `true` |
| `speed` | `number` | `1` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `fontFamily` | `string` | `"Default"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Lead is the fixed word; items is the reel, comma separated, top to bottom, and it comes to rest on the LAST one. Known brands (X, YouTube, LinkedIn, Instagram, TikTok, Product Hunt, Google, Shopify, Meta, Stripe) get their mark; anything else gets its initial. Six items run 139 frames; each extra item adds 20 (brandWheelDuration).

## Example

```tsx
<BrandWheel lead="launch on" items="X, YouTube, LinkedIn, Instagram, TikTok, Product Hunt" />
```

## Use when

- The beat is "works everywhere" / "ship to every platform" and the platforms are recognisable brands.
- You want the list to land on one final item that gets clicked.

## Don't use when

- The items are plain words rather than brands — use `word-wheel` or `check-cycle`.
- You need the list shown all at once; the wheel shows one item at a time.
