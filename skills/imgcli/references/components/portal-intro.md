# portal-intro

**Tier:** Animation · **Vibe:** clean · **Natural length:** 108f @ 30fps

A sentence-to-picture intro: the lead words fade up one at a time, the line re-sets with a small rounded picture chip inside it and leans in until the chip takes the frame, then a title types itself over the picture, lifts away, and the mark and name arrive.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/portal-intro.json
```

Lands at `components/imgcli/portal-intro.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `lead` | `string` | `"your launch video"` |
| `trail` | `string` | `"in code"` |
| `image` | `string` | `DEFAULT_IMAGE` |
| `chipImage` | `string` | — |
| `title` | `string` | `"Introducing"` |
| `brand` | `string` | `"imgcli"` |
| `logo` | `ReactNode` | — |
| `logoSrc` | `string` | — |
| `overlay` | `string` | `"#ffffff"` |
| `fontFamily` | `string` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `speed` | `number` | `1` |
| `className` | `string` | — |

Full prop list and per-prop notes are in the source you install.

## Notes

Pass mode="dark" if you are rendering onto a dark frame; the picture, title and mark are props.

## Example

```tsx
<PortalIntro lead="your launch video" trail="in code" image={staticFile("hero.jpg")} title="Introducing" brand="Acme" />
```

## Use when

- An opening that moves from a line of copy into a hero picture and the brand.
- You have one strong image to carry the middle of the shot.

## Don't use when

- No hero image — use `text-reveal` or `announce-title`.
- A logo-only sting — use a lockup such as `cut-lockup`.
