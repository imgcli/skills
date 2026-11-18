# dot-bloom

**Tier:** Animation · **Vibe:** playful · **Natural length:** 30f @ 30fps

A halftone dot transition: white dots spark over the outgoing shot while it washes to cream, then the cream breaks into warm coral, peach and blush dots that thin out cell by cell until the incoming shot is all that is left. It paints only the transition — cut between your shots underneath it at `DOT_BLOOM_CUT`.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/dot-bloom.json
```

Lands at `components/imgcli/dot-bloom.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Lay it over both shots and cut under it at DOT_BLOOM_CUT, where the cream covers the frame.

## Example

```tsx
<AbsoluteFill>
  <Sequence durationInFrames={AT + DOT_BLOOM_CUT}><ShotA /></Sequence>
  <Sequence from={AT + DOT_BLOOM_CUT}><ShotB /></Sequence>
  <Sequence from={AT} durationInFrames={30}><DotBloom /></Sequence>
</AbsoluteFill>
```

## Use when

- A warm, characterful cut between two scenes.
- You need a transition that covers the frame completely at one known frame.

## Don't use when

- A sober or technical edit — a plain cut or `@remotion/transitions` fade reads better.
- Cool or dark brand palettes; the dot colours are fixed warm tones.
