const fs = require("fs");
const http = require("http");
const url = require("url");

/**********************Files System in NodeJS******************/

//syncronous way or blocking way
// var d = new Date();

// const textIn = fs.readFileSync("input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is newly written code after.\n Earlier code wwas ${textIn}.\n Created on ${d.toString()}`;
// fs.writeFileSync("input.txt", textOut);
// console.log("sucessfully written\n");

//asyncronous way

// const textIn = fs.readFile("input.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log(textIn);
// console.log("this is executed first, instead of reading the file");

// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`${data1}.txt`, "utf-8", (err, data2) => {
//     //callback hell=> data3 depends on data2, data2 depends on data1
//     console.log(data2);
//     fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./starter/txt/final.txt",
//         `${data2}\n ${data3}`,
//         "utf-8",
//         (err) => {
//           //writing the file
//           console.log("sucessfully written the files");
//         }
//       );
//     });
//   });
// });
// console.log("will execute first");

/*************Servers using NodeJS*********************/
const data = fs.readFileSync(
  `${__dirname}/starter/dev-data/data.json`,
  "utf-8"
);
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
  //console.log(req.url);
  const pathName = req.url; //routing using nodejs
  if (pathName === "/overview") res.end("Overview page is this");
  else if (pathName === "/productId") res.end("this is the product id");
  else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data); //send string not object. Therfore we use data instead of productData
  } else {
    res.writeHead(404); //show error code
    res.end("page not found");
  }
  //res.end("Listening on port 8000");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on server 8000");
});
