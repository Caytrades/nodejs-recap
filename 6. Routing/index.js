import http from "http"

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, "Awesome", {"content-type": "text/html"})
        res.end("<h1>Hello</h1>")
    } else if (req.url === "/about") {
        res.writeHead(200, "OK", { "Content-Type": "text/html" });
        res.end("<h1> About </h1>");
    } else {
        res.writeHead(404, "BAD", {"content-type": "text/html"})
        res.end("<h1> 404 Page Not Found :( </h1>");
    }
})

server.listen(8000, () => console.log("Server is running on http://localhost:8000"))