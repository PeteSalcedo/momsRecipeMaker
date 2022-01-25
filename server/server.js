const express = require('express')
const app = express()
const port = 4000
const path = require('path')

// const bodyparser = require('body-parser')
// const mysql = require('mysql')
// const multer = require('multer')

app.use('/', express.static(path.join(__dirname, '../client')))
app.use(express.json());
app.use(express.urlencoded())

var validKeys = [
    "9xxq9I8ke8LyIVKE",
    "rd2pVlK70cd1rqBO",
    "7gdXx2LJbKKlwy1y"
]


app.get('/validate', (req, res) => {
    console.log("this is what we got from the client",req.query)
    if(validKeys.includes(req.query.key)){
        res.send('Step 2')
    }else{
        res.send('No eres digno, Alejate!')
    }
})


 
// // body-parser middleware use
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({
//     extended: true
// }))
 
// // Database connection
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test"
// })
 
// db.connect(function (err) {
//     if (err) {
//         return console.error('error: ' + err.message);
//     }
//     console.log('Connected to the MySQL server.');
// })
 
// //! Use of Multer
// var storage = multer.diskStorage({
//     destination: (req, file, callBack) => {
//         callBack(null, './public/images/')     // './public/images/' directory name where save the file
//     },
//     filename: (req, file, callBack) => {
//         callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })
 
// var upload = multer({
//     storage: storage
// });
 
// //! Routes start
 
// //route for Home page
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
 
// //@type   POST
// //route for post data
// app.post("/post", upload.single('image'), (req, res) => {
//     if (!req.file) {
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//         var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
//         var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
//         db.query(insertData, [imgsrc], (err, result) => {
//             if (err) throw err
//             console.log("file uploaded")
//         })
//     }
// });

// //@type   POST
// //route for post data
// app.post("/post", upload.single('image'), (req, res) => {
//     if (!req.file) {
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//         var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
//         var insertData = "INSERT INTO users_file(file_src)VALUES(?)"
//         db.query(insertData, [imgsrc], (err, result) => {
//             if (err) throw err
//             console.log("file uploaded")
//         })
//     }
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})