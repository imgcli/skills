# bloom-lockup

**Tier:** Animation · **Vibe:** premium · **Natural length:** 120f @ 30fps

A logo reveal out of your own work: a wall of screens blooms outward from the mark, cuts in tight on it, then bends away through a lens and a flash while the logo rises to take its wordmark and tagline. Paints its own background.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/bloom-lockup.json
```

Lands at `components/imgcli/bloom-lockup/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `wordmark` | `string` | — |
| `tagline` | `string` | — |
| `logo` | `{ width: number; height: number; shapes: readonly string[]; fill?: number; }` | — |
| `images` | `readonly string[]` | — |
| `imagesA` | `readonly string[]` | — |
| `imagesB` | `readonly string[]` | — |
| `wordmarkFont` | `string` | — |
| `wordmarkWeight` | `number` | — |
| `wordmarkSize` | `number` | — |
| `speed` | `number` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

120 frames at 30fps; paints its own background. Pass your logo as SVG paths (logo={{ width, height, shapes }}) and your screens as images.

## Example

```tsx
<BloomLockup
  wordmark="acme"
  tagline="acme.dev"
  images={["/screens/home.png", "/screens/chart.png"]}
  logo={{ width: 32, height: 32, shapes: ["M0 0h32v32H0z"] }}
/>
```

## Use when

- A logo intro or outro should show the product's screens, not just the mark.
- You have a set of finished screens or renders to fill the wall.

## Don't use when

- You have no screens to show — use `cut-lockup`.
- The logo is only available as a raster image; `logo` takes SVG paths.
