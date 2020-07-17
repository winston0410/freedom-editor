# Create your first block for Freedom editor

This tutorial will guide you to create your first block for Freedom Editor.

## Table Of Contents

- [Prerequisites](#prerequisites)

- [Package naming guidelines](#package-naming-guidelines)

- [Structure of a block in Freedom Editor](#structure-of-a-block-in-freedom-editor)

## Prerequisites

You don't have to be master in Javascript (neither do I!), but you should understand what a class is in JavaScript, as a block in Freedom Editor is created as a class.

You should also learn how to use a linter like ESLint to ensure the quality of your code.

## Package naming guidelines

All Freedom Editor blocks should be published as NPM package, and their name should describe what framework used to build it and their functionality.

If you publish your block as an unscoped package, you need to add `freedom-editor` in beginning of your package name.

If you want to publish your block as a scoped packages under `@freedom-editor`, contact us to request.

```
//package.json
"name": "freedom-editor-{framework-name}-{functionality}-block"
```

For example, a block that renders a `<p>` tag and is built with React should be named as:

```
//package.json
"name": freedom-editor-react-paragraph-block
```

A block that renders a FAQ box and is build with lighterhtml should be named as:

```
//package.json
"name": freedom-editor-lighterhtml-FAQ-block
```

A block that renders a `<h1>` tag and is built without any framework(vanilla code) should be named as:

```
//package.json
"name": freedom-editor-vanilla-heading-block
```

## Structure of a block in Freedom Editor

TODO
