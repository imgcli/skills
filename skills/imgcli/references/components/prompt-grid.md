# Prompt Grid

From a request to options: the prompt types and sends, tiles appear as shimmering placeholders and resolve one by one into images, and the chosen one takes a ring and a check.

- Install: `npx @imgcli/cli add prompt-grid`
- Export: `PromptGrid`
- Default preview: 138 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/prompt-grid.md)
- Catalog revision: `afc39418463a99b1`; source: `f0e02ce2cc5f`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { PromptGrid } from "./components/imgcli/prompt-grid";

export const Example = () => <PromptGrid />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `prompt?` | `string \| undefined` | `"Three layouts for a design library"` |
| `results?` | `readonly string[] \| undefined` | `[resultHome, resultGallery, resultComponent]` |
| `choose?` | `number \| undefined` | `1` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
