# Option Pick

A choice being made: the hover ring travels down the options, the cursor clicks one and its radio fills, the call to action turns live and is pressed.

- Install: `npx @imgcli/cli add option-pick`
- Export: `OptionPick`
- Default preview: 132 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/option-pick.md)
- Catalog revision: `afc39418463a99b1`; source: `1b33c2429039`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { OptionPick } from "./components/imgcli/option-pick";

export const Example = () => <OptionPick />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `title?` | `string \| undefined` | `"Choose a template"` |
| `options?` | `readonly OptionPickOption[] \| undefined` | `[ { title: "Product launch", detail: "30 s · overview and three features" }, { title: "Feature demo", detail: "24 s · one feature, start to result" }, { title: "App walkthrough", detail: "30 s · a task, step by step" }, ]` |
| `choose?` | `number \| undefined` | `2` |
| `cta?` | `string \| undefined` | `"Continue"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
