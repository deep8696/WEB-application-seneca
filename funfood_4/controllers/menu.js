const mealModel = require("../models/mealList.js");
const express = require('express');
const router = express.Router();

// http://localhost/menu/list
router.get("/menuList", function(req, res) {
    res.render("menu/menuList", {
        meals: mealModel.getMeals()
    });
});


module.exports = router;