# Prompt Expand

An Ask AI pill grows into a full composer, a prompt types itself with an inline mention chip, and sends with a ripple off the button.

- Install: `npx @imgcli/cli add prompt-expand`
- Export: `PromptExpand`
- Default preview: 138 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/prompt-expand.md)
- Catalog revision: `afc39418463a99b1`; source: `da66999812d9`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { PromptExpand } from "./components/imgcli/prompt-expand";

export const Example = () => <PromptExpand />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `label?` | `string \| undefined` | `"Ask imgcli"` |
| `prompt?` | `string \| undefined` | `"Turn"` |
| `mention?` | `string \| undefined` | `"launch-notes.md"` |
| `promptEnd?` | `string \| undefined` | `"into a 30-second film with captions"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
