// const { defaultCipherList } = require('constants');
const fs = require('fs')
// import extension from '/extensions.json'

const extensionChecker = (fileName) => {
    let rawdata = fs.readFileSync('./src/extensions.json');
    let exten = JSON.parse(rawdata);
    let result = 0
    for (x in exten.fileExtensions) {
        if (fileName.endsWith(exten.fileExtensions[x])) {
            result = 1;
            break;
        }
    }
    return result

}
module.exports = extensionChecker;
// export default extensionChecker;
