//copy from stacksoverflow
var cc = require('./cc.js')

let output1;
let output2;

if (process.argv[2]=="hex") {
    let input = process.argv[3]
    console.log(input)
    output1 = cc.hexToRgb(input);
    output2 = cc.hexToHSL(input);
    console.log(output1);
    console.log(output2);
}
else if (process.argv[2]=="rgb") {
    let input1 = process.argv[3]
    let input2 = process.argv[4]
    let input3 = process.argv[5]
    output1 = cc.rgbToHex(parseInt(input1),parseInt(input2),parseInt(input3));
    console.log(output1);
    console.log(cc.hexToHSL(output1));
}