//include menulist.js
const { Meal } = require("../models/menuList");
//export top meals on index page
exports.index = (req, res, next) => {
    res.render("index", {
        topMeals: Meal.topMeals(),
    });
};
//signup 
exports.signUp = (req, res, next) => {
    res.render("signUp");
};
//sign in
exports.signIn = (req, res) => {
    res.render("signIn");
};
// export meals on menu page
exports.menu = (req, res) => {
    res.render("menu", {
        meals: Meal.list(),
    });
};


