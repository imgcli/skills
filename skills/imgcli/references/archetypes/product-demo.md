# product-demo

Show one real task from input to result.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [code-edit](../components/code-edit.md) | 150 | Actual short source edit, if code is relevant |
| [laptop-lid](../components/laptop-lid.md) | 120 | screen.src and kind for the real recording |
| [phone-flow](../components/phone-flow.md) | 162 | Three real screens, accurate tap coordinates and captions |
| [lockup-draw](../components/lockup-draw.md) | 114 | Actual name, logo and destination |

## Content and timing

Use the runnable remotion-product-demo Skill example. The current device scenes do not supply a programmable recording camera or a generic cursor overlay. For that behavior, compose the real footage directly in Remotion or use an available tool.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
