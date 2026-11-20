# Motion decisions

Start with the installed component's motion. Change copy, color and media through props first; edit its source when the user's goal needs a change, then re-render the changed beats.

## Timing

Use local Sequence time. A scene mounted at frame 300 sees its own frame zero. Choose an intentional hold after the last readable state; do not stretch a three-second action into ten seconds without content to carry that time. Narration can justify a longer hold while explaining the visual.

Budget from actual content. checklist-run and run-log depend on their step count and stepSeconds/itemSeconds; text and rolling-word scenes depend on copy and word count. Check exported timing helpers where present and inspect the completion frame. Input and Caret use states/styles rather than a scene speed prop.

## Staging

Let the viewer follow the focal point between beats. A device entrance, the screen action and a caption should not all demand attention at once. Small staggers and clear holds usually read better than adding another effect.

## New motion in the project

Drive animation from useCurrentFrame and useVideoConfig. Do not use wall-clock timers, CSS keyframes or non-deterministic randomness. Remotion's random export from remotion can provide repeatable values when actually needed.

Prefer transforms and opacity for movement. When scaling live text, keep a measured baseline pivot and use geometricPrecision; avoid unconditional will-change or layer-promotion hacks in rendered output. A live Player's pacing can differ from an encoded file, so inspect rendered frames when diagnosing jitter or an incomplete settle.

Use moderate easings that arrive on the frame clock. A long asymptotic tail can hold almost identical frames while the scene is supposed to move. Measure a suspected freeze or shape change rather than compensating with a faster global speed.

## Review

Render the first visible state, each main action, both sides of cuts and the final hold. Check occlusion, text wrapping, media crop and audio timing. Watch the encoded result at the requested frame rate and delivery size. See [anti-patterns](anti-patterns.md) for common integration failures.
