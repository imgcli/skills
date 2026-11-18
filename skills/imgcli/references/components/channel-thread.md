# channel-thread

**Tier:** Animation · **Vibe:** social · **Natural length:** 110f @ 30fps

A Slack-style work chat filling itself in: avatar, bold name, quiet timestamp and plain message lines. Messages land one at a time, a second message from the same person joins the group, typing dots hold a new speaker's line, and the transcript only scrolls when the newest line would fall past the anchor.

## Install

```bash
npx shadcn@latest add https://imgcli.com/r/channel-thread.json
```

Lands at `components/imgcli/channel-thread.tsx`.

## Props

| Prop | Type | Default |
|---|---|---|
| `messages` | `string \| readonly ThreadMessage[]` | `DEFAULT_MESSAGES` |
| `theme` | `Partial<ImgcliTheme>` | — |
| `mode` | `"light" \| "dark"` | `"dark"` |
| `fontFamily` | `string` | `"Default"` |

Full prop list and per-prop notes are in the source you install.

## Notes

Script is the conversation, groups split by `;` and a group's messages by `|`; people is one `name time` per group; beats is the frame each message lands on and opens is the frame its row appears, so a pause before someone answers is a number rather than a gap you have to guess at. avatars takes one image per group, split by `|` (not by comma — a data: URL has one of its own). Pass mode="dark" if you are rendering onto a dark frame — these default to shadcn's light palette.

## Example

```tsx
<ChannelThread
  messages={[
    { author: "rhea", time: "9:41 AM", avatar: "/avatars/07.jpg", text: "Launch video by Thursday?" },
    { author: "sam", time: "9:42 AM", avatar: "/avatars/13.jpg", text: "Already done." },
  ]}
/>
```

## Use when

- The team reacting to a launch or a problem, told as a work chat.
- A short exchange of 2–6 messages where timing between replies matters.

## Don't use when

- Consumer or AI chat — use `answer-stream` for an AI reply.
- A long transcript; it is built for a few lines on screen at once.
