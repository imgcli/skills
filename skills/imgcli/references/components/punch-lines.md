# punch-lines

**Tier:** Animation · **Vibe:** premium · **Natural length:** the sum of `holds` (144f @ 30fps for the default three cards)

A run of full-frame title cards that cut hard between beats. `slide` cards flick their lines in from the left and rush past the camera; `punch` cards swell their words up from a third of their size and push slowly forward until the cut. `|` starts a card, `/` a line.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/punch-lines.json
```

Lands at `components/imgcli/punch-lines.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `script` | `string` | see source |
| `styles` | `string` | `"slide,punch"` |
| `sizes` | `string` | `"1,0.945,2.7"` |
| `holds` | `string` | `"48"` |
| `accentBeat` | `number` | `3` |
| `lead` | `number` | `4` |
| `fontSize` | `number` | `93` |
| `fontWeight` | `string \| number` | `600` |
| `lineHeight` | `number` | `0.89` |
| `letterSpacing` | `string` | `"-0.022em"` |
| `wordSpacing` | `string` | `"-0.02em"` |
| `ground` | `string` | — |
| `ink` | `string` | — |
| `accentColor` | `string` | `"#ff1c8e"` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `fontFamily` | `string` | — |
| `slideFrom` | `number` | `-0.737` |

16 more tuning props (timing and layout constants measured off the reference) are listed in the source you install.

## Notes

Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette and a bare Remotion render is black.

## Example

```tsx
<PunchLines
  script="Ready-made scenes / for Remotion. | One command. Own it. | imgcli."
  styles="slide,punch"
  sizes="1,0.945,2.7"
/>
```

## Use when

- A manifesto or promise told as a sequence of full-frame statements.
- You want a whole text sequence from one script string.

## Don't use when

- One quiet line — use `text-reveal`.
- Long sentences per card; each card holds for about a second and a half.
