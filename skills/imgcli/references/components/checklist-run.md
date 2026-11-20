# Checklist Run

A job working through its checklist: items spin and check off in turn while the bar and a tabular percentage advance, and the header switches to its done label.

- Install: `npx @imgcli/cli add checklist-run`
- Export: `ChecklistRun`
- Default preview: 138 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/checklist-run.md)
- Catalog revision: `afc39418463a99b1`; source: `0a044db6109a`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { ChecklistRun } from "./components/imgcli/checklist-run";

export const Example = () => <ChecklistRun />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `title?` | `string \| undefined` | `"Deploying to production"` |
| `items?` | `readonly string[] \| undefined` | `[ "Checking types", "Running unit tests", "Building the app", "Uploading assets", "Verifying health", ]` |
| `itemSeconds?` | `number \| undefined` | `0.6` |
| `doneLabel?` | `string \| undefined` | `"Deployment complete"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
