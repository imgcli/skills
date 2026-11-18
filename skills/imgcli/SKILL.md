---
name: imgcli
description: >
  Build Remotion videos with Imgcli — a shadcn registry of copy-paste animation components and
  timeline-driven UI primitives. Use when composing video scenes, adding text animations,
  transitions, backgrounds, UI blocks, brand/social cards, or full compositions in a Remotion
  project. Triggers include "Imgcli", "video component", "add animation", "text reveal",
  "product demo video", "remotion component", "terminal simulator", "device frame",
  "phone mockup", "burned-in captions", "karaoke captions", "logo animation", "launch
  video", "changelog video", and the UI-primitive tier: "video input", "typing caret".
  Even if the user doesn't mention Imgcli, activate when they need polished video
  primitives for Remotion.
---

# Imgcli

Copy-paste components for Remotion videos. Components install via `shadcn` and land in
`components/imgcli/` — you own the code.

## Installation

Prerequisites: a Remotion project (`npx create-video@latest`).

```bash
# Install from the Imgcli registry
npx shadcn@latest add https://imgcli.com/r/text-reveal.json

# Component lands at components/imgcli/text-reveal.tsx
```

To use the shorter `@imgcli/<name>` form, map `@imgcli` to
`https://imgcli.com/r/{name}.json` in `components.json`. See the
[installation guide](https://imgcli.com/docs/getting-started/installation) for project setup.

### Dependencies install automatically

Many components pull others via `registryDependencies` — `shadcn` installs them transitively.
For example, installing `search-typing` also pulls `imgcli-ui`, `input` and `caret`.

- **`@imgcli/imgcli-ui`** is the shared core lib (timeline-fold hook, theme context, color math).
  Most UI Primitives depend on it. You rarely install it directly.

## Two tiers

Imgcli has two kinds of components — they have **different APIs**:

- **Animation tier** (scenes and animations) — text animations, transitions, backgrounds, UI-block sims,
  brand/social cards, full compositions. Frame-driven. Shared props: `speed` (time multiplier),
  and for text: `fontSize`, `color`, `fontWeight`.
- **UI Primitives** (`imgcli-ui`) — timeline-driven shadcn-style primitives. Two ship today:
  `input` and `caret`. State-based props (`state`, `style`, `size`, `theme`) — the open/typing
  state is a pure function of the timeline. **No `speed` prop.** Built on `@imgcli/imgcli-ui`.

## Component categories

Pick by what you're building. The catalog is split one file per component under
`references/components/`. **Start at `references/components/index.md`** — a router table grouped by
these categories with a `Use for` / `Avoid for` signal per component. Scan it, pick candidates, then
open only the `references/components/<name>.md` files you need (full props, example, all use / don't-use
notes). Don't read every file.

| Category | Tier | Components |
|---|---|---|
| **Text & Titles** | Animation | `text-reveal`, `type-morph`, `text-swell`, `text-highlight`, `text-swap`, `text-build`, `text-rewrite`, `text-select`, `word-flip`, `punch-lines`, `word-gather`, `word-wheel`, `brand-wheel`, `check-cycle`, `drop-line`, `font-shuffle`, `hello-zoom`, `spec-sweep`, `title-sweep` |
| **Captions** | Animation | `word-captions`, `karaoke-captions` |
| **AI Chat Input** | Animation | `prompt-send`, `search-typing`, `prompt-zoom`, `answer-stream`, `answer-highlight`, `agent-steps` |
| **Screens & Devices** | Animation | `phone-frame`, `laptop-frame`, `terminal-simulator`, `screen-recording`, `cursor-track`, `capture-reveal`, `phone-stack` |
| **Logos** | Animation | `logo-assemble`, `logo-flicker`, `logo-collapse`, `logo-drift`, `block-wordmark` |
| **Scenes** | Animation | `announce-title`, `hero-launch`, `orbit-gallery`, `moodboard-reveal`, `status-cycle`, `count-grid`, `roster-grant`, `orb-swarm`, `reel-collage`, `card-rail`, `cut-lockup`, `bloom-lockup`, `gather-lockup`, `sky-lockup`, `portal-intro`, `reel-wall`, `wordmark-cut` |
| **Social Proof** | Animation | `follower-rush`, `channel-thread` |
| **Cursor & Clicks** | Animation | `button-press`, `click-type` |
| **Transitions** | Animation | `dot-bloom` |
| **UI Primitives** | `imgcli-ui` | `input`, `caret` (+ `imgcli-ui`, the shared core lib) |

Use the [live component index](https://imgcli.com/llms-components.txt?ref=skill-imgcli) to confirm which names are installable. The references below include older names and their replacements.

## Component patterns

Conventions differ by tier — don't assume animation-tier props on a primitive.

### Animation tier (scenes and animations)

- Named `Props` interface per component (e.g. `TextRevealProps`).
- `speed?: number` — global time multiplier (default `1`), applied as `frame * speed`.
- Text components: `fontSize`, `color`, `fontWeight`.
- Scene-to-scene transitions are **not** in this registry — use Remotion's own
  `@remotion/transitions` (`slide`, `wipe`, `fade`, `flip`) inside a `<TransitionSeries>`.
- `className?: string` on the root.

### UI Primitives (`imgcli-ui`)

- State-based, **not** `speed`-based: `state` (e.g. `"open"` / `"closed"`), `style`, `variant`,
  `size`, `theme?: Partial<ImgcliTheme>`.
- The opened/closed/active state is a pure function of the timeline (keyframed presets).
- Compose modal-layer primitives (dialog, alert-dialog, drawer) with a trigger element — see
  each component's example.

### Animation API

```tsx
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
const scale = spring({ fps, frame, config: { damping: 12, mass: 1, stiffness: 100 } });

// Deterministic randomness (NEVER Math.random())
import { random } from "@remotion/random";
const jitter = random(`seed-${frame}`);
```

### Composition structure

```tsx
import { Sequence, Series } from "remotion";

<Sequence from={30} durationInFrames={60}>
  <TextReveal text="Ship it in React" />
</Sequence>

<Series>
  <Series.Sequence durationInFrames={60}><SceneA /></Series.Sequence>
  <Series.Sequence durationInFrames={60}><SceneB /></Series.Sequence>
</Series>
```

### Canvas & timing

- **Canvas standard:** `1280×720 @ 30fps`. Components are laid out for it.
- **Budget each Sequence around the component's natural length** — the `Length` column in
  `components/index.md` (and each file's `Natural length`). Under-budgeting clips the animation;
  over-budgeting leaves dead air.
- **Tone matching:** each catalog entry carries a `vibe` tag (`tech`/`premium`/`data`/`clean`/
  `playful`/`social`) — pick components whose vibe fits the brand.
- **Palette & fonts:** stay within the library's tokens (`references/design.md` → tokens) so your
  own elements don't clash.

## Design defaults — avoid AI-slop

When you write your **own** text, scene chrome, or cards (not the prebuilt components), keep it
restrained:

- **No decorative `letter-spacing`** on body/heading text you add.
- **No `text-transform: uppercase` / ALL-CAPS** defaults — prefer sentence case (`Launch`, not `LAUNCH`).
- **No gradient text-fills or decorative gradient washes** — gradients only as intentional backgrounds.
- **No glow / colored drop-shadows or large blur radii** (`blur > ~24px`, spread, multi-layer) —
  subtle 1px elevation only.

**Exception:** never strip these from components whose essence is the effect — `word-flip`'s
gradient word, `block-wordmark`'s colour deck, `announce-title`'s glow, and the
caption presets' heavy outlines are all legitimate. The rules govern *your* additions,
not the library.

Full do/avoid examples: `references/design.md`. For motion quality (timing, anticipation,
staging, easing), see `references/motion-principles.md`.

## Gotchas (Imgcli-specific)

- **No transition components ship** — a scene change is `<TransitionSeries.Transition>` from
  `@remotion/transitions`, not an Imgcli component. `text-swap` swaps a *line*, not a scene.
- **Terminal scroll is instant** — step-function `translateY`, never spring/ease the scroll.
- **`overflow: hidden` on split layouts** — prevents content breakage during width animations.
- **Cursor blink is deterministic** — `Math.floor(frame / 15) % 2 === 0`, not intervals.
- **Static files go in `public/`** — load via `staticFile('cursor.svg')`, not imports.
- **Social cards render offline** — `avatarUrl=""` / `coverUrl=""` fall back to gradients; no fetch.

General Remotion rules (no `Math.random()`, no `setInterval`, animate `transform` not `top`/`left`,
load fonts before render) live in Remotion's own skills, not this one:
`npx skills add remotion-dev/skills`.

## Composing a video

Don't dump components — compose one story. When asked to build a full video ("make a product demo",
"changelog video", "intro for my landing"):

1. **Decide the strategy** — ready template vs compose from components vs build a new component. See
   `references/anatomy.md` §1.
2. **Follow the beats** — a product demo is Hook → Positioning → Product reveal → Features → Proof →
   CTA (last two optional). See `references/anatomy.md` §2.
3. **Use the recipe** — `references/archetypes/index.md` routes to per-archetype builds: content contract
   (infer → ask → placeholder), duration variants, beat→component slots, and a worked
   `<TransitionSeries>` skeleton.
4. **Pick each beat's component** from `references/components/index.md`; match the `vibe` tag to the
   brand and budget each `<Sequence durationInFrames>` around its natural length.
5. **Check the quality bar** — one accent, sentence-case kinetic type, real content, no glow halos, no
   feature-list enumeration, no decorative gradient wash behind the type. See
   `references/anatomy.md` §3.

## Workflows

For a whole video, use the matching workflow Skill when available. Each one
composes Imgcli components beat by beat and checks the result in Remotion. The
[agent guide](https://imgcli.com/docs/getting-started/agent-skill) covers installation
and public component discovery.

- `remotion-launch-video` for launch films,
  announcements, Product Hunt / X promos.
- `remotion-product-demo` for walkthroughs from a real
  screen recording, CLI and AI-app demos.
- `remotion-motion-graphics` for kinetic type, logo
  stings, stats and short openers.
- `remotion-kinetic-typography` for animated text and
  title cards.
- `remotion-logo-animation` for logo reveals, intro and
  outro stings.
- `remotion-explainer-video` for narrated explainers
  with burned-in captions.

## Reference

- `references/anatomy.md` — composing a full video: strategy (template/compose/new), the product-demo beats, and the good-vs-slop quality bar.
- `references/archetypes/index.md` — router to per-archetype build recipes (product-demo flagship + changelog, feature-announcement, oss-showcase, cli-tool-demo, testimonial-reel, year-in-review, pricing-reveal, logo-bumper): content contract, duration variants, beat→slot map.
- `references/components/index.md` — router table (all components, grouped by category, with `Use for` / `Avoid for`). Open `references/components/<name>.md` for one component's full props, example, and use / don't-use notes.
- `references/design.md` — anti-slop design defaults (do/avoid) + design tokens (palette, fonts, canvas).
- `references/motion-principles.md` — motion-design principles adapted to Imgcli + Remotion.
- `references/anti-patterns.md` — common generation mistakes and their fixes.
