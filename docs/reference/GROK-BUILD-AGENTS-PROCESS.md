# Grok Build Agents — Living Process

**Version:** 1.0  
**Last Updated:** August 13, 2026  
**Owner:** Practical AI Engineering  
**Purpose:** Source of truth for how the team builds and runs agents with Grok Build.

The published course must stay aligned with this document.

---

## 1. Goals

- Give every team member a safe, repeatable way to build basic agents
- Prevent uncontrolled or overly broad agents
- Make Plan Mode and human approval non-negotiable
- Capture useful work as reusable Skills
- Keep agents narrow (one job per agent)

---

## 2. Core Framework: AGENT

Use this sequence for every new agent:

| Letter | Meaning | What to do |
|--------|---------|------------|
| **A** | Aim | State the outcome in one clear sentence + Definition of Done |
| **G** | Give identity | Create SOUL, IDENTITY, and USER files (let Grok write them) |
| **E** | Equip | Give context, tools, and playbooks |
| **N** | Narrow | One agent = one lane. Use a Manager agent only when needed |
| **T** | Trust | Grant autonomy in stages. Never full freedom on day one |

---

## 3. Hard Rules (Team-wide)

1. **Always start non-trivial work in Plan Mode.**
2. **Never approve a plan you do not understand.**
3. **Keep each agent to a single clear job.**
4. **Do not give an agent access to money, client data, or external systems until it has proven reliable on safer tasks.**
5. **If you are unsure, stop and ask.** Do not let the agent guess.
6. **Capture good results with `/skillify`** so the team can reuse them.

---

## 4. Standard Workflow

1. Open a dedicated folder for the agent work.
2. Run `grok`.
3. State the goal and explicitly say “Use Plan Mode.”
4. Review the plan carefully.
5. Approve only if it is clear and safe.
6. Let Grok execute.
7. Test the result yourself.
8. If the result is useful, run `/skillify` to save it.

---

## 5. Trust Stages

| Stage | What the agent may do | Human action |
|-------|-----------------------|--------------|
| 1 | Propose only | Review and approve every step |
| 2 | Draft / sort / label | Review outputs before they are used |
| 3 | Limited actions (pre-approved types) | Spot-check regularly |
| 4 | Scheduled / recurring work | Monitor results and keep guardrails |

Never jump from Stage 1 to Stage 4.

---

## 6. When to Stop

Stop and escalate if:

- The plan is unclear or too broad
- The agent asks for access you are not comfortable giving
- Results look wrong or inconsistent
- You cannot explain what the agent is about to do

---

## 7. Updating This Document

Propose changes via a ticket. Course modules must be updated when process wording here changes.

**Approval:** Team lead.
