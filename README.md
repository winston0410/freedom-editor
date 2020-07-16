# Freedom Editor

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/9f10837bc1214eedbf60db845cfa0127)](https://www.codacy.com/manual/winston0410/freedom-editor?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor&utm_campaign=Badge_Grade) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/e60c1201866836f735ec/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e60c1201866836f735ec/test_coverage)](https://codeclimate.com/github/winston0410/freedom-editor/test_coverage) [![Chat on Gitter](https://img.shields.io/badge/Chat-on%20Gitter-ff69b4)](https://img.shields.io/gitter/room/winston0410/freedom-editor)

Freedom Editor is a lightweight, fully extensible, zero-dependencies, framework agonistic block editor. You can use vanilla code or your favorite framework to build blocks you need.

## Features

### Framework agonistic

Create blocks with vanilla code or with your favorite frontend framework, be it React, Angular, Vue, or lighter frameworks like lighterhtml or Reef.

### Full customiziable and modular

Unlike other block editors, every parts of Freedom editor is modular except its core loading and saving functions. You can extend it and build whatever you want to control editor and blocks behaviors. Sky is the limit.

### Lightweight and zero-dependencies

The core of Freedom Editor is written in vanilla code, and it only weights 1.5KB gzipped, tremendously smaller than other block editors.

### Other block editor specific features

- Predefined block template support
- i18n and rtl support
- Clean JS Object output (You can even define your own data structure!)

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

## Getting Started

### Prerequisites

You need to have [node.js](https://nodejs.org/en/) and npm installed to easily download packages of Freedom Editor. If you don't, download with the following.

npm will be installed by default, when you install node.js

Use this command to download node.js or

```
Give examples
```

### Installing

Download Freedom editor from npm.

```
npm i freedom-editor
```

As Freedom Editor is very modular,

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

To use Freedom Editor in browser, you have to do the following:

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

### FreedomEditor.init(pluginsOptions)

Initialize editor and hook plugins to the editor in editor level. Plugins hooked here will apply to all blocks.

@param {Array} pluginsOptions An array containing all init functions of plugins

@return {Object} The instance of Freedom Editor

```
const editor = new FreedomEditor({

  });

  editor.init([
    new FreedomEditorKeyBindings({
      editor: editor
    }).init
  ])
```

### FreedomEditor.removeBlock(block)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/winston0410/freedom-editor/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Hugo Sum** - _Initial work_ -

See also the list of [contributors](https://github.com/winston0410/freedom-editor/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.

## Acknowledgments

- Inspiration from [Gutenberg editor from Wordpress](https://wordpress.org/gutenberg/) and [editor.js](https://editorjs.io/)
