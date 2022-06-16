//include helper function groupBy array
const { groupBy } = require("../controllers/helpers");
//array for meal list
const meals = [
    {
        name: "Vegetable Biryani",       
        price: 10.99,
        currency: "$",
        ingredients: "Secret Ingredients",
        description:
            "Fresh basmati rice cooked with bell peppers, onions, and infused with Indian spices.",
        cover: "/static/img/menu/vegetableBiryani.jpg",
        category: "Classic Meals",
        cookingTime: "15 Minutes",
        calories: "200 cal",
        topMeal: true,
    },
    {
        name: "Wild West Omelette",       
        price: 13.99,
        currency: "$",
        ingredients: "Secret Ingredients",
        description:
            "Three egg omelette with diced ham, fire roast bell-peppers & onions, jalapeno's and melted Canadian cheese.",
        cover: "/static/img/menu/WildWestOmelette.jpg",
        category: "Classic Meals",
        cookingTime: "10 Minutes",
        calories: "300 cal",
        topMeal: true,
    },
    {
        name: "The Super Bird",       
        price: 16.99,
        currency: "$",
        ingredients: "Secret Ingredients",
        description:
            "Tender carved turkey breast with melted Swiss cheese, crisp bacon, and tomato on grilled sourdough.",
        cover: "/static/img/menu/TheSuperBird.jpg",
        category: "Classic Meals",
        cookingTime: "15 Minutes",
        calories: "350 cal",
        topMeal: true,
    },
    {
        name: "Philly Cheesesteak Omelette",       
        price: 17.99,
        currency: "$",
        ingredients: "Secret Ingredients",
        description:
            "Grilled prime rib, fire roasted bell peppers, and onions sauteed mushrooms and melted Swiss cheese.",
        cover: "/static/img/menu/PhillyCheesesteakOmelette.jpg",
        category: "Classic Meals",
        cookingTime: "20 Minutes",
        calories: "400 cal",
        topMeal: false,
    },
    {
        name: "Chicken Strips",       
        price: 10.99,
        currency: "$",
        ingredients: "Secret Ingredients",
        description:
            "Four spicy and golden brown breaded chicken strips with dipping sauce and your choice of two sides and dinner bread.",
        cover: "/static/img/menu/ChickenStrips.jpg",
        category: "Classic Meals",
        cookingTime: "12 Minutes",
        calories: "380 cal",
        topMeal: false,
    },
    {
        name: "Poutine",       
        price: 8.99,
        currency: "$",
        ingredients: "Secret Ingredients",
        description:
            "Wavy cut French fries covered with squeaky cheese curds and topped with rich gravy.",
        cover: "/static/img/menu/Poutine.jpg",
        category: "Classic Meals",
        cookingTime: "10 Minutes",
        calories: "200 cal",
        topMeal: false,
    },
    {
        name: "Brooklyn Spaghetti and Meatballs",       
        price: 10.99,
        currency: "$",
        ingredients: "Secret Ingredients",
        description:
            "Three seasoned meatballs atop a bed of pasta covered in meaty tomato sauce.",
        cover: "/static/img/menu/BrooklynSpaghetti.jpg",
        category: "Classic Meals",
        cookingTime: "10 Minutes",
        calories: "180 cal",
        topMeal: false,
    }

];

class Meal {
    //filter top meals
    static topMeals() {
        return meals.filter((meal) => meal.topMeal);
    }
    //to display on full menu
    static list() {
        return groupBy(meals, "category");
    }
}

module.exports = { Meal };