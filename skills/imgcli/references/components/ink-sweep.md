# Ink Sweep

A line inks itself as it is read: it fades in faint, and a sweep runs along it letter by letter, flashing each letter to the accent before it settles to full ink.

- Install: `npx @imgcli/cli add ink-sweep`
- Export: `InkSweep`
- Default preview: 102 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/ink-sweep.md)
- Catalog revision: `afc39418463a99b1`; source: `76f543106914`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { InkSweep } from "./components/imgcli/ink-sweep";

export const Example = () => <InkSweep />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `text?` | `string \| undefined` | `"Every frame is code you own."` |
| `sweepSeconds?` | `number \| undefined` | `1.6` |
| `fontSize?` | `number \| undefined` | `64` |
| `fontWeight?` | `number \| undefined` | `600` |
| `maxWidth?` | `number \| undefined` | `0.8` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
