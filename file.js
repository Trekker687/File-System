var fs = require("fs");
var path = require("path");
fs.readFile("introduction.txt", "UTF-8", (error, data) => {
    console.log(data)
})
fs.writeFile("write.txt", "i am changing what is inside file for some reason", (error) => {
    console.log("NOOB am pro")
})

var basename = path.basename("C:\\Users\\manvi\\OneDrive\\Desktop\\Coding\\file and path\\write.txt")
console.log(basename)
var dirname = path.dirname("C:\\Users\\manvi\\OneDrive\\Desktop\\Coding")
console.log(dirname)
var extname = path.extname("C:\\Users\\manvi\\OneDrive\\Desktop\\Coding\\file and path\\write.txt")
console.log(extname)
var X = path.join('C:\\Users\\manvi\\OneDrive\\Desktop\\Coding\\file and path', "introduction.txt")
console.log(X)
fs.appendFile("write.txt", "noob am pro at everything except a lot of stuff", (error) => {
    console.log("NOOB am pro at stuff")
})