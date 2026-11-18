# word-gather

**Tier:** Animation · **Vibe:** clean · **Natural length:** 49f @ 30fps

A sentence that arrives one word at a time, out of order: the first word holds the middle of the frame alone, then the rest drop in around it in the accent colour and slide home, turning to ink as they settle, and the block eases back to its real size.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/word-gather.json
```

Lands at `components/imgcli/word-gather.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `text` | `string` | `"Every scene is yours to own."` |
| `maxWidth` | `number` | `330` |
| `accent` | `string` | — |
| `fontWeight` | `number` | `500` |
| `fontFamily` | `string` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Text is the sentence and its first word is the one that holds the frame alone; maxWidth is where the line breaks, in card pixels; accent is the colour a word wears while it is still travelling. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<WordGather text="Every scene is yours to own." />
```

## Use when

- A short tagline that should feel assembled rather than typed.
- The first word carries the idea and deserves a moment alone.

## Don't use when

- Lines over ~8 words; the scatter gets busy.
- Text that must be read in order from the first frame.
