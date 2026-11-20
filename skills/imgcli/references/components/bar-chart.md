# Bar Chart

A week at a glance with one day as the story: bars grow in turn, the highlighted bar takes the accent and its value counts up, then a delta chip lands.

- Install: `npx @imgcli/cli add bar-chart`
- Export: `BarChart`
- Default preview: 120 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/bar-chart.md)
- Catalog revision: `afc39418463a99b1`; source: `ecb2bc93a97d`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { BarChart } from "./components/imgcli/bar-chart";

export const Example = () => <BarChart />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `title?` | `string \| undefined` | `"Renders this week"` |
| `labels?` | `readonly string[] \| undefined` | `["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]` |
| `values?` | `readonly number[] \| undefined` | `[312, 358, 341, 402, 389, 274, 551]` |
| `highlight?` | `number \| undefined` | — |
| `delta?` | `string \| undefined` | `"+38% vs last week"` |
| `unit?` | `string \| undefined` | `""` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
