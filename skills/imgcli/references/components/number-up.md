# Number Up

One number as the whole story: the figure counts up in tabular digits that never change width, a delta chip lands beside it, and a sparkline draws underneath.

- Install: `npx @imgcli/cli add number-up`
- Export: `NumberUp`
- Default preview: 114 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/number-up.md)
- Catalog revision: `afc39418463a99b1`; source: `4f0205a6b703`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { NumberUp } from "./components/imgcli/number-up";

export const Example = () => <NumberUp />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `label?` | `string \| undefined` | `"Videos rendered this month"` |
| `value?` | `number \| undefined` | `12480` |
| `prefix?` | `string \| undefined` | `""` |
| `suffix?` | `string \| undefined` | `""` |
| `decimals?` | `number \| undefined` | `0` |
| `delta?` | `string \| undefined` | `"+212%"` |
| `trend?` | `readonly number[] \| undefined` | `[12, 14, 13, 18, 22, 21, 27, 33, 31, 40, 48, 61]` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
