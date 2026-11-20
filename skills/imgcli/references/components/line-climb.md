# Line Climb

A line that shows when things changed: it draws left to right with its area, a dot rides the head with the current value, and an event marker pops as the head passes it.

- Install: `npx @imgcli/cli add line-climb`
- Export: `LineClimb`
- Default preview: 132 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/line-climb.md)
- Catalog revision: `afc39418463a99b1`; source: `ccca21df7ba0`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { LineClimb } from "./components/imgcli/line-climb";

export const Example = () => <LineClimb />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `title?` | `string \| undefined` | `"Daily signups"` |
| `values?` | `readonly number[] \| undefined` | `[ 42, 40, 45, 43, 47, 44, 49, 46, 51, 48, 52, 50, 88, 121, 134, 129, 142, 151, 147, 158, 166, 162, 171, ]` |
| `eventAt?` | `number \| undefined` | `12` |
| `eventLabel?` | `string \| undefined` | `"Launch video posted"` |
| `unit?` | `string \| undefined` | `""` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
