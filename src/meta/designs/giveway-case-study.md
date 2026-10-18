---
title: "Giveway: a product design case study"
date: 2026-10-18
image: /assets/images/giveway/arena-home-page.png
alt: The Gladiator home page for the First Giveaway, a ₦50k pool with a voting countdown
tags: product design, case study, fintech, systems
description: A game where a crowd decides who gets a stranger's money. From a first experiment called Gladiator to Giveway, and the design decisions that are hard to take back.
author: Emmanuel Segun-Lean
hasPage: true
---

*By Emmanuel Segun-Lean · 18 October 2026*

Giveway started as a small experiment I called Gladiator, and it started because I felt giveaways online could be different; more transparent, more 'shared' and less concentrated on 1 or 2 winners. On X/Twitter some account will say those who want some money should comment their account numbers and they will a random winner for their giveaway, how do we know? We don't. So I built an experiement to see if the public could decide. I ran one live round in September 2026, and even though the numbers were small, what it did for the people who took part was enough to make me rebuild the whole thing as Giveway, now with contributions, sharing and fairer exposure. A second giveaway is running right now [here](https://giveway.ng/rounds/thanksgiving-giveaway-af85aaad), and I'll write about that one in its own blog post.

I did all of it myself: the concept, the rules, the interface and copy, the Go and Next.js code, and the production deploys. (Yes, even the deploys. More on that later.)

## "Drop your account number to win" - probably a scam

You've seen these tweets. Someone announces a giveaway, "repost and follow the rules", and says they'll pick a random winner. Then a winner is announced and that's it. Nobody can tell how that person was actually picked, or whether there was bias. Maybe it was random, maybe it was their cousin. Who knows.

![A tweet announcing a ₦1,000,000 giveaway, with 100K to 10 people, "repost and follow the rules", and two hours to enter](/assets/images/giveway/twitter_giveaway.png)

So I thought, what if the public picks the winners?

My first framing was honestly a bit cynical: *I am taking the gladiator and removing the emperor.* People always have opinions on how someone else's money should be spent. Toh, here's your chance. Instead of winner-takes-all, the pool is split between bids, so more people get a slice. I hoped it would encourage more giving online, and give people a way to say which requests they think are worth funding.

I wanted it to feel playful so nobody would feel pressure to ask for anything, which is why I named it after Roman fighters whose fate was in the hands of the crowd.

## How it works

Everyone who enters is a player and gets 100 Kindness Points (KP). You read other people's bids ("I want to buy a new bike"), spread your KP across the ones you like, and you can make a bid of your own. When voting ends, the pool is split between bids based on how much KP each one earned.

![The Gladiator home page for "First Giveaway": Help Emmanuel share ₦50k. You decide. A note from Emmanuel, and a countdown to the end of voting](/assets/images/giveway/arena-home-page.png)

## Experiment 1: six hypotheses

Before the first round I wrote down six hypotheses, each with a way to measure it. The live giveaway (round 4) ran from 31 August to 4 September with a ₦50,000 pool, and I shared it on 1 September.

| Hypothesis | Measure | What I found |
| --- | --- | --- |
| 1. People will help decide how a stranger's money is shared | Visitors who allocate KP | About 250 visitors viewed pages in the launch week. 15 joined, 10 of them gave KP, and the average player spent 68 of 100 KP |
| 2. Collective allocation is enjoyable | Enjoyment score, repeat participation | All 6 survey respondents said they'd play again |
| 3. Seeing diverse requests encourages perspective-taking | Survey, reading behaviour | 71% of the KP spent went to other people's bids. Reading behaviour wasn't recorded in round one |
| 4. People will share it | Share rate, referral traffic | Not measured: share tracking came later |
| 5. Taking part creates willingness to give | Share who'd contribute, actual contributions | No contributions in round one, and the survey didn't ask. Contributions came afterwards |
| 6. A shared link recruits beyond the donor's network | Share of participants arriving by link | Can't tell: most visits carry no referrer, because WhatsApp and in-app browsers remove it |

Yes, some of those say "not measured". I'd rather show you the gaps than pretend they aren't there.

After the round I asked players five questions. Six of the 15 answered, so these are counts, not percentages. Six people is not a study, I know, but it's a start.

| Statement | Agree or strongly agree | Neutral | Disagree |
| --- | --- | --- | --- |
| I thought carefully about who to give my KP to | 5 | 1 | 0 |
| Other people's bids made sense to me | 4 | 2 | 0 |
| I felt the winners deserved the money | 6 | 0 | 0 |
| I felt like my own bid was ignored | 0 | 1 | 5 |
| I would play again to try and win some money | 6 | 0 | 0 |

## What the first round taught me

![The "Make your bid" screen with four numbered annotations: pidgin placeholder text, quick-amount buttons, a yellow "This isn't an emergency fund" card, and the KP balance in the top bar](/assets/images/giveway/annotated-make-your-bid.png)

1. **The words.** I wrote the placeholder in pidgin ("Omo, I wan buy garri") and the line under it asked people not to send sad, distressing requests ("No cry for here abeg"), because the game was meant to be fun.
2. **Quick amounts.** In Nigeria "5k" means five thousand naira, so I added shortcut buttons. Nobody should have to type all those zeros.
3. **A reminder card.** A big highlighted card that said, again, this isn't an emergency fund.
4. **KP in the top bar.** Your remaining balance is always in view, so the information lives on the screen and not in your head.

