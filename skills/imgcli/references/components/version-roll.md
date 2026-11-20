# Version Roll

A release announced like an odometer: the product name sets, then each digit of the version spins up through its column and stops on its value, left to right.

- Install: `npx @imgcli/cli add version-roll`
- Export: `VersionRoll`
- Default preview: 108 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/version-roll.md)
- Catalog revision: `afc39418463a99b1`; source: `8d75a8beb824`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { VersionRoll } from "./components/imgcli/version-roll";

export const Example = () => <VersionRoll />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `product?` | `string \| undefined` | `"imgcli"` |
| `version?` | `string \| undefined` | `"v2.0"` |
| `tag?` | `string \| undefined` | `"Video templates are here."` |
| `fontSize?` | `number \| undefined` | `168` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
