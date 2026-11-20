// Copyright (c) 2026 Ricky (Imgcli) <https://imgcli.com>
// Acme, its logo and numeric data are example fixtures. Replace them before publishing.
import { loadFont } from "@remotion/google-fonts/Geist";
import {
  AbsoluteFill,
  Composition,
  registerRoot,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

import { Input } from "./components/imgcli/input";
import { LaptopLid } from "./components/imgcli/laptop-lid";
import { StatementCuts } from "./components/imgcli/statement-cuts";

const Field = () => {
  const frame = useCurrentFrame();
  return (
    <Input
      state={frame < 20 ? "active" : "typing"}
      placeholder="Search notes"
      value="Project plan"
    />
  );
};
export const ComponentDemo = () => (
  <AbsoluteFill style={{ fontFamily, background: "#faf9f6" }}>
    <Sequence from={0} durationInFrames={114}>
      <StatementCuts
        lineOne="Choose a scene."
        lineTwo="Use your content."
        lineThree="Make it."
      />
    </Sequence>
    <Sequence from={114} durationInFrames={120}>
      <Field />
    </Sequence>
    <Sequence from={234} durationInFrames={120}>
      <LaptopLid
        screen={{ src: staticFile("screenshot.svg") }}
        title="An editable scene in your project."
      />
    </Sequence>
  </AbsoluteFill>
);
export const DURATION_IN_FRAMES = 354;
const Root = () => (
  <Composition
    id="ComponentDemo"
    component={ComponentDemo}
    durationInFrames={DURATION_IN_FRAMES}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
