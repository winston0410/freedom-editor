# Freedom Editor

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/9f10837bc1214eedbf60db845cfa0127)](https://www.codacy.com/manual/winston0410/freedom-editor?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor&utm_campaign=Badge_Grade) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/e60c1201866836f735ec/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e60c1201866836f735ec/test_coverage)](https://codeclimate.com/github/winston0410/freedom-editor/test_coverage) [![Build Status](https://travis-ci.com/winston0410/freedom-editor.svg?branch=master)](https://travis-ci.com/winston0410/freedom-editor) [![Gitter](https://img.shields.io/badge/chat-gitter(Cantonese)-blueviolet)](https://gitter.im/freedom-editor/Cantonese-only?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![Gitter](https://img.shields.io/badge/chat-gitter(English)-ff69b4)](https://gitter.im/freedom-editor/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Freedom Editor is a lightweight, fully extensible, zero-dependencies, framework agonistic block editor. You can use vanilla code or your favorite framework to build blocks you need.

> The block editor for the Free.

## Features

### Framework agonistic

Create blocks with vanilla code or with your favorite frontend framework, be it React, Angular, Vue.js, or lighter frameworks like lighterhtml or Reef.

### Full customizable and modular

Unlike other block editors, every parts of Freedom editor is modular except its core loading and saving functions. You can extend it and build whatever you want to control editor and blocks behaviors. Sky is the limit.

### Lightweight and zero-dependencies

The core of Freedom Editor is written in vanilla code, and it only weights 1.5KB gzipped, tremendously smaller than other block editors.

### Other features

- Predefined block template support
- i18n and rtl support
- Clean JS Object output (You can define your own data structure!)

  ```
  {
    timestamp: 1594882024298,
    data: [{
      data: {
        text: "Testing"
      }
      type: "paragraph"
    }]
  }
  ```

## Background

### What does Freedom Editor try to solve?

[Gutenberg editor from Wordpress](https://wordpress.org/gutenberg/) has proven the potential of block editor and its advantages over traditional Rich Text Editor like TinyMCE. I really enjoy using it to predefine a specific block layout for users.

As Gutenberg is built around Wordpress API, it is very difficult to apply it somewhere else. Besides, the whole Gutenberg Project was built with React. Fixing myself to a specific framework, and load tons of dependencies (the core of Gutenberg, including React, is about 1MB gzipped) doesn't sound good to me.

Outside Wordpress and in the NPM world, the most complete block editor was [editor.js](https://editorjs.io/). It was written in vanilla code, and it is much smaller than Gutenberg (the core is about 348kb gzipped).

This package looked promising in the beginning, as it is very easy to set up, create a new block and get a clean JSON output.

However, editor.js is not really extendable. You have to stick with their defined editor layout, and some crucial features like predefined block template do not exist at all!

After all the frustrations, I decided to build a block editor myself that solves what cannot be solved by these two editors. Zero-dependencies, lightweight, framework agonistic and complete extendable.

### How does Freedom Editor works?

The structure of Freedom Editor is simply but robust, it consists of 3 main components, **editor core, blocks and controllers**.

The relationship of these components is linear. Blocks are hooked to editor core, and controllers are hooked to blocks.

Below is the overview of the responsibilities of each component.

**Editor core:** Initiate blocks and controllers and handle saving and loading data globally.

**Blocks:** Provide a specific way for user to input data and save data.

**Controllers:** Transform and control blocks' behaviors **other than loading and saving**.

This structure enables Freedom Editor to be extremely modular and light.

### Why is it called Freedom Editor?

This block editor is named Freedom Editor, as it is extremely modular. Users have endless freedom on modifying this editor unlike others.

Another reason for this is because of what happening in my home, Hong Kong. I hope this project can draw your attentions to what we are facing right now.

## Getting Started

### Prerequisites

You need to have [node.js](https://nodejs.org/en/) and npm installed to easily download packages of Freedom Editor. If you don't, download with the following.

npm will be installed by default, when you install node.js.

### Awesome Freedom Editor

See a list of all awesome Freedom Editor blocks and controllers in our [Awesome Freedom Editor repo](https://github.com/winston0410/awesome-freedom-editor)!

### Installing

Download Freedom editor from npm.

```
npm i @freedom-editor/core
```

As Freedom Editor is very modular, you need to download controllers and blocks to make it useful.

By default no controllers and blocks will be shipped with the core of Freedom Editor, as we want to you have the freedom to choose which framework to use.

You can find a list of [Freedom Editor controllers and blocks](https://github.com/winston0410/awesome-freedom-editor) here.

Use tools like `snowpack`, `rollup` or manually pass the Freedom Editor file in `dist` to your frontend.

Rollup.js

```
//rollup.config.js

export default [{
  input: '@freedom-editor/core',
  output: {
    file: './dist/core.esm.js', //Or any file name or file path you like to use in your project
    format: 'esm',
  }
}
]
```

Snowpack

```
//snowpack.config.js

module.exports = {
  install: [
    "@freedom-editor/core"
  ],

  installOptions: {
    rollup: {

    }
  }

  devOptions: {
    port: 8080,
    open: "none",
    bundle: false,
    out: "dist" //Or any file path you like to use in your project
  }

  ...
}
```

### Deployment

To start using Freedom Editor in browsers, you have to do the followings:

1. Create a new instance of Freedom Editor
2. Call `FreedomEditor.init()` to set up the editor and hook controllers you want to use to the editor
3. Call `FreedomEditor.loadBlocks()` to load blocks from block template or saved data.

### Example

```
import FreedomEditor from '../core.esm.js'

import {
  FreedomEditorKeyBindings
} from './controllers/keyBindings.js'

import {
  Paragraph
} from './blocks/paragraph.js'

const paragraphBlock = new Paragraph()

const editor = new FreedomEditor({
  containerId: 'freedom-editor',
  defaultBlock: paragraphBlock,
  registeredBlocks: {
    paragraphBlock: paragraphBlock
  },
  blockTemplate: [
    paragraphBlock
  ],
  i18n: {
    rtl: 'ltr'
  }
})

editor.init([
  new FreedomEditorKeyBindings({
    editor: editor
  }).init
])

editor.loadBlocks()
```

## API Reference

TODO

## Contributing

Please read [the contributing guidlines](https://github.com/winston0410/freedom-editor/blob/master/CONTRIBUTING.md) for details of our [Code of Conduct](https://github.com/winston0410/freedom-editor/blob/master/CONDUCT.md), style guide, and the process for submitting pull requests to us.

## Authors

- **Hugo Sum** - _Initial work_ -

See also the list of [contributors](https://github.com/winston0410/freedom-editor/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.

## Acknowledgments

- Inspiration from [Gutenberg editor from Wordpress](https://wordpress.org/gutenberg/) and [editor.js](https://editorjs.io/)
