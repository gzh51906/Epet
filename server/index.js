const express = require("express")
const cors = require("cors")

const app = express()
app.set('secret', 'i2u34y12oi3u4y8')
    // 引入数据库
require("./db")(app)

// 设置允许跨域和处理body的数据
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: false }))

// 当访问“/uploads”时就文件托管到/uploads目录下
app.use("/uploads", express.static(__dirname + "/uploads"))

// 引入路由
require('./router')(app)

app.listen(2000, () => {
    console.log("2000 port is running");

})