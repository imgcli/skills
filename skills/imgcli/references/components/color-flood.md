# Color Flood

The closing card: the lockup settles, then the brand colour floods out from inside the mark as a hard-edged disc until it covers the frame, and the URL arrives on the new colour.

- Install: `npx @imgcli/cli add color-flood`
- Export: `ColorFlood`
- Default preview: 108 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/color-flood.md)
- Catalog revision: `afc39418463a99b1`; source: `244e7dad4898`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { ColorFlood } from "./components/imgcli/color-flood";

export const Example = () => <ColorFlood />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `name?` | `string \| undefined` | `"imgcli"` |
| `logo?` | `string \| undefined` | — |
| `url?` | `string \| undefined` | `"imgcli.com"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `onAccent?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.

## Logo contrast

A supplied logo image keeps its original colors. Choose a contrasting accentColor for the field, or use a supplied logo variant intended for that field. A blue mark on the same blue field can disappear even though the file renders successfully.
