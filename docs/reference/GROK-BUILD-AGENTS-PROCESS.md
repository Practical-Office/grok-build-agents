# Grok Build Agents — Living Process

**Version:** 2.3  
**Last Updated:** 2026-09-16  
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
2. In the terminal: `cd` into that folder, then run `grok`. Start a **new session** for each agent folder (or each course module).
3. Inside the **Grok Build CLI**, paste your goal and always end with:  
   `Use Plan Mode. Do not make any changes until I approve the plan.`  
   You can also press **Shift+Tab** to cycle to Plan Mode, or type `/plan`.
4. Read the plan carefully.
5. Approve only if every step is clear and safe.
6. Let Grok execute. After you approve, Grok may leave Plan Mode. Before your next request, return to Plan Mode with `/plan`, Shift+Tab, or by pasting the Plan Mode sentence again.
7. Test the result yourself against the Definition of Done.
8. If the result is useful, run `/skillify` inside Grok to save it.
9. Write or update an `AGENTS.md` file in the folder with the agent’s boundaries and current trust stage (via Plan Mode).

## 6. Trust Stages

| Stage | What the agent may do | What you must do | Gate to next stage |
|-------|-----------------------|------------------|--------------------|
| 1 | Propose only | Approve every step | 3 correct plans + outputs in a row |
| 2 | Draft / sort / label | Review every output before it is used | 5 correct outputs, zero boundary violations |
| 3 | Limited pre-approved actions | Spot-check regularly and keep a short log | Documented success + no escalations for 2 weeks |
| 4 | Scheduled / recurring work | Monitor results and keep the guardrails | Explicit approval from team lead |

Never jump from Stage 1 to Stage 4. Most team agents stay at Stage 2 or 3 for a long time.

## 7. When to ask the AI first

Use these when the job is clear and the risk is low — you are tightening the same agent, not expanding its power:

- Plan is long or fuzzy → paste: `Simplify the plan. Keep only the minimum steps. Use Plan Mode.`
- Output is almost right → ask for **one** small fix; reject plans that rewrite everything
- You forgot a boundary → tell it to update IDENTITY or AGENTS.md; approve only if boundaries get stricter or stay the same
- Something worked once → run `/skillify` so the next run starts from a known good path

Rule: you must still understand the plan before you approve. “Ask the AI” does not mean “let it run until it looks done.”

## 8. When to escalate to a human

Stop the agent. Do not approve. Do not keep prompting until it “works.” Ask a teammate, team lead, or IT:

- You cannot explain what the agent is about to do
- It asks for access, money, client data, or external send you have not approved
- Outputs look wrong or inconsistent after one clarify attempt
- The plan keeps growing past one job or one folder
- Install, sign-in, or permissions fail (Setup / IT)
- You feel pressure to “just approve” so you can move on

Escalate means: **a person**, with the folder path and what you already tried. It does not mean starting another AI chat.

## 9. Required artifacts for every complete agent

- A clear Aim + Definition of Done (written down in the folder)
- SOUL.md, IDENTITY.md, and USER.md (who the agent is and how it behaves)
- AGENTS.md with team rules, hard boundaries, trust stage, and stop conditions
- Current Trust Stage recorded in AGENTS.md
- Folder that contains only that agent’s work

## 10. After you have agents

- **Daily or weekly ritual:** pick one named agent for a recurring job (example: morning follow-up drafts). Open that folder, run `grok`, use Plan Mode, do the job.
- **On demand:** for other jobs, `cd` into the right agent folder and start a new `grok` session there. Do not mix agents in one folder or one session.
- **New session rule:** start a fresh `grok` session when you switch agent folders or start a new course module.

## 11. Manager agents (later)

A Manager agent is for coordination only — **never** for doing tasks.

**When allowed:** you already have at least two narrow worker agents, each at Trust Stage 1 or higher, each in its own folder.

**What it does:** when a job arrives, it tells you which agent folder to open. It does not read files, draft messages, or run commands in worker folders.

**What it does not do:** execute work, merge agents into one mega-agent, or skip Plan Mode in worker folders.

The core course does not include a Manager build lab. See the team backlog for a future optional module.

## 12. Updating This Document

Propose changes via a ticket. Course modules must be updated after this process document changes — never the other way around.

**Approval:** Team lead.
