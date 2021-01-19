const { response } = require("express");
const fs = require("fs");

fs.readFile('./nodeIO/nodeI.txt', (err, data) => {
    if (err) {
        console.log("Error!")
    } else {
        console.log(data.toString())
    }
})
const writeData = 'Hi, Shihao Lu!'
fs.writeFile('./nodeIO/nodeO.txt', writeData, (err, succ) => {
    if (err) {
        console.log("Can not write data.")
    } else {
        console.log("Successful!")
    }
} )

// const fileWrite = (fileName, data) => {
//     fs.writeFile(fileName, data, (err, succ) => {
//         if (err) {
//             console.log("Can not write data.")
//         } else {
//             console.log("Successful!")
//         }
//     } )
// }

exports.fileWrite = (fileName, data) => {
    fs.writeFile(fileName, data, (err, succ) => {
        console.log(fileName, data)
        if (err) {
            console.log("Can not write data.")
        } else {
            console.log("Successful!")
        }
    } )
}
