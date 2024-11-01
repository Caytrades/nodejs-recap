import * as fs from "fs"

fs.mkdir("C:\\Users\\Lenovo\\Documents\\nodejs\\hey", { recursive: true }, (error) => {
    if(error) throw error;
    console.log("Directory Created")
})