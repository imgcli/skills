# Stat Grid

Proof in numbers: tiles land one after another and each figure counts up inside a width reserved for its final value, then a closing line sets underneath.

- Install: `npx @imgcli/cli add stat-grid`
- Export: `StatGrid`
- Default preview: 120 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/stat-grid.md)
- Catalog revision: `afc39418463a99b1`; source: `cd300fa0f9c1`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { StatGrid } from "./components/imgcli/stat-grid";

export const Example = () => <StatGrid />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `stats?` | `readonly StatGridStat[] \| undefined` | `[ { value: 128, label: "active projects" }, { value: 24, label: "teams onboarded" }, { value: 98, suffix: "%", label: "on-time delivery" }, ]` |
| `line?` | `string \| undefined` | `"A clearer view of your team's work."` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
