# stripe.html — plain-language markup

For a reader who has never heard of Stripe, checkout theming, or design systems.
Nothing in `dist/stripe.html` has been changed. Line numbers are from the current file.

Rule I applied throughout: **a stranger should never meet a term before they meet the thing.**

---

## The one gap that causes most of the confusion

The page never says what Stripe's checkout is, or what theming means, before it starts
analysing them. A newcomer's first six questions are never answered:

1. What is Stripe? → the company whose payment page thousands of shops use instead of building their own
2. What is "the checkout"? → the screen where you type your card number
3. What does a shop get to change about it? → its colours, its font, the corner shapes, roughly
4. What are the "two surfaces"? → the page Stripe hosts on its own site, and the form dropped inside the shop's site
5. Who is "the merchant"? → the shop
6. What is a "design system"? → the kit of parts one company gives everyone else to build with

Answering 1, 2 and 3 in the first paragraph is worth more than every other fix on this list.

---

## Line by line

### Title, line 13

- **Now:** "Stripe Checkout Theming, Design System Study"
- **Plainer:** "Why shops can't tell what their Stripe checkout looks like"
- **Why:** the current title names two categories. The replacement names a problem.

### Banner, lines 51–55

- **Now:** "Making an excellent design system legible" / "A self-initiated study of Stripe's checkout theming. The components held under every stress I could build. What didn't hold was the merchant's view of system. The system enforces limits in design, and does not notify the merchant."
- **Plainer heading:** "The checkout that doesn't tell you what it did"
- **Plainer body:** "Thousands of shops let Stripe handle their payment page, and paint it in their own colours. I spent a week trying to break that paint. The page never broke. What broke was the shop's picture of it: Stripe quietly overrules some choices, and tells nobody."
- **Why:** "legible", "self-initiated", "components", "the system" are all insider words, and three of them appear before the reader knows what page we mean. Also fixes the broken phrase "the merchant's view of system".

### Overview, lines 73–76

- **Now:** opens with "Most design system case studies are written from a team, that shares a Figma library and a Slack channel."
- **Plainer:** "When you buy something online, the page where you type your card number is often not built by the shop. It's Stripe's, dropped into the shop's site. Stripe lets each shop recolour it so it feels like the rest of the shop. Thousands of businesses do this, in dozens of languages and currencies, and none of them can see what the others see."
- **Why:** the current opening is a remark about case-study conventions. A newcomer has no idea what is being compared. Start with the thing everyone has seen: a payment page.

### The problem, lines 98–101

- **Now:** "Stripe's checkout is the most interesting design system problem I know of. The merchant's designer owns the brand, has a colour and a typeface and a set of rules…"
- **Plainer:** "Three people meet on this page and want different things. The shop's designer wants it to look like the shop. The shop's developer types the colours in and moves on. The shopper just wants to pay, and only notices the page at all if something looks wrong, at the exact moment they're being asked for a card number. Nobody in that chain can see what Stripe decided on their behalf."
- **Why:** "design system problem", "owns the brand", "a set of rules" are abstractions. Named people doing things are not.

### How I tested it, lines 111–112

- **Now:** "I gave myself one merchant's brand and tried to break it. I used a sandbox to compare. The sandbox is not a Stripe product but it uses Stripe's test keys to load Stripe's real payment form."
- **Plainer:** "I invented a shop with a deliberately loud brand, hot pink and heavy, and tried to break its checkout. I built a test page that shows Stripe's real payment form and lets me change one thing at a time: the language, the currency, the font, how many ways you can pay. Stripe has a practice mode where no real money moves, so everything here is the real thing running on fake money."
- **Why:** "sandbox" and "test keys" are developer words. "Practice mode where no money moves" is the same fact, understandable by anyone.

### Tests, lines 115–131

- **Now:** "Theme: Hot pink, hard shadows, pill shapes, and a left padding rule written the way an English-speaking office writes one."
- **Plainer:** "Colours and shapes: hot pink, heavy shadows, pill-shaped buttons, and one instruction written the way anyone in an English-speaking office writes it, put a bit of extra space on the left."
- **Now:** "Typeface: Playfair Display, which has no Arabic letters…"
- **Plainer:** "Font: Playfair Display, a font with no Arabic letters in it at all, against two fonts that do have them."
- **Now:** "Language: English, German, Japanese, and Arabic, which reads right to left and mirrors the whole form."
- **Plainer:** "Language: English, German, Japanese, and Arabic. Arabic reads right to left, so the entire form has to flip, labels, boxes, buttons and all."
- **Now:** "Currency: Five, including yen, which has no decimal places, and dinar, which has three."
- **Plainer:** "Currency: five of them, including yen, which has no equivalent of cents, and Kuwaiti dinar, which has three digits after the point instead of two."
- **Why:** each one explains the trap inside the test, so the reader knows what "breaking" would look like before it happens.

### Components, lines 148–150

