# UIPack

UIPack is a frontend framework.

## Installation

Use the  [npm](https://www.npmjs.com/package/uipack) to install UIPack

```bash
npm i uipack
```

## Usage 
There are many ways to use the UIPack.

Recommended installation:
### node-sass
```
npm install --save-dev node-sass
```
via cli use  `--include-path`:

example:
```json
"scripts": {
    "sass": "node-sass app.scss app.css --include-path node_modules/uipack/src/scss"
  }
```
and add your app.scss file:
```scss
@import "uipack.scss";
```

or for advanced usage:
```scss
@import "utils/index";
// customize

@import "base/index";
@import "components/index";
@import "helpers/index";
```

## Documentation
https://sivankanat.github.io/uipack/scenarios/
```
working on updates
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](./LICENSE)