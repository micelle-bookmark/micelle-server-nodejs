
var fs = require('fs');
var path = require('path');
var modules = new Array();

function LoadMudules(dir) {
    console.log("LoadMudules:", dir);

    stat = fs.lstatSync(dir);
    if (stat.isDirectory()) {
        files  =fs.readdirSync(dir);
        console.log(files);
        var f, l = files.length;
        for (var i = 0; i < l; i++) {
            f = path.join(dir, files[i]);
            console.log(f);
            LoadMudules(f);
        }
    } else {
        console.log("push:", dir);
        modules.push(dir);
    }

    // fs.lstatSync(dir, function (err, stat) {
    //     console.log("fs.lstatSync");
    //     if (stat.isDirectory()) {
    //         fs.readdir(dir, function(err, files) {
    //             console.log(files);
    //             var f, l = files.length;
    //             for (var i = 0; i < l; i++) {
    //                 f = path.join(dir, files[i]);
    //                 console.log(f);
    //                 LoadMudules(f);
    //             }
    //         });
    //     } else {
    //         console.log("push:", dir);
    //         modules.push(dir);
    //     }
    // });

    return modules;
};


exports.loader = LoadMudules;
