const fs = require('fs');
path = require('path');
const extensionChecker = require('./src/extensionChecker');
const fileReaderRegex = require('./src/fileReaderRegex')
const arr = require('./src/check.js')
const core = require('@actions/core');
const github = require('@actions/github');


// console.log('arr', arr)

function crawl(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        //console.log(file);
        if (arr.find((item => file == item))) {
            //console.log('ignore file')
        }
        else {
            const next = path.join(dir, file)
            if (fs.lstatSync(next).isDirectory() == true) {
                crawl(next);
            }
            else {
                if (extensionChecker(next)) {
                    console.log('Read ', next);
                    fileReaderRegex(next)
                    
                }

            }
        }

    })
}
try {
    crawl("../../../../"+__dirname);
}
catch (err) {
    console.log(err.message)
}
