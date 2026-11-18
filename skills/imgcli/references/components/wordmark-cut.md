# wordmark-cut

**Tier:** Animation · **Vibe:** premium · **Natural length:** 66f @ 30fps

An end card in two shots: a wordmark twice the width of the frame settles while its gradient light cools to ink, then a hard cut to its last letters and the dot — nearer, with a shallow depth of field — which holds a beat and pushes in.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/wordmark-cut.json
```

Lands at `components/imgcli/wordmark-cut.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `word` | `string` | `"imgcli."` |
| `dotFrom` | `string` | `"#3072db"` |
| `dotTo` | `string` | `"#4fd8f5"` |
| `warm` | `number` | `1` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `fontFamily` | `string` | — |
| `speed` | `number` | `1` |

Full prop list and per-prop notes are in the source you install.

## Notes

Pass word for the wordmark and dotFrom/dotTo for the gradient.

## Example

```tsx
<WordmarkCut word="acme." />
```

## Use when

- The end card for a short, lowercase-friendly brand name.
- A name with a dot (or one you can add) for the close shot to land on.

## Don't use when

- Long names; it reads best at 4–8 characters.
- A logo mark — use a lockup such as `cut-lockup`.
