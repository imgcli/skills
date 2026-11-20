# Unit Chart

A part-to-whole picture that fills itself in: waffle cells take their category's colour in reading order while the total counts up and the legend follows.

- Install: `npx @imgcli/cli add unit-chart`
- Export: `UnitChart`
- Default preview: 126 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/unit-chart.md)
- Catalog revision: `afc39418463a99b1`; source: `8f08ff7ce144`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { UnitChart } from "./components/imgcli/unit-chart";

export const Example = () => <UnitChart />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `title?` | `string \| undefined` | `"Installs by category"` |
| `series?` | `readonly UnitChartSeries[] \| undefined` | `[ { label: "Titles", value: 4820 }, { label: "Devices", value: 2610 }, { label: "Transitions", value: 1390 }, { label: "Charts", value: 780 }, ]` |
| `columns?` | `number \| undefined` | `20` |
| `rows?` | `number \| undefined` | `10` |
| `unit?` | `string \| undefined` | `""` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
