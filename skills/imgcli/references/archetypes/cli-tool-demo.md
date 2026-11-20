# cli-tool-demo

Show the exact command, its real output and the resulting task.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [code-edit](../components/code-edit.md) | 150 | Relevant source change, not fabricated terminal output |
| [laptop-lid](../components/laptop-lid.md) | 120 | Actual terminal recording supplied as screen.kind video |
| [checklist-run](../components/checklist-run.md) | 138 | Real stages, labeled as an illustration when simulated |
| [lockup-draw](../components/lockup-draw.md) | 114 | Tool identity and a real next step |

## Content and timing

The current catalog has no terminal simulator. Record the real command or build a small project-local terminal view when needed. Keep sensitive paths and credentials out of captures.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