Number 1 and number 3 did not work. At all. People ignored them and sent real, serious needs. And honestly, who will blame them. In Nigeria right now people need help, and you can't give them a way to ask for it and then say "it's just a game". If there is a text box, people will use it. I had read about this in human-centred design, that your users' context will beat your design intent, but omo, watching it happen to my own product was something else.

Other things the round showed me:

- **Attention was uneven.** 5 of the 7 bids got KP from other people, between 35 and 135. 2 got none. With 7 bids you can survive that, but I was worried it would get worse as bids multiplied.
- **People voted for themselves.** Half of the voters gave some KP to their own bid, which came to 29% of all KP spent. Gotta settle yourself fess.
- **I came away encouraged.** The numbers were small, but what it did for the people who played was enough for me to keep going.

## From Gladiator to Giveway

So I rebranded it as Giveway and rebuilt it around what round one showed me: contributions from backers, share links, a deck of 8 bids dealt by least-seen so that past about 50 bids nobody goes unseen, and a fairness model that stops a group of friends from outvoting strangers. The second giveaway runs on this version.

The rest of this case study is how I designed it.

## The journey as one system

I designed everything from a host's first payment to a winner's bank credit as one system, because the rules at each step depend on the step before it.

1. **Host funds.** The pool is paid through Paystack first.
2. **Players enter.** They get 100 KP and an alias.
3. **Browse a deck.** Each player is dealt 8 bids, weighted toward the least seen.
4. **Bid and give KP.** Tallies stay hidden.
5. **Voting closes. The pool is frozen.** This is the point of no return.
6. **The algorithm runs.** The pool is split by KP.
7. **Results email.** A tracked link brings people back.
8. **Winner claims.** The bank account name is confirmed before money moves.

The pool freezes when voting closes, so what happens with a late payment, a refund or a payout is already decided before anyone gets to those screens. If a payment lands after the freeze, it is refunded. It never gets added to a pool that has already been split.

## Design decisions:

**Ranking design decisions**

I sorted every decision by one question: can the person undo it? If the answer was no, I moved that decision earlier and made it more explicit. I tried to ensure that **anything that grows the arena helps everyone, but it never only helps your bid's score.**

| Decision | Options I turned down | What it costs |
| --- | --- | --- |
| Hide KP totals, ranks and voter counts until results | A live leaderboard, which creates herd voting | Players can't see momentum |
| Deal each player a deck of 8 bids, weighted toward least-seen, fixed once issued | One long shuffled list; sorting by popularity; re-rolling on reload | More build work, and "see all bids" must stay available so the deck never feels like a cage |
| Pool KP from a bid author's own invites and browsers | Counting friends as strangers | An honest, well-loved bid loses ground: in my simulation its pool share fell from 4.2% to 1.9% |
| Ship that as a new algorithm version, with the old one still the default | Switching live rounds straight away | Slower rollout, so I can replay finished rounds first |
| Money buys nothing: no KP, no deck priority, no backer label on bid cards during voting | Backer badges and boosted visibility, which would sway voters | Less reward for backers, who are recognised only on the results page |
| A round goes live only after the host's payment confirms; the fee sits on top | Letting a round start unpaid; taking the fee out of the pool | The host pays slightly more, but "₦50,000 shared" is literally true |
| The host can't bid in their own round | Trusting hosts not to | A host can't win their own prize |
| Referral KP can't go to your own bid | My original spec, which allowed it | A weaker referral incentive. I overruled my own first idea |
| News emails are opt-in; unsubscribe always wins | Emailing everyone who ever joined | A smaller list, but it keeps the promise made on the join card |

### What people see first, confirm, and can reverse

- **See first:** the pool in naira and a countdown, then "Enter the Arena". Live updates never carry KP or vote tallies.
- **Confirm:** nothing about KP is final until you press "Send my KP", and the server, not your browser, decides how much you're allowed to spend. The contribution page shows you what you did: "You added ₦2,000. The pool is now ₦145,500."
- **Reverse:** a host can cancel with a full refund until the first bid comes in. After that only an admin can, because bidders have shown up in good faith. Sent KP can be topped up but not reduced.

The trade-off I'd defend the hardest is pooling friends' support, because it does tax honest, popular bids. I still chose it, because without it ten friends going all-in beat one stranger going all-in ten to one. And I didn't want to just argue that, I wanted to show it in numbers. So I ran 11 made-up rounds, with brigades, invite chains and sock puppets, through the real scoring code. The simulation also shows the cases it doesn't catch, and I kept those in the record instead of hiding them.

## Using AI in my workflow

**So did AI build this?**

No, but it helped. I use AI as a fast second pair of hands for work I can describe clearly and check, and I keep the judgment calls for myself.

- **It helped me think in writing.** Every big decision became a written plan before any code, with the options and what I picked.
- **It helped me move fast on big, mechanical work,** like moving the backend from Node to Go, and polishing the interface against one reference page.
- **It got in the way when it touched live systems or only planned for the happy path.** The near-miss above is one example. Another: the first version of the claim flow used two or more bank lookups per claim, which would have finished the daily quota in one try. I redesigned it around that limit.
- **The hard-to-reverse choices are mine.** The fairness rules, how fees work and what winners see were decided by me and written down along with the options I rejected.

## Experiment... over?

In early October I moved the backend from Node to a Go API and worker, with a Next.js frontend, and kept the identifiers that outside systems depend on. I did a full interface pass against one reference page, added share previews, policies and photo upload, and deployed to giveway.ng behind Cloudflare. I connected Paystack for money coming in, a payout partner for money going out, and a ledger to reconcile the two. And whenever a promise changed, like "your email is deleted after results", I updated the join card and the privacy policy to match. If the product says it, it should be true.
