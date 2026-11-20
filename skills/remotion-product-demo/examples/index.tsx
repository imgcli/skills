// Copyright (c) 2026 Ricky (Imgcli) <https://imgcli.com>
// Acme, its logo and numeric data are example fixtures. Replace them before publishing.
import { loadFont } from "@remotion/google-fonts/Geist";
import {
  AbsoluteFill,
  Composition,
  registerRoot,
  Sequence,
  staticFile,
} from "remotion";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

import { CodeEdit } from "./components/imgcli/code-edit";
import { LaptopLid } from "./components/imgcli/laptop-lid";
import { LockupDraw } from "./components/imgcli/lockup-draw";
import { PhoneFlow } from "./components/imgcli/phone-flow";
export const ProductDemo = () => (
  <AbsoluteFill style={{ fontFamily }}>
    <Sequence from={0} durationInFrames={150}>
      <CodeEdit
        fileName="filters.tsx"
        code={'export const view = "Focused";'}
        previewText="Focused"
      />
    </Sequence>
    <Sequence from={150} durationInFrames={120}>
      <LaptopLid
        screen={{ src: staticFile("recording.mp4"), kind: "video" }}
        title="Review the project."
      />
    </Sequence>
    <Sequence from={270} durationInFrames={162}>
      <PhoneFlow
        steps={[
          {
            src: staticFile("mobile-home.svg"),
            tap: { x: 0.5, y: 0.75 },
            caption: "Open the project",
          },
          {
            src: staticFile("mobile-tasks.svg"),
            tap: { x: 0.5, y: 0.75 },
            caption: "Review the update",
          },
          { src: staticFile("mobile-done.svg"), caption: "See the result" },
        ]}
      />
    </Sequence>
    <Sequence from={432} durationInFrames={114}>
      <LockupDraw
        name="Acme"
        logo={staticFile("logo.svg")}
        tagline="A clear path from task to result."
      />
    </Sequence>
  </AbsoluteFill>
);
export const DURATION_IN_FRAMES = 546;
const Root = () => (
  <Composition
    id="ProductDemo"
    component={ProductDemo}
    durationInFrames={DURATION_IN_FRAMES}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
