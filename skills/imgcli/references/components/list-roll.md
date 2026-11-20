# List Roll

A picker spins and settles: a phrase on the left and a column of options that runs through the list, slows, and lands on the answer under a highlight, with an optional footer.

- Install: `npx @imgcli/cli add list-roll`
- Export: `ListRoll`
- Default preview: 114 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/list-roll.md)
- Catalog revision: `afc39418463a99b1`; source: `5a848df90ba0`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { ListRoll } from "./components/imgcli/list-roll";

export const Example = () => <ListRoll />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `lead?` | `string \| undefined` | `"Meet on"` |
| `items?` | `readonly string[] \| undefined` | `["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]` |
| `landOn?` | `number \| undefined` | — |
| `footer?` | `string \| undefined` | `"Team sync · 10:00 AM"` |
| `rollSeconds?` | `number \| undefined` | `1.9` |
| `fontSize?` | `number \| undefined` | `56` |
| `fontWeight?` | `number \| undefined` | `600` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
