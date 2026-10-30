---
description: "Create or improve a QuickAgent, then validate, review and test it"
argument-hint: "<what the QuickAgent should do, or a folder to improve>"
---

Help the person build a QuickAgent, using the Agentry skill: $ARGUMENTS

1. Agree on what it should do, what it needs to read or reach, and the folder
   it lives in. Keep files the person already has; change only what they
   asked for.
2. Either write the manifest and instructions with this host's file tools, or
   offer `agentry_draft` to draft or revise the package. `agentry_draft` is a
   paid model run: preview it, show what it reads and spends, and confirm only
   after the person agrees.
3. Call `agentry_validate` on the folder and fix what it reports.
4. Offer `agentry_review` (AI Review). Preview it, confirm after approval, and
   explain its findings and predicted gate outcome. The registry still runs
   its own checks when the QuickAgent is submitted.
5. Test it with a local `agentry_run` on a small task, previewed and approved
   like any other run.

Publishing is the person's step in their own terminal: `agentry publish`
from the QuickAgent's folder. The registry's pipeline decides whether the
release is published, held or rejected; say so, and never describe a
submitted QuickAgent as published before the registry does.
