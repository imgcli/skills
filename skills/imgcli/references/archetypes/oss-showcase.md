# oss-showcase

Show what a repository does and how a developer uses it.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [centered-build](../components/centered-build.md) | 99 | One-sentence purpose |
| [code-edit](../components/code-edit.md) | 150 | Real public code |
| [number-up](../components/number-up.md) | 114 | Sourced metric, or omit this beat |
| [lockup-draw](../components/lockup-draw.md) | 114 | Repository identity and URL |

## Content and timing

A repository URL, license and current usage example are stronger than invented star counts. number-up takes a numeric value, not a formatted from/to string API.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
