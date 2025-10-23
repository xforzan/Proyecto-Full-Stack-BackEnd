const express = require("express")
const { login, register, verify, logOut} = require("../controllers/auth")
const { isLoggedIn } = require("../../middlewares/isLoggedIn")
const upload = require("../../middlewares/file")

const routerAuth = express.Router()

routerAuth.post("/login", isLoggedIn, login)
routerAuth.post("/register", isLoggedIn,  upload.single("avatar"), register)
routerAuth.post("/verify", isLoggedIn, verify)
routerAuth.post("/logout", isLoggedIn, logOut)


module.exports = routerAuth