# orb-swarm

**Tier:** Animation · **Vibe:** playful · **Natural length:** 160f @ 30fps

A sentence told one beat at a time while glass orbs burst out of it, split into eight and sixteen, wind into a vortex, collapse into a knot, pay out as a chain, loop around the closing words and shrink away bead by bead. `script` is six cards split with `|`.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/orb-swarm.json
```

Lands at `components/imgcli/orb-swarm.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `script` | `string` | `DEFAULT_SCRIPT` |
| `background` | `string` | — |
| `ink` | `string` | — |
| `orbColor` | `string` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `fontFamily` | `string` | — |
| `softness` | `number` | `0.7` |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Script is six cards separated by |; the first, second and last arrive whole and the three in the middle reveal word by word. softness is the blur on the type in card pixels (0 is crisp). background and ink are the page and the settled type; orbColor recolours the orbs (and the word tints) by hue, keeping their shading.

## Example

```tsx
<OrbSwarm script="one command | what if | every launch | you shipped | got a video | in seconds" />
```

## Use when

- A kinetic-typography moment with spectacle — a manifesto or hook line.
- You can give it its full 160 frames.

## Don't use when

- Tight budgets — it needs its full length.
- A sober, minimal brand; the orbs are the loudest thing on screen.
