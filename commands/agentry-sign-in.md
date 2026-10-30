---
description: "Sign in to an Agentry registry and check which account is in use"
argument-hint: "[registry URL]"
---

Help the person sign in to Agentry, using the Agentry skill: $ARGUMENTS

1. Call `agentry_whoami` and say which account and registry are in use, if any.
2. If they need to sign in, or want another registry, ask them to run this in
   their own terminal on this computer, and to come back when it finishes:

   ```sh
   agentry login
   ```

   For a registry other than the default, add `--registry <REGISTRY_URL>`.
   The browser opens on this computer, and the CLI keeps the token in the
   system keychain.
3. Call `agentry_whoami` again and confirm the account.

Never ask for a token or password in the chat, and never run a sign-in command
on the person's behalf with a credential in it.
