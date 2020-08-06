# Create your first block for Freedom Editor

This tutorial will guide you to create your first block for Freedom Editor.

In order to help you start building your block quicker, we have prepared a [Freedom Editor Block Template]() for you to use.

## Table Of Contents

- [Prerequisites](#prerequisites)

- [Package naming guidelines](#package-naming-guidelines)

- [Structure of a block](#structure-of-a-block)

  - [Structure of a block in Freedom Editor](#structure-of-a-block-in-freedom-editor)

  - [Structure of a block in DOM](#structure-of-a-block-in-dom)

- [Coding standard and style guide](#coding-standard-and-style-guide)

## Prerequisites

Based on our styling guide, you should learn how to use a linter like [ESLint](https://eslint.org/docs/user-guide/getting-started) to ensure your code follow [JS Standard style](https://standardjs.com/).

You should also install [Gitmoji-CLI](https://www.npmjs.com/package/gitmoji-cli) for creating git commit messages that abide by [our guidelines](https://standardjs.com/).

## Package naming guidelines

All Freedom Editor blocks should be published as NPM package, and their name should describe what framework used to build it and their functionality.

If you publish your block as an unscoped package, you need to add `freedom-editor` in beginning of your package name.

If you want to publish your block as a scoped packages under `@freedom-editor`, send us a pull request.

```json
//package.json
"name": "freedom-editor-{framework-name}-{functionality}-block"
```

For example, a block that renders a `<p>` tag and is built with React should be named as:

```json
//package.json
"name": "freedom-editor-react-paragraph-block"
```

A block that renders a FAQ box and is build with lighterhtml should be named as:

```json
//package.json
"name": "freedom-editor-lighterhtml-FAQ-block"
```

A block that renders a `<h1>` tag and is built without any framework(vanilla code) should be named as:

```json
//package.json
"name": "freedom-editor-vanilla-heading-block"
```

### Structure of a block in Freedom Editor

A valid block in Freedom Editor is composed of two major methods, `render()` and `save()`. These two methods are necessary.

`render()` is used for rendering the block with or without data in the editor.

`save()` is used for saving data from the block and output it in JSON.

The skeleton of a block in Freedom Editor looks like this:

```javascript
class blockNameOfYourChoice {
  constructor (customOptions) {
    const defaultOptions = {
      i18n: {
        locale: 'en-US',
        rtl: 'ltr',
        translations: {

        }
      },
      controllers: [

      ]
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  }

  render (i18n, savedData) {

  }

  save (block) {

    return {
      //Type need to be passed in the saved data for identification.
      type: 'blockNameOfYourChoice',
      data: {

      }
    }
  }
};

export {
  blockNameOfYourChoice
}
```

### Structure of a block in DOM

A valid block should render elements in the following structure in the DOM.

- Contents of a block( most likely to be `contenteditable` fields) needs to be wrapped by a `<div>` container.

- The `<div>` container needs to have an attribute `data-block-type`, with the name of the class of the block as its value. This allows the block to be identified by controllers.

- `contenteditable` fields in a block need to have an attribute of `dir`, so that it can be set `'rtl'` or `'ltr'`.

- `contenteditable` fields in a block need to take a variable, so that previously saved data can be loaded when they are passed through `FreedomEditor.renderBlock()`.

```javascript
//Example from freedom-editor-lighterhtml-paragraph-block

class Paragraph {

...

<div class="blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
  <p contenteditable dir="${textDirection}">${savedData}</p>
</div>

}
```

### API references

TODO

## Publishing your block

After you have created your block, you should publish it as an NPM package. First of all, log in to NPM in your terminal(Assuming you have `npm init` already, which you should be.)

```shell
npm login
```

Answer all authentication questions. Once you have successfully logged in, run the following command to publish your package.

```shell
npm publish --access public
```

After you have published your block and if it passed all code reviews, send us a PR so that we can review and list it in [Awesome Freedom Editor](https://github.com/winston0410/awesome-freedom-editor)!

## Coding standard and style guide

To ensure the quality of Freedom Editor blocks, you should follow our coding standard and do the followings when you publish your block.

- Submit your repo to [Codacy](https://app.codacy.com/), [Code Climate](https://codeclimate.com/) and [Snyk](https://app.snyk.io/) for code review. You should set them up with [Travis CI](https://travis-ci.com/), so that you can automate the process every time you update your repo.

  Display badges of these code reviews in your README.md as references.

- Lint your code with Linter like [ESLint](https://eslint.org/docs/user-guide/getting-started) in a coding style of [Standard](https://www.npmjs.com/package/eslint-config-standard).
