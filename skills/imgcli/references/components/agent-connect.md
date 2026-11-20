# Agent Connect

An agent request gathers its sources: the request types, the cursor switches sources on in a menu, they attach as a chip, and a status line runs from reading to a sourced summary.

- Install: `npx @imgcli/cli add agent-connect`
- Export: `AgentConnect`
- Default preview: 156 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/agent-connect.md)
- Catalog revision: `afc39418463a99b1`; source: `fd727284110e`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { AgentConnect } from "./components/imgcli/agent-connect";

export const Example = () => <AgentConnect />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `heading?` | `string \| undefined` | `"What should we find?"` |
| `request?` | `string \| undefined` | `"Summarize customer feedback for Q3"` |
| `sources?` | `readonly AgentConnectSource[] \| undefined` | `[ { label: "Support tickets", on: true }, { label: "User interviews", on: true }, { label: "Survey results", on: true }, { label: "Sales notes", on: false }, ]` |
| `status?` | `readonly [string, string] \| undefined` | `["Reading 3 sources…", "Summary ready: 5 themes"]` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
