# testimonial-reel

Present approved quotes in their original meaning and attribution.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [focus-in](../components/focus-in.md) | 102 | One short quote in text |
| [message-stack](../components/message-stack.md) | 129 | Approved quote excerpts in messages with attribution |
| [lockup-draw](../components/lockup-draw.md) | 114 | Identity and destination |

## Content and timing

There is no dedicated testimonial carousel in the current catalog. Use separate short text scenes or an explicitly labeled message-style presentation; do not impersonate a real app notification or fabricate a customer.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
