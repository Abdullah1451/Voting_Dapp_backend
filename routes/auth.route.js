const router = require('express').Router();
const authController = require('../controllers/auth.controller');


router.route('/').post(async(req, res) => {
    console.log(req.body);
    await authController.signUpUser(req, res);
});

router.route('/verify').post(async(req, res) => {
    console.log(req.body);
    await authController.verifyEmail(req, res);
});

module.exports = router;
