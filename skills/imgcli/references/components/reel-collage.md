# reel-collage

**Tier:** Animation · **Vibe:** playful · **Natural length:** 96f @ 30fps

A picture cuts through a quick reel between two captions and slowly zooms, then shuts like an eyelid while the captions fold into one stacked line; the copy swaps, the lines split, and a scattered collage blooms in on a peach flush.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/reel-collage.json
```

Lands at `components/imgcli/reel-collage.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `topLine` | `string` | `"The videos"` |
| `bottomLine` | `string` | `"That you ship"` |
| `swapTop` | `string` | `"Especially on"` |
| `swapBottom` | `string` | `"Launch day"` |
| `slides` | `string[]` | `DEFAULT_SLIDES` |
| `collage` | `string[]` | `DEFAULT_COLLAGE` |
| `background` | `string` | `"#f5f4f2"` |
| `glowColor` | `string` | `"#dfe7e3"` |
| `flushColor` | `string` | `"#fdc7bc"` |
| `textColor` | `string` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `fontFamily` | `string` | — |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

The page, glow and flush are props; the captions take the theme's foreground.

## Example

```tsx
<ReelCollage
  topLine="The videos" bottomLine="That you ship"
  swapTop="Especially on" swapBottom="Launch day"
  slides={[staticFile("shots/1.jpg") /* …8 shots */]}
  collage={[staticFile("shots/a.jpg") /* …6 pictures */]}
/>
```

## Use when

- A quick photo reel that lands on a two-part caption.
- Lifestyle, creator or event photos.

## Don't use when

- Screenshots of UI; it is built for photos.
- Captions longer than a few words per line.
