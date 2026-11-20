# Laptop Lid

A laptop opens on its hinge and the screen wakes to your product. A slightly elevated view keeps the keyboard, trackpad and solid base visible while a line rises underneath.

- Install: `npx @imgcli/cli add laptop-lid`
- Export: `LaptopLid`
- Default preview: 120 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/laptop-lid.md)
- Catalog revision: `afc39418463a99b1`; source: `a9742091bd10`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { LaptopLid } from "./components/imgcli/laptop-lid";

export const Example = () => <LaptopLid />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `screen?` | `LaptopLidMedia \| undefined` | `{ src: defaultScreen }` |
| `title?` | `string \| undefined` | `"Your product, on every screen."` |
| `fontFamily?` | `string \| undefined` | — |
| `bodyColor?` | `string \| undefined` | — |
| `bezelColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
