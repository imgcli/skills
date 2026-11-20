# Shared Imgcli core

Installed automatically by components that need themes, fonts, color utilities or timeline styles. It is a dependency, not an additional scene in `npx @imgcli/cli list`. Install a scene or primitive, then follow its actual relative imports if composing a shared provider.

Scenes generally accept `theme`, `mode` and `accentColor`; Input uses `theme` and `primary`, while Caret accepts `color`. Read the per-component API rather than applying one prop set everywhere. Font names are labels; load the chosen font in the Remotion entry.
