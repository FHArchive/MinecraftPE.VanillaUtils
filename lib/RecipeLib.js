LIBRARY({
	name: "RecipeLib",
	version: 1,
	shared: true,
    api: "CoreEngine",
    dependencies: ["CoreHelpers:1"]

});

IMPORT("CoreHelpers");


let RecipeLib = {

    shaped: {
        resultFromName: function(recipe, IDType){

            // let Recipe = {
            //     result: ["baseName", "type", "count"],
            //     shape: ["xxx", "xxx", "xxx"],
            //     ingredients: ["d", ingredient[0], ingredient[1], "x", 20, 0]
            // }
    
            Recipes.addShaped({id: IDType[CoreHelpers.createIDName(recipe.result[0], recipe.result[1])], count: recipe.result[2], data: 0}, recipe.shape, recipe.ingredients);
        },
    
        resultFromNameOneIngredient: function(recipe, IDType){
            // let Recipe = {
            //     result: ["baseName", "type", "count"],
            //     shape: ["xxx", "xxx", "xxx"],
            //     ingredient: [id, data]
            // }
    

            RecipeLib.shaped.resultFromName({result: recipe.result, shape: recipe.shape, ingredients: ["x", recipe.ingredient[0], recipe.ingredient[1]]},IDType);

        },

        resultFromNameOneIngredientFromName: function(recipe, IDType){
            // let Recipe = {
            //     result: ["baseName", "type", "count"],
            //     shape: ["xxx", "xxx", "xxx"],
            //     ingredient: ["baseName", "type"]
            // }

            RecipeLib.shaped.resultFromName({result: recipe.result, shape: recipe.shape, ingredients: ["x", IDType[CoreHelpers.createIDName(recipe.ingredient[0], recipe.ingredient[1])], 0]},IDType);

        }
    

    },


    shapeless: {
        resultFromName: function(recipe, IDType){

            // let Recipe = {
            //     result: ["baseName", "type", "count"],
            //     ingredients: [{id, data}, ...]
            // }

            Recipes.addShapeless({id: BlockID[CoreHelpers.createIDName(recipe.result[0], recipe.result[1])], count: recipe.result[2], data: 0}, recipe.ingredients);

        }
    },


    recipes: {
        blocks: {
            storageBlock: ["xxx", "xxx", "xxx"],
            bricks: ["xx", "xx"],
            stairs: ["x  ", "xx ", "xxx"],
            slab: ["xxx"]
        },

        items: {
            tools: {
                sword: [
                    "a",
                    "a",
                    "b"
                ],
                shovel: [
                    "a",
                    "b",
                    "b"
                ],
                pickaxe: [
                    "aaa",
                    " b ",
                    " b "
                ],
                axe: [
                    "aa",
                    "ab",
                    " b"
                ],
                hoe: [
                    "aa",
                    " b",
                    " b"
                ]
    
            },
            armor: {
                helm : [
                    "xxx",
                    "x x"
                ],
                chest: [
                    "x x",
                    "xxx",
                    "xxx"
                ],
                leggings: [
                    "xxx",
                    "x x",
                    "x x"
                ],
                boots:[
                    "x x",
                    "x x"
                ]
            }
        }
    }


};

EXPORT("RecipeLib", RecipeLib);