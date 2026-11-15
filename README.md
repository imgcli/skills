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

## Claude Code plugin

```text
/plugin marketplace add imgcli/skills
/plugin install imgcli@imgcli
```

## Cursor plugin

In Cursor's Customize panel, use **From GitHub Repository** to import `https://github.com/imgcli/skills`, then select **Imgcli**. See the [Cursor plugin guide](https://cursor.com/docs/plugins) for team marketplace setup.

## License

See the [MIT license](LICENSE) and the third-party notices included with the individual Skills.
