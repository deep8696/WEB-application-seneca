const mealModel = require("../models/mealList.js");
const express = require('express');
const router = express.Router();

// http://localhost/
router.get("/", function(req, res) {
    res.render("general/index", {
        meals: mealModel.getTopMeals()
    });
});

module.exports = router;