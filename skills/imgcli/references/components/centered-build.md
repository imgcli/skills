# Centered Build

A line builds one word at a time and stays centred as it grows: each new word slides in while the words already set glide left to make room.

- Install: `npx @imgcli/cli add centered-build`
- Export: `CenteredBuild`
- Default preview: 99 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/centered-build.md)
- Catalog revision: `afc39418463a99b1`; source: `ed302c68ec37`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { CenteredBuild } from "./components/imgcli/centered-build";

export const Example = () => <CenteredBuild />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `text?` | `string \| undefined` | `"Every launch deserves a film."` |
| `accentWords?` | `number \| undefined` | `1` |
| `stagger?` | `number \| undefined` | `0.32` |
| `fontSize?` | `number \| undefined` | `60` |
| `fontWeight?` | `number \| undefined` | `600` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
