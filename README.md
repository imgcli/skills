# Imgcli Skills

Agent Skills for building videos with Imgcli's Remotion components. Use the [component index](https://imgcli.com/llms-components.txt) to find components, props, and installation instructions.

## Install Skills

```bash
npx skills add imgcli/skills --skill imgcli
```

Add another `--skill` flag to install a workflow. For example, `--skill remotion-product-demo` adds the product demo workflow. Use `-a cursor` to target Cursor.

| Skill | Use it for |
| --- | --- |
| `imgcli` | Component selection, composition, and render checks |
| `remotion-launch-video` | Launch films and feature announcements |
| `remotion-product-demo` | Product walkthroughs |
| `remotion-motion-graphics` | Short motion graphics |
| `remotion-kinetic-typography` | Animated text and title cards |
| `remotion-logo-animation` | Logo reveals and end cards |
| `remotion-explainer-video` | Narrated explainers with captions |

## Install components

Inside an installed Remotion project, create `src/` first if that is where your code lives:

```bash
npx @imgcli/cli list
npx @imgcli/cli add statement-cuts laptop-lid
```

The current components are free under MIT. The CLI copies source and dependencies, uses relative imports and does not require shadcn initialization, a `components.json` file or an API key. Each Skill includes a runnable `examples/index.tsx` entry with current props and a concrete media contract. These examples replace the retired component APIs in bundle version 2.0.0.

## Maintaining and verifying

The component references are generated from the public [MCP catalog](https://github.com/imgcli/mcp/blob/main/catalog.json). Save that JSON locally, then run:

```bash
node scripts/sync-catalog.mjs /path/to/catalog.json
node scripts/check.mjs /path/to/catalog.json
node scripts/verify-examples.mjs --project /absolute/path/to/new-project
```

The default verified toolchain is Imgcli CLI 0.3.1, Remotion 4.0.473 and TypeScript 5.9.3. The bundled Remotion loader uses the TypeScript JavaScript compiler API; do not assume that a newer TypeScript major is compatible without rerunning the render checks.

The verification project must be a new, disposable path outside this repository. The verifier creates a minimal Remotion project, installs the published Imgcli CLI, executes every Skill's documented component install, type-checks all examples and all installed components, and renders the seven compositions plus per-beat stills. It writes receipts inside that project. Generated assets use an explicitly fictional interface and test audio; they prove integration, not production narration alignment or customer claims. Supply a `public/voiceover.wav` fixture with real narration via `--media-dir /path/to/fixtures` when validating spoken alignment.

The references are snapshots. Re-run the checks whenever a catalog, prop or example changes; do not repair a stale scene by renaming a command alone.

## Claude Code plugin

```text
/plugin marketplace add imgcli/skills
/plugin install imgcli@imgcli
```

## Cursor plugin

In Cursor's Customize panel, use **From GitHub Repository** to import `https://github.com/imgcli/skills`, then select **Imgcli**. See the [Cursor plugin guide](https://cursor.com/docs/plugins) for team marketplace setup.

## License

See the [MIT license](LICENSE) and the third-party notices included with the individual Skills.
