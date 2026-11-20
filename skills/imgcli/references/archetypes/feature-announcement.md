# feature-announcement

Announce one concrete capability rather than listing unrelated features.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [centered-build](../components/centered-build.md) | 99 | One approved headline |
| [app-open](../components/app-open.md) | 126 | Name, logo, question and relevant suggestions |
| [before-after](../components/before-after.md) | 132 | Actual before and after media with accurate labels |
| [lockup-draw](../components/lockup-draw.md) | 114 | Identity and destination |

## Content and timing

before-after compares images; app-open is a simulation of an app opening. Use a recording in laptop-lid when the feature needs real interactive evidence.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
