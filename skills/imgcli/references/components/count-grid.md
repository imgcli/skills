# count-grid

**Tier:** Animation · **Vibe:** data · **Natural length:** 47f @ 30fps

The "and it scales" shot without a cut: five cards and a label rush in under a horizontal smear and settle, then the camera pulls back while every empty cell fills from the middle out and the number jumps (`from` → `to`).

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/count-grid.json
```

Lands at `components/imgcli/count-grid.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `from` | `string` | `"5"` |
| `to` | `string` | `"500"` |
| `noun` | `string` | `"clips"` |
| `cards` | `string[]` | `OWN_CARDS` |
| `background` | `string` | — |
| `inkFrom` | `string` | — |
| `inkTo` | `string` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `speed` | `number` | `1` |

Full prop list and per-prop notes are in the source you install.

## Notes

Pass cards an array of image URLs and from/to/noun for the label.

## Example

```tsx
<CountGrid from="5" to="500" noun="clips" cards={["/shots/01.jpg", "/shots/02.jpg", "/shots/03.jpg"]} />
```

## Use when

- A growth or volume stat backed by real items (clips, projects, users).
- A short beat cut into a longer edit — it is a second and a half.

## Don't use when

- A number with no proof behind it.
- A standalone stat card that needs to hold; it is built to be cut into.
