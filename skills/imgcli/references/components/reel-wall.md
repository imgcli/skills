# reel-wall

**Tier:** Animation · **Vibe:** premium · **Natural length:** 216f @ 24fps by default — it keeps turning for as long as the composition runs

A ring of vertical clips on a curved 3D wall turns past in the dark: it eases in from rest on twos, then keeps turning at an even speed. Clips repeat around the ring.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/reel-wall.json
```

Lands at `components/imgcli/reel-wall.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `videos` | `string[]` | `DEFAULT_VIDEOS` |
| `background` | `string` | `"#0e0e0e"` |
| `cardColor` | `string` | `"#1a1a1a"` |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Pass your own vertical clips as videos; they repeat around the ring.

## Example

```tsx
<ReelWall videos={[staticFile("clips/1.mp4") /* …your vertical clips */]} />
```

## Use when

- A showcase of many vertical videos — creator content, ads, shorts.
- A background-like hero shot that can run as long as you need.

## Don't use when

- Landscape footage that must not be cropped; 9:16 fits best.
- Bright, light-mode brands; the wall sits in the dark.
