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

import { CenteredBuild } from "./components/imgcli/centered-build";
import { LaptopLid } from "./components/imgcli/laptop-lid";
import { LockupDraw } from "./components/imgcli/lockup-draw";
import { VersionRoll } from "./components/imgcli/version-roll";
export const LaunchVideo = () => (
  <AbsoluteFill style={{ fontFamily }}>
    <Sequence from={0} durationInFrames={99}>
      <CenteredBuild text="Make time for the work." accentWords={2} />
    </Sequence>
    <Sequence from={99} durationInFrames={108}>
      <VersionRoll
        product="Acme"
        version="v2.0"
        tag="Your workspace, simplified."
      />
    </Sequence>
    <Sequence from={207} durationInFrames={120}>
      <LaptopLid
        screen={{ src: staticFile("screenshot.svg") }}
        title="Everything in one place."
      />
    </Sequence>
    <Sequence from={327} durationInFrames={114}>
      <LockupDraw
        name="Acme"
        logo={staticFile("logo.svg")}
        tagline="example.com"
      />
    </Sequence>
  </AbsoluteFill>
);
export const DURATION_IN_FRAMES = 441;
const Root = () => (
  <Composition
    id="LaunchVideo"
    component={LaunchVideo}
    durationInFrames={DURATION_IN_FRAMES}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
