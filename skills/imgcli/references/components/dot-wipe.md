# Dot Wipe

A transition made of dots: a field of dots grows across the frame in a diagonal wave and the next scene shows through them until it fills the frame.

- Install: `npx @imgcli/cli add dot-wipe`
- Export: `DotWipe`
- Default preview: 84 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/dot-wipe.md)
- Catalog revision: `afc39418463a99b1`; source: `ee0ee0142bde`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { DotWipe } from "./components/imgcli/dot-wipe";

export const Example = () => <DotWipe />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `before?` | `ReactNode` | — |
| `after?` | `ReactNode` | — |
| `beforeTitle?` | `string \| undefined` | `"Your last launch"` |
| `afterTitle?` | `string \| undefined` | `"Your next one"` |
| `columns?` | `number \| undefined` | `24` |
| `wipeSeconds?` | `number \| undefined` | `1.1` |
| `startAt?` | `number \| undefined` | `0.6` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
