// let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    console.log(selector2);
    $(selector1).filter(selector2).remove();
}

// module.exports = {nuke};
