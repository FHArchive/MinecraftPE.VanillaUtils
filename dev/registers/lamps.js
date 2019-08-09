Block.createSpecialType({
	solid: true,
	destroytime: 2,
	explosionres: 5,
	lightlevel: 15,
	renderlayer: 3
}, "lamp");

var LAMPS_TOOLS_VAN_ID = INCL_LAMP_VAN_ID.concat(INCL_TOOLS_VAN_ID)
var LAMPS_TOOLS = INCL_LAMP.concat(INCL_TOOLS);
var LAMPS_TOOLS_LEN = INCL_LAMP_LEN + INCL_TOOLS_LEN;

var lamps = [];
var lampsInv = [];

for (var index = 0; index < LAMPS_TOOLS_LEN; index++){
	var lampTool = LAMPS_TOOLS[index];

	// createNameReadable doesn't work with _ separated 
	let lamp = {name: createNameReadable(lampTool, "lamp"), texture: [[createTexName(lampTool, "lamp"),0]], inCreative: true}
	let lampInv = {name: createNameReadable(lampTool, "Inverted Lamp"), texture: [[createTexName(lampTool, "lamp_on"),0]], inCreative: true}

	lamps.push(lamp);
	lampsInv.push(lampInv)

}

IDRegistry.genBlockID("lamp");
Block.createBlock("lamp", lamps, "opaque");

IDRegistry.genBlockID("lampInv");
Block.createBlock("lampInv", lampsInv, "lamp");

Block.registerDropFunction("lamp", function(coords, blockID, blockData, level){
	return [];
});
Block.registerDropFunction("lampInv", function(coords, blockID, blockData, level){
	return [];
});


function placeFunction(coords, item, block){
	Game.prevent();
	var x = coords.relative.x;
	var y = coords.relative.y;
	var z = coords.relative.z;
	block = World.getBlockID(x, y, z);
	if(GenerationUtils.isTransparentBlock(block)){
		World.setBlock(x, y, z, item.id, item.data);
		World.addTileEntity(x, y, z);
	}

}

function swapBlock(block, targetBlock, setInverted){
	var x = block.x, y = block.y, z = block.z;
	block.selfDestroy();
	var data = World.getBlock(x, y, z).data;
	World.setBlock(x, y, z, BlockID[targetBlock], data);
	var tile = World.addTileEntity(x, y, z);
	tile.data.inverted = setInverted;
}

function destroy(block,coords){
	var data = World.getBlock(coords.x, coords.y, coords.z).data;
	if(block.data.inverted){
		World.drop(coords.x, coords.y, coords.z, BlockID.lampInv, 1, data);
	}else{
		World.drop(coords.x, coords.y, coords.z, BlockID.lamp, 1, data);
	}
}

/*
This is a helpful site for recipes including vanilla items: 
https://www.digminecraft.com/lists/item_id_list_pe.php
*/

Callback.addCallback("PreLoaded", function(){
	for(var i = 0; i < LAMPS_TOOLS_LEN; i++){
        var lampTool = LAMPS_TOOLS_VAN_ID[i];
		Recipes.addShaped({id: BlockID.lamp, count: 1, data: i}, [
            "xxx",
            "xrx",
            "xxx"
		], ["x", lampTool[0], 0, "r", 331, lampTool[1]]);
		
		Recipes.addShaped({id: BlockID.lampInv, count: 1, data: i}, [
			"xxx",
            "xrx",
            "xxx"
		], ["x", lampTool[0], 0, "r", 76, lampTool[1]]);
	}
});

TileEntity.registerPrototype(BlockID.lamp, {
	defaultValues: {
		inverted: false
	},
	
	
	redstone: function(signal){
		if(!this.data.inverted && signal.power){
			swapBlock(this, "lampInv", false);
		
		}
		if(this.data.inverted && !signal.power){
			swapBlock(this, "lampInv", true);
			
		}	
	},

	
	destroyBlock: function(coords, player){
		destroy(this,coords);
	}
});

TileEntity.registerPrototype(BlockID.lampInv, {
	defaultValues: {
		inverted: true
	},
	
		
	redstone: function(signal){
		if(!this.data.inverted && !signal.power){
			swapBlock(this, "lamp", false);

		}
		if(this.data.inverted && signal.power){
			swapBlock(this, "lamp", true);

		}
			
	},
	
	destroyBlock: function(coords, player){
		destroy(this,coords);
	}
});

Block.registerPlaceFunction("lamp", function(coords, item, block){
	placeFunction(coords, item, block);
});

Block.registerPlaceFunction("lampInv", function(coords, item, block){
	placeFunction(coords, item, block);
});

