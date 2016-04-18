"use strict";

const find = require("..")
    , tester = require("tester")
    ;

tester.describe("find", test => {
    let dirs = [
        `${__dirname}/bar`
      , `${__dirname}/foo`
    ];
    test.should("find the file in one of dirs", cb => {
        // find the file "b" in these dirs
        find(dirs, "b", (err, path) => {
            test.expect(err).toBe(null);
            test.expect(path.split("/").slice(-2).join("/")).toBe("foo/b");
            cb();
        });
    });
    test.should("find the file in both dirs", cb => {
        find(dirs, "a", (err, path, res) => {
            test.expect(err).toBe(null);
            test.expect(path.split("/").slice(-2).join("/")).toBe("bar/a");
            cb();
        });
    });
});
