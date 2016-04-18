"use strict";
const isThere = require("is-there")
    , sameTime = require("same-time")
    , path = require("path")
    , arrsToObj = require("arrs-to-obj")
    , Err = require("err")
    ;

/**
 * findFileInDirs
 * Find a file in different directories.
 *
 * @name findFileInDirs
 * @function
 * @param {Array} dirs An array of directory paths where to find for the file.
 * @param {String} file The file path.
 * @param {Function} cb The callback function.
 */
module.exports = function findFileInDirs (dirs, file, cb) {

    if (typeof file === "function") {
        cb = file;
        file = "";
    }

    sameTime(dirs.map(cDir => {
        return cb => {
            let cPath = path.resolve(cDir, file);
            isThere(cPath, exists => {
                cb(null, cPath, exists);
            });
        }
    }), (err, fields, exists) => {
        if (err) { return cb(err); }
        for (let i = 0; i < exists.length; ++i) {
            if (exists[i]) {
                return cb(null, fields[i], arrsToObj(fields, exists));
            }
        }

        cb(new Err("Cannot find finded file: <fileName>", {
            fileName: file
          , code: "FILE_DOES_NOT_EXIST"
        }));
    });
};
