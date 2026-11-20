# pricing-reveal

Explain a real plan and its value without inventing terms.

## Beat options

| Component | Default frames at 30 fps | Content |
| --- | --- | --- |
| [centered-build](../components/centered-build.md) | 99 | What the plan is for |
| [number-up](../components/number-up.md) | 114 | Numeric price with an explicit currency prefix and billing period label |
| [badge-card](../components/badge-card.md) | 114 | Actual tier, term and holder; a visual card, not a checkout |
| [color-flood](../components/color-flood.md) | 108 | Actual purchase or information URL |

## Content and timing

Read the real price, tax basis, billing period and included rights. Component visuals do not provide checkout, entitlement or pricing data. Use a custom table when the user needs a full plan comparison.

Use only the beats the story needs. Replace defaults with supplied content, recalculate frame counts for the requested fps, and check content-dependent completion. For cuts with overlaps, subtract those overlaps from the final duration.

## Acceptance

Install the selected names with `npx @imgcli/cli add <names>`, compile the actual project, inspect each beat and both sides of cuts, then watch the encoded output. Fixtures are useful for integration checks but do not establish real product behavior or customer evidence.
