# Git Bisect Tutorial Project

This is a demo project created to help developers understand how `git bisect` works. It consists of a simple calculator class in Node.js that has a deliberate bug introduced in its history.

The project shows how a simple multiplication function goes from working correctly to having a bug through a series of commits. By using `git bisect` and the project's test suite, you can practice finding exactly when the bug was introduced.

This repository is part of an article about using git bisect effectively in your development workflow. It demonstrates how automated tests can be combined with git bisect to quickly identify problematic changes in your codebase.

To get started:

```bash
npm install
npm test
```
