# Search Results

A command palette finding something: each letter narrows the results live with the match in bold, the top result is highlighted, Enter flashes it and a status confirms it opened.

- Install: `npx @imgcli/cli add search-results`
- Export: `SearchResults`
- Default preview: 132 frames at 30 fps, 960 × 540. This is a default preview budget, not a duration guarantee for arbitrary props.
- [Current documentation](https://imgcli.com/components/search-results.md)
- Catalog revision: `afc39418463a99b1`; source: `129a534431b4`.

## Usage

From a file in `src/` after installing into a project with a `src/` directory:

```tsx
import { SearchResults } from "./components/imgcli/search-results";

export const Example = () => <SearchResults />;
```

The component's own bundled defaults make this minimal example renderable. Replace sample copy, metrics and media before publishing. The CLI uses relative imports; no `@/` alias or `components.json` is required.

## Props

| Prop | Type | Default expression |
| --- | --- | --- |
| `query?` | `string \| undefined` | `"design"` |
| `items?` | `readonly SearchResultsItem[] \| undefined` | `[ { title: "Design system", kind: "Docs" }, { title: "Project roadmap", kind: "Plan" }, { title: "Design review notes", kind: "Note" }, { title: "API reference", kind: "Docs" }, { title: "Design tokens", kind: "Reference" }, { title: "Meeting notes", kind: "Note" }, { title: "Design handoff guide", kind: "Guide" }, ]` |
| `maxResults?` | `number \| undefined` | `5` |
| `openedLabel?` | `string \| undefined` | `"Opening Design system"` |
| `fontFamily?` | `string \| undefined` | — |
| `accentColor?` | `string \| undefined` | — |
| `theme?` | `Partial<ImgcliTheme> \| undefined` | — |
| `mode?` | `"light" \| "dark" \| undefined` | — |
| `speed?` | `number \| undefined` | `1` |

Default expressions that name media or constants refer to the installed source, not extra exports to import. Read that source for nested object fields and any duration helper before changing array lengths or text length.
