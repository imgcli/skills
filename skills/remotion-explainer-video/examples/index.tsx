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

import { Audio } from "remotion";
import { ChecklistRun } from "./components/imgcli/checklist-run";
import { LaptopLid } from "./components/imgcli/laptop-lid";
import { LockupDraw } from "./components/imgcli/lockup-draw";
import { StatementCuts } from "./components/imgcli/statement-cuts";

// Example cue intervals, not a transcript. Replace them with timings from the approved narration.
const cues = [
  {
    from: 0,
    to: 180,
    text: "Start with one task, and bring your context into one place.",
  },
  {
    from: 180,
    to: 420,
    text: "Follow the work from the first check to the finished result.",
  },
  {
    from: 420,
    to: 660,
    text: "Review the result on your own screen before sharing it.",
  },
  {
    from: 660,
    to: 900,
    text: "Acme keeps the next step clear. Find out more at example dot com.",
  },
];
const Captions = () => {
  const frame = useCurrentFrame();
  const cue = cues.find((c) => frame >= c.from && frame < c.to);
  return cue ? (
    <div
      style={{
        position: "absolute",
        bottom: 24,
        left: 80,
        right: 80,
        padding: "12px 20px",
        borderRadius: 8,
        background: "rgba(0,0,0,0.88)",
        color: "white",
        fontFamily,
        fontSize: 28,
        lineHeight: 1.25,
        textAlign: "center",
      }}
    >
      {cue.text}
    </div>
  ) : null;
};
export const Explainer = () => (
  <AbsoluteFill style={{ fontFamily }}>
    <Sequence from={0} durationInFrames={180}>
      <StatementCuts
        lineOne="Start with one task."
        lineTwo="Keep the context."
        lineThree="Clarity."
      />
    </Sequence>
    <Sequence from={180} durationInFrames={240}>
      <ChecklistRun
        title="Follow the work"
        items={["Read the brief", "Check the details", "Prepare the result"]}
        doneLabel="Ready to review"
      />
    </Sequence>
    <Sequence from={420} durationInFrames={240}>
      <LaptopLid screen={{ src: staticFile("screenshot.svg") }} title="" />
    </Sequence>
    <Sequence from={660} durationInFrames={240}>
      <LockupDraw
        name="Acme"
        logo={staticFile("logo.svg")}
        tagline="example.com"
      />
    </Sequence>
    <Audio src={staticFile("voiceover.wav")} />
    <Captions />
  </AbsoluteFill>
);
export const DURATION_IN_FRAMES = 900;
const Root = () => (
  <Composition
    id="Explainer"
    component={Explainer}
    durationInFrames={DURATION_IN_FRAMES}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
