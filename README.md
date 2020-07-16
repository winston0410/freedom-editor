# Freedom Editor

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
- Clean JSON data output (You can even define your own data structure!)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to have [node.js](https://nodejs.org/en/) and npm installed to easily download packages of Freedom Editor. If you don't, download with the following.

npm will be installed by default, when you install node.js

Use this command to download node.js or

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm i freedom-editor
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

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

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Hugo Sum** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the

<license.md> file for details</license.md>

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
