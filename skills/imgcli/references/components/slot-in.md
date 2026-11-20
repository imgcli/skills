# Slot In

A sentence with one rolling word: the slot rolls up through its candidates and lands on the last, which takes the accent and an underline, and the slot's width follows each word.

- Install: `npx @imgcli/cli add slot-in`
- Export: `SlotIn`
- Default preview: 117 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/slot-in.md)
- Catalog revision: `afc39418463a99b1`; source: `d87ed5c398aa`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { SlotIn } from "./components/imgcli/slot-in";

export const Example = () => <SlotIn />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `before?` | `string \| undefined` | `"Launch videos for"` |
| `words?` | `readonly string[] \| undefined` | `["founders", "designers", "agencies", "your team"]` |
| `after?` | `string \| undefined` | `""` |
| `hold?` | `number \| undefined` | `0.55` |
| `fontSize?` | `number \| undefined` | `64` |
| `fontWeight?` | `number \| undefined` | `600` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
