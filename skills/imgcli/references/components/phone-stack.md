# phone-stack

**Tier:** Animation · **Vibe:** clean · **Natural length:** 120f @ 30fps

Phone screens rise out of a blur one after another, and each new one pushes the stack back: older screens shrink and step up so only their tops peek out above the newest. Every screen plays its own clip under an iOS status bar.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/phone-stack.json
```

Lands at `components/imgcli/phone-stack.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `videos` | `string[]` | `DEFAULT_VIDEOS` |
| `stagger` | `number` | `14` |
| `background` | `string` | `"#f3f3ee"` |
| `glowColor` | `string` | `"#cdb4e6"` |
| `statusColor` | `string` | `"#ffffff"` |
| `time` | `string` | `"9:41"` |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Pass one clip per screen as videos; the page and glow are props.

## Example

```tsx
<PhoneStack videos={[staticFile("clips/onboarding.mp4"), staticFile("clips/dashboard.mp4"), staticFile("clips/checkout.mp4")]} />
```

## Use when

- A mobile product with several flows to show in one shot.
- Screen recordings at 9:19.5 (any aspect is cropped to cover).

## Don't use when

- One screen that needs close attention — use `phone-frame`.
- Desktop or web UI — use `laptop-frame` or `screen-recording`.
