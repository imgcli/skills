# changelog

Explain a release through its most useful change.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [version-roll](../components/version-roll.md) | 108 | Actual product, version and release tag |
| [statement-cuts](../components/statement-cuts.md) | 114 | Three short, approved change lines |
| [laptop-lid](../components/laptop-lid.md) | 120 | Real screenshot or recording of the main change |

## Content and timing

For more than three changes, choose the important ones or add deliberate scenes. Do not pass an invented items array to version-roll or statement-cuts.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
