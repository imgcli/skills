# check-cycle

**Tier:** Animation · **Vibe:** clean · **Natural length:** 136f @ 30fps

A sentence with a ticked shadcn-style checkbox in the middle: the lead-in sits left of the box and the word to its right rolls up out of a slot through your list, then the whole line steps back to 80% and rests.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/check-cycle.json
```

Lands at `components/imgcli/check-cycle.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `headline` | `string` | `"Create your own"` |
| `words` | `string` | see source |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `fontFamily` | `string` | `"Default"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Headline is the part of the sentence that never changes; words is what finishes it, comma separated, rolled through in order beside a ticked checkbox, then the line steps back to 80% and rests. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<CheckCycle headline="Create your own" words="Intros, Demos, Launches, Changelogs, Tutorials, And more" />
```

## Use when

- One line that finishes itself several ways — use-cases, formats, audiences.
- A calm, product-UI feel rather than a slot-machine spin.

## Don't use when

- The list should spin and land with energy — use `word-wheel`.
- The items are brands with logos — use `brand-wheel`.
