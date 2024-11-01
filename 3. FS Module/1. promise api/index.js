import * as fs from 'fs/promises'
import path from "path"

// Creating a directory
// try{
//     await fs.mkdir("C:\\Users\\Lenovo\\Documents\\nodejs\\5. OS Module\\fs")
//     console.log("Directory Created")
// } catch(error) {
//     console.log(error)
// }

// Read Content of Directory 
// try{
//     const files = await fs.readdir("C:\\Users\\Lenovo\\Documents\\nodejs\\3. FS Module\\1. promise api");
//     for (let file of files) {
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error)
// }


// Removing A Directory
// try{
//     await fs.rmdir("C:\\Users\\Lenovo\\Documents\\nodejs\\5. OS Module")
//     console.log("Directory Removed")
// } catch (error){
//     console.log(error)
// }

// Create and Write To A File
// try {
//     await fs.writeFile("hey.txt", "Hello")
// } catch(error){
//     console.log(error)
// }
// OR
// const folderPath = "./Cay";
// Path is not required
// try{
//     await fs.mkdir(folderPath, { recursive: true });
//     await fs.writeFile(path.join(folderPath, "/index.html"), "html:5")
//     console.log("Account Created")
// } catch(error) {
//     console.log(error);
// }

// Read File
// try{
//     const data = await fs.readFile("C:\\Users\\Lenovo\\Documents\\nodejs\\Cay\\index.html", "utf-8")
//     // UTF-8 removes buffer and returns data 
//     console.log(data)
// } catch(error) {
//     console.log(error)
// }

// Get File Information 
// try {
//   const info = await fs.stat("C:\\Users\\Lenovo\\Documents\\nodejs\\Cay\\index.html");
//   // console.log(info); // returns object
//   console.log(info.isDirectory());
//   console.log(info.isFile());
// } catch (error) {
//   console.log(error);
// }