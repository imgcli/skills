# Chat Reply

A short conversation: the message types and sends as a bubble, a typing indicator answers, and the reply streams in word by word.

- Install: `npx @imgcli/cli add chat-reply`
- Export: `ChatReply`
- Default preview: 150 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/chat-reply.md)
- Catalog revision: `afc39418463a99b1`; source: `bb4d124e80fe`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { ChatReply } from "./components/imgcli/chat-reply";

export const Example = () => <ChatReply />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `message?` | `string \| undefined` | `"Make a 20-second demo of the new dashboard"` |
| `reply?` | `string \| undefined` | `"On it. Three scenes: the overview, the new filters, and the export. First cut in about a minute."` |
| `assistantName?` | `string \| undefined` | `"imgcli"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
