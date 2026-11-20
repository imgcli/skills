# Phone Feature

The mobile pitch shot: a headline sets word by word beside a phone that rises in turned toward it, then its screen scrolls down your page.

- Install: `npx @imgcli/cli add phone-feature`
- Export: `PhoneFeature`
- Default preview: 138 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/phone-feature.md)
- Catalog revision: `afc39418463a99b1`; source: `a7a4fd3578ab`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { PhoneFeature } from "./components/imgcli/phone-feature";

export const Example = () => <PhoneFeature />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `headline?` | `string \| undefined` | `"Every scene, in your pocket."` |
| `accentWords?` | `number \| undefined` | `2` |
| `body?` | `string \| undefined` | `"Preview every scene on the phone you'll share it from."` |
| `screen?` | `PhoneFeatureMedia \| undefined` | `{ src: defaultPhoneScreen, aspect: 780 / 4200 }` |
| `scroll?` | `number \| undefined` | `0.55` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `bezelColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
