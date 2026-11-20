# Brief Form

A brief, filled in: the cursor types into each field, picks a length and a tone, and submits; the button becomes the confirmation. Controls only change fill and border, so the form never reflows.

- Install: `npx @imgcli/cli add brief-form`
- Export: `BriefForm`
- Default preview: 168 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/brief-form.md)
- Catalog revision: `afc39418463a99b1`; source: `3b1594da4834`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { BriefForm } from "./components/imgcli/brief-form";

export const Example = () => <BriefForm />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `title?` | `string \| undefined` | `"New video brief"` |
| `product?` | `string \| undefined` | `"Acme Notes"` |
| `audience?` | `string \| undefined` | `"Product designers"` |
| `lengths?` | `readonly string[] \| undefined` | `["15 s", "30 s", "60 s"]` |
| `length?` | `number \| undefined` | `1` |
| `tones?` | `readonly string[] \| undefined` | `["Calm", "Bold", "Playful"]` |
| `tone?` | `number \| undefined` | `0` |
| `submitLabel?` | `string \| undefined` | `"Create brief"` |
| `doneLabel?` | `string \| undefined` | `"Brief ready"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
