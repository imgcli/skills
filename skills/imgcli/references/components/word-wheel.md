# word-wheel

**Tier:** Animation · **Vibe:** playful · **Natural length:** 66f @ 30fps

A fixed lead-in with a slot beside it that spins like a reel — other words visible above and below, smaller and grey — then decelerates and rests on one word at full size. The first entry in `words` is the one it lands on.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/word-wheel.json
```

Lands at `components/imgcli/word-wheel.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `headline` | `string` | `"Imgcli for"` |
| `words` | `string` | see source |
| `spin` | `number` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `fontFamily` | `string` | `"Default"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Headline is the part of the line that never changes; words is the reel, comma separated, and its FIRST entry is the one the scene comes to rest on; spin is how many rows the reel travels, and left at the list's own length it turns exactly once and comes home. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<WordWheel headline="Imgcli for" words="Launches, Founders, Indie hackers, Agencies, Designers" />
```

## Use when

- "<Product> for …" lines that cover several audiences or use-cases.
- You want the energy of a spin that lands.

## Don't use when

- One word only — use `text-reveal`.
- A calmer roll through the list — use `check-cycle`.
