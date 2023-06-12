const dishesData = {
    categories: [
        {
            id: 1,
            name: "Appetizers",
        },
        {
            id: 2,
            name: "Main Courses",
        },
        {
            id: 3,
            name: "Desserts",
        },
        {
            id: 4,
            name: "Beverages",
        },
        {
            id: 5,
            name: "Specials",
        },
    ],
    dishes: [
        {
            id: 1,
            name: "Caprese Salad",
            description:
                "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
            price: 8.99,
            image: "caprese_salad.jpg",
            category_id: 1,
            ingredients: ["Tomatoes", "Mozzarella", "Basil", "Balsamic glaze"],
            preparation_time: "10 minutes",
            available: true,
            dietary_tags: ["Vegetarian", "Gluten-free"],
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description:
                "Classic pizza topped with tomato sauce, mozzarella, and fresh basil.",
            price: 12.99,
            image: "margherita_pizza.jpg",
            category_id: 2,
            ingredients: ["Tomato sauce", "Mozzarella", "Basil"],
            preparation_time: "20 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 3,
            name: "Tiramisu",
            description:
                "Layers of espresso-soaked ladyfingers, mascarpone cream, and cocoa.",
            price: 6.99,
            image: "tiramisu.jpg",
            category_id: 3,
            ingredients: ["Espresso", "Ladyfingers", "Mascarpone", "Cocoa"],
            preparation_time: "30 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 4,
            name: "Iced Coffee",
            description:
                "Chilled coffee served with ice and optional milk or sweeteners.",
            price: 3.99,
            image: "iced_coffee.jpg",
            category_id: 4,
            ingredients: ["Coffee", "Ice"],
            preparation_time: "5 minutes",

            available: true,
            dietary_tags: ["Vegan", "Gluten-free", "Dairy-free"],
        },
        {
            id: 5,
            name: "Garlic Bread",
            description:
                "Oven-baked bread with a flavorful garlic and herb butter spread.",
            price: 5.99,
            image: "garlic_bread.jpg",
            category_id: 1,
            ingredients: ["Bread", "Garlic", "Butter", "Herbs"],
            preparation_time: "15 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 6,
            name: "Grilled Salmon",
            description:
                "Freshly grilled salmon fillet served with lemon and dill sauce.",
            price: 16.99,
            image: "grilled_salmon.jpg",
            category_id: 2,
            ingredients: ["Salmon", "Lemon", "Dill"],
            preparation_time: "25 minutes",
            available: true,
            dietary_tags: ["Gluten-free"],
        },
        {
            id: 7,
            name: "Cheesecake",
            description:
                "Creamy cheesecake with a graham cracker crust, topped with your choice of fruit.",
            price: 7.99,
            image: "cheesecake.jpg",
            category_id: 3,
            ingredients: ["Cream cheese", "Sugar", "Eggs", "Graham crackers"],
            preparation_time: "40 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 8,
            name: "Mojito",
            description:
                "Refreshing cocktail made with rum, fresh lime juice, mint, and soda water.",
            price: 7.99,
            image: "mojito.jpg",
            category_id: 4,
            ingredients: ["Rum", "Lime juice", "Mint", "Soda water"],
            preparation_time: "5 minutes",

            available: true,
            dietary_tags: [],
        },
        {
            id: 9,
            name: "Chef's Special Pasta",
            description:
                "Delicious pasta dish prepared with fresh ingredients and the chef's secret sauce.",
            price: 14.99,
            image: "special_pasta.jpg",
            category_id: 5,
            ingredients: [
                "Pasta",
                "Assorted vegetables",
                "Chef's secret sauce",
            ],
            preparation_time: "30 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 10,
            name: "Bruschetta",
            description:
                "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil.",
            price: 6.99,
            image: "bruschetta.jpg",
            category_id: 1,
            ingredients: ["Bread", "Tomatoes", "Garlic", "Basil", "Olive oil"],
            preparation_time: "10 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 11,
            name: "Filet Mignon",
            description:
                "Tender and juicy beef tenderloin cooked to perfection, served with mashed potatoes and vegetables.",
            price: 29.99,
            image: "filet_mignon.jpg",
            category_id: 2,
            ingredients: ["Beef tenderloin", "Mashed potatoes", "Vegetables"],
            preparation_time: "35 minutes",
            available: false,
            dietary_tags: ["Gluten-free"],
        },
        {
            id: 12,
            name: "Chocolate Lava Cake",
            description:
                "Decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.",
            price: 8.99,
            image: "chocolate_lava_cake.jpg",
            category_id: 3,
            ingredients: [
                "Chocolate",
                "Flour",
                "Butter",
                "Eggs",
                "Vanilla ice cream",
            ],
            preparation_time: "25 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 13,
            name: "Fresh Orange Juice",
            description:
                "Freshly squeezed orange juice, made from locally sourced oranges.",
            price: 4.99,
            image: "orange_juice.jpg",
            category_id: 4,
            ingredients: ["Locally sourced oranges"],
            preparation_time: "5 minutes",

            available: true,
            dietary_tags: ["Vegan", "Gluten-free", "Dairy-free"],
        },
        {
            id: 14,
            name: "Caesar Salad",
            description:
                "Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.",
            price: 9.99,
            image: "caesar_salad.jpg",
            category_id: 1,
            ingredients: [
                "Romaine lettuce",
                "Parmesan cheese",
                "Croutons",
                "Caesar dressing",
            ],
            preparation_time: "15 minutes",
            available: false,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 15,
            name: "Lobster Thermidor",
            description:
                "Fresh lobster cooked in a creamy sauce, topped with cheese and breadcrumbs.",
            price: 34.99,
            image: "lobster_thermidor.jpg",
            category_id: 2,
            ingredients: ["Lobster", "Cream", "Cheese", "Breadcrumbs"],
            preparation_time: "40 minutes",
            available: true,
            dietary_tags: [],
        },
        {
            id: 16,
            name: "Key Lime Pie",
            description:
                "Tangy and sweet pie made with key lime juice, condensed milk, and a graham cracker crust.",
            price: 7.99,
            image: "key_lime_pie.jpg",
            category_id: 3,
            ingredients: [
                "Key lime juice",
                "Condensed milk",
                "Graham crackers",
            ],
            preparation_time: "30 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 17,
            name: "Mango Lassi",
            description:
                "Refreshing yogurt-based drink with ripe mangoes and a hint of cardamom.",
            price: 5.99,
            image: "mango_lassi.jpg",
            category_id: 4,
            ingredients: ["Mangoes", "Yogurt", "Cardamom"],
            preparation_time: "10 minutes",
            available: true,
            dietary_tags: ["Vegetarian", "Gluten-free"],
        },
        {
            id: 18,
            name: "Sushi Platter",
            description:
                "Assortment of fresh sushi rolls, nigiri, and sashimi.",
            price: 19.99,
            image: "sushi_platter.jpg",
            category_id: 5,
            ingredients: ["Fresh fish", "Sushi rice", "Seaweed", "Soy sauce"],
            preparation_time: "45 minutes",
            available: false,
            dietary_tags: ["Gluten-free"],
        },
        {
            id: 19,
            name: "Spinach and Artichoke Dip",
            description:
                "Creamy dip made with spinach, artichoke hearts, and melted cheese.",
            price: 7.99,
            image: "spinach_artichoke_dip.jpg",
            category_id: 1,
            ingredients: ["Spinach", "Artichoke hearts", "Cheese"],
            preparation_time: "20 minutes",
            available: false,
            dietary_tags: ["Vegetarian", "Gluten-free"],
        },
        {
            id: 20,
            name: "Chicken Parmesan",
            description:
                "Breaded chicken breast topped with marinara sauce and melted cheese, served with pasta.",
            price: 15.99,
            image: "chicken_parmesan.jpg",
            category_id: 2,
            ingredients: [
                "Chicken breast",
                "Marinara sauce",
                "Cheese",
                "Pasta",
            ],
            preparation_time: "30 minutes",
            available: true,
            dietary_tags: ["Vegan"],
        },
        {
            id: 21,
            name: "Banana Split",
            description:
                "Classic dessert with sliced bananas, ice cream, whipped cream, and toppings.",
            price: 6.99,
            image: "banana_split.jpg",
            category_id: 3,
            ingredients: ["Bananas", "Ice cream", "Whipped cream", "Toppings"],
            preparation_time: "10 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 22,
            name: "Mint Lemonade",
            description:
                "Refreshing lemonade infused with fresh mint leaves and sweetened to perfection.",
            price: 4.99,
            image: "mint_lemonade.jpg",
            category_id: 4,
            ingredients: ["Lemon juice", "Mint leaves", "Sugar", "Water"],
            preparation_time: "10 minutes",
            available: true,
            dietary_tags: ["Vegan", "Gluten-free", "Dairy-free"],
        },
        {
            id: 23,
            name: "Greek Salad",
            description:
                "Crisp lettuce, tomatoes, cucumbers, olives, and feta cheese tossed in a tangy dressing.",
            price: 9.99,
            image: "greek_salad.jpg",
            category_id: 1,
            ingredients: [
                "Lettuce",
                "Tomatoes",
                "Cucumbers",
                "Olives",
                "Feta cheese",
                "Dressing",
            ],
            preparation_time: "15 minutes",
            available: true,
            dietary_tags: ["Vegetarian", "Gluten-free"],
        },
        {
            id: 24,
            name: "Beef Stir Fry",
            description:
                "Sliced beef cooked with a mix of fresh vegetables and a flavorful sauce, served with rice.",
            price: 16.99,
            image: "beef_stir_fry.jpg",
            category_id: 2,
            ingredients: ["Beef", "Assorted vegetables", "Sauce", "Rice"],
            preparation_time: "25 minutes",
            available: true,
            dietary_tags: [],
        },
        {
            id: 25,
            name: "Panna Cotta",
            description:
                "Smooth and creamy Italian dessert made with sweetened cream and served with fruit sauce.",
            price: 7.99,
            image: "panna_cotta.jpg",
            category_id: 3,
            ingredients: ["Cream", "Sugar", "Gelatin", "Fruit sauce"],
            preparation_time: "20 minutes",
            available: true,
            dietary_tags: ["Vegetarian", "Gluten-free"],
        },
        {
            id: 26,
            name: "Mojito Mocktail",
            description:
                "Refreshing non-alcoholic version of the classic mojito, perfect for all ages.",
            price: 4.99,
            image: "mojito_mocktail.jpg",
            category_id: 4,
            ingredients: ["Lime juice", "Mint", "Sugar", "Soda water"],
            preparation_time: "5 minutes",

            available: true,
            dietary_tags: [
                "Non-alcoholic",
                "Vegan",
                "Gluten-free",
                "Dairy-free",
            ],
        },
        {
            id: 27,
            name: "Shrimp Scampi",
            description:
                "Succulent shrimp sautéed in garlic, butter, and white wine, served over pasta.",
            price: 17.99,
            image: "shrimp_scampi.jpg",
            category_id: 2,
            ingredients: ["Shrimp", "Garlic", "Butter", "White wine", "Pasta"],
            preparation_time: "30 minutes",
            available: true,
            dietary_tags: [],
        },
        {
            id: 28,
            name: "Apple Pie",
            description:
                "Classic pie made with fresh apples, cinnamon, and a buttery crust.",
            price: 6.99,
            image: "apple_pie.jpg",
            category_id: 3,
            ingredients: ["Apples", "Cinnamon", "Pie crust"],
            preparation_time: "40 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
        {
            id: 29,
            name: "Virgin Mojito",
            description:
                "Refreshing non-alcoholic version of the mojito with lime, mint, and soda water.",
            price: 4.99,
            image: "virgin_mojito.jpg",
            category_id: 4,
            ingredients: ["Lime", "Mint", "Sugar", "Soda water"],
            preparation_time: "5 minutes",

            available: true,
            dietary_tags: [
                "Non-alcoholic",
                "Vegan",
                "Gluten-free",
                "Dairy-free",
            ],
        },
        {
            id: 30,
            name: "Vegetable Spring Rolls",
            description:
                "Crispy spring rolls filled with a mix of fresh vegetables, served with dipping sauce.",
            price: 5.99,
            image: "vegetable_spring_rolls.jpg",
            category_id: 1,
            ingredients: [
                "Assorted vegetables",
                "Spring roll wrappers",
                "Dipping sauce",
            ],
            preparation_time: "30 minutes",
            available: true,
            dietary_tags: ["Vegetarian"],
        },
    ],
};

dishesData.dishes.sort((a, b) => {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
});
export default dishesData;
