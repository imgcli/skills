# year-in-review

Summarize a period with sourced metrics and a clear takeaway.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [centered-build](../components/centered-build.md) | 99 | Period and one theme |
| [stat-grid](../components/stat-grid.md) | 120 | Numeric stats with labels and optional prefix/suffix |
| [line-climb](../components/line-climb.md) | 132 | Real ordered values and event annotation |
| [lockup-draw](../components/lockup-draw.md) | 114 | Identity and next step |

## Content and timing

Keep units and the covered period visible. line-climb eventAt indexes the data; verify the actual array and the corresponding event date. Additional rows or longer labels need another render check.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
