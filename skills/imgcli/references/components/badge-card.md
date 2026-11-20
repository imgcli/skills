# Badge Card

A membership card for the plan you sell: it rises into place, a band of light sweeps across it once, and a line sets underneath. The card only moves, so its type stays crisp.

- Install: `npx @imgcli/cli add badge-card`
- Export: `BadgeCard`
- Default preview: 114 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/badge-card.md)
- Catalog revision: `afc39418463a99b1`; source: `0c0cb62fee5a`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { BadgeCard } from "./components/imgcli/badge-card";

export const Example = () => <BadgeCard />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `name?` | `string \| undefined` | `"imgcli"` |
| `logo?` | `string \| undefined` | — |
| `tier?` | `string \| undefined` | `"Pro"` |
| `holder?` | `string \| undefined` | `"Your team"` |
| `term?` | `string \| undefined` | `"Every template"` |
| `line?` | `string \| undefined` | `"Every template. Every update."` |
| `cardColor?` | `string \| undefined` | — |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
