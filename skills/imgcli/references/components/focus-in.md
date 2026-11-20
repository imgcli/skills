# Focus In

Words resolve out of blur on an accelerating rhythm: the first arrive slowly enough to read alone, the rest catch up and the line lands together.

- Install: `npx @imgcli/cli add focus-in`
- Export: `FocusIn`
- Default preview: 102 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/focus-in.md)
- Catalog revision: `afc39418463a99b1`; source: `3fe64b9e423d`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { FocusIn } from "./components/imgcli/focus-in";

export const Example = () => <FocusIn />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `text?` | `string \| undefined` | `"Make the demo that ships the same day as the feature."` |
| `duration?` | `number \| undefined` | `1.8` |
| `fontSize?` | `number \| undefined` | `52` |
| `fontWeight?` | `number \| undefined` | `600` |
| `maxWidth?` | `number \| undefined` | `0.72` |
| `fontFamily?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
