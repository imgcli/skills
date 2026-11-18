# click-type

**Tier:** Animation · **Vibe:** tech · **Natural length:** depends on the prompt — `clickTypeFrames(prompt)` returns it (~103f @ 30fps for the default)

A prompt composer in Prompt Send's glass style whose placeholder writes itself while a cursor flies in and clicks the field, then a hard cut into the field where the real prompt types at the caret and the send button arms. Built on `cursor-track`.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/click-type.json
```

Lands at `components/imgcli/click-type.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `placeholder` | `string` | `"Describe what you want to build..."` |
| `prompt` | `string` | `DEFAULT_PROMPT` |
| `hint` | `string` | `"New suggestion"` |
| `accentColor` | `string` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Placeholder writes itself in the wide shot; prompt is what types after the click, in the close-up. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<ClickType prompt="Build me a booking app" />
```

## Use when

- The "just describe it" beat of an AI product video.
- You want the click and the typing as two shots without hand-cutting them.

## Don't use when

- The prompt should be sent and answered in the same shot — use `prompt-send` then `answer-stream`.
- A plain search field — use `search-typing`.
