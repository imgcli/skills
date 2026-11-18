# drop-line

**Tier:** Animation · **Vibe:** playful · **Natural length:** 38f @ 30fps

Words cut past one card at a time, then the last word sinks out from under the dot of its own i. Paints its own card; every word, colour and font is a prop.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/drop-line.json
```

Lands at `components/imgcli/drop-line/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `words` | `string[]` | — |
| `fontFamily` | `string` | — |
| `fontWeight` | `number` | — |
| `fontSize` | `number` | — |
| `wordSize` | `number[]` | — |
| `wordNudge` | `number[]` | — |
| `wordTracking` | `number[]` | — |
| `wordKerning` | `number[][]` | — |
| `ink` | `string` | — |
| `paper` | `string` | — |
| `speed` | `number` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

38 frames at 30fps.

## Example

```tsx
<DropLine />
```

## Use when

- A quick, punchy text beat — a tagline or transition card.
- The final word contains an "i" whose dot can carry the drop.

## Don't use when

- A line that needs to be read slowly; it is 38 frames.
- Long words or sentences — it is built for a short run of single words.
