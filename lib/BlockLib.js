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



    baseDropItem: function(coords, blockID, level, enchant, itemID, desiredLevel, isOre){
        if(level > (desiredLevel-1)){
            if(enchant.silk){
                return [[blockID, 1, 0]];
            }
            let drop = [[ItemID[itemID], 1, 0]];
            if(isOre){
                if(Math.random() < enchant.fortune/3 - 1/3){
                    drop.push(drop[0]);
                }
                ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
            }
            return drop;
        }
        return [];
    },


    dropOreItem: function(coords, blockID, level, enchant, itemID, desiredLevel){
        return BlockLib.baseDropItem(coords, blockID, level, enchant, itemID, desiredLevel, true);
    },

    dropItem: function(blockID, level, enchant, itemID, desiredLevel){
        return BlockLib.baseDropItem(0, blockID, level, enchant, itemID, desiredLevel, false);
    }
    


};

EXPORT("BlockLib", BlockLib);