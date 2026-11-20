# App Open

A brand opens its app: the window unfolds outward from the mark, the mark rides into the corner as the app's logo, the question types itself and suggestions rise under the composer.

- Install: `npx @imgcli/cli add app-open`
- Export: `AppOpen`
- Default preview: 126 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/app-open.md)
- Catalog revision: `afc39418463a99b1`; source: `5ea525b45b39`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { AppOpen } from "./components/imgcli/app-open";

export const Example = () => <AppOpen />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `name?` | `string \| undefined` | `"Imgcli"` |
| `logo?` | `string \| undefined` | — |
| `greeting?` | `string \| undefined` | `"Good morning, Alex."` |
| `question?` | `string \| undefined` | `"What is on your mind?"` |
| `placeholder?` | `string \| undefined` | `"Ask, write, or organize"` |
| `suggestions?` | `readonly string[] \| undefined` | `[ "Meeting notes", "Project brief", "Research summary", "Weekly plan", ]` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
