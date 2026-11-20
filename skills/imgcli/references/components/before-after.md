# Before After

Two versions in one frame: a handle sweeps across the picture uncovering the second version, overshoots, comes back and settles in the middle so both sides stay readable.

- Install: `npx @imgcli/cli add before-after`
- Export: `BeforeAfter`
- Default preview: 132 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/before-after.md)
- Catalog revision: `afc39418463a99b1`; source: `7d3e237fb359`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { BeforeAfter } from "./components/imgcli/before-after";

export const Example = () => <BeforeAfter />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `before?` | `string \| undefined` | `lightPage` |
| `after?` | `string \| undefined` | `darkPage` |
| `beforeLabel?` | `string \| undefined` | `"Light"` |
| `afterLabel?` | `string \| undefined` | `"Dark"` |
| `aspect?` | `number \| undefined` | `1.6` |
| `title?` | `string \| undefined` | `"One theme prop, both modes."` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
