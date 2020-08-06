# Create your first controller for Freedom editor

This tutorial will guide you to create your first controller for Freedom Editor.

## Table Of Contents

- [Prerequisites](#prerequisites)

- [Package naming guidelines](#package-naming-guidelines)

- [Structure of a block in Freedom Editor](#structure-of-a-block-in-freedom-editor)

- [Coding standard and style guide](#coding-standard-and-style-guide)

## Prerequisites

Based on our styling guide, you should learn how to use a linter like [ESLint](https://eslint.org/docs/user-guide/getting-started) to ensure your code follow [JS Standard style](https://standardjs.com/).

You should also install [Gitmoji-CLI](https://www.npmjs.com/package/gitmoji-cli) for creating git commit messages that abide by [our guidelines](https://standardjs.com/).

## Package naming guidelines

All Freedom Editor controllers should be published as NPM package, and their name should describe what that controller is used for.

If you publish your controller as an unscoped package, you need to add `freedom-editor` in beginning of your package name.

If you want to publish your controller as a scoped packages under `@freedom-editor`, send us a pull request.

## Structure of a controller in Freedom Editor

In Freedom Editor, controllers are attached to blocks instead of the editor. You can attach a controller to all blocks when you create a new instance of `FreedomEditor` by passing them as value of `customOptions.blocksControllers()`.

```javascript
import { FreedomEditor } from '@freedom-editor/core'

const editor = new FreedomEditor({
  //Other options...
  blocksControllers: [
  //Register your controllers for all blocks here
  new FreedomEditorKeyBindings()
  ]
})
```

You can also attach it selectively to specific block when you create a new instance for them.

```javascript
import { FreedomEditor } from '@freedom-editor/core'

import { Paragraph } from '@freedom-editor/lighterhtml-paragraph-block'

//Create new Freedom Editor Instance as above...

const paragraphBlock = new Paragraph({
  //Other options...
  controllers: [
  //Register your controllers for paragraph block here
  new FreedomEditorKeyBindings()
  ]
  })
```

> If you register the same controller in both Freedom Editor instance and a block instance, **options of the controller registered in block instance will take precedence and merge** with the one registered in Freedom Editor Instance.

All elements created by controllers are encapsulated inside the container of a block.

A valid controller in Freedom Editor needs to have an `init()` method. This method will be called when a block is rendered to DOM with `FreedomEditor.renderBlock()`, with the newly rendered block and the instance of Freedom Editor passed as parameters to `init()`.

```javascript
init (editorInstance, renderedBlock){
  //Make your transformation here
}
```

This way, you can then transform, append DOM elements you want or apply your control logic to that block from the controller.

The skeleton of a controller in Freedom Editor looks like this:

```

```

## Publishing your own Freedom Editor controller

After you have created your block, you should publish it as an NPM package. First of all, log in to NPM in your terminal(Assuming you have `npm init` already, which you should be.)

```shell
npm login
```

Answer all authentication questions. Once you have successfully logged in, run the following command to publish your package.

```shell
npm publish --access public
```

### API references

TODO

## Coding standard and style guide

To ensure the quality of Freedom Editor blocks, you should follow our coding standard and do the followings when you publish your block.

- Submit your repo to [Codacy](https://app.codacy.com/), [Code Climate](https://codeclimate.com/) and [Snyk](https://app.snyk.io/) for code review. You should set them up with [Travis CI](https://travis-ci.com/), so that you can automate the process every time you update your repo.

  Display badges of these code reviews in your README.md as references.

- Lint your code with Linter like [ESLint](https://eslint.org/docs/user-guide/getting-started) in a coding style of [Standard](https://www.npmjs.com/package/eslint-config-standard).
