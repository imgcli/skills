# Lockup Draw

A logo built in front of you: construction guides draw out from the centre, the mark strokes itself in, the name wipes on, and the guides fade leaving the lockup and its tagline.

- Install: `npx @imgcli/cli add lockup-draw`
- Export: `LockupDraw`
- Default preview: 114 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/lockup-draw.md)
- Catalog revision: `afc39418463a99b1`; source: `c71344474726`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { LockupDraw } from "./components/imgcli/lockup-draw";

export const Example = () => <LockupDraw />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `name?` | `string \| undefined` | `"imgcli"` |
| `logo?` | `string \| undefined` | — |
| `tagline?` | `string \| undefined` | `"Visual assets for AI agents"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
