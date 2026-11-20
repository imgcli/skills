# Integration failures to avoid

| Failure | Correct decision |
| --- | --- |
| Installing a name remembered from an old example | Confirm it with npx @imgcli/cli list, then read its current interface. Similar names need not share props. |
| Requiring shadcn setup or a components.json for the Imgcli CLI | Use npx @imgcli/cli add from a Remotion project. Current installs use relative imports. |
| Copying an @/components/imgcli import into an alias-free project | Import relative to the actual installed location, such as ./components/imgcli/laptop-lid from src/index.tsx. |
| Passing generic text/color/className props to every scene | Check the chosen component reference and source. Scene interfaces differ. |
| Passing speed to Input or Caret | Use the primitive's actual state/style or blink props. |
| Using gallery frame counts unchanged at another fps | Preserve seconds and recalculate frames; check content-dependent timing separately. |
| Cutting a scene before its last word, tap or result | Increase its Sequence budget or simplify the content and inspect the completion frame. |
| Putting a long sentence in statement-cuts lineThree | Its closer uses 2.3× type size. Use short words or a smaller fontSize and inspect the actual render. |
| Expecting a standalone wipe scene to implement a transition presentation | Use its documented before/after API or Remotion's TransitionSeries API for arbitrary children. |
| Treating default sample screens as the customer's product | Supply actual screenshots/recordings through media props. |
| Assuming a caption, terminal, camera or cursor wrapper exists | Use available footage, a dedicated tool or a small project-local implementation when the current catalog lacks that capability. |
| Assuming a supplied logo gets SVG path tracing | lockup-draw wipes a supplied image; its built-in path drawing is for Imgcli's own default mark. |
| Rendering without loading fonts or required public files | Load the font in the entry; place user media in public and load it with staticFile. |
| Declaring success after tsc or a single still | Render and inspect every beat and the encoded file. Audio and captions need their own alignment review. |

The runnable entries in the workflow Skills show current APIs. A successful sample render validates integration, not the accuracy of a user's marketing claims or real-media crop.
