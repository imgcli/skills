# Agent Answer

An assistant shows its work, then its answer: tool steps spin and check off one by one, the result fills a small table row by row, and a one-line summary closes it.

- Install: `npx @imgcli/cli add agent-answer`
- Export: `AgentAnswer`
- Default preview: 156 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/agent-answer.md)
- Catalog revision: `afc39418463a99b1`; source: `d8e476895dd6`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { AgentAnswer } from "./components/imgcli/agent-answer";

export const Example = () => <AgentAnswer />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `agentName?` | `string \| undefined` | `"imgcli"` |
| `steps?` | `readonly AgentAnswerStep[] \| undefined` | `[ { label: "Read the changelog", detail: "v2.0" }, { label: "Searched the catalogue", detail: "12 matches" }, { label: "Planned the scenes", detail: "4 scenes" }, ]` |
| `columns?` | `readonly [string, string, string] \| undefined` | `["Scene", "Length", "Built with"]` |
| `rows?` | `readonly (readonly [string, string, string])[] \| undefined` | `[ ["Opening line", "3s", "centered-build"], ["Product tour", "12s", "laptop-lid"], ["New filters", "8s", "app-open"], ["Closing card", "4s", "version-roll"], ]` |
| `summary?` | `string \| undefined` | `"A 27-second cut, ready to render."` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
