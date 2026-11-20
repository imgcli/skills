# logo-bumper

Reveal the supplied identity for an intro or end card.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [lockup-draw](../components/lockup-draw.md) | 114 | name, logo and tagline |
| [color-flood](../components/color-flood.md) | 108 | name, logo and url |

## Content and timing

Use the runnable remotion-logo-animation example. A supplied logo is image-wiped, not path-traced. Allow a final hold and inspect transparency, tall marks and wide wordmarks.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
