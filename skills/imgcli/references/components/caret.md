# UI Caret

A blinking text caret — a controlled vertical bar, or a pure motion atom that blinks deterministically from useCurrentFrame.

- Install: `npx @imgcli/cli add caret`
- Export: `Caret`
- Default preview: 120 frames at 30 fps, 1280 × 720. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/docs.md)
- Catalog revision: `afc39418463a99b1`; source: `fd32423403ff`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { Caret } from "./components/imgcli/caret";

export const Example = () => <Caret />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `color?` | `string \| undefined` | `"currentColor"` |
| `width?` | `number \| undefined` | `2` |
| `height?` | `number \| undefined` | `18` |
| `radius?` | `number \| undefined` | `1` |
| `opacity?` | `number \| undefined` | — |
| `blink?` | `boolean \| undefined` | `false` |
| `blinkPerSecond?` | `number \| undefined` | `1` |
| `speed?` | `number \| undefined` | `1` |
| `marginLeft?` | `number \| undefined` | `0` |
| `className?` | `string \| undefined` | — |
| `style?` | `CSSProperties \| undefined` | — |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
