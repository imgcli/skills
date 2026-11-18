# spec-sweep

**Tier:** Animation · **Vibe:** tech · **Natural length:** 75f @ 30fps

A one-line spec slides in word by word while a highlight runs along it and an icon charges up. Paints its own card; segments, icon, colours and font are props.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/spec-sweep.json
```

Lands at `components/imgcli/spec-sweep/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `segments` | `SpecSegment[]` | `DEFAULT_SEGMENTS` |
| `icon` | `string` | `BOLT` |
| `iconBox` | `[number, number]` | `ICON_BOX` |
| `iconSize` | `number` | `1.452` |
| `accentColor` | `string` | — |
| `iconDim` | `number` | `0.39` |
| `iconRim` | `number` | `1.47` |
| `iconRimColor` | `string` | — |
| `chargeDelay` | `number` | `11.47` |
| `chargeFrames` | `number` | `30` |
| `fontFamily` | `string` | — |
| `fontSize` | `number` | `85.15` |
| `fontWeight` | `number` | `500` |
| `travel` | `number` | `1.466` |
| `stagger` | `number` | `2` |
| `sweepFrames` | `number` | `54` |
| `mutedLevel` | `number` | `0.6` |
| `theme` | `Partial<ImgcliTheme>` | — |

2 more tuning props (timing and layout constants measured off the reference) are listed in the source you install.

## Notes

75 frames at 30fps.

## Example

```tsx
<SpecSweep />
```

## Use when

- A single performance or capability claim — speed, size, a benchmark.
- A dark, technical card between product shots.

## Don't use when

- Several specs at once — use `count-grid` or a sequence of beats.
- A light, soft brand; it defaults to a dark card with an electric accent.
