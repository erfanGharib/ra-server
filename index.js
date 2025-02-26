const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const _path = "C:\\Users\\e.gharib\\Desktop\\file.pdf";
const fileBuffer = fs.readFileSync(_path);

// app.get("/", (req, res) => res.send(fileBuffer))
app.get("/", (req, res) => {
    res.set({
        "Content-Type": "application/pdf"
    })
    // res.setHeader("Content-Disposition", 'attachment; filename="file.pdf"')
    
    // console.log("res", res);
    
    res.send(fileBuffer)
})

app.listen(5000, () => {
    console.log("listening on", 5000);
})
