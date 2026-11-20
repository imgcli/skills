# Message Stack

Team notifications stacking up: each new card drops in at the top and pushes the earlier ones down, which dim as they age.

- Install: `npx @imgcli/cli add message-stack`
- Export: `MessageStack`
- Default preview: 129 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/message-stack.md)
- Catalog revision: `afc39418463a99b1`; source: `27f03c4ad733`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { MessageStack } from "./components/imgcli/message-stack";

export const Example = () => <MessageStack />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `messages?` | `readonly MessageStackItem[] \| undefined` | `[ { app: "Projects", title: "Design review approved", body: "Maya approved the checkout flow", time: "now", }, { app: "Calendar", title: "Team sync in 10 minutes", body: "Product team · 10:00 AM", time: "now", }, { app: "Files", title: "New handoff files", body: "Checkout screens · 4 updated files", time: "now", }, { app: "Messages", title: "Ready for a quick review?", body: "Alex shared the new onboarding flow", time: "now", }, ]` |
| `gap?` | `number \| undefined` | `0.7` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
