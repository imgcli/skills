# Device Trio

One product on three screens: a laptop rises in, a tablet and a phone arrive in front of it, each at its own width, and the group drifts apart with depth.

- Install: `npx @imgcli/cli add device-trio`
- Export: `DeviceTrio`
- Default preview: 132 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/device-trio.md)
- Catalog revision: `afc39418463a99b1`; source: `368fc482375e`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { DeviceTrio } from "./components/imgcli/device-trio";

export const Example = () => <DeviceTrio />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `headline?` | `string \| undefined` | `"Looks right on every screen."` |
| `desktop?` | `string \| undefined` | `desktopScreen` |
| `tablet?` | `string \| undefined` | `tabletScreen` |
| `phone?` | `string \| undefined` | `phoneScreen` |
| `fontFamily?` | `string \| undefined` | — |
| `bezelColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