- **Now:** "The components are excellent. I could not break them. Arabic and right-to-left, multiple currencies, no-decimal currencies, they all held up."
- **Plainer:** "Stripe's payment form itself is very well made. I could not break it. Arabic flipped the whole layout correctly. Yen dropped its decimals. Nine payment methods stacked up without collapsing. A phone screen held together. The form is not the problem. What a shop can see and control is."
- **Why:** "components held" means nothing to a stranger. Naming what survived each test shows it.

### Findings intro, lines 173–180

- **Now:** "Stripe's system constantly makes decisions on the merchant's behalf. The system is less controllable than they make it to be." / "I started this project expecting to redesign components. The actual opportunity arose where a specific theme gets chosen. For hosted Checkout, it previews a single condition. For the embedded form, where most of these findings are, there is no editor at all."
- **Plainer:** "Stripe makes decisions for the shop all the time: ignoring a colour it can't read, refusing a style, flipping a layout, choosing a language. It just doesn't mention any of them." / "I expected to find a broken form to redesign. What I found is that the shop is never told what happened, and the place to fix that is the screen where the shop picks its colours in the first place."
- **Why:** "less controllable than they make it to be" is unparseable. "Hosted Checkout" and "embedded form" appear here without ever being defined (see the missing-piece note below).
- **Also:** line 175 currently says "than they make it to be", which reads as a typo for "than they think it is".

### Finding 1, lines 184–192

- **Problem:** it starts with where brand colours are stored, which is a developer's concern, and the visible consequence arrives last.
- **Plainer opening:** "A shop sets its pink. The checkout comes out purple, and nothing anywhere says why."
- **Then the mechanism, plainly:** "Every company keeps its brand colour written down in one place, so that changing it once changes it everywhere. Stripe won't read from that place. The colour has to be typed in by hand, as #FF3D7F, which means it now lives in two places, and one of them will be forgotten. See-through colours are refused outright, so a brand built on soft overlays loses them here."
- **Then the part that matters:** "And if the colour is wrong, the checkout still loads, in Stripe's purple instead of the shop's pink. The only complaint is one line in a technical log that nobody opens after launch day. A shop can trade for months with a payment page carrying none of its brand."
- **Why:** #FF3D7F, rgb() and rgba() are fine to keep as evidence, as long as the sentence around them says what they cost.

### Finding 2, lines 198–211

- **Now:** "Stripe lets a merchant restyle the checkout by naming its pieces: the input boxes, the labels above them, the payment method tabs."
- **Plainer:** "Stripe lets a shop restyle the checkout piece by piece, the boxes you type into, the words above them, the tabs for each way of paying. Each piece accepts a short list of changes: colour, spacing, borders, rounded corners. Ask for anything else and it's thrown away. No error, no warning. The page loads as though the instruction had never been written."
- **Keep:** "The limit itself is right…" and the designer/developer sentence. Both are already plain and they're the best lines in the section.

### Finding 3, lines 217–229

- Already the most readable finding. Two small things:
- "A checkout is not only the merchant's brand" → "The checkout is never only the shop's brand."
- "Nothing changes this and the merchant is given no warning about it" → "No setting changes this, and nothing warns a shop that switching on a payment method also spends its brand."

### Finding 4, lines 240–243

- **Now:** "A shopper in Dubai with an English phone taps Arabic on a merchant's site. Everything turns Arabic until the payment step, which stays English."
- **Plainer:** add one sentence at the end: "So the shop can't choose Arabic for its own checkout. The shopper's phone decides, and if their phone is set to English they get an English payment page in the middle of an Arabic shop."
- **Why:** the current version says what happened but never states the rule that caused it.

### The design, lines 259–310

- "Stress preview in the Branding page" → "Show the shop what its checkout looks like elsewhere"
- "Typeface coverage" → "Warn when the font has no letters for a language"
- "Language gap" → "Say which languages each version can actually use"
- Line 271: "right to left, a no-decimal currency, a crowded payment list, phone width" → "Arabic, yen, nine ways to pay, and a phone screen"
- Line 294: "roughly 3.4:1 contrast, under the accessibility standard for body text" → "roughly 3.4 to 1, below the level considered readable. White text on that pink is hard to read, and nothing said so while I was picking it."

### Outcome, lines 404–416

- Already plain. One word: "A brand colour can be dropped, a style can be ignored, a language can be out of reach" → "…a language can be impossible to ask for".

---

## The missing piece, worth more than any sentence above

**Hosted page vs embedded form is never explained, and four findings depend on it.**

You already have both screenshots: `stripe-branding-today.png` shows the hosted page, and
the `F3-*` screenshots show the embedded form. One short passage after "How I tested it",
with those two images side by side:

> Stripe sells the same checkout twice. A shop can send you to a page on Stripe's own site,
> or drop the payment form straight into its own. They look almost identical. They do not
> behave identically, and that gap is where half of this study lives.

Everything after that becomes readable, because the reader finally knows what the two
things being compared are.

---

## Comprehension check

Give the page to the same person and ask four questions:

1. What does Stripe do for a shop?
2. What can a shop change about its checkout?
3. What goes wrong?
4. What did she propose?

Three out of four correct means it's readable. Fewer than that, the fix is earlier in the
page than wherever they got lost.
