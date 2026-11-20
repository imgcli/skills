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

import { BarChart } from "./components/imgcli/bar-chart";
import { LockupDraw } from "./components/imgcli/lockup-draw";
import { NumberUp } from "./components/imgcli/number-up";
export const MotionGraphic = () => (
  <AbsoluteFill style={{ fontFamily }}>
    <Sequence from={0} durationInFrames={114}>
      <NumberUp
        value={42}
        label="Components in this example catalog"
        delta=""
      />
    </Sequence>
    <Sequence from={114} durationInFrames={120}>
      <BarChart
        title="Example weekly activity"
        labels={["Mon", "Tue", "Wed", "Thu"]}
        values={[4, 5, 3, 7]}
        delta="Illustrative data"
      />
    </Sequence>
    <Sequence from={234} durationInFrames={114}>
      <LockupDraw
        name="Acme"
        logo={staticFile("logo.svg")}
        tagline="Make the numbers clear."
      />
    </Sequence>
  </AbsoluteFill>
);
export const DURATION_IN_FRAMES = 348;
const Root = () => (
  <Composition
    id="MotionGraphic"
    component={MotionGraphic}
    durationInFrames={DURATION_IN_FRAMES}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
