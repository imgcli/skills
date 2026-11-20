# Mobile Keyboard

Typing on a phone: the keyboard slides up and the prompt types key by key, each key lighting and popping a preview, then the message sends as a bubble.

- Install: `npx @imgcli/cli add mobile-keyboard`
- Export: `MobileKeyboard`
- Default preview: 138 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/mobile-keyboard.md)
- Catalog revision: `afc39418463a99b1`; source: `a5f1f043473a`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { MobileKeyboard } from "./components/imgcli/mobile-keyboard";

export const Example = () => <MobileKeyboard />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `prompt?` | `string \| undefined` | `"remind me to call Alex tomorrow"` |
| `appName?` | `string \| undefined` | `"Reminders"` |
| `headline?` | `string \| undefined` | `"A thought. A reminder."` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `bezelColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
