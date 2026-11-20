# Strike Swap

A sentence corrects itself: a marker strikes through its ending, the struck words drop away, and the new ending rises into the same place.

- Install: `npx @imgcli/cli add strike-swap`
- Export: `StrikeSwap`
- Default preview: 102 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/strike-swap.md)
- Catalog revision: `afc39418463a99b1`; source: `f2e5f72895c2`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { StrikeSwap } from "./components/imgcli/strike-swap";

export const Example = () => <StrikeSwap />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `lead?` | `string \| undefined` | `"Your launch video, done"` |
| `before?` | `string \| undefined` | `"next week."` |
| `after?` | `string \| undefined` | `"this afternoon."` |
| `fontSize?` | `number \| undefined` | `72` |
| `fontWeight?` | `number \| undefined` | `600` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `strikeColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
