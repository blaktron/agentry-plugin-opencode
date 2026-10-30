---
description: "Check that Agentry is ready on this computer and fix what is missing"
---

Check whether Agentry is ready to find and run QuickAgents on this computer,
using the Agentry skill.

1. If the `agentry_*` tools are not available, the plugin's server did not
   start. Check `agentry --version` and `node --version`, and help the person
   install or update the Agentry CLI as the skill describes, then ask them to
   restart this session.
2. Call `agentry_doctor` and report, in plain words, what is ready and what is
   not: the runner policy, Docker, the runtime images and which model key
   names are set (never their values).
3. Call `agentry_whoami`. If the person is not signed in, tell them to run
   `agentry login` in their own terminal and to come back when it finishes.
4. If `agentry_doctor` says the runner is not set up, offer `agentry_setup`
   with the person's choice of model provider, preview it, and run it only
   after they agree.

Finish with one short list: what works now, and the next step for anything
that does not.
