---
layout: post
title: "Building CLIs in Dart"
date: 2019-06-29 16:47:42 +0200
author: Bartek
published: false
---

## Building CLIs in Dart

Topics to talk about:

- Recommended project structure
- Sharing arguments from top-level `CommandRunner` to subcommands
- Subprocesses

  - Starting: `.start` vs `.run`, which to use when
  - Windows peculiarities - `runInShell` argument
  - Disposing: `package:dispose_scope`

- Autoupdating
- Config file, storing local data (not in `~`!)
- Testing
