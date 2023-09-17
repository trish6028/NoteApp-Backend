const express = require('express')
const router =  express.Router();

const {getAllUsers,AddLogin,AddSignup} = require('../controller/user-controller')


router.post('/signup',AddSignup )
router.post('/login' ,AddLogin)
router.get('/user' ,getAllUsers)

module.exports = router;