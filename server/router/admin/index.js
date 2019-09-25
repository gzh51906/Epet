module.exports = app => {
    const express = require('express')
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const admin = require("../../db/model/admin")

    const router = express.Router({
        mergeParams: true
    })

    router.post("/reg", (req, res) => {
        res.send("reg")
    })
    router.post("/login", (req, res) => {
        res.send("login")
    })
    router.get("/logout", (req, res) => {
        res.send("logout")
    })


    // 对外导出路由
    app.use("/admin", router)

}