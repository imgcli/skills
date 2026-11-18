# button-press

**Tier:** Animation · **Vibe:** clean · **Natural length:** 126f @ 30fps

A cursor walks onto a split action button (label, divider, chevron); it darkens on hover, gives on press, spins while pending and lands on a drawn tick. The button is sized once for the longest label, so it never reflows under the cursor. Built on `cursor-track`.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/button-press.json
```

Lands at `components/imgcli/button-press.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | `"Deploy"` |
| `pending` | `string` | `"Deploying…"` |
| `done` | `string` | `"Deployed"` |
| `width` | `number` | `320` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Label, pending and done are the three states; width is fixed so the button never reflows. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<ButtonPress label="Publish" pending="Publishing…" done="Live" />
```

## Use when

- The deploy, publish or send beat of a launch video.
- One click should visibly resolve into a finished state.

## Don't use when

- The click happens inside a real screen recording — use `cursor-track` over the footage.
- Several steps or a whole flow need showing — use `status-cycle` or `agent-steps`.
