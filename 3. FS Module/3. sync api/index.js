import * as fs from "fs"

// fs.mkdirSync("C:\\Users\\Lenovo\\Documents\\nodejs\\hello", { recursive: true })

// Getting File Info

const stats =  fs.statSync("C:\\Users\\Lenovo\\Documents\\nodejs\\Cay\\index.html")
console.log(stats.isDirectory())
console.log(stats.isFile())
console.log(stats)