export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: { lead?: string; text: string }[] }
  | { type: "callout"; label: string; text: string };

export interface BlogSection {
  heading?: string;
  blocks: BlogBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string[];
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-get-the-most-out-of-your-practice-membership",
    title:
      "What to Expect During Your First Practice Session at Game Plan Golf Performance",
    excerpt:
      "What your first session at the GP Lab will feel like, plus how to plan and structure your practice so every session moves your game forward.",
    keywords: [
      "golf practice tips",
      "golf simulator practice",
      "first golf practice session",
      "GC Quad practice",
      "Swing Catalyst",
    ],
    sections: [
      {
        blocks: [
          {
            type: "p",
            text: "Your first session at the GP Lab is a big step forward in your golf development—but don’t worry if it doesn’t feel 100% smooth right away. That’s normal.",
          },
          { type: "p", text: "Here’s what to expect:" },
          {
            type: "ul",
            items: [
              {
                lead: "Your brain is adapting.",
                text: "Practicing indoors—especially on a simulator—can feel different at first. There’s an adjustment period as your brain normalizes to hitting balls inside, reading feedback on a screen, and trusting the numbers.",
              },
              {
                lead: "Long clubs feel even more different.",
                text: "The transition tends to be more noticeable with longer clubs like the driver. Don’t stress—this phase is short-lived, and most players adjust quickly.",
              },
              {
                lead: "You’ll be learning some tech.",
                text: "Between GC Quad, Swing Catalyst, and our putting or fitness tools, there’s a lot of powerful feedback available. The software is intuitive, and we’re here to guide you—but keep in mind that a little of your mental energy will go toward learning it early on.",
              },
              {
                lead: "It gets easier fast.",
                text: "After a session or two, the new environment becomes second nature, and that’s when your practice starts to really take off.",
              },
            ],
          },
          {
            type: "callout",
            label: "Pro Tip",
            text: "Don’t judge your progress too harshly after the first visit. Set the goal of getting comfortable. That’s the foundation for great practice.",
          },
        ],
      },
      {
        heading: "How to Practice More Efficiently",
        blocks: [
          {
            type: "p",
            text: "Effective practice doesn’t happen by accident. It takes focus, a plan, and the right tools. Here’s how to get the most out of your time in the bay:",
          },
          {
            type: "ul",
            items: [
              {
                lead: "Have a clear goal.",
                text: "Whether you're working on a swing change, improving a feel, or dialing in distances—define your purpose before the session starts.",
              },
              {
                lead: "Stick to one or two priorities.",
                text: "Don’t try to work on everything at once. It’s totally fine to spend your whole session on one club or one movement pattern—that’s how real change is made.",
              },
              {
                lead: "Use the tools.",
                text: "Video replay and data from GC Quad or Swing Catalyst help you see if you're on track. Don’t guess—check and confirm your progress.",
              },
              {
                lead: "Bring fewer clubs (sometimes).",
                text: "If you're working on a specific move, bringing only a few clubs can help keep you focused and on task.",
              },
              {
                lead: "Know your success metrics.",
                text: "If you’ve worked with Christian or me, you should have a couple of specific checkpoints for your swing or movement. If you work with another coach, ask them for clear takeaways to practice.",
              },
            ],
          },
          {
            type: "p",
            text: "Efficient practice builds lasting improvement. It’s not about quantity—it’s about the quality and intention behind each rep.",
          },
        ],
      },
      {
        heading: "How to Get the Most Out of Your Practice Sessions",
        blocks: [
          {
            type: "p",
            text: "Not all practice is created equal. Whether you're chasing a lower handicap or just trying to groove a better feel, getting the most out of your time comes down to intentionality and structure.",
          },
          { type: "p", text: "Here are a few ways to elevate your sessions:" },
          { type: "h3", text: "1. Start with a purpose." },
          { type: "p", text: "Before you hit a single ball, ask yourself:" },
          {
            type: "ul",
            items: [
              { text: "What am I working on today?" },
              {
                text: "Is this about technical improvement, shot shaping, distance control, or scenario practice?",
              },
            ],
          },
          {
            type: "p",
            text: "When you define your goal clearly, you make better decisions during your session—and avoid mindlessly beating balls.",
          },
          { type: "h3", text: "2. Stick to your plan." },
          {
            type: "p",
            text: "The simulator can be a lot of fun—but it’s easy to get off track. Stay focused on the goal you set. If you’re working on a new swing feel or specific move, don’t pivot halfway through unless there’s a good reason.",
          },
          { type: "h3", text: "3. Be mindful of quality over quantity." },
          {
            type: "p",
            text: "You don’t need to hit hundreds of balls. In fact, deep, focused reps (even with just one club) are more valuable than spraying through your whole bag. Repetition without attention just reinforces old habits.",
          },
          { type: "h3", text: "4. Use your tools for feedback." },
          {
            type: "p",
            text: "The GC Quad and Swing Catalyst platforms give you instant, meaningful data. Combine that with video for real-time validation. Are you achieving the changes you're trying to make? Is your feel matching the numbers?",
          },
          { type: "h3", text: "5. Track your progress." },
          {
            type: "p",
            text: "If you’re working with a coach (like Christian or me), we’ve likely given you a couple of key metrics or checkpoints. Use those as your guideposts. If not, create your own log or journal so you can measure growth over time.",
          },
          {
            type: "callout",
            label: "In short",
            text: "Every practice session should have a purpose, a process, and a way to measure progress. That’s how real improvement happens—session by session, swing by swing.",
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
