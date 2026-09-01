/** All site copy lives here. Pages are dumb; this file is the content.
 *
 *  Keyword targeting comes from the App Store and web research run on
 *  2026-09-01. On the App Store, "no spend tracker" returns a page of
 *  near-identical apps that almost all sit under 5 ratings, so the phrase is
 *  contested but unwon. On the web the head terms ("no spend challenge",
 *  "no spend month") are held by banks and personal-finance publishers with
 *  domain authority no app site will beat, so the guides below target the
 *  task-shaped and problem-shaped long-tails underneath those terms instead.
 *  Each one maps to something the app actually does. */

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  faq: { q: string; a: string }[];
  takeaway: string;
  related: string[];
};

export const APP = {
  name: "FrugalStreak",
  fullName: "FrugalStreak — No Spend Tracker",
  tagline: "No budget. Just a streak.",
  author: "Neil Brazil",
  minOS: "iOS 18",
  price: "Free",
};

export const HERO = {
  h1: "A no-spend tracker that is only a streak",
  sub:
    "Tap a Home Screen widget on every day you get through without an impulse buy, and watch the run of days build up. There is no budget to set up and no bank account to connect.",
};

export const FEATURES: { h: string; p: string }[] = [
  {
    h: "Log the day from your Home Screen",
    p: "The whole widget is a button. Tap it once and today is logged, without FrugalStreak ever opening. That is the shortest possible distance between getting through a day and recording that you did.",
  },
  {
    h: "You decide what counts",
    p: "Most people don't count rent, bills or the weekly shop. Write your own one-line rule during setup and the app shows it back to you. Nothing is categorised and nothing is scored, so there is no argument with yourself at 9pm about whether a coffee broke the rule.",
  },
  {
    h: "The run of days is the point",
    p: "A heatmap of the last five weeks sits on the first screen, next to the current count. Watching a block of days fill in is the reason streaks work at all, so it is the first thing you see rather than something buried in a report.",
  },
  {
    h: "Being honest costs you nothing",
    p: "Tap \"I spent today\" and the current streak goes to zero, which is the whole point of a streak. Your best-ever run is kept and stays on screen. An app that punished you for telling the truth would just teach you to lie to it.",
  },
  {
    h: "Badges at 7, 30 and 100 days",
    p: "Three milestones, earned from your best streak rather than your current one, so a reset can never take one back. They are free, and so is the celebration when you hit one.",
  },
  {
    h: "No account and no bank connection",
    p: "There is no sign-up and no server. Your streak lives on your iPhone and the app works with the network switched off. Nothing about your spending is transmitted anywhere, because there is nothing to transmit.",
  },
];

export const PRO = {
  h: "FrugalStreak Unlocked",
  p: "Everything above is free with no time limit. The paid unlock adds two things for people who stay with it long enough to want a record.",
  points: [
    "Your full streak history: every run you have finished, with its length and dates, not just the one you are on",
    "Custom widget colours",
    "Logging, the streak count, the heatmap and the badges all stay free",
  ],
  pricing: "$2.99, paid once. There is no subscription.",
};

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Is FrugalStreak free?",
    a: "Yes. Logging a no-spend day, your streak count, the five-week heatmap and the milestone badges are free with no time limit and no ads. A one-time $2.99 unlock adds your full streak history and custom widget colours.",
  },
  {
    q: "Do I have to connect my bank account?",
    a: "No, and you cannot. FrugalStreak has no bank linking, no transaction import and no server. It never sees a penny of your actual spending. You tell it whether today was a no-spend day and that is the entire input.",
  },
  {
    q: "What counts as spending?",
    a: "Whatever you decide. During setup you write a single line describing your own rule, and the app shows it back to you rather than judging it. Most people exclude rent, bills and groceries, and count everything discretionary.",
  },
  {
    q: "What happens when I break the streak?",
    a: "Tap \"I spent today\" and the current streak resets to zero. Your longest-ever streak is kept and stays visible, and any badges you have earned stay earned. Resetting honestly never costs you your record.",
  },
  {
    q: "Do I need to open the app every day?",
    a: "No. Add the widget to your Home Screen and one tap logs the day. The streak updates and the app stays closed.",
  },
  {
    q: "Is there a subscription?",
    a: "No. There is one optional purchase at $2.99 and you own it. Nothing renews.",
  },
  {
    q: "Can I track more than one thing?",
    a: "No. FrugalStreak tracks one no-spend streak, and the constraint is deliberate. If you want categories and budgets there are good apps for that, built on the opposite bet to this one.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Everything except the optional purchase works with no network connection, because your streak is stored on the device.",
  },
];

