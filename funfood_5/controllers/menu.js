const mealsModel = require("../models/mealList.js");
const userModel = require("../models/userList");
const bcrypt = require("bcryptjs");
const path = require("path");
const express = require("express");
const router = express.Router();

// http://localhost/menu/list
router.get("/menuList", function(req, res) {

    mealsModel.find()
    .exec()
    .then((data) => {
        data= data.map(value => value.toObject());
        res.render("menu/menuList", {
            data,
        
            //categories: mealModel.getMeals()
        });
    });    
});

//add new meal kit

router.post("/addNew", (req, res) =>{
 let newMeal = new mealsModel({
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency,
    ingredients: req.body.ingredients,
    description: req.body.description,
    category: req.body.category,
    cookingTime: req.body.cookingTime,
    calories: req.body.calories,
    cover: req.body.cover,
    topMeal: req.body.topMeal
 });

 newMeal.save()
 .then((mealSaved) => {
    
     console.log(`Meal ${mealSaved.name} has been added to the database.`);
    
     
     let uniqueName = `meal-pic-${mealSaved._id}${path.parse(req.files.cover.name).ext}`;
     
     req.files.cover.mv(`static/img/menu/${uniqueName}`)
     .then(() => {
         
         mealsModel.updateOne({
             _id: mealSaved._id
         }, {
             cover: uniqueName
         })
         .then(() => {                
             console.log("Meal picture updated .");
             res.redirect("/user/clerk");
         })
         .catch(err => {
             console.log(`Error updating the picture ... ${err}`);
             res.redirect("/user/clerk");
         })
     });
 })
 .catch((err) => {
     console.log(`Error adding meal to the database ... ${err}`);
     res.redirect("/user/clerk");
 });           

});





router.post("/updateMeal", (req, res) => {
    //delete mealkit
   if (req.body.name.trim().length === 0) {
        // Remove the document from the collection.
        mealsModel.deleteOne({
            mealId: req.body.mealId
        })
        .exec()
        .then(() => {
            console.log("Successfully removed the meal for " + req.body.mealId);
            res.redirect("/user/clerk");
        });
    }

    else {
        // Update the mealkit in the collection.
        mealsModel.updateOne({
            mealId: req.body.mealId
        }, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                currency: req.body.currency,
                ingredients: req.body.ingredients,
                description: req.body.description,
                category: req.body.category,
                cookingTime: req.body.cookingTime,
                calories: req.body.calories,
                cover: req.body.cover,
                topMeal: req.body.topMeal             
            }
        })
        .exec()
        .then(() => {
            console.log("Successfully updated the name for " + req.body.mealId);
            res.redirect("/user/clerk");
        });
    }

});


module.exports = router;