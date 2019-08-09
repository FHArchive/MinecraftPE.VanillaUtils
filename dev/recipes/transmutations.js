// Recipes 

Callback.addCallback("PreLoaded", function(){

    // Transmute up


    let transmute4 = [{
        result: [266,0],
        ingredient: [265,0]
    },
    {
        result: [264,0],
        ingredient: [266,0]
    },

    ]
    let transmute2 = [{
        result: [369,0],
        ingredient: [337,0]
    },
    {
        result: [388,0],
        ingredient: [264,0]
    },
    {
        result: [82,0],
        ingredient: [318,0]
    },
    {
        result: [82,0],
        ingredient: [13,0]
    },
    {
        result: [82,0],
        ingredient: [12,0]
    }

    ]


    // Transmute down
    let dtransmute4 = [{
        result: [265,0],
        ingredient: [266,0]
    },
    {
        result: [266,0],
        ingredient: [264,0]
    }

    ]
    let dtransmute2 = [{
        result: [337,0],
        ingredient: [369,0]
    },
    {
        result: [264,0],
        ingredient: [388,0]
    },
    {
        result: [12,0],
        ingredient: [82,0]
    }

    ]


    // Transmute left right 
    let transmute = [{
        result: [13,0],
        ingredient: [12,0]
    },
    {
        result: [12,0],
        ingredient: [13,0]
    },
    {
        result: [2,0],
        ingredient: [3,0]
    },
    {
        result: [3,0],
        ingredient: [2,0]
    },
    {
        result: [4,0],
        ingredient: [1,3]
    },
    {
        result: [1,3],
        ingredient: [1,5]
    },
    {
        result: [1,5],
        ingredient: [4,0]
    },
    {
        result: [103,0],
        ingredient: [86,0]
    },
    {
        result: [86,0],
        ingredient: [103,0]
    },
    {
        result: [6,0],
        ingredient: [6,1]
    },
    {
        result: [6,1],
        ingredient: [6,2]
    },
    {
        result: [6,2],
        ingredient: [6,3]
    },
    {
        result: [6,3],
        ingredient: [6,0]
    },
    {
        result: [81,0],
        ingredient: [338,0]
    },
    {
        result: [388,0],
        ingredient: [81,0]
    }

    ]


    // Transmute smelt 
    let transmuteSmelt = [{
        result: [263,0],
        ingredient: [16,0]
    },
    {
        result: [264,0],
        ingredient: [56,0]
    },
    {
        result: [265,0],
        ingredient: [15,0]
    },
    {
        result: [266,0],
        ingredient: [14,0]
    },
    {
        result: [388,0],
        ingredient: [129,0]
    },
    {
        result: [351,4],
        ingredient: [21,0]
    },
    {
        result: [406,0],
        ingredient: [153,0]
    },
    {
        result: [331,0],
        ingredient: [73,0]
    }

    ]



    // Transmute up
    
    for (let index = 0; index < transmute2.length; index++){
        let recipe = transmute2[index]
        Recipes.addShapeless({id: recipe["result"][0], count: 1, data: recipe["result"][1]}, [{id: recipe["ingredient"][0], data: recipe["ingredient"][1]}, {id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: ItemID["ethereal"], data: 0}]);

    }
    for (let index = 0; index < transmute4.length; index++){
        let recipe = transmute4[index]
        Recipes.addShapeless({id: recipe["result"][0], count: 1, data: recipe["result"][1]}, [{id: recipe["ingredient"][0], data: recipe["ingredient"][1]}, {id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: ItemID["ethereal"], data: 0}]);

    }

    // Transmute down 
    for (let index = 0; index < dtransmute2.length; index++){
        let recipe = dtransmute2[index]
        Recipes.addShapeless({id: recipe["result"][0], count: 2, data: recipe["result"][1]}, [{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: ItemID["ethereal"], data: 0}]);

    }
    for (let index = 0; index < dtransmute4.length; index++){
        let recipe = dtransmute4[index]
        Recipes.addShapeless({id: recipe["result"][0], count: 4, data: recipe["result"][1]}, [{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: ItemID["ethereal"], data: 0}]);
    }

    // Transmute left right
    for (let index = 0; index < transmute.length; index++){
        let recipe = transmute[index]
        Recipes.addShapeless({id: recipe["result"][0], count: 1, data: recipe["result"][1]}, [{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: ItemID["ethereal"], data: 0}]);
    }

    // Transmute smelt
    for (let index = 0; index < transmute4.length; index++){
        let recipe = transmute4[index]
        Recipes.addShapeless({id: recipe["result"][0], count: 1, data: recipe["result"][1]}, [{id: recipe["ingredient"][0], data: recipe["ingredient"][1]}, {id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: recipe["ingredient"][0], data: recipe["ingredient"][1]},{id: 263, data: 0},{id: ItemID["ethereal"], data: 0}]);

    }


});