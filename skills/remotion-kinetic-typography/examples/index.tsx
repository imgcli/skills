// Copyright (c) 2026 Ricky (Imgcli) <https://imgcli.com>
// Acme, its logo and numeric data are example fixtures. Replace them before publishing.
import { loadFont } from "@remotion/google-fonts/Geist";
import { AbsoluteFill, Composition, registerRoot, Sequence } from "remotion";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

import { SlotIn } from "./components/imgcli/slot-in";
import { StatementCuts } from "./components/imgcli/statement-cuts";
import { StrikeSwap } from "./components/imgcli/strike-swap";
export const KineticType = () => (
  <AbsoluteFill style={{ fontFamily }}>
    <Sequence from={0} durationInFrames={102}>
      <StrikeSwap lead="Bring your ideas" before="someday." after="today." />
    </Sequence>
    <Sequence from={102} durationInFrames={117}>
      <SlotIn
        before="Make room for"
        words={["thinking", "making", "your team"]}
      />
    </Sequence>
    <Sequence from={219} durationInFrames={114}>
      <StatementCuts
        lineOne="One clear idea."
        lineTwo="The right words."
        lineThree="Stand out."
      />
    </Sequence>
  </AbsoluteFill>
);
export const DURATION_IN_FRAMES = 333;
const Root = () => (
  <Composition
    id="KineticType"
    component={KineticType}
    durationInFrames={DURATION_IN_FRAMES}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