export const GUIDES: Guide[] = [
  {
    slug: "no-spend-challenge-rules",
    title: "How to write no-spend challenge rules you will actually follow",
    metaTitle: "No-Spend Challenge Rules: How to Write Ones That Stick",
    description:
      "Write your no-spend rules down before you start, in one sentence, and settle the edge cases in advance. Here is how to decide what counts and what doesn't.",
    intro:
      "Write your rules down before day one, keep them to a sentence, and settle the awkward cases while you are calm rather than at the till. Almost every failed no-spend challenge fails at the definition, not at the willpower.",
    sections: [
      {
        h: "Why undefined rules break the challenge",
        p: [
          "A no-spend challenge with vague rules turns every purchase into a negotiation. Is a coffee on the way to work a treat or a commute cost? Does the grocery shop count if half of it was snacks? Each of those questions is small, but you are answering them several times a day while tired, and you will eventually answer one in your own favour and stop trusting the whole exercise.",
          "Written rules remove the negotiation. You made the decision once, in advance, when nothing was at stake. At the till you are just reading it back.",
        ],
      },
      {
        h: "Start from what is genuinely not optional",
        p: [
          "Nearly everyone excludes the same short list: rent or mortgage, utilities, insurance, transport to work, prescriptions and a basic weekly shop. These are not spending decisions in any meaningful sense. Excluding them is not cheating, and a challenge that counts your electricity bill as a failure is one you will abandon in week one.",
          "What is left over is the actual target: takeaways, clothes, a third streaming subscription, the thing you added to a basket at 11pm. That is where a no-spend day does its work.",
        ],
      },
      {
        h: "Decide the two or three cases that are genuinely ambiguous",
        p: [
          "You already know which purchases sit on your own boundary. For most people it is coffee, lunch at work, and whether a planned gift counts. Pick a side now and write it into the rule.",
          "Be concrete. \"No unnecessary spending\" is not a rule, it is a mood. \"Bills, food shop and travel to work don't count\" is a rule, because it can be checked in about a second.",
        ],
      },
      {
        h: "Keep it to one line",
        p: [
          "A rule you cannot recall is a rule you will not apply. If yours needs a bulleted list with sub-clauses, it is really a budget, and a budget is a different tool with different upkeep.",
          "FrugalStreak caps the rule at a single line for exactly this reason. You write it during setup, it is stored on the device, and you can see it on the main screen. The app does not check it or categorise anything against it, because the rule is a promise you made to yourself and not a filter for software to enforce.",
        ],
      },
      {
        h: "Expect to revise it once, early",
        p: [
          "Most people find one bad clause in the first fortnight, usually something they excluded too generously or forgot entirely. Change it then, deliberately, and leave it alone afterwards.",
          "The thing to avoid is quietly reinterpreting the rule mid-challenge to save a streak. If the rule needs changing, change it on purpose and note that you did. A streak built on a rule you keep loosening is not measuring anything.",
        ],
      },
    ],
    faq: [
      {
        q: "Should groceries count as spending?",
        a: "For most people, no. A basic food shop is not an impulse purchase, and counting it makes the challenge unwinnable. If your target is specifically food waste or takeaways, split it: the weekly shop is excluded, anything eaten out is not.",
      },
      {
        q: "How long should a first no-spend challenge be?",
        a: "A week. Long enough to hit a weekend, short enough that a bad rule only costs you a few days before you can fix it and start again.",
      },
    ],
    takeaway:
      "One sentence, written before you start, covering the two or three cases you know are ambiguous for you.",
    related: ["what-counts-as-spending", "no-spend-challenge-vs-budgeting"],
  },
  {
    slug: "what-counts-as-spending",
    title: "What counts as spending on a no-spend day?",
    metaTitle: "What Counts as Spending on a No-Spend Day?",
    description:
      "On a no-spend day, discretionary purchases count and fixed essentials do not. Here is the usual dividing line, and how to place the awkward cases.",
    intro:
      "On a no-spend day, discretionary purchases count against you and fixed essentials do not. Rent, bills, transport to work and a basic food shop are almost always excluded. Anything you chose in the moment is almost always included.",
    sections: [
      {
        h: "The standard dividing line",
        p: [
          "The convention that most no-spend challenges use is whether the money left your account because of a decision you made that day. Your rent goes out whether or not you thought about it, so it is outside the challenge. A jumper you saw on the way home is entirely a decision you made that day, so it is inside it.",
          "This is why a no-spend challenge is not a budget. It is not trying to account for all of your money. It is trying to interrupt one specific behaviour, which is buying things you had not planned to buy.",
        ],
      },
      {
        h: "Almost always excluded",
        p: [
          "Rent or mortgage, utilities, council tax, insurance, phone contract, existing loan or card payments, prescriptions and medical costs, childcare, and transport you need to get to work. Direct debits generally sit here by default: you set them up in the past, so they are not today's decision.",
          "A basic grocery shop belongs here too for most people, with the caveat below.",
        ],
      },
      {
        h: "Almost always counted",
        p: [
          "Takeaways and eating out, coffee bought while out, clothes, homeware, books, games, gadgets, alcohol, taxis you could have walked or bussed instead, and anything bought from an advert or an app notification. Online baskets count on the day you check out, not the day you added the item.",
          "A new subscription counts on the day you start it. An existing one you forgot about does not count as a no-spend failure, though it is worth cancelling for other reasons.",
        ],
      },
      {
        h: "The cases that genuinely depend on you",
        p: [
          "Coffee is the classic one. If a daily flat white is a settled part of your routine and not the behaviour you are trying to change, exclude it and stop thinking about it. If it is a symptom of the exact habit you are targeting, count it. Both answers are defensible and neither works if you keep switching.",
          "Lunch at work, gifts you had already committed to, and petrol for a non-work journey are the other three that come up most. Pick a side once and write it down.",
        ],
      },
      {
        h: "Groceries, and the loophole in them",
        p: [
          "Excluding the food shop is normal and sensible. The loophole is that a supermarket sells clothes, magazines, wine and electronics, so \"it was part of the grocery shop\" can absorb an enormous amount of discretionary spending if you let it.",
          "The simplest patch is to exclude food and household basics rather than excluding the shop. Same trip, different rule, and the ambiguity disappears.",
        ],
      },
      {
        h: "Write your answer down where you will see it",
        p: [
          "Whatever you decide, the value comes from deciding once. FrugalStreak stores your rule as a single line during setup and shows it on the main screen, so the definition is in front of you rather than in your memory. The app takes no view on what you wrote and never inspects your purchases.",
        ],
      },
    ],
    faq: [
      {
        q: "Do direct debits break a no-spend day?",
        a: "No. A direct debit was set up in the past and leaves your account whether or not you thought about it today, so it sits outside the challenge for nearly everyone.",
      },
      {
        q: "Does using a gift card count as spending?",
        a: "Usually yes, if the point of your challenge is to interrupt the buying habit rather than to preserve cash. If the point is strictly to keep money in your account, then no. It depends which of the two you are actually doing.",
      },
    ],
    takeaway:
      "Fixed and already-decided costs are out. Anything you chose today is in. The two or three cases in between are yours to settle in advance.",
    related: ["no-spend-challenge-rules", "broke-my-no-spend-streak"],
  },
  {
    slug: "track-no-spend-days-iphone",
    title: "How to track no-spend days on your iPhone",
    metaTitle: "How to Track No-Spend Days on iPhone",
    description:
      "Tracking no-spend days works when logging takes one tap. Here is how to set it up on an iPhone without linking a bank account or building a budget.",
    intro:
      "Tracking no-spend days on an iPhone works when logging takes one tap and happens somewhere you already look. A Home Screen widget does both. A spreadsheet, a notes file or a budgeting app with bank linking all fail for the same reason, which is friction.",
    sections: [
      {
        h: "Why most tracking methods quietly stop",
        p: [
          "People usually start with a note, a calendar entry or a habit app with fifteen other rows in it. All three work for about nine days. The problem is never the first log, it is the twentieth, on a day when you are tired and the reward for logging is a number going up by one.",
          "If recording the day takes four actions, you will skip it occasionally. Once the record has a hole in it that you know is wrong, the whole thing stops meaning anything and you stop opening it.",
        ],
      },
      {
        h: "Put the log where your thumb already is",
        p: [
          "The fix is to remove the app-opening step entirely. On iOS, an interactive widget can run an action directly from the Home Screen, so tapping it can record the day without launching anything.",
          "FrugalStreak is built around this. The entire widget face is a single button showing your current streak. One tap logs today, the number goes up, and you never leave the screen you were on.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Install the app and pick your rule during setup, which takes about twenty seconds. Then press and hold an empty part of your Home Screen, tap the plus button in the corner, search for FrugalStreak, and place the widget somewhere on your first page.",
          "Position matters more than it sounds. A widget on page three is a widget you will not tap. Put it on the page you unlock into, near the apps you open by reflex.",
        ],
      },
      {
        h: "Make the trigger a moment, not a time",
        p: [
          "Reminders at 9pm work badly, because 9pm is not when you know whether the day held. Tie the log to something that already happens: getting into bed, plugging the phone in, closing the front door behind you.",
          "Because the widget is on the Home Screen, unlocking your phone at that moment is enough of a prompt. You do not need a notification, which is useful, because a notification you dismiss twice becomes invisible.",
        ],
      },
      {
        h: "Don't track anything else at the same time",
        p: [
          "The temptation is to also record what you nearly bought, what you saved, and which category it would have been. That is a budgeting app, it takes real upkeep, and the upkeep is what people abandon.",
          "A no-spend streak has one input per day and one number. That is why it survives the weeks when nothing else does.",
        ],
      },
      {
        h: "Keep the history when you slip",
        p: [
          "Whatever you use, check what happens when you break a run. Some trackers wipe the record. If your best streak disappears the moment you are honest about a bad day, the tool is training you to fudge it.",
          "FrugalStreak keeps your longest streak permanently and keeps any badges you have earned, so the reset only clears the current count.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I log a no-spend day without opening the app?",
        a: "Yes. The FrugalStreak widget is itself the button. Tapping it on your Home Screen logs the day and updates the streak with the app closed.",
      },
      {
        q: "Do I need to link my bank to track no-spend days?",
        a: "No. A no-spend streak has one input a day, which is you deciding whether the day counted. There is nothing for a bank connection to add, and FrugalStreak has no bank linking at all.",
      },
    ],
    takeaway:
      "One tap, on your first Home Screen page, attached to something you already do every night.",
    related: ["no-spend-challenge-widget", "broke-my-no-spend-streak"],
  },
  {
    slug: "broke-my-no-spend-streak",
    title: "You broke your no-spend streak. Now what?",
    metaTitle: "I Broke My No-Spend Streak: What to Do Next",
    description:
      "Breaking a no-spend streak is normal and recoverable. Log it honestly, start again the same day, and treat the best run you built as the number that matters.",
    intro:
      "Log it honestly, start again the same day, and keep looking at your best run rather than your current one. Breaking a no-spend streak is a normal part of doing one, and the day after is the only part that decides whether the habit survives.",
    sections: [
      {
        h: "The break is not the failure",
        p: [
          "A twenty-day streak that ends at twenty-one is twenty days you did not spend. That happened. It does not stop having happened because the counter went back to zero, and treating it as a total loss is both inaccurate and the reason people quit.",
          "The failure mode that actually matters is the second miss. People rarely abandon a habit over one bad day. They abandon it over the week that follows one bad day, when the streak is at zero and the whole thing feels pointless.",
        ],
      },
      {
        h: "Record it rather than hiding it",
        p: [
          "There is a strong pull towards just not logging the day, leaving the streak technically alive. It feels harmless. It is the thing that ends the habit, because from then on the number is fiction and you know it, so it stops exerting any pull at all.",
          "Log the break. The count going to zero is the streak doing its job. A number you trust and dislike is worth far more than a number you like and do not believe.",
        ],
      },
      {
        h: "Restart the same day",
        p: [
          "Do not wait for Monday, or the first of the month, or a moment when you feel more disciplined. Those are all just permission to have a longer break.",
          "The day you break it, the next day is already day one. Starting immediately keeps the gap at one day, which is the difference between a blip and a stop.",
        ],
      },
      {
        h: "Watch your best streak, not your current one",
        p: [
          "Your current count is a live number and it spends a lot of its life being small. Your longest run is a record of what you have proved you can do, and it never goes down.",
          "FrugalStreak shows both, and the best streak is kept permanently. Tapping \"I spent today\" clears the current count and nothing else. Milestone badges are earned from your best run too, so a reset can never take one back.",
        ],
      },
      {
        h: "Look at what actually happened, once",
        p: [
          "One short question is worth asking: what was different about that day? Usually it is one of three things, being hungry, being with other people, or being on your phone somewhere you had a saved card.",
          "That is worth one minute of thought and no more. Extended analysis of a single purchase is its own form of procrastination, and the useful response is normally a small change like removing a saved card, not a new system.",
        ],
      },
      {
        h: "Lower the bar rather than quitting",
        p: [
          "If you have broken the streak three times in the same place, the rule is probably wrong for you rather than you being wrong for the rule. Excluding the weekday coffee that keeps ending your runs is a better outcome than abandoning the challenge entirely.",
          "A challenge you can win on an ordinary bad day beats a stricter one you can only win in a good week.",
        ],
      },
    ],
    faq: [
      {
        q: "Does FrugalStreak delete my history when I break a streak?",
        a: "No. Resetting clears only the current count. Your longest streak stays on screen permanently and every badge you have earned stays earned. The paid unlock also keeps each finished run with its length and dates.",
      },
      {
        q: "Should I restart the count or carry on from where I was?",
        a: "Restart it. A streak that survives a day you spent is not measuring anything, and you will know that, which is what makes the number stop working on you.",
      },
    ],
    takeaway:
      "Log it, start again today, and judge yourself on the longest run you have built rather than the one you are on.",
    related: ["what-counts-as-spending", "track-no-spend-days-iphone"],
  },
  {
    slug: "no-spend-challenge-widget",
    title: "Put your no-spend challenge on your Home Screen",
    metaTitle: "No-Spend Challenge Widget for iPhone",
    description:
      "A Home Screen widget turns a no-spend challenge into a one-tap habit. Here is why the widget matters more than the app, and how to place it well.",
    intro:
      "A no-spend challenge survives on whether you can see it. A Home Screen widget puts the current streak in front of you every time you unlock your phone, which is roughly the same moment most impulse purchases start.",
    sections: [
      {
        h: "The screen where the spending starts",
        p: [
          "Most unplanned buying now begins on the phone, in a shopping app or from something that arrived as a notification. The decision happens seconds after an unlock.",
          "That makes the Home Screen the highest-value place to put a running count of days you have not done it. You are not adding a reminder to a different context. You are putting the number in the one place the behaviour actually occurs.",
        ],
      },
      {
        h: "Seeing it does more than logging it",
        p: [
          "The tracking value of a widget is real but secondary. The main effect is that a two-digit number you are proud of is visible at the exact moment you are deciding whether to open a shopping app.",
          "This is the same mechanism behind not breaking a chain. It only works if the chain is somewhere you cannot avoid looking, which a screen you unlock dozens of times a day certainly is.",
        ],
      },
      {
        h: "One tap, no app launch",
        p: [
          "Interactive widgets on iOS can run an action without opening the app. The whole FrugalStreak widget face is one button, so tapping it logs the day and updates the count while the app stays closed.",
          "That matters at the end of the day, when the reward for logging is small and any extra step is enough to make you skip it.",
        ],
      },
      {
        h: "Where to put it",
        p: [
          "Put it on the page you unlock into, ideally next to whichever app is your own weak point. If your problem is a marketplace app, the streak should sit beside it rather than on a tidy second page.",
          "Small is usually better than large here. A small widget fits alongside the apps you actually use, and the number is the only thing that needs to be legible.",
        ],
      },
      {
        h: "Make it yours",
        p: [
          "The widget follows your system appearance and shows the current count against your accent colour. The paid unlock adds a choice of accent colours, which sounds cosmetic but is not entirely: a widget that fits your Home Screen is one you leave in place, and a widget you leave in place is one you keep tapping.",
        ],
      },
    ],
    faq: [
      {
        q: "Does the widget work without opening the app?",
        a: "Yes. The widget face is a button, and tapping it logs today and updates the streak without launching FrugalStreak.",
      },
      {
        q: "Which widget size should I use?",
        a: "The small one, in most cases. It sits alongside your regular apps rather than displacing a row of them, and the only thing that has to be readable is the number.",
      },
    ],
    takeaway:
      "Put the count on the page you unlock into, beside the app you are trying to open less.",
    related: ["track-no-spend-days-iphone", "no-spend-challenge-rules"],
  },
  {
    slug: "no-spend-challenge-vs-budgeting",
    title: "No-spend challenge or budget: which should you try first?",
    metaTitle: "No-Spend Challenge vs Budgeting: Which to Try First",
    description:
      "A budget allocates money across categories. A no-spend challenge interrupts one habit. Here is which one fits the problem you actually have.",
    intro:
      "Try a no-spend challenge first if your problem is unplanned buying, and a budget first if your problem is not knowing where the money goes. They solve different things, and starting with the wrong one is why people conclude that neither works for them.",
    sections: [
      {
        h: "What a budget is for",
        p: [
          "A budget allocates a known income across categories and tells you whether you are inside them. It answers a question about distribution: how much is going to food, transport, and everything else, and is that the split you intended.",
          "It is the right tool when the money genuinely disappears and you could not say where. It also has real upkeep, because categories drift, transactions need reviewing, and most budgeting apps want a bank connection to do that at all.",
        ],
      },
      {
        h: "What a no-spend challenge is for",
        p: [
          "A no-spend challenge is not about distribution. It interrupts one behaviour, which is buying things you had not planned to buy, and it has exactly one input per day.",
          "It answers a much narrower question: did you get through today without an impulse purchase. That narrowness is what makes it survivable. There is nothing to categorise and nothing to reconcile, so there is nothing to fall behind on.",
        ],
      },
      {
        h: "Which problem do you actually have",
        p: [
          "If you could roughly describe your spending but keep buying things you regret, a budget will mostly tell you what you already knew. The knowledge was never the missing part. The interruption is.",
          "If you genuinely cannot account for a few hundred pounds a month, a streak will not find it. Start with a budget, or even a fortnight of writing everything down, and come back to a challenge once you can see the shape of it.",
        ],
      },
      {
        h: "The bank-linking question",
        p: [
          "Most budgeting apps ask to connect to your bank through an aggregator, which many people are not comfortable with, and it is a common reason for abandoning one in the first week.",
          "A no-spend challenge never needs that, because the input is a decision rather than a transaction. FrugalStreak has no bank linking, no account and no server, and it never sees your actual spending. There is nothing to connect.",
        ],
      },
      {
        h: "They work well in that order",
        p: [
          "A no-spend challenge is a good on-ramp. It is easy to start, gives visible feedback within a week, and builds the habit of paying attention. Plenty of people find that a month of it removes the urgency that made budgeting feel necessary.",
          "If you still want the full picture afterwards, budget then, with a habit already in place. Starting with the heavier tool while you also try to change behaviour is how both get dropped at once.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I do both at the same time?",
        a: "You can, and it works best once one of them is already routine. Starting both in the same week means two new systems competing for the same attention, and the one with more upkeep usually collapses first.",
      },
      {
        q: "Will a no-spend challenge actually save money?",
        a: "It reliably reduces unplanned purchases, which for most people is the leak worth closing. It will not restructure fixed costs like rent or a phone contract, and it is not trying to.",
      },
    ],
    takeaway:
      "Unplanned buying is a habit problem, so use a streak. Not knowing where the money goes is an information problem, so use a budget.",
    related: ["no-spend-challenge-rules", "what-counts-as-spending"],
  },
];

export const guideBySlug = (slug: string) =>
  GUIDES.find((g) => g.slug === slug)!;
