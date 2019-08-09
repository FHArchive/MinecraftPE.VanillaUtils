/*
registers/worldGen.js generate ethereal ore 
*/

let OreGenerator = {
	ethereal: {
		enabled: true,
		count: 15,
		size: 2,
		minHeight: 0,
        maxHeight: 68
	}
	
};


    // Generate ore
    BlockLib.createSimpleBlock("ethereal", "ore");
    




Block.registerDropFunction("oreEthereal", function(coords, blockID, blockData, level, enchant){
	return BlockLib.dropOreItem(coords, blockID, level, enchant, "ethereal", 3);
}, 4);
Callback.addCallback("PostLoaded", function(){
	let BLOCK_ID_NAME = CoreHelpers.createIDName("ethereal", "ore");
	if(OreGenerator.ethereal.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(let i = 0; i < OreGenerator.ethereal.count; i++){
				let coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.ethereal.minHeight, OreGenerator.ethereal.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID[BLOCK_ID_NAME], 0, OreGenerator.ethereal.size);
			}
		});
	}
    
});