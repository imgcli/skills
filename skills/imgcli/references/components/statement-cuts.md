# Statement Cuts

Three statements joined by hard cuts: the first sets word by word with a rule drawing under its last word, the second wipes on, and the closer rises out of its own baseline.

- Install: `npx @imgcli/cli add statement-cuts`
- Export: `StatementCuts`
- Default preview: 114 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/statement-cuts.md)
- Catalog revision: `afc39418463a99b1`; source: `fca5bdefb98d`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { StatementCuts } from "./components/imgcli/statement-cuts";

export const Example = () => <StatementCuts />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `lineOne?` | `string \| undefined` | `"Ship the feature."` |
| `lineTwo?` | `string \| undefined` | `"Then ship"` |
| `lineThree?` | `string \| undefined` | `"the video."` |
| `secondAt?` | `number \| undefined` | `1.5` |
| `thirdAt?` | `number \| undefined` | `2.6` |
| `fontSize?` | `number \| undefined` | `64` |
| `fontWeight?` | `number \| undefined` | `600` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.

## Text fit

The closer (lineThree) is rendered at 2.3 times fontSize. Use one or two short words, or reduce fontSize and inspect the result. It does not auto-fit long sentences. Check all three statements, not only the final composition frame.
