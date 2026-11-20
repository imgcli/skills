# Visual defaults

Use the user's approved identity and language. These defaults help when no visual brief is supplied; they do not override a reference or an explicit creative direction.

- Keep one focal point and a restrained accent per beat. Leave enough room for the longest supported line and for caption safe areas.
- Prefer short, sentence-case headings and legible body text. Preserve intentional brand casing. Avoid decorative tracking, glow or gradient type that does not serve the brief.
- Current scenes usually paint their own background. Set their actual theme or mode props instead of assuming a transparent root or a generic backdrop prop.
- The default scene palette is warm off-white, dark text and blue accents. Most scenes accept theme overrides; confirm the exact color API before setting it. Input uses primary/theme, Caret uses color, and scene props vary.
- Load the chosen font before rendering, for example Geist with @remotion/google-fonts at the same version as remotion. A font name alone does not load a font.
- Product media should show the real product. Retain browser or system chrome when the shot calls for a complete device screen; crop it deliberately for an in-product close-up. Do not add a second status bar to a capture that already has one.
- The examples use 1280 × 720 at 30 fps. Current gallery defaults use 960 × 540. Recheck composition and media crop for 1080p, portrait, square or unusually long content rather than assuming automatic reflow.

Burned-in captions need contrast over the actual frame. Keep them clear of scene headlines, controls, device edges and logos. Verify thin lines and transparency in the encoded output, not just a Studio screenshot.
