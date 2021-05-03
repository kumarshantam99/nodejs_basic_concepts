const fs=require('fs')
const path=require('path')
// File Systems

//Create Folder

// fs.mkdir(path.join(__dirname, '/test'),{},(err)=>{
//     if(err) throw err
//     console.log("Folder created...")
// })                // asynchronous so it requires callback

// Create file and Write to it

fs.writeFile(path.join(__dirname, '/test','hello.txt'),'Hello world',(err)=>{
    if(err) throw err
    console.log("File created...")

    fs.appendFile(path.join(__dirname, '/test','hello.txt'),' I love Node.js',(err)=>{
        if(err) throw err
        console.log("File created...")
    }) // append to existing file
})                // asynchronous so it requires callback
               // asynchronous so it requires callback

// Read file

fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8',(err,data)=>{
    if(err) throw err
    console.log(data)
})

//Rename File 