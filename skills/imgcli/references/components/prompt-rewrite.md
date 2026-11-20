# Prompt Rewrite

A prompt gets a second thought: it types, the caret selects one phrase, the selection is deleted, and a better phrase types into its place.

- Install: `npx @imgcli/cli add prompt-rewrite`
- Export: `PromptRewrite`
- Default preview: 144 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/prompt-rewrite.md)
- Catalog revision: `afc39418463a99b1`; source: `ada687a665f5`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { PromptRewrite } from "./components/imgcli/prompt-rewrite";

export const Example = () => <PromptRewrite />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `before?` | `string \| undefined` | `"Write a"` |
| `draft?` | `string \| undefined` | `"long email"` |
| `final?` | `string \| undefined` | `"brief update"` |
| `after?` | `string \| undefined` | `"for the team"` |
| `fontSize?` | `number \| undefined` | `30` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
