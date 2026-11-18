# logo-collapse

**Tier:** Animation · **Vibe:** premium · **Natural length:** 52f @ 30fps

A stack of shots flicked through — each smaller and held for less time than the last — that collapses onto a plain tile with your mark, which overshoots and settles before stepping aside for the wordmark. Hard cuts throughout, no tweens.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/logo-collapse.json
```

Lands at `components/imgcli/logo-collapse.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `images` | `string` | `COLLAPSE_ART` |
| `sizes` | `string` | see source |
| `holds` | `string` | `"1,5,5,4,2,5"` |
| `mark` | `string` | `DEMO_MARK` |
| `wordmark` | `string` | `"Imgcli"` |
| `background` | `string` | `""` |
| `accent` | `string` | `""` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `fontFamily` | `string` | `"Default"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Images is the stack, split by `|` (not by comma: a data: URL has one of its own); sizes and holds are parallel to it, one entry per shot, sizes as a share of the frame height where `0.48` is square and `0.82x0.461` is 16:9; mark is what the stack collapses into and wordmark the word that lands beside it. background takes an optional plate and accent the colour the two brackets ping in. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<LogoCollapse mark="/logo/acme.png" wordmark="Acme" />
```

## Use when

- A short intro sting that ends on the logo.
- You have a handful of shots or screens to deal through first.

## Don't use when

- Long bumpers — use `logo-flicker` or `logo-assemble`.
- No imagery to show before the mark.
