# Grok Build Agents — Living Process

**Version:** 2.2  
**Last Updated:** 2026-08-13  
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
| **N** | Narrow | One agent = one lane. Use a Manager agent only when coordination is truly needed |
| **T** | Trust | Grant autonomy in stages. Never full freedom on day one |

## 4. Hard Rules (Team-wide)

1. **Always start non-trivial work in Plan Mode.**
2. **Never approve a plan you do not understand.**
3. **Keep each agent to a single clear job.**
4. **Do not give an agent access to money, client data, or external systems until it has proven reliable on safer tasks.**
5. **If you are unsure, stop and ask.** Do not let the agent guess.
6. **Capture good results with `/skillify`** so the team can reuse them.

## 5. Standard Workflow

1. Create a dedicated folder for the agent on your computer (example: `~/agents/inbox-helper/`).
2. In the terminal: `cd` into that folder, then run `grok`.
3. Inside the **Grok Build CLI**, paste your goal and always end with:  
   `Use Plan Mode. Do not make any changes until I approve the plan.`
4. Read the plan carefully.
5. Approve only if every step is clear and safe.
6. Let Grok execute.
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

## 7. When to Stop

Stop and escalate immediately if:

- The plan is unclear or too broad
- The agent asks for access you are not comfortable giving
- Results look wrong or inconsistent
- You cannot explain what the agent is about to do

## 8. Required artifacts for every agent

- A clear Aim + Definition of Done
- IDENTITY (or AGENTS.md) with hard boundaries written down
- Current Trust Stage recorded
- Folder that contains only that agent’s work

## 9. Updating This Document

Propose changes via a ticket. Course modules must be updated after this process document changes — never the other way around.

**Approval:** Team lead.
