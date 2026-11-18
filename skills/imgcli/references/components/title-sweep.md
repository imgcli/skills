# title-sweep

**Tier:** Animation · **Vibe:** premium · **Natural length:** 76f @ 30fps

An end title lit by a gradient that travels through the letters, a cut in the dark, and a second title takes over. Paints its own card; the titles, gradient stops and font are props.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/title-sweep.json
```

Lands at `components/imgcli/title-sweep/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `titles` | `string[]` | `["Imgcli", "imgcli.com"]` |
| `fontFamily` | `string` | `"Inter"` |
| `fontSize` | `number` | `110.96` |
| `fontWeight` | `number` | `500` |
| `tracking` | `number` | `-0.0165` |
| `wordSpacing` | `number` | `-0.0769` |
| `nudge` | `number[]` | — |
| `titleScale` | `number[]` | — |
| `stops` | `SweepStop[]` | `DEFAULT_STOPS` |
| `background` | `string` | `"#000000"` |
| `speed` | `number` | `1` |

Full prop list and per-prop notes are in the source you install.

## Notes

76 frames at 30fps.

## Example

```tsx
<TitleSweep titles={["Acme", "acme.dev"]} />
```

## Use when

- An end card: product name, then URL or call to action.
- A dark, cinematic close.

## Don't use when

- A logo mark rather than a name — use a lockup such as `sky-lockup`.
- Light-mode brands; it plays on black.
