# sky-lockup

**Tier:** Animation · **Vibe:** premium · **Natural length:** 57f @ 30fps

A logo outro in under two seconds: a one-line promise takes itself apart word by word, the page washes off to a soft sky, and the mark in the middle of the sentence slides over, turns white and picks up your wordmark. Paints its own background.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/sky-lockup.json
```

Lands at `components/imgcli/sky-lockup/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `wordmark` | `string` | — |
| `logo` | `{ width: number; height: number; shapes: readonly string[]; }` | — |
| `before` | `string` | — |
| `after` | `string` | — |
| `sky` | `string` | — |
| `fontFamily` | `string` | — |
| `fontWeight` | `number` | — |
| `fontSize` | `number` | — |
| `wordNudge` | `[number, number][]` | — |
| `wordTracking` | `number[]` | — |
| `wordmarkFont` | `string` | — |
| `wordmarkWeight` | `number` | — |
| `wordmarkSize` | `number` | — |
| `wordmarkTracking` | `number` | — |
| `wordmarkGap` | `number` | — |
| `lockupColor` | `string` | — |
| `speed` | `number` | — |
| `theme` | `Partial<ImgcliTheme>` | — |

1 more tuning props (timing and layout constants measured off the reference) are listed in the source you install.

## Notes

57 frames at 30fps; paints its own background. Pass your logo as SVG paths (logo={{ width, height, shapes }}).

## Example

```tsx
<SkyLockup before="your product" after="as one video" wordmark="acme" />
```

## Use when

- A quick closing card that ends on the logo without slowing the video down.
- A short two-part promise around the mark.

## Don't use when

- Long sentences; it wants a short promise.
- A logo that only exists as a raster image; `logo` takes SVG paths.
