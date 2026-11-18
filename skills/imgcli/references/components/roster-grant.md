# roster-grant

**Tier:** Animation · **Vibe:** clean · **Natural length:** 120f @ 30fps

Three rows of roster cards stream past a call to action, a pointer walks in and clicks it, and the monograms start switching to the accent one every seven frames in a non-sequential order, so it reads as a system granting access rather than a list iterating.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/roster-grant.json
```

Lands at `components/imgcli/roster-grant.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `rows` | `readonly (readonly RosterEntry[])[]` | `DEFAULT_ROSTER` |
| `label` | `string` | `"Install all"` |
| `accentColor` | `string` | — |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | — |
| `fontFamily` | `string` | — |
| `speed` | `number` | `1` |

Full prop list and per-prop notes are in the source you install.

## Notes

Pass rows as three arrays of { name, role } and label for the button.

## Example

```tsx
<RosterGrant
  label="Give access"
  rows={[
    [{ name: "Alice Johnson", role: "Backend Engineer" }, { name: "Bob Chen", role: "Frontend Engineer" }],
    // …two more rows
  ]}
/>
```

## Use when

- Team, seats or access-control features — "everyone gets it".
- A CTA click that should visibly affect many people at once.

## Don't use when

- Solo products; it reads as teams.
- Real customer names you have not cleared for use.
