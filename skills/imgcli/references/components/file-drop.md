# File Drop

Files arriving: a stack of files is dragged into a drop zone that lights as it hovers, and on release each file lands as a row with its own upload bar.

- Install: `npx @imgcli/cli add file-drop`
- Export: `FileDrop`
- Default preview: 144 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/file-drop.md)
- Catalog revision: `afc39418463a99b1`; source: `64f8bf51bcb7`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { FileDrop } from "./components/imgcli/file-drop";

export const Example = () => <FileDrop />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `files?` | `readonly FileDropFile[] \| undefined` | `[ { name: "product-tour.mp4", size: "18.4 MB", upload: 1.3 }, { name: "dashboard.png", size: "2.1 MB", upload: 0.6 }, { name: "launch-notes.md", size: "6 KB", upload: 0.35 }, ]` |
| `zoneLabel?` | `string \| undefined` | `"Drop screens and notes"` |
| `doneLabel?` | `string \| undefined` | `"3 files ready"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
