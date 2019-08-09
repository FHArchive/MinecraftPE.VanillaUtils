/*
registers/modItems.js generate the item forms of the inclTools: tools and armor 
*/

var ToolProperties = {
    granite: {
        durability: 131, level: 1, efficiency: 4, damage: 1.5, enchantability: 5   
	},
	diorite: {
		durability: 131, level: 1, efficiency: 4, damage: 1.5, enchantability: 5
	},
	glowstone: {
		durability: 1000, level: 4, efficiency: 8, damage: 3, enchantability: 22
	},
	lapis: {
		durability: 800, level: 3, efficiency: 6, damage: 2, enchantability: 10
	}
	
};

var ArmorProperties = {
    granite: {
        durability: 23,
        helm: { armor : 1, texture: "armor/granite_layer_1.png"}, 
        chest: {armor : 3, texture: "armor/granite_layer_1.png"}, 
        leggings: {armor : 2, texture: "armor/granite_layer_2.png"}, 
        boots: {armor : 1, texture: "armor/granite_layer_1.png"}},
    diorite: {
        durability: 19,
        helm: { armor : 1, texture: "armor/diorite_layer_1.png"}, 
        chest: {armor : 3, texture: "armor/diorite_layer_1.png"}, 
        leggings: {armor : 2, texture: "armor/diorite_layer_2.png"}, 
        boots: {armor : 1, texture: "armor/diorite_layer_1.png"}},
    glowstone: {
        durability: 36,
        helm: { armor : 3, texture: "armor/glowstone_layer_1.png"}, 
        chest: {armor : 8, texture: "armor/glowstone_layer_1.png"}, 
        leggings: {armor : 6, texture: "armor/glowstone_layer_2.png"}, 
        boots: {armor : 3, texture: "armor/glowstone_layer_1.png"}},
    lapis: {
        durability: 15,
        helm: { armor : 2, texture: "armor/lapis_lazuli_layer_1.png"}, 
        chest: {armor : 6, texture: "armor/lapis_lazuli_layer_1.png"}, 
        leggings: {armor : 4, texture: "armor/lapis_lazuli_layer_2.png"}, 
        boots: {armor : 2, texture: "armor/lapis_lazuli_layer_1.png"}}
    
};

// Ethereal item
var ethereal = "ethereal"
IDRegistry.genItemID(ethereal);
Item.createItem(ethereal, capFirstLetter(ethereal), {name: ethereal});



for (var index = 0; index < INCL_TOOLS_LEN; index++){
    var inclTool = INCL_TOOLS[index];


    // Tools 
    ToolAPI.addToolMaterial(inclTool, {durability: ToolProperties[inclTool].durability, level: ToolProperties[inclTool].level, efficiency: ToolProperties[inclTool].efficiency, damage: ToolProperties[inclTool].damage, enchantability: ToolProperties[inclTool].enchantability});

    for (var toolIndex = 0; toolIndex < TOOLS_LEN; toolIndex++){
        var tType = TOOLS[toolIndex];
        var TOOL_ID_NAME = createIDName(inclTool, tType);

        // Create the tool item 
        IDRegistry.genItemID(TOOL_ID_NAME);
        Item.createItem(TOOL_ID_NAME, createNameReadable(inclTool, tType), {name: createTexName(inclTool, tType), meta: 0}, {stack: 1});
        ToolAPI.setTool(ItemID[TOOL_ID_NAME], inclTool, ToolType[tType]);

        
    }

    
    
    // Armor 
    for (var armorIndex = 0; armorIndex < ARMOR_LEN; armorIndex++){
        var aType = ARMOR[armorIndex];
        var armorType = aType;
        // For compatibility with my naming conventions 
        if (aType === "helm"){
            armorType = "helmet";
        }
        if (aType === "chest"){
            armorType = "chestplate";
        }

        var ARMOR_ID_NAME = createIDName(inclTool, aType);

        // Create the armor item 
        IDRegistry.genItemID(ARMOR_ID_NAME);
        Item.createArmorItem(ARMOR_ID_NAME, createNameReadable(inclTool, aType), {name: createTexName(inclTool, aType)}, {type: armorType, armor: ArmorProperties[inclTool][aType].armor, durability: ArmorProperties[inclTool].durability * ARMOR_MAX_DAM_RED[aType], texture: ArmorProperties[inclTool][aType].texture});

        

    }
}

// Callback preloaded
Callback.addCallback("PreLoaded", function(){

    
    // Furnace ethereal
    Recipes.addFurnace(BlockID[createIDName("ethereal", "ore")], ItemID["ethereal"], 0);

    
    for (var index = 0; index < INCL_TOOLS_LEN; index++){
        var inclTool = INCL_TOOLS[index];
        var ingredient = INCL_TOOLS_VAN_ID[index]


        // Tools
        for (var toolIndex = 0; toolIndex < TOOLS_LEN; toolIndex++){
            var tcType = TOOLS[toolIndex];
            // Create the recipe for the tool 
            Recipes.addShaped({id: ItemID[createIDName(inclTool, tcType)], count: 1, data: 0}, TOOLS_RECIPES[tcType], ["a", ingredient[0], ingredient[1], "b", 280, 0]);
        }

        // Armor 
        for (var armorIndex = 0; armorIndex < ARMOR_LEN; armorIndex++){
            var acType = ARMOR[armorIndex];
            // Create the recipe for the armor 
            Recipes.addShaped({id: ItemID[createIDName(inclTool, acType)], count: 1, data: 0}, ARMOR_RECIPES[acType], ["x", ingredient[0], ingredient[1]]);

        }
    }
});

