/*
registers/modBlock.js generate the block forms of the decorBlocks: block and bricks 
*/


var DECOR_TOOLS_VAN_ID = DECOR_BLOCK_VAN_ID.concat(INCL_TOOLS_VAN_ID)
var DECOR_TOOLS = DECOR_BLOCK.concat(INCL_TOOLS);
var DECOR_TOOLS_LEN = DECOR_BLOCK_LEN + INCL_TOOLS_LEN;

var GLASS_LAMP_VAN_ID = GLASS_BLOCK_VAN_ID.concat(INCL_LAMP_VAN_ID);
var GLASS_LAMP =  GLASS_BLOCK.concat(INCL_LAMP);
var GLASS_LAMP_LEN = GLASS_BLOCK_LEN + INCL_LAMP_LEN;

/*
Blocks only for ethereal and decoration 
*/
var modBlocks = ["ethereal", "decoration"]
for (var index = 0; index < modBlocks.length; index++){
    var decorBlock = modBlocks[index];
    decorBlockID = createIDName(decorBlock, "block")
    IDRegistry.genBlockID(decorBlockID);
    Block.createBlock(decorBlockID, [
        {name: createNameReadable(decorBlock, "block"), texture: [[createTexName(decorBlock, "block"), 0]], inCreative: true}
    ]);
    ToolAPI.registerBlockMaterial(BlockID[decorBlockID], "stone", 2);
    Block.setDestroyTime(BlockID[decorBlockID], 3);
    Block.setDestroyLevel(decorBlockID, 2);
}

/*
Everything apart from glass and precious resource 
*/
for (var index = 0; index < DECOR_TOOLS_LEN; index++){
    var decorBlock = DECOR_TOOLS[index];
    
    var TYPES = ["bricks"];
    var TYPES_LEN = TYPES.length;
    for (var typeIndex = 0; typeIndex < TYPES_LEN; typeIndex++){
        var TYPE = TYPES[typeIndex];
        var BLOCK_ID_NAME = createIDName(decorBlock, TYPE);
        IDRegistry.genBlockID(BLOCK_ID_NAME);
        Block.createBlock(BLOCK_ID_NAME, [
            {name: createNameReadable(decorBlock, TYPE), texture: [[createTexName(decorBlock, TYPE), 0]], inCreative: true}
        ]);
        ToolAPI.registerBlockMaterial(BlockID[BLOCK_ID_NAME], "stone", 2);
        Block.setDestroyTime(BlockID[BLOCK_ID_NAME], 3);
        Block.setDestroyLevel(BLOCK_ID_NAME, 2);
    }

}


/*
Glass and precious resource 
*/

for (var index = 0; index < GLASS_LAMP_LEN; index++){
    var decorBlock = GLASS_LAMP[index];
    

    var TYPES = ["block", "bricks"];
    var TYPES_LEN = TYPES.length;
    for (var typeIndex = 0; typeIndex < TYPES_LEN; typeIndex++){
        var TYPE = TYPES[typeIndex];
        var BLOCK_ID_NAME = createIDName(decorBlock, TYPE);
        IDRegistry.genBlockID(BLOCK_ID_NAME);
        Block.createBlock(BLOCK_ID_NAME, [
            {name: createNameReadable(decorBlock, TYPE), texture: [[createTexName(decorBlock, TYPE), 0]], inCreative: true}
        ]);
        ToolAPI.registerBlockMaterial(BlockID[BLOCK_ID_NAME], "stone", 2);
        Block.setDestroyTime(BlockID[BLOCK_ID_NAME], 3);
        Block.setDestroyLevel(BLOCK_ID_NAME, 2);
    }

}

// Recipes 
Callback.addCallback("PreLoaded", function(){

    // Bricks for everything apart from glass and precious resource 
    for (var index = 0; index < DECOR_TOOLS_LEN; index++){
        var decorBlock = DECOR_TOOLS[index];
        var ingredient = DECOR_TOOLS_VAN_ID[index]
       
        // Bricks
        Recipes.addShaped({id: BlockID[createIDName(decorBlock, "bricks")], count: 4, data: 0}, ["xx", "xx"], ["x", ingredient[0], ingredient[1]]);

        
    }


    // Glass blocks and bricks 
    for (var index = 0; index < GLASS_BLOCK_LEN; index++){
        var decorBlock = GLASS_BLOCK[index];
        var ingredient = GLASS_BLOCK_VAN_ID[index]
       
        // Bricks
        Recipes.addShaped({id: BlockID[createIDName(decorBlock, "bricks")], count: 4, data: 0}, ["xx", "xx"], ["x", BlockID[createIDName(decorBlock, "block")], 0]);

        // Blocks
        Recipes.addShaped({id: BlockID[createIDName(decorBlock, "block")], count: 8, data: 0}, ["xxx", "xdx", "xxx"], ["d", ingredient[0], ingredient[1], "x", 20, 0]);

        
    }


    // Precious resource
    for (var index = 0; index < INCL_LAMP_LEN; index++){
        var decorBlock = INCL_LAMP[index];
        var ingredient = INCL_LAMP_VAN_ID[index]; 
       
        // Bricks
        Recipes.addShaped({id: BlockID[createIDName(decorBlock, "bricks")], count: 4, data: 0}, ["xx", "xx"], ["x", BlockID[createIDName(decorBlock, "block")], 0]);

        Recipes.addShapeless({id: BlockID[createIDName(decorBlock, "block")], count: 1, data: 0}, [{id: BlockID[createIDName("decoration", "block")], data: 0},{id: ingredient[0], data: ingredient[1]}]);

        
    }
});