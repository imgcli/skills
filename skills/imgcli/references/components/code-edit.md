# Code Edit

Code that turns into a picture: a component's usage types into an editor coloured from the theme's tokens, and when the last line lands the preview pane plays the result.

- Install: `npx @imgcli/cli add code-edit`
- Export: `CodeEdit`
- Default preview: 150 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/code-edit.md)
- Catalog revision: `afc39418463a99b1`; source: `64e0525ec2ac`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { CodeEdit } from "./components/imgcli/code-edit";

export const Example = () => <CodeEdit />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `fileName?` | `string \| undefined` | `"opening.tsx"` |
| `code?` | `string \| undefined` | `DEFAULT_CODE` |
| `previewText?` | `string \| undefined` | `"the video."` |
| `perChar?` | `number \| undefined` | `0.014` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
