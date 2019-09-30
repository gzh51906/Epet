module.exports = app => {
    const express = require('express')
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const router = express.Router({
        mergeParams: true
    })


    // 对外导出路由
    app.use("/api", router)



    require('./user')(router, app)
    require('./admin')(router, app)
    // 错误处理函数
    app.use(async (err, req, res, next) => {
        console.log(1)
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}