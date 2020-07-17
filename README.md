# Freedom Editor

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/9f10837bc1214eedbf60db845cfa0127)](https://www.codacy.com/manual/winston0410/freedom-editor?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor&utm_campaign=Badge_Grade) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/e60c1201866836f735ec/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e60c1201866836f735ec/test_coverage)](https://codeclimate.com/github/winston0410/freedom-editor/test_coverage) [![Build Status](https://travis-ci.com/winston0410/freedom-editor.svg?branch=master)](https://travis-ci.com/winston0410/freedom-editor) [![Gitter](https://img.shields.io/badge/chat-gitter(Cantonese)-blueviolet)](https://gitter.im/freedom-editor/Cantonese-only?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![Gitter](https://img.shields.io/badge/chat-gitter(English)-ff69b4)](https://gitter.im/freedom-editor/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Freedom Editor is a lightweight, fully extensible, zero-dependencies, framework agonistic block editor. You can use vanilla code or your favorite framework to build blocks you need.

> The block editor for the Free.

## Features

### Framework agonistic

Create blocks with vanilla code or with your favorite frontend framework, be it React, Angular, Vue, or lighter frameworks like lighterhtml or Reef.

### Full customiziable and modular

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

## Why is it called Freedom Editor?

This block editor is named Freedom Editor, as it is extremely modular. Users have endless freedom on modifying this editor unlike others.

Another reason for this is because of what happening in my home, Hong Kong. I hope this project can draw your attentions to what we are facing right now.

## Getting Started

### Prerequisites

You need to have [node.js](https://nodejs.org/en/) and npm installed to easily download packages of Freedom Editor. If you don't, download with the following.

npm will be installed by default, when you install node.js

### Installing

Download Freedom editor from npm.

```
npm i @freedom-editor/core
```

As Freedom Editor is very modular, you need to download plugins and blocks to make it useful. By default no plugins and blocks will be shipped with the core of Freedom Editor, as we want to you have the freedom to choose which framework to use.

You can find a list of [Freedom Editor plugins and blocks](https://github.com/winston0410/awesome-freedom-editor) here.

Use tools like `snowpack`, `rollup` or manually pass the Freedom Editor file in `dist` to your frontend.

Rollup.js

```
//rollup.config.js
```

Snowpack

```
//snowpack.config.js
```

### Deployment

To start using Freedom Editor in browsers, you have to do the followings:

1. Create a new instance of Freedom Editor
2. Call `FreedomEditor.init()` to set up the editor and hook plugins you want to use to the editor
3. Call `FreedomEditor.loadBlocks()` to load blocks from block template or saved data.

### Example

```
import FreedomEditor from '../core.esm.js'

import {
  FreedomEditorKeyBindings
} from './plugins/keyBindings.js'

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
