# Gallery Drift

A body of work behind a headline: two rows of screenshot cards drift slowly in opposite directions while the headline holds on a hairline plate in front.

- Install: `npx @imgcli/cli add gallery-drift`
- Export: `GalleryDrift`
- Default preview: 135 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/gallery-drift.md)
- Catalog revision: `afc39418463a99b1`; source: `5d8c46bb781e`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { GalleryDrift } from "./components/imgcli/gallery-drift";

export const Example = () => <GalleryDrift />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `headline?` | `string \| undefined` | `"Every page, ready to film."` |
| `sub?` | `string \| undefined` | `"Your product's own screens, in motion."` |
| `images?` | `readonly string[] \| undefined` | `[cardHome, cardGallery, cardComponent, cardStudio]` |
| `drift?` | `number \| undefined` | `38` |
| `fontFamily?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
