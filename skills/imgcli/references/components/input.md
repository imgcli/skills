# UI Input

A text input whose idle/hover/active/typing/invalid state is a pure function of the timeline; the focus ring, border, caret, and value reveal are keyframed presets.

- Install: `npx @imgcli/cli add input`
- Export: `Input`
- Default preview: 120 frames at 30 fps, 1280 × 720. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/docs.md)
- Catalog revision: `afc39418463a99b1`; source: `b63b44c6b950`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { Input } from "./components/imgcli/input";

export const Example = () => <Input />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `state?` | `InputState \| undefined` | `"idle"` |
| `style?` | `InputStyle \| undefined` | — |
| `placeholder?` | `string \| undefined` | `"you@example.com"` |
| `value?` | `string \| undefined` | `"remotion@example.com"` |
| `size?` | `InputSize \| undefined` | `"default"` |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `primary?` | `string \| undefined` | — |
| `fullWidth?` | `boolean \| undefined` | `false` |
| `className?` | `string \| undefined` | — |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
