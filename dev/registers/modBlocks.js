/*
registers/modBlock.js generate the block forms of the decorBlocks: block and bricks 
*/


let DECOR_TOOLS_VAN_ID = DECOR_BLOCK_VAN_ID.concat(INCL_TOOLS_VAN_ID);
let DECOR_TOOLS = DECOR_BLOCK.concat(INCL_TOOLS);
let DECOR_TOOLS_LEN = DECOR_BLOCK_LEN + INCL_TOOLS_LEN;

let GLASS_LAMP_VAN_ID = GLASS_BLOCK_VAN_ID.concat(INCL_LAMP_VAN_ID);
let GLASS_LAMP =  GLASS_BLOCK.concat(INCL_LAMP);
let GLASS_LAMP_LEN = GLASS_BLOCK_LEN + INCL_LAMP_LEN;

/*
Blocks only for ethereal and decoration 
*/
let modBlocks = ["ethereal", "decoration"];
for (let index = 0; index < modBlocks.length; index++){
    let decorBlock = modBlocks[index];
    BlockLib.createSimpleBlock(decorBlock, "block");
}

/*
Everything apart from glass and precious resource 
*/
for (let index = 0; index < DECOR_TOOLS_LEN; index++){
    let decorBlock = DECOR_TOOLS[index];
    
    BlockLib.createSimpleBlock(decorBlock, "bricks");
    

}


/*
Glass and precious resource 
*/

for (let index = 0; index < GLASS_LAMP_LEN; index++){
    let decorBlock = GLASS_LAMP[index];
    

    let TYPES = ["block", "bricks"];
    let TYPES_LEN = TYPES.length;
    for (let typeIndex = 0; typeIndex < TYPES_LEN; typeIndex++){
        let TYPE = TYPES[typeIndex];
        BlockLib.createSimpleBlock(decorBlock, TYPE);
        
    }

}

// Recipes 
Callback.addCallback("PreLoaded", function(){

    // Bricks for everything apart from glass and precious resource 
    for (let index = 0; index < DECOR_TOOLS_LEN; index++){
        let decorBlock = DECOR_TOOLS[index];
        let ingredient = DECOR_TOOLS_VAN_ID[index];
       
        // Bricks
        RecipeLib.shaped.resultFromNameOneIngredient({result: [decorBlock, "bricks", 4], shape: RecipeLib.recipes.blocks.bricks, ingredient: [ingredient[0], ingredient[1]]}, BlockID);
        

        
    }


    // Glass and precious resource bricks
    for (let index = 0; index < GLASS_LAMP_LEN; index++){
        let decorBlock = GLASS_LAMP[index];
       
        // Bricks
        RecipeLib.shaped.resultFromNameOneIngredientFromName({result: [decorBlock, "bricks", 4], shape: RecipeLib.recipes.blocks.bricks, ingredient: [decorBlock, "block"]}, BlockID);
    }
    
    // Glass blocks
    for (let index = 0; index < GLASS_BLOCK_LEN; index++){
        let decorBlock = GLASS_BLOCK[index];
        let ingredient = GLASS_BLOCK_VAN_ID[index];

        // Blocks
        RecipeLib.shaped.resultFromName({result: [decorBlock, "block", 8], shape: ["xxx", "xdx", "xxx"], ingredients: ["d", ingredient[0], ingredient[1], "x", 20, 0]}, BlockID);
    
        
    }


    // Precious resource
    for (let index = 0; index < INCL_LAMP_LEN; index++){
        let decorBlock = INCL_LAMP[index];
        let ingredient = INCL_LAMP_VAN_ID[index]; 
       
        // Blocks
        RecipeLib.shapeless.resultFromName({result: [decorBlock, "block", 1], ingredients: [{id: BlockID.blockDecoration, data: 0},{id: ingredient[0], data: ingredient[1]}]}, BlockID)


        
    }
});