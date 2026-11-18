# cut-lockup

**Tier:** Animation · **Vibe:** premium · **Natural length:** 108f @ 30fps

A logo intro or outro in hard cuts: the logo lands huge on grid paper, steps down in three cuts, pushes in, cuts to night where its construction lines and anchor points draw themselves, then a paper panel wipes up onto the resting lockup. Paints its own background.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/cut-lockup.json
```

Lands at `components/imgcli/cut-lockup/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `logo` | `LogoArt` | `SAMPLE_LOGO` |
| `size` | `number` | `0.2335` |
| `ink` | `string` | `"#1f1f1f"` |
| `paper` | `[string, string, string]` | `["#f6f6f6", "#f8f8f8", "#fcfcfc"]` |
| `grid` | `{ color: string; pitch: number; width: number; }` | see source |
| `roughness` | `number` | `0.35` |
| `steps` | `CutStep[]` | see source |
| `push` | `[number, number][]` | see source |
| `night` | `string` | `"#242424"` |
| `line` | `string` | `"rgba(255,255,255,0.11)"` |
| `dot` | `string` | `"rgba(255,255,255,0.22)"` |
| `nightAt` | `number` | `43` |
| `nightScale` | `number` | `1.154` |
| `drawFrames` | `number` | `7` |
| `drawSpread` | `number` | `22` |
| `wipe` | `[number, number][]` | see source |
| `endPaper` | `string` | `"#f8f8f8"` |
| `endScale` | `number` | `1.1894` |

1 more tuning props (timing and layout constants measured off the reference) are listed in the source you install.

## Notes

108 frames at 30fps; paints its own background. Pass your logo as SVG paths (logo={{ width, height, shapes }}).

## Example

```tsx
<CutLockup logo={{ width: 32, height: 32, shapes: ["M0 0h32v32H0z"] }} />
```

## Use when

- A logo reveal for a brand with a clean vector mark.
- A design-forward, editorial feel.

## Don't use when

- A text-only title — use `text-reveal`.
- The logo is only available as a raster image; `logo` takes SVG paths (outline text first).
