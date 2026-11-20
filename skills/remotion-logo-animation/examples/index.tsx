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

import { ColorFlood } from "./components/imgcli/color-flood";
import { LockupDraw } from "./components/imgcli/lockup-draw";
export const LogoAnimation = () => (
  <AbsoluteFill style={{ fontFamily }}>
    <Sequence from={0} durationInFrames={114}>
      <LockupDraw
        name="Acme"
        logo={staticFile("logo.svg")}
        tagline="Ideas, made visible."
      />
    </Sequence>
    <Sequence from={114} durationInFrames={108}>
      <ColorFlood
        name="Acme"
        logo={staticFile("logo.svg")}
        url="example.com"
        accentColor="#141414"
      />
    </Sequence>
  </AbsoluteFill>
);
export const DURATION_IN_FRAMES = 222;
const Root = () => (
  <Composition
    id="LogoAnimation"
    component={LogoAnimation}
    durationInFrames={DURATION_IN_FRAMES}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
