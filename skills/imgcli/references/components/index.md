# Current component index

Generated from public MCP catalog revision `afc39418463a99b1`. 42 installable free components (40 scenes plus Input and Caret). All ship under MIT. Check `npx @imgcli/cli list` and the [live index](https://imgcli.com/llms-components.txt) before installing; refresh a stale reference rather than guessing a renamed API.

Scene previews use 30 fps. For another fps, keep seconds constant and recalculate frame counts. Input and Caret are timeline primitives, not full scenes. The shared [imgcli-ui core](imgcli-ui.md) is installed transitively.

## ai-input

| Component | Default frames | Use for |
| --- | --- | --- |
| [agent-answer](agent-answer.md) | 156 @ 30 fps | An assistant shows its work, then its answer: tool steps spin and check off one by one, the result fills a small table row by row, and a one-line summary closes it. |
| [agent-connect](agent-connect.md) | 156 @ 30 fps | An agent request gathers its sources: the request types, the cursor switches sources on in a menu, they attach as a chip, and a status line runs from reading to a sourced summary. |
| [caret](caret.md) | 120 @ 30 fps | A blinking text caret — a controlled vertical bar, or a pure motion atom that blinks deterministically from useCurrentFrame. |
| [chat-reply](chat-reply.md) | 150 @ 30 fps | A short conversation: the message types and sends as a bubble, a typing indicator answers, and the reply streams in word by word. |
| [checklist-run](checklist-run.md) | 138 @ 30 fps | A job working through its checklist: items spin and check off in turn while the bar and a tabular percentage advance, and the header switches to its done label. |
| [code-edit](code-edit.md) | 150 @ 30 fps | Code that turns into a picture: a component's usage types into an editor coloured from the theme's tokens, and when the last line lands the preview pane plays the result. |
| [file-drop](file-drop.md) | 144 @ 30 fps | Files arriving: a stack of files is dragged into a drop zone that lights as it hovers, and on release each file lands as a row with its own upload bar. |
| [input](input.md) | 120 @ 30 fps | A text input whose idle/hover/active/typing/invalid state is a pure function of the timeline; the focus ring, border, caret, and value reveal are keyframed presets. |
| [mobile-keyboard](mobile-keyboard.md) | 138 @ 30 fps | Typing on a phone: the keyboard slides up and the prompt types key by key, each key lighting and popping a preview, then the message sends as a bubble. |
| [prompt-expand](prompt-expand.md) | 138 @ 30 fps | An Ask AI pill grows into a full composer, a prompt types itself with an inline mention chip, and sends with a ripple off the button. |
| [prompt-grid](prompt-grid.md) | 138 @ 30 fps | From a request to options: the prompt types and sends, tiles appear as shimmering placeholders and resolve one by one into images, and the chosen one takes a ring and a check. |
| [prompt-rewrite](prompt-rewrite.md) | 144 @ 30 fps | A prompt gets a second thought: it types, the caret selects one phrase, the selection is deleted, and a better phrase types into its place. |
| [run-log](run-log.md) | 155 @ 30 fps | An agent's run as a log that writes itself: each step lights its dot on the rail, spins and checks off while its detail lines arrive, and the view glides to keep the active step centred. |
| [search-results](search-results.md) | 132 @ 30 fps | A command palette finding something: each letter narrows the results live with the match in bold, the top result is highlighted, Enter flashes it and a status confirms it opened. |

## screens

| Component | Default frames | Use for |
| --- | --- | --- |
| [app-open](app-open.md) | 126 @ 30 fps | A brand opens its app: the window unfolds outward from the mark, the mark rides into the corner as the app's logo, the question types itself and suggestions rise under the composer. |
| [brief-form](brief-form.md) | 168 @ 30 fps | A brief, filled in: the cursor types into each field, picks a length and a tone, and submits; the button becomes the confirmation. Controls only change fill and border, so the form never reflows. |
| [device-trio](device-trio.md) | 132 @ 30 fps | One product on three screens: a laptop rises in, a tablet and a phone arrive in front of it, each at its own width, and the group drifts apart with depth. |
| [laptop-lid](laptop-lid.md) | 120 @ 30 fps | A laptop opens on its hinge and the screen wakes to your product. A slightly elevated view keeps the keyboard, trackpad and solid base visible while a line rises underneath. |
| [option-pick](option-pick.md) | 132 @ 30 fps | A choice being made: the hover ring travels down the options, the cursor clicks one and its radio fills, the call to action turns live and is pressed. |
| [phone-feature](phone-feature.md) | 138 @ 30 fps | The mobile pitch shot: a headline sets word by word beside a phone that rises in turned toward it, then its screen scrolls down your page. |
| [phone-flow](phone-flow.md) | 162 @ 30 fps | An app walkthrough on a phone: each screen holds, a finger taps the named point, and the next screen pushes in from the right while step captions follow along. |

## scenes

| Component | Default frames | Use for |
| --- | --- | --- |
| [badge-card](badge-card.md) | 114 @ 30 fps | A membership card for the plan you sell: it rises into place, a band of light sweeps across it once, and a line sets underneath. The card only moves, so its type stays crisp. |
| [before-after](before-after.md) | 132 @ 30 fps | Two versions in one frame: a handle sweeps across the picture uncovering the second version, overshoots, comes back and settles in the middle so both sides stay readable. |
| [color-flood](color-flood.md) | 108 @ 30 fps | The closing card: the lockup settles, then the brand colour floods out from inside the mark as a hard-edged disc until it covers the frame, and the URL arrives on the new colour. |
| [gallery-drift](gallery-drift.md) | 135 @ 30 fps | A body of work behind a headline: two rows of screenshot cards drift slowly in opposite directions while the headline holds on a hairline plate in front. |
| [stat-grid](stat-grid.md) | 120 @ 30 fps | Proof in numbers: tiles land one after another and each figure counts up inside a width reserved for its final value, then a closing line sets underneath. |
| [version-roll](version-roll.md) | 108 @ 30 fps | A release announced like an odometer: the product name sets, then each digit of the version spins up through its column and stops on its value, left to right. |

## charts

| Component | Default frames | Use for |
| --- | --- | --- |
| [bar-chart](bar-chart.md) | 120 @ 30 fps | A week at a glance with one day as the story: bars grow in turn, the highlighted bar takes the accent and its value counts up, then a delta chip lands. |
| [line-climb](line-climb.md) | 132 @ 30 fps | A line that shows when things changed: it draws left to right with its area, a dot rides the head with the current value, and an event marker pops as the head passes it. |
| [number-up](number-up.md) | 114 @ 30 fps | One number as the whole story: the figure counts up in tabular digits that never change width, a delta chip lands beside it, and a sparkline draws underneath. |
| [unit-chart](unit-chart.md) | 126 @ 30 fps | A part-to-whole picture that fills itself in: waffle cells take their category's colour in reading order while the total counts up and the legend follows. |

## transitions

| Component | Default frames | Use for |
| --- | --- | --- |
| [block-wipe](block-wipe.md) | 84 @ 30 fps | A transition built from blocks: columns rise from the bottom in whole-block steps, the middle first, and the next scene shows through them until it fills the frame. |
| [dot-wipe](dot-wipe.md) | 84 @ 30 fps | A transition made of dots: a field of dots grows across the frame in a diagonal wave and the next scene shows through them until it fills the frame. |

## text

| Component | Default frames | Use for |
| --- | --- | --- |
| [centered-build](centered-build.md) | 99 @ 30 fps | A line builds one word at a time and stays centred as it grows: each new word slides in while the words already set glide left to make room. |
| [focus-in](focus-in.md) | 102 @ 30 fps | Words resolve out of blur on an accelerating rhythm: the first arrive slowly enough to read alone, the rest catch up and the line lands together. |
| [ink-sweep](ink-sweep.md) | 102 @ 30 fps | A line inks itself as it is read: it fades in faint, and a sweep runs along it letter by letter, flashing each letter to the accent before it settles to full ink. |
| [list-roll](list-roll.md) | 114 @ 30 fps | A picker spins and settles: a phrase on the left and a column of options that runs through the list, slows, and lands on the answer under a highlight, with an optional footer. |
| [slot-in](slot-in.md) | 117 @ 30 fps | A sentence with one rolling word: the slot rolls up through its candidates and lands on the last, which takes the accent and an underline, and the slot's width follows each word. |
| [statement-cuts](statement-cuts.md) | 114 @ 30 fps | Three statements joined by hard cuts: the first sets word by word with a rule drawing under its last word, the second wipes on, and the closer rises out of its own baseline. |
| [strike-swap](strike-swap.md) | 102 @ 30 fps | A sentence corrects itself: a marker strikes through its ending, the struck words drop away, and the new ending rises into the same place. |

## logos

| Component | Default frames | Use for |
| --- | --- | --- |
| [lockup-draw](lockup-draw.md) | 114 @ 30 fps | A logo built in front of you: construction guides draw out from the centre, the mark strokes itself in, the name wipes on, and the guides fade leaving the lockup and its tagline. |

## social

| Component | Default frames | Use for |
| --- | --- | --- |
| [message-stack](message-stack.md) | 129 @ 30 fps | Team notifications stacking up: each new card drops in at the top and pushes the earlier ones down, which dim as they age. |
