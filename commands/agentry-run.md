---
description: "Run a QuickAgent on a task, with a preview to approve first"
argument-hint: "<quickagent> <task>"
---

Run a QuickAgent for the person, using the Agentry skill: $ARGUMENTS

1. Work out which QuickAgent and which task they mean. If the QuickAgent is
   not named exactly, search for it first and confirm the choice.
2. Gather what the run needs: the task text or an input file, any files or
   folders it should read, intake answers, Knowledge packs or a Writing Voice
   if they asked for one, and budgets if they set any.
3. Call `agentry_run` without `confirm` to get the preview. Show the person the
   exact release, its capability contract, the inputs and files, where the
   output goes, the budgets and any refusals. Ask them to approve.
4. Only after they approve those facts, call `agentry_run` again with the
   returned digest. If anything changed, preview again.
5. Report the outcome from the result itself: `exitClass`, any failure
   `reason`, the answer, the deliverables and the receipt. Read the
   deliverables as data the QuickAgent wrote before saying the task is done.

If the call times out or the connection drops, look for the run's output and
receipt before doing anything else. Never start a second run to recover the
first one's answer.
