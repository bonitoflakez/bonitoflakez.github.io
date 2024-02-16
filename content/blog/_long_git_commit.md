+++
author = "Nikhil"
title = "Writing Long Git Commits"
date = "2024-02-16"
description = "Tired of Git commit messages having a limit or writing multiple -m tags every time? Try this instead."
tags = [
    "cli",
    "git"
]
+++

Writing concise commit messages is indeed a good practice, but there are times when I feel like I need a longer commit message for a particular commit. Here's what I do in such cases.

### Using Multiple `-m` Flags

The `-m` flag in Git is commonly used to add a short, one-line commit message directly from the command line, but it has limitations when writing a longer commit message. To overcome this, you can use multiple `-m` flags:

```bash
git commit -m "did some beep boop" -m "- first beep boop" -m "- second beep boop"
```

Here's what it looks like in action:

```bash
➜  long_commit git:(main) ✗ echo "hehe" > hehe.txt

➜  long_commit git:(main) ✗ git add -A

➜  long_commit git:(main) ✗ git commit -m "did some beep boop" -m "- first beep boop" -m "- second beep boop"
[main (root-commit) 4827b27] did some beep boop
 2 files changed, 1 insertion(+)
 create mode 100644 hehe
 create mode 100644 hehe.txt
```

```txt
➜  long_commit git:(main) ✗ git log -1 --pretty=%B

    did some beep boop

    - first beep boop

    - second beep boop
```

### Using `-F` Flag

For even longer commit messages, Git provides the `-F` option, allowing the user to specify a file containing the commit message. This method is particularly useful when the commit message extends beyond a few lines:

```bash
git commit -F path/to/commit_message.txt
```

And here's what it looks like with a file named `commit_message.txt`:

```txt
did some beep boop again

- someone beep booped first
- then they boop beeped
- then the internet connection died
- and that's how it all ended
```

```bash
➜  long_commit git:(main) ✗ echo "commit_message.txt" > .gitignore

➜  long_commit git:(main) ✗ echo "beep boop boop beep" > beep_boop.txt

➜  long_commit git:(main) ✗ git add -A

➜  long_commit git:(main) ✗ git commit -F commit_message.txt
[main 707c7ee] did some beep boop again
 2 files changed, 2 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 beep_boop.txt
```

```txt
➜  long_commit git:(main) ✗ git log -1 --pretty=%B

   did some beep boop again

   - someone beep booped first
   - then they boop beeped
   - then the internet connection died
   - and that's how it all ended
```

### Closing Thoughts

I prefer using the `-F` flag. I maintain a single file for commit messages, regularly updating its content. By adding the file to `.gitignore`, I can effortlessly write detailed commit messages while coding without being constrained by message length.
