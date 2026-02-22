---
title: 'Ontologies Over Models: The Infrastructure Nobody Wants to Build'
description: 'We need better models. We also need better data structures. But the industry is obsessed with one and ignoring the other. On why both matter, and where the real leverage is right now.'
pubDate: 'Feb 21 2026'
category: 'artificial-intelligence'
tags: ['ai', 'data-structures', 'ontology', 'palantir', 'infrastructure', 'ai-strategy']
featured: false
draft: false

seo:
  metaTitle: 'Ontologies Over Models: Why We Need Both'
  metaDescription: 'The unsexy infrastructure that makes AI actually work. Why Palantir wins and why the industry is optimizing for the wrong variable.'
  keywords: ['ontology', 'data structure', 'AI infrastructure', 'knowledge graphs', 'AI strategy', 'Palantir']
  author: 'Matthew'
  articleSection: 'Technology'
  noindex: false
  nofollow: false
---

# Ontologies Over Models: The Infrastructure Nobody Wants to Build

### On Data Structures, Invisible Power, and Why We're Winning Half the Game

---

I'm sitting in a Slack channel at 4:23 AM watching three engineers argue about whether to use GPT-5 or Claude Opus for a system that's going to fail regardless. This is the entire AI industry right now. Bright people, good intentions, completely missing half the actual problem.

The model matters. GPT-5 is genuinely better than GPT-4. Claude Opus outperforms Sonnet on hard reasoning tasks. These aren't marketing lies. Model improvements are real and they compound.

But here's the thing: a better model on garbage data is still garbage. And we're spending 90% of our energy on the 10% that's the model.

Welcome to the infrastructure work nobody wants to build.

## Better Models Are Real (But They're Not Enough)

Let me be clear about this upfront. I'm not saying models don't matter. Claude 3.5 is demonstrably better than Claude 3. GPT-5 represents a real step forward in reasoning. These improvements are meaningful. If you're working on hard problems, a better model can be the difference between a system that works and one that doesn't.

The issue isn't that we're building better models. The issue is that we're *only* building better models.

You've got three paths to make an AI system better:

1. Get a better model
2. Get better data
3. Get clearer structure around your data

The industry is optimizing for path 1 exclusively. Because it's purchasable. Because it ships as a product. Because you can buy your way from "not working" to "works" without having to think deeply about what you're actually trying to do.

Paths 2 and 3? Those require work. Thinking. Domain expertise. Nobody gets a promotion for "we defined a better ontology."

## The Stupidity We're Committing

Here's how it actually works in practice. You've got a dataset. Thousands of records. Maybe millions. Customer records, transaction logs, behavioral data, signals from every direction. It's a mess because real data is always a mess. Built by humans, collected through different systems, modified seventeen times, inconsistent naming conventions, relationships that nobody documented.

So what do we do? We buy a better model. We load all that messy data into it and ask it to make sense of things. We're paying for computation at the highest tier because we're asking the model to *infer* the structure that should have been *defined* from the start.

This is like hiring a translator to figure out what language you're speaking. You're paying for the cognitive work twice. Once to understand the structure, once to actually solve the problem. It's wasteful, but it works. Kind of. If you throw enough money at it.

I watched a company last month spend $400,000 on a GPU cluster. State of the art. Liquid cooling. The kind of hardware that makes you feel like you're at the frontier of something. They upgraded to GPT-5. Threw more tokens at it. Three weeks later, the model was returning technically correct answers that made no business sense because it didn't understand that "customer_id" and "user_id" were sometimes the same thing and sometimes weren't. The data was telling it lies and it believed them faithfully.

Nobody had built an ontology. Nobody had sat down and said: here is what these things are, here is how they relate, here is what matters.

Could a better model have eventually figured it out? Probably. Given enough tokens, enough examples, enough computational overhead. But they didn't need a better model. They needed ten hours of someone's time sitting down with the database schema and a whiteboard.

The model improvements are real. But they're being used to patch over structural problems that shouldn't exist in the first place.

## What an Ontology Actually Is (And Why It Makes Everything Else Work Better)

Let me be clear about the terminology first because "ontology" is one of those words that makes people's eyes glaze over. Sounds like philosophy. Sounds like wasting time arguing about Plato.

It's not. An ontology is just a structured way of telling the AI what things are.

Think of it like this: you're building a specification. What is a customer? Not the English language definition. Your definition. In your business, with your constraints. What data belongs to a customer? What relationships does a customer have? What does "customer" mean when it intersects with "account" or "transaction" or "subscription"? These aren't academic questions. They're the difference between an AI system that works well and one that works despite itself.

Here's the key insight: a better ontology makes your *existing* model perform better. A cleaner schema means cleaner inputs. Cleaner inputs mean the model doesn't have to spend tokens figuring out what you meant. Which means you can use a cheaper model or fewer tokens or get higher quality output from the same model.

This is what Palantir figured out a long time ago, and it's boring enough that almost nobody talks about it.

They don't sell you a model. They sell you a way to structure knowledge. They spend months (sometimes years) with clients building out ontologies. Defining entities. Mapping relationships. Making the implicit explicit. Only then does the AI work, because the AI finally has something clean to work with.

And here's the thing: once you have that clean ontology, any competent model can work with it. You don't need GPT-5. Claude Opus works. Claude Sonnet works fine. Even smaller models work. Because the data is telling them the truth instead of contradicting itself.

## The Economic Reality (And Why It's Backwards)

The model wars are actually over. Claude won or OpenAI won or Google won, depending on your use case. They're all fine. They're all good enough.

But the industry is still acting like model selection is the critical variable. Which means we're spending billions on compute when we should be spending thousands on people who actually understand the domain.

Think about the economic logic here:

- A new model drops, what happens? $400k GPU cluster gets purchased.
- Better ontology gets built, what happens? Someone gets paid $50k for a consulting engagement.

The GPU cluster is visible. It's purchasable. It shows up on the P&L. The ontology work is invisible. It doesn't have a line item. It's not a differentiator you can list in a product spec.

So we optimize for the visible thing. And we leave leverage on the table.

Companies that have figured this out (Palantir, serious intelligence agencies, hedge funds that actually win) spend less on hardware than the industry average. Because they spend more on understanding. The economics are backwards from what you'd expect.

## Why Developers Are Starting to Notice

Hacker News had a story this week that got 108 upvotes. Someone built zclaw, a personal AI assistant that runs in under 888 kilobytes on an ESP32. An entire AI system on a microcontroller. No cloud. No GPU. Just the model and a clean understanding of what it's supposed to do.

The reason this works isn't because the model is amazing. It's because the scope is defined. The ontology is clear. The system knows exactly what it's working with. Tight constraints, clear structure, focused purpose.

Meanwhile, you've got companies with unlimited compute producing mediocre results because they're trying to throw models at problems without understanding the underlying structure.

Developers are starting to see the pattern. The Palantir strategy is leaking into open source. People are building knowledge graphs. Schema-first approaches. The signal is clear: model quality matters, but structural clarity matters *more* when you have both variables in play.

This is the inflection point. Not "models don't matter." But "models matter less than we think when ontologies are missing."

## The Uncomfortable Part (Where I Tell You What You Don't Want to Hear)

You need better models. And you need better data structures. But the industry is only building better models.

This is like building a Ferrari and paving it with mud. The car is amazing. The road is awful. The bottleneck is obvious, but we keep upgrading the car because that's the purchasable variable.

The company that wins isn't going to be the one with the best model. It's going to be the one that understands their domain so deeply that they can represent it in a clean ontology, then use a competent (but not necessarily the best) model and get better results than someone with unlimited compute throwing GPT-5 at confused data.

Because better data structure beats better models when you can only have one. But most companies will never get both.

Which means we're going to keep seeing this: bright engineers arguing about model selection at 4 AM while the data structure underneath is a mess. GPU clusters humming away, burning electricity, producing confident hallucinations. Billions spent on compute that wouldn't be necessary with basic structural work.

The infrastructure work (the ontology work, the "let me sit down and actually understand this domain" work) is unsexy and invisible and doesn't fit into quarterly earnings reports.

But it's where the actual leverage is. And it's where the gap is widest.

## The Closing (Without False Resolution)

We're in the middle of winning the model war and losing the infrastructure war simultaneously.

The models are good. They're getting better. This is real progress.

But the systems we're building them into are still garbage. Confused data. Unclear relationships. No structural understanding of the domain.

So we're going to keep seeing this dynamic: bright people buying better models to solve problems that better models can't actually solve. Because the problem isn't computational power. The problem is clarity.

The companies that figure this out first (that invest in both better models AND better ontologies) won't be the ones with the biggest GPUs. They'll be the ones with the clearest understanding of their domain, represented properly, available to any competent model.

This is the infrastructure war. It's already happening. You're just not seeing it because it doesn't fit into headlines.

But Palantir sees it. The developers on Hacker News see it. The companies actually winning in AI see it.

The question is: do you? And more importantly, are you building for it?

---

*Better models are real. Better ontologies are invisible. Both matter. The industry is optimizing for one. Which is why the real leverage lives in the other.*
