# Contributing to Freedom Editor

Thank you so much for being willing to contribute to this project. Together we can build the freest block editor in the world.

The following is a set of guidelines for contributing to Freedom Editor core and its plugins and blocks, which we hope they will make your first PR easy and encouraging.

Remember, all your contribution should adhere to the [Code of Conduct of Freedom Editor](https://github.com/winston0410/freedom-editor/blob/master/CONDUCT.md).

These contributing guidelines are inspired by [Atom's contribution guidelines](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).

## Table Of Contents

- [How Can I Contribute?](#how-can-i-contribute)

  - [Your First Code Contribution](#your-first-code-contribution)

    - [Create plugins for Freedom Editor](#create-plugins-for-freedom-editor)

    - [Create blocks for Freedom Editor](#create-blocks-for-freedom-editor)

  - [Reporting Bugs](#reporting-bugs)

  - [Suggesting Enhancements](#suggesting-enhancements)

  - [Pull Requests](#pull-requests)

- [Styleguides](#styleguides)

  - [Git Commit Messages](#git-commit-messages)

  - [JavaScript Styleguide](#javascript-styleguide)

## How Can I Contribute?

### Your First Code Contribution

#### Create plugins for Freedom Editor

If you want to affect the behaviors of the editor, blocks in general or a specific block for Freedom Editor, you should create a plugin.

Learn how to [create your first Freedom Editor plugin](https://github.com/winston0410/freedom-editor/blob/master/create-first-plugin.md) here.

#### Create blocks for Freedom Editor

If you want to completely alter the data structure of a block, or the provided options of a block is not enough for you, you should create a new block.

Learn how to [create your first Freedom Editor block](https://github.com/winston0410/freedom-editor/blob/master/create-first-block.md) here.

### Reporting Bugs

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Make sure you are using the latest version of Freedom Editor**

- **Determine [which repository the problem should be reported in](https://github.com/winston0410/awesome-freedom-editor)**. Try not to load some plugins or blocks, and see if the issue is still there to determine if plugin, block or the core of Freedom Editor is the cause for any error.

- Search and see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

- **Use a clear and descriptive title** for the issue to identify the problem.

- **Describe the exact steps which reproduce the problem** in as many details as possible. You should include the code you used.

- **Describe the behavior you observed after following the steps**. You should include error messages shown in console.

- **Explain which behavior you expected to see instead and why.**

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Freedom Editor, including completely new features and minor improvements to existing functionality.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one.

If you are sure there is no duplicate suggestion, follow [this template]() to file your suggestion.

#### Before Submitting An Enhancement Suggestion

- **Make sure you are using the latest version of Freedom Editor**

- **Determine [which repository the enhancement should be suggested in](#atom-and-packages).**

- Search and see if what you want has already been suggested. If it has **and the issue is still open**, add a comment to the existing suggestion instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

- **Use a clear and descriptive title** for the issue to identify the suggestion.

- **Describe the suggested enhancement** in as many details as possible.

- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.

- **List some other block editors or applications where this enhancement exists.**

### Pull Requests

The process described here has several goals:

- Maintain Freedom Editor's quality
- Fix problems that are important to users

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

  <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests with their corresponding ID
- When only changing documentation, include `[ci skip]` in the commit title
- Consider starting the commit message with an applicable emoji:

  - :art: `:art:` when improving the format/structure of the code
  - :racehorse: `:racehorse:` when improving performance
  - :memo: `:memo:` when writing docs

  - :bug: `:bug:` when fixing a bug

  - :fire: `:fire:` when removing code or files

  - :white_check_mark: `:white_check_mark:` when adding tests

  - :lock: `:lock:` when dealing with security

  - :arrow_up: `:arrow_up:` when upgrading dependencies

  - :arrow_down: `:arrow_down:` when downgrading dependencies

  - :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
