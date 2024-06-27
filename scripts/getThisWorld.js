function getThisWorld (tp) {
    const fs = require('fs');
    const thisFolder = tp.file.folder(false)
    //fs.writeFile('C:/temp/thisworld.txt', thisFolder, (err) => { if (err) throw (err); })
    if (thisFolder.slice(0,5) == "62.01"){
        return "Calendar of Harptos";
    }
    return thisFolder;
}
module.exports = getThisWorld;