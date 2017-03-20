
# find-file-in-dirs

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/find-file-in-dirs.svg)](https://travis-ci.org/IonicaBizau/find-file-in-dirs/) [![Version](https://img.shields.io/npm/v/find-file-in-dirs.svg)](https://www.npmjs.com/package/find-file-in-dirs) [![Downloads](https://img.shields.io/npm/dt/find-file-in-dirs.svg)](https://www.npmjs.com/package/find-file-in-dirs)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
