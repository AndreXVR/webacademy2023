function toUpper(str){
    return str.toUpperCase()
}

function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}

module.exports = {
    toUpper,
    createLink
}