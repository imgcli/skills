# Run Log

An agent's run as a log that writes itself: each step lights its dot on the rail, spins and checks off while its detail lines arrive, and the view glides to keep the active step centred.

- Install: `npx @imgcli/cli add run-log`
- Export: `RunLog`
- Default preview: 155 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/run-log.md)
- Catalog revision: `afc39418463a99b1`; source: `948149e0feee`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { RunLog } from "./components/imgcli/run-log";

export const Example = () => <RunLog />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `steps?` | `readonly RunLogStep[] \| undefined` | `[ { title: "Read the request", lines: ["Compare three project tools", "Focus: small product teams"], }, { title: "Found the sources", lines: [ "Pricing pages and product docs", "Checked the latest plan limits", ], }, { title: "Compared the options", lines: ["Seats, storage, and integrations", "Flagged two usage limits"], }, { title: "Checked the details", lines: ["Linked each claim to its source", "Removed outdated pricing"], }, { title: "Prepared the summary", lines: ["A short comparison table", "Ready for your review"], }, ]` |
| `stepSeconds?` | `number \| undefined` | `0.75` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
