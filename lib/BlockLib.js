LIBRARY({
	name: "BlockLib",
	version: 1,
	shared: true,
    api: "CoreEngine",
    dependencies: ["CoreHelpers:1"]

});

IMPORT("CoreHelpers");

let BlockLib = {
    createSimpleBlock: function(baseName, type){
        let blockIDName = CoreHelpers.createIDName(baseName, type);
        IDRegistry.genBlockID(blockIDName);
        Block.createBlock(blockIDName, [
            {name: CoreHelpers.createNameReadable(baseName, type), texture: [[CoreHelpers.createTexName(baseName, type), 0]], inCreative: true}
        ]);
        ToolAPI.registerBlockMaterial(BlockID[blockIDName], "stone", 2);
        Block.setDestroyTime(BlockID[blockIDName], 3);
        Block.setDestroyLevel(blockIDName, 2);
    },





    dropOreItem: function(coords, blockID, level, enchant, itemID, desiredLevel){
        if(level > (desiredLevel-1)){
            if(enchant.silk){
                return [[blockID, 1, 0]];
            }
            let drop = [[ItemID[itemID], 1, 0]];
            if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
            ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
            return drop;
        }
        return [];
    },

    dropItem: function(blockID, level, enchant, itemID, desiredLevel){
        if(level > (desiredLevel-1)){
            if(enchant.silk){
                return [[blockID, 1, 0]];
            }
            return [[ItemID[itemID], 1, 0]];
        }
        return [];
    },
    




    recipes: {
        storageBlock: ["xxx", "xxx", "xxx"],
        bricks: ["xx", "xx"],
        stairs: ["x  ", "xx ", "xxx"],
        slab: ["xxx"]
    }
}

EXPORT("BlockLib", BlockLib);