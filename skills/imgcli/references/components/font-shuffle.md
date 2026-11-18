# font-shuffle

**Tier:** Animation · **Vibe:** premium · **Natural length:** 115f @ 30fps

A launch line decodes out of scrambled glyphs, flashes the accent, settles to ink, then the product name tries on eleven typefaces (mono, light, humanist, pixel, script, slab, condensed, italic, blackletter, wide, bold grotesk) while the line steps closer on each swap. Every beat is a held state, not a tween.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/font-shuffle.json
```

Lands at `components/imgcli/font-shuffle.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `lead` | `string` | `"Introducing"` |
| `subject` | `string` | `"Imgcli"` |
| `accent` | `string` | `"#9b8ed3"` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Lead stays serif, subject tries on eleven typefaces; accent is the colour the line flashes before it settles. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<FontShuffle lead="Introducing" subject="Imgcli" />
```

## Use when

- An "Introducing <name>" title with personality.
- Design, type or creative-tool products where the typefaces are the point.

## Don't use when

- Long product names — the subject is set very large.
- A calm or corporate tone; the swaps are deliberately loud.
