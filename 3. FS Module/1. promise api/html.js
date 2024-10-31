import * as fs from "fs/promises"
import path from "path"

const folderPath = "./Cay"

try{
    await fs.mkdir(folderPath, {recursive: true});

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
</head>
<body>
    <h1>Welcome to Your Page</h1>
</body>
</html>
`;
    await fs.writeFile(path.join(folderPath, "index.html"), htmlContent)

    console.log("Account Created")
} catch(error) {
    console.log(error)
}