module.exports = (route, app) => {
    const express = require('express')
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const users = require("../../db/model/user")
    const router = express.Router({
        mergeParams: true
    })

    router.post("/register", async(req, res) => {
        const { username, password } = req.body

        const result = await users.create(req.body)
        const token = jwt.sign({ id: "sds" }, app.get('secret'))
        res.send({ token })
    })

    router.post("/findphone", async(req, res) => {
        const { phone } = req.body
        const user = await users.findOne({ phone })
        let result = await asyncerror(!user, 422, '用户已经存在', res)
        result && res.send("该手机可以注册")
    })

    router.post("/login", async(req, res) => {
        let result = true
        const { phone, password } = req.body
        const user = await users.findOne({ phone }).select('+password')
        result = await asyncerror(user, 422, '用户不存在', res)
        if (password) {
            const isValid = require('bcrypt').compareSync(password, user.password)
            result = await asyncerror(isValid, 422, '密码错误', res)
        }
        const token = jwt.sign({ id: phone }, app.get('secret'))
        result && res.send({ token, user })
    })

    router.delete("/logout", async(req, res) => {
        const { username } = req.body
        const result = await users.findOneAndDelete({ username })
        req.result = await asyncerror(result, 422, '用户不存在', res)
        req.result && res.send("logout")
    })

    // 对外导出路由
    route.use("/user", router)

    // 错误处理函数
    const asyncerror = async(user, status, message, res) => {
        try {
            assert(user, status, message)
            return true
        } catch (e) {
            res.status(e.statusCode || 500).send({
                message: e.message
            })
            return false
        }
    }
}