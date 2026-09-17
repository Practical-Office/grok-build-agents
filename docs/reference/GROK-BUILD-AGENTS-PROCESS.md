# Grok Build Agents — Living Process

**Version:** 2.4  
**Last Updated:** 2026-09-17  
**Owner:** Practical AI Engineering  
**Purpose:** Source of truth for how the team builds and runs agents with Grok Build. Course modules must lag this document.

---

## 1. Goals

- Give every team member a safe, repeatable way to build basic agents.
- Prevent uncontrolled or overly broad agents.
- Make Plan Mode and human approval non-negotiable.
- Capture useful work as reusable Skills.
- Keep every agent narrow (one job per agent).

## 2. Audience

Anyone on the team who needs to build or run basic agents — Sales, Support, Ops, or Engineering. Steps are written so people with little technical background can follow them. No coding knowledge is required.

## 3. Core Framework: AGENT

Use this sequence for every new agent:

| Letter | Meaning | What to do |
|--------|---------|------------|
| **A** | Aim | State the outcome in one clear sentence + a Definition of Done |
| **G** | Give identity | Create SOUL, IDENTITY, and USER files (let Grok write them under Plan Mode) |
| **E** | Equip | Give context, tools, and short playbooks |
| **N** | Narrow | One agent = one lane. A Manager agent coordinates only when you already have two or more narrow agents — it never does the work itself |
| **T** | Trust | Grant autonomy in stages. Never full freedom on day one |

## 4. Hard Rules (Team-wide)

1. **Always start non-trivial work in Plan Mode.**
2. **Never approve a plan you do not understand.**
3. **Keep each agent to a single clear job.**
4. **Do not give an agent access to money, client data, or external systems until it has proven reliable on safer tasks.**
5. **If you are unsure, stop and ask a human.** Do not let the agent guess.
6. **Capture good results with `/skillify`** so the team can reuse them.

## 5. Standard Workflow

1. Create a dedicated folder for the agent on your computer (example: `~/agents/inbox-helper/`).
2. In the **same terminal**, exit any old `grok` session if one is running. `cd` into this module’s folder or the agent’s folder, then start a fresh `grok` session. Use a second terminal only if you prefer.
3. Inside the **Grok Build CLI** (the chat window where you type to Grok), paste your goal and always end with:  
   `Use Plan Mode. Do not make any changes until I approve the plan.`  
   To enter Plan Mode: (1) say **Use Plan Mode** or paste that sentence, (2) type `/plan`, or (3) press **Shift+Tab** until Plan Mode is on.
4. Read the plan carefully.
5. Approve only if every step is clear and safe.
6. Let Grok execute. After you approve, Grok may leave Plan Mode. Before your next request, return to Plan Mode with `/plan`, Shift+Tab, or by pasting the Plan Mode sentence again.
7. Test the result yourself against the Definition of Done.
8. If the result is useful, run `/skillify` inside Grok to save it (after **one successful task** — no streak required for skillify).
9. Write or update an `AGENTS.md` file in the folder with the agent’s boundaries and current trust stage (via Plan Mode).

## 6. Trust Stages

Short learner table (matches Quick Reference):

| Stage | Meaning |
|-------|---------|
| 1 | Propose only — you approve everything |
| 2 | Draft / sort — you review before use |
| 3 | Limited actions — you spot-check |
| 4 | Scheduled work — you monitor |

**Promotion gates:** 3 good runs → Stage 2 · 5 good outputs, zero violations → Stage 3 · 2 weeks, no escalations → Stage 4 candidate · team lead approval for Stage 4

Never jump from Stage 1 to Stage 4. Most team agents stay at Stage 2 or 3 for a long time.

**Stage 3 short log (how-to):** While at Stage 3, keep a short spot-check note with the agent (in the agent folder / `AGENTS.md`). Each entry: date; what you spot-checked; pass or fail (one line each is enough).

## 7. When to ask the AI first

Use these when the job is clear and the risk is low — you are tightening the same agent, not expanding its power:

- Plan is long, unclear, too broad, or keeps growing → paste: `Simplify the plan. Keep only the minimum steps. Use Plan Mode.` Escalate if scope grows, access/permissions are involved, or you are unsure.
- Output is almost right → ask for **one** small fix; reject plans that rewrite everything
- You forgot a boundary → tell it to update IDENTITY or AGENTS.md; approve boundary changes **only if** they add boundaries or tighten existing ones — never if they remove or soften
- Something worked once → run `/skillify` so the next run starts from a known good path (one successful task is enough; trust-stage promotion still uses the gates above)

Ask-AI-first is OK for a **small cluster of related fixes in one plan**. Escalate if scope grows, access/permissions are involved, or you are unsure.

Rule: you must still understand the plan before you approve. “Ask the AI” does not mean “let it run until it looks done.”

## 8. When to escalate to a human

Stop the agent. Do not approve. Do not keep prompting until it “works.”

- Plan is unclear or too broad (after one clarify attempt)
- Agent wants access you are not comfortable giving
- Results look wrong or inconsistent
- You cannot explain what it is about to do
- Install or permissions fail

Stop the agent. Ask a person with the folder path and what you tried.

## 9. Required artifacts for every complete agent

- A clear Aim + Definition of Done (written down in the folder)
- SOUL.md, IDENTITY.md, and USER.md (who the agent is and how it behaves)
- AGENTS.md with team rules, hard boundaries, trust stage, and stop conditions
- Current Trust Stage recorded in AGENTS.md
- Folder that contains only that agent’s work

## 10. After you have agents

- **Daily or weekly ritual:** pick one named agent for a recurring job (example: morning follow-up drafts). Open that folder, run `grok`, use Plan Mode, do the job.
- **On demand:** for other jobs, `cd` into the **right folder** (that agent’s folder, not the practice folder) and start a new `grok` session there. Do not mix agents in one folder or one session.
- **New session rule:** use the same terminal; exit any old `grok` if running; `cd` to the agent’s or module’s folder; start a fresh `grok`. A second terminal is fine if you prefer.

## 11. Manager agents (later)

A Manager agent is for coordination only — **never** for doing tasks.

**When allowed:** you already have at least two narrow worker agents, each at Trust Stage 1 or higher, each in its own folder.

**What it does:** when a job arrives, it tells you which agent folder to open. It does not read files, draft messages, or run commands in worker folders.

**What it does not do:** execute work, merge agents into one mega-agent, or skip Plan Mode in worker folders.

The core course does not include a Manager build lab. Learners: see [Manager](../manager.html) on the course site for pastable terminal steps (create folder, `cd`, start `grok`) and the pinned multi-line Manager prompt. See the team backlog for a future optional module.

## 12. Updating This Document

Propose changes via a ticket. Course modules must be updated after this process document changes — never the other way around.

**Exception (2026-09-17 course clarity PR):** trust stages and escalation wording were copied from Quick Reference into this document so learners saw one story. After that merge, this document is master again; Quick Reference should be updated from here for those topics.

**Approval:** Team lead.
