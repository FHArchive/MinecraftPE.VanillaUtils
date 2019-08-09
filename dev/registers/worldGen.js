/*
registers/worldGen.js generate ethereal ore 
*/

var OreGenerator = {
	ethereal: {
		enabled: true,
		count: 15,
		size: 2,
		minHeight: 0,
        maxHeight: 68
	}
	
};


    // Generate ore
    var BLOCK_ID_NAME = createIDName("ethereal", "ore");
    IDRegistry.genBlockID(BLOCK_ID_NAME);
    Block.createBlock(BLOCK_ID_NAME, [
        {name: createNameReadable("ethereal", "ore"), texture: [[createTexName("ethereal", "ore"), 0]], inCreative: true}
    ], "opaque");
    ToolAPI.registerBlockMaterial(BlockID[BLOCK_ID_NAME], "stone", 2);
    Block.setDestroyTime(BlockID[BLOCK_ID_NAME], 3);
	Block.setDestroyLevel(BLOCK_ID_NAME, 2);
	


function dropEthereal(coords, blockID, level, enchant, etherealID, desiredLevel){
	if(level > (desiredLevel-1)){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID[etherealID], 1, 0]];
		if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
}


Block.registerDropFunction("oreEthereal", function(coords, blockID, blockData, level, enchant){
	return dropEthereal(coords, blockID, level, enchant, "ethereal", 3);
}, 4);
Callback.addCallback("PostLoaded", function(){
	var BLOCK_ID_NAME = createIDName("ethereal", "ore");
	if(OreGenerator.ethereal.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.ethereal.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.ethereal.minHeight, OreGenerator.ethereal.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID[BLOCK_ID_NAME], 0, OreGenerator.ethereal.size);
			}
		});
	}
    
});