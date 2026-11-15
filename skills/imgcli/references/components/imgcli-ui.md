# imgcli-ui

**Tier:** `imgcli-ui`

The shared core lib for the UI-primitive tier: the timeline-fold hook, the `ImgcliTheme` context, and the OKLCH colour maths. Installed transitively — you rarely add it directly.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/imgcli-ui.json
```

Installs eight shared modules in `lib/imgcli-ui/`.

## Props

| Prop | Type | Default |
|---|---|---|
| `useImgcliTheme(theme, mode)` | `hook` | resolves a `Partial<ImgcliTheme>` + mode to concrete tokens |
| `ImgcliTheme` | `type` | the token surface every component accepts |
| `mixOklch(a, b, t)` | `fn` | interpolate two colours — `var(--token)` does not survive a render |

Full prop list and per-prop notes are in the source you install.

## Example

```tsx
import { useImgcliTheme, mixOklch } from "@/lib/imgcli-ui";
```

## Use when

- You are writing your own component and need the same tokens the registry uses.
- You need to animate a colour — interpolate with `mixOklch`, never a CSS variable.
- You want a component's state derived from the timeline the way the primitives do it.

## Don't use when

- You are only installing components — `shadcn` pulls this in for you.
- You want to hand-roll a palette; the whole point of this lib is that you do not.
- You expect runtime CSS custom properties to work in a render — they do not.
