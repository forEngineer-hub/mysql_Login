const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");
const usersController = require("../controllers/user.js");

router.post('/login', authController.login);
router.get('/logout', authController.logout);

const {queryGoodes} = require("../controllers/goodes.js");

//おすすめ商品
router.get('/recommendGoodes', queryGoodes);
//auth
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login);
router.get('/auth/logout', authController.logout);

//pages.js
router.get('/',authController.isLoggedIn, (req, res) => {
    res.sendFile("main.html", { root: './public/' })
});
router.get('/register', (req, res) => {
    res.sendFile("register.html", { root: './public/' })
});
router.get('/login', (req, res) => {
    res.sendFile("login.html", { root: './public/' })
});
router.get('/profile', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        res.sendFile("profile.html", { root: './public/' })
    } else {
        res.sendFile("login.html", { root: './public/' });
    }
})

//insert users
router.post('/users', usersController.batchInsert);


module.exports = router;