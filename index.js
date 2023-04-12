const app = require("express")();
app.get("/", (req, res) => res.send("hello"));

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    send(res);
});

const port = process.env.PORT || 8888;

let i = 0;
function send(res) {
    res.write("data: " + `Hello from server ----- [${i++}]\n\n`); // Data being displayed in browser console 
    // Data not being displayed in browser console you have to start with "data:" and end with "\n\n" 
    //res.write(`Hello from server ----- [${i++}]\n\n`); 

    setTimeout(() => send(res), 1000);
}
app.listen(port);
console.log(`Listening on ${port}`);

// Client Code
// let sse = new EventSource("http://localhost:8888/stream");
// sse.onmessage = console.log