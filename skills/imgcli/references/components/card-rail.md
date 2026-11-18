# card-rail

**Tier:** Animation · **Vibe:** premium · **Natural length:** 108f @ 30fps

A rail of cards flicked sideways across a tilted 3D plane: it leaves at speed, decelerates for over a second and rests about a card further along, while a heading holds the top of the frame. Cards repeat rather than run out.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/card-rail.json
```

Lands at `components/imgcli/card-rail.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `cards` | `string \| readonly RailCard[]` | `DEFAULT_CARDS` |
| `heading` | `string` | `"Browse scenes"` |
| `from` | `number` | `0` |
| `flicks` | `number` | `3` |
| `every` | `number` | `30` |
| `offset` | `number` | `0` |
| `backdrop` | `string` | `""` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"light"` |
| `fontFamily` | `string` | `"Default"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Images, titles, notes and tags are parallel lists split by `|` (not by comma: a data: URL has one of its own), one entry per card, and the rail repeats them rather than running out. Leave the text fields blank and the picture becomes the whole card, which is how a card designed elsewhere is handed in as one image. heading holds the top of the frame; from is the frame the flick starts on and may be negative to open mid-flight; offset is where the rail sits before it moves. backdrop takes two colour stops or one picture. Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<CardRail
  heading="Browse templates"
  cards={[
    { image: "/shots/inbox.png", title: "Inbox", note: "4 screens", tag: "@acme/inbox" },
    { image: "/shots/billing.png", title: "Billing", note: "3 screens", tag: "@acme/billing" },
  ]}
/>
```

## Use when

- Feature, template or integration cards that should read as a browsable library.
- A card designed elsewhere can be passed as a single image (leave the text fields blank).

## Don't use when

- A single hero image — use `moodboard-reveal`.
- The cards must be read in full; they are moving for most of the shot.
