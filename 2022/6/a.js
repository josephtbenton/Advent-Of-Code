"use strict";
//Day 6: Tuning Trouble
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync("in.txt", "utf8");
var markerLength = 14;
var endOfMarkerIndex = null;
for (var i = markerLength - 1; i < input.length; i++) {
    var workingCharacterList = [];
    for (var j = i; j > i - markerLength; j--) {
        if (!workingCharacterList.includes(input[j])) {
            workingCharacterList.push(input[j]);
        }
    }
    if (workingCharacterList.length == markerLength) {
        endOfMarkerIndex = i;
        break;
    }
}
if (endOfMarkerIndex) {
    console.log(endOfMarkerIndex + 1);
}
else {
    console.log("No marker found");
}
