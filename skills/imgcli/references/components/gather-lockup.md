# gather-lockup

**Tier:** Animation · **Vibe:** premium · **Natural length:** 60f @ 24fps — keep it at 24fps; it cuts between held poses

A logo reveal from a photo wall: a line of type falls apart word by word, the wall cuts in to a row of four, and each slot swaps its picture and hands over to your mark and wordmark. Paints its own background.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/gather-lockup.json
```

Lands at `components/imgcli/gather-lockup/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `lines` | `readonly (readonly string[])[]` | — |
| `images` | `readonly string[]` | — |
| `captions` | `readonly string[]` | — |
| `wordmark` | `string` | — |
| `logo` | `{ width: number; height: number; shapes: readonly string[]; }` | — |
| `font` | `string` | — |
| `wordmarkColor` | `string` | — |
| `wordmarkTracking` | `number` | — |
| `backdrop` | `string` | — |
| `speed` | `number` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

60 frames at 24fps; paints its own background. Pass 15 images, and your logo as SVG paths (logo={{ width, height, shapes }}).

## Example

```tsx
<GatherLockup
  lines={[["Ship"], ["your", "demo"], ["in", "code"]]}
  wordmark="acme"
  images={pictures /* 15 images */}
  logo={{ width: 32, height: 32, shapes: ["M0 0h32v32H0z"] }}
/>
```

## Use when

- A logo reveal for a brand with lots of visual work to show (15 pictures).
- A short, five-word title on three lines.

## Don't use when

- Fewer than 15 images — use `bloom-lockup`.
- A 30fps edit where you cannot drop this into a 24fps sequence.
