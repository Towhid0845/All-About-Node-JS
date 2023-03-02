// 🔥 console 🔥
// console.log is not a js code.
// it is part of Chrome V8 that actually work's on runtime.
// console.log("welcome to node.js");

//
//
//
//
// 🍓🍓🍓 Core Module (fs)🍓🍓🍓
// --------------------------------

// 🔥 CRUD Operationn using Syncronus Programming 🔥
// const fs = require("fs");

// ✅ Creating new folder
// fs.mkdirSync("towhid");

// ✅ Creating a new file
// If 'xyz.txt' file exists then, it will insert the data only otherwise it will create the file first and then insert data.
// Syntex: fs.writeFileSync("file_path", "text");

// fs.writeFileSync("towhid/read.txt", "Hello Towhid!");
// if I write again then it will erase all the previous data and write new data.
// fs.writeFileSync("towhid/read.txt", "Hey there! How are you ?");

// ✅ Append new data to the file without overriding data
// fs.appendFileSync("towhid/read.txt", " I am fine. Thank you!");

// ✅ Reading file
// const buf_data = fs.readFileSync("towhid/read.txt");
// console.log(buf_data);   // It return buffer data

// ✅ Handling Buffer
// Two ways to get original data
// 1️⃣ using utf-8 parameter:
// const buf_data = fs.readFileSync("towhid/read.txt", "utf-8");
// console.log(buf_data);

// 2️⃣ using toString() function
// original_data = buf_data.toString();
// console.log(original_data);

// ✅ Rename a file
// fs.renameSync("towhid/read.txt", "towhid/readwrite.txt");

// ✅ Delete a file
// fs.unlinkSync("towhid/readwrite.txt");

// ✅ Delete a folder
// fs.rmdirSync("towhid");

//
//
// 🔥 CRUD Operationn using Asyncronus Programming 🔥

// In Asyncronus, you must need to add a callback(call me back) function as an Argument that gets called when a task competed.
// It also has an argument that tells you whether the operation completed successfully or not.
// If the operation is not successfully completed then it shows the error.
// const fs = require("fs");

// ✅ Creating new folder
// fs.mkdir("towhid", (err) => {
// 	console.log("folder is created");
// });

// ✅ Creating a new file
// If 'xyz.txt' file exists then, it will insert the data only otherwise it will create the file first and then insert data.
// Syntex: fs.writeFile("file_path", "text", callback_function);

// fs.writeFile("towhid/read.txt", "Hi Towhid...", (err) => {
// 	console.log("file is created");
// });
// if I write again then it will erase all the previous data and write new data.
// fs.writeFile("towhid/read.txt", "Hey there! How are you ?", (err) => {
// 	console.log("Write Again...");
// });

// ✅ Append new data to the file without overriding data
// fs.appendFile("towhid/read.txt", " How was your day ?", (err) => {
// 	console.log("Data is appended");
// });

// ✅ Reading file & Handling Buffer
// fs.readFile("towhid/read.txt", "utf-8", (err, data) => {
// 	console.log(data);
// });

// ✅ Rename a file
// fs.rename("towhid/read.txt", "towhid/readwrite.txt", (err) => {
// 	console.log("Rename Done.");
// });

// ✅ Delete a file
// fs.unlink("towhid/readwrite.txt", (err) => {
// 	console.log("File is deleted");
// });

// ✅ Delete a folder
// fs.rmdir("towhid", (err) => {
// 	console.log("Folder is deleted");
// });

//
//
//
//
// 🍓🍓🍓 Core Module (os) 🍓🍓🍓
// ---------------------------------
// const os = require("os");
// console.log(os.arch()); // architecture of OS
// console.log(os.type()); // name of OS
// console.log(os.version()); // version of OS
// console.log(os.cpus()); // info of CPU logical core
// console.log(os.platform()); // platform of OS
// console.log(os.hostname()); // host name of PC
// console.log(os.homedir());   // location of home directory
// console.log(os.tmpdir()); // location of your temporary folder
// console.log(os.networkInterfaces());    // info of network interface
// console.log(os.userInfo()); // info of user
// const freeMemory = os.freemem(); // free space of RAM
// console.log(`${freeMemory / 1024 / 1024 / 1024}`); // converting Byte -> KB -> MB -> GB

// const totalMemory = os.totalmem();   // total space of RAM
// console.log(`${totalMemory / 1024 / 1024 / 1024}`);

//
//
//
//
// 🍓🍓🍓 Core Module (path) 🍓🍓🍓
// ---------------------------------
// const path = require("path");

// console.log(path.dirname("E:/NODE JS/index.js")); // name of folder
// console.log(path.basename("E:/NODE JS/index.js")); // name of working file
// console.log(path.extname("E:/NODE JS/index.js")); // name of file extension
// console.log(path.parse("E:/NODE JS/index.js"));  // all info together

// ✅ How to access these info:
// const pathInfo = path.parse("E:/NODE JS/index.js");
// console.log(pathInfo.name);
// console.log(pathInfo.root);
// console.log(pathInfo.dir);
// console.log(pathInfo.ext);

//
//
//
//
// 🍓🍓🍓 Custom Module 🍓🍓🍓
// ------------------------------

// ✅ accessing single property
// const myModule = require("./customModule");
// console.log(myModule(5, 5)); // when requiring a funciton
// console.log(myModule);   // when requiring a const

// ✅ accessing multiple property
// const myModule = require("./customModule");
// // console.log(myModule);  // It is an object
// console.log(myModule.name);
// console.log(myModule.add(5, 5));
// console.log(myModule.sub(15, 5));

// ✅ accessing multiple property using object destructuring
// const { addition, subtraction, myName } = require("./customModule");
// // addition, subtraction and myName must be same as export.
// console.log(myName);
// console.log(addition(5, 5));
// console.log(subtraction(15, 5));

// ✅ accessing multiple property using object destructuring with same name.
// const { add, sub, name } = require("./customModule");
// console.log(name);
// console.log(add(5, 5));
// console.log(sub(15, 5));
