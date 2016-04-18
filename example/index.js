"use strict";

const searchFileInDirs = require("../lib");

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
