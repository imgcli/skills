# capture-reveal

**Tier:** Animation · **Vibe:** clean · **Natural length:** 130f @ 30fps

A screenshot being taken: a progress toast counts up to 100% over your product's window, the window drops away and shrinks, the toast confirms the copy, and a two-line headline rises from behind the window.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/capture-reveal.json
```

Lands at `components/imgcli/capture-reveal.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `headline` | `string` | `"capture it | in one take"` |
| `capturing` | `string` | `"Capturing frame..."` |
| `copied` | `string` | `"Frame copied."` |
| `src` | `string` | `CAPTURE_WINDOW_SRC` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `fontFamily` | `string` | `"Default"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Set src to replace the sample screenshot, use | for a line break in headline, and set capturing and copied for the toast messages.

## Example

```tsx
<CaptureReveal src={staticFile("my-app.png")} headline="no more | screenshots" />
```

## Use when

- A hook that turns one product screenshot into a headline.
- The product is about capturing, copying or exporting something.

## Don't use when

- The screen itself needs to be explored — use `screen-recording` or `laptop-frame`.
- You need more than two short headline lines (`|` splits them).
