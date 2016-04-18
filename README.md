# find-file-in-dirs [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/find-file-in-dirs.svg)](https://travis-ci.org/IonicaBizau/find-file-in-dirs/) [![Version](https://img.shields.io/npm/v/find-file-in-dirs.svg)](https://www.npmjs.com/package/find-file-in-dirs) [![Downloads](https://img.shields.io/npm/dt/find-file-in-dirs.svg)](https://www.npmjs.com/package/find-file-in-dirs) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Find a file in different directories.

## :cloud: Installation

```sh
$ npm i --save find-file-in-dirs
```


## :clipboard: Example


```js
const searchFileInDirs = require("find-file-in-dirs");

// .
// ├── bar
// │   └── a
// └── foo
//     ├── a
//     └── b
let dirs = [
    `${__dirname}/bar`
  , `${__dirname}/foo`
];

// Search the file "b" in these dirs
searchFileInDirs(dirs, "b", (err, path) => {
    console.log(err || path);
    // /home/.../example/foo/b
});

// Search file "a" in these dirs (bar has priority)
searchFileInDirs(dirs, "a", (err, path, res) => {
    console.log(err || path, res);
    // /home/.../example/bar/a
    // { '/home/.../example/bar/a': true,
    //   '/home/.../example/foo/a': true }
});
```

## :memo: Documentation

### `findFileInDirs(dirs, file, cb)`
Find a file in different directories.

#### Params
- **Array** `dirs`: An array of directory paths where to find for the file.
- **String** `file`: The file path.
- **Function** `cb`: The callback function.


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
