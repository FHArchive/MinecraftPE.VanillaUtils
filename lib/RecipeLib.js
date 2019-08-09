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
    
            Recipes.addShaped({id: IDType[CoreHelpers.createIDName(recipe.result[0], recipe.result[1])], count: recipe.result[2], data: 0}, recipe.shape, ["x", recipe.ingredient[0], recipe.ingredient[1]]);
        },

        resultFromNameOneIngredientFromName: function(recipe, IDType){
            // let Recipe = {
            //     result: ["baseName", "type", "count"],
            //     shape: ["xxx", "xxx", "xxx"],
            //     ingredient: ["baseName", "type"]
            // }
    
            Recipes.addShaped({id: IDType[CoreHelpers.createIDName(recipe.result[0], recipe.result[1])], count: recipe.result[2], data: 0}, recipe.shape, ["x", IDType[CoreHelpers.createIDName(recipe.ingredient[0], recipe.ingredient[1])], 0]);
        }
    

    }


}

EXPORT("RecipeLib", RecipeLib)