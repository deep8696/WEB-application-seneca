const router = require("express").Router();
const { signIn, signUp, menu, index } = require("../controllers/controllers");

// http://localhost/
router.get("/", index);

// http://localhost/signUp
router.get("/signUp", signUp);

// http://localhost/signIn
router.get("/signIn", signIn);

// http://localhost/menu
router.get("/menu", menu);

module.exports = router;
