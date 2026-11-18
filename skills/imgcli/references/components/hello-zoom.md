# hello-zoom

**Tier:** Animation · **Vibe:** tech · **Natural length:** 75f @ 30fps

Words flicker in place, one line types on, then the camera dives through its own letters into the next card. Paints its own card; every word, colour and font is a prop.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/hello-zoom.json
```

Lands at `components/imgcli/hello-zoom/index.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `words` | `string \| string[]` | see source |
| `lead` | `string` | `"Hello"` |
| `rest` | `string` | `"imgcli."` |
| `nextWord` | `string` | `"npx"` |
| `fontFamily` | `string` | — |
| `fontWeight` | `number` | `700` |
| `inkColor` | `string` | — |
| `paperColor` | `string` | — |
| `through` | `[number, number]` | — |
| `speed` | `number` | `1` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

75 frames at 30fps.

## Example

```tsx
<HelloZoom words="React, Remotion, shadcn" lead="Hello" rest="imgcli." nextWord="npx" />
```

## Use when

- A developer-tool intro that names the stack it works with.
- A transition into the next scene through the type itself.

## Don't use when

- A calm title that should simply hold — use `text-reveal`.
- Non-technical audiences; the flicker and stack names read as dev culture.
