const express = require("express")
const { isLoggedIn } = require("../../middlewares/isLoggedIn")
const { requireAuth } = require("../../middlewares/requireAuth")
const { myUser, deleteMyUser, avatar} = require("../controllers/user")
const upload = require("../../middlewares/file")

const routerUsers = express.Router()

routerUsers.get("/me", isLoggedIn, requireAuth,  myUser)
routerUsers.post("/avatar", isLoggedIn, requireAuth, upload.single("avatar") , avatar)
routerUsers.delete("/me", isLoggedIn, requireAuth, deleteMyUser)


module.exports = routerUsers