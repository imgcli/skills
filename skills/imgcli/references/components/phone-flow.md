# Phone Flow

An app walkthrough on a phone: each screen holds, a finger taps the named point, and the next screen pushes in from the right while step captions follow along.

- Install: `npx @imgcli/cli add phone-flow`
- Export: `PhoneFlow`
- Default preview: 162 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/phone-flow.md)
- Catalog revision: `afc39418463a99b1`; source: `92293e23bb91`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { PhoneFlow } from "./components/imgcli/phone-flow";

export const Example = () => <PhoneFlow />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `steps?` | `readonly PhoneFlowStep[] \| undefined` | `[ { src: homeScreen, tap: { x: 0.5, y: 0.8 }, caption: "Open the catalogue", }, { src: galleryScreen, tap: { x: 0.5, y: 0.454 }, caption: "Pick a scene" }, { src: componentScreen, tap: { x: 0.272, y: 0.739 }, caption: "Make it your video", }, ]` |
| `stepSeconds?` | `number \| undefined` | `1.5` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `bezelColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
