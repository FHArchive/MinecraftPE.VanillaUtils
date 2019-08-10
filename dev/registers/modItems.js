/*
registers/modItems.js generate the item forms of the inclTools: tools and armor 
*/

let ToolProperties = {
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

let ArmorProperties = {
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
ItemLib.createSimpleItem("ethereal")

for (let index = 0; index < INCL_TOOLS_LEN; index++){
    let inclTool = INCL_TOOLS[index];


    // Tools 
    ToolAPI.addToolMaterial(inclTool, {durability: ToolProperties[inclTool].durability, level: ToolProperties[inclTool].level, efficiency: ToolProperties[inclTool].efficiency, damage: ToolProperties[inclTool].damage, enchantability: ToolProperties[inclTool].enchantability});

    for (let toolIndex = 0; toolIndex < TOOLS_LEN; toolIndex++){
        let tType = TOOLS[toolIndex];
        ItemLib.createTool(inclTool, tType);
        
    }

    
    
    // Armor 
    for (let armorIndex = 0; armorIndex < ARMOR_LEN; armorIndex++){
        let aType = ARMOR[armorIndex];
        ItemLib.createArmor(ArmorProperties,inclTool, aType);
        

    }
}

// Callback preloaded
Callback.addCallback("PreLoaded", function(){

    
    // Furnace ethereal
    Recipes.addFurnace(BlockID[CoreHelpers.createIDName("ethereal", "ore")], ItemID["ethereal"], 0);

    
    for (let index = 0; index < INCL_TOOLS_LEN; index++){
        let inclTool = INCL_TOOLS[index];
        let ingredient = INCL_TOOLS_VAN_ID[index]


        // Tools
        for (let toolIndex = 0; toolIndex < TOOLS_LEN; toolIndex++){
            let tcType = TOOLS[toolIndex];
            // Create the recipe for the tool 
            RecipeLib.shaped.resultFromName({result: [inclTool, tcType, 1], shape: RecipeLib.recipes.items.tools[tcType], ingredients: ["a", ingredient[0], ingredient[1], "b", 280, 0]}, ItemID);
        }

        // Armor 
        for (let armorIndex = 0; armorIndex < ARMOR_LEN; armorIndex++){
            let acType = ARMOR[armorIndex];
            // Create the recipe for the armor 
            RecipeLib.shaped.resultFromNameOneIngredient({result: [inclTool, acType, 1], shape: RecipeLib.recipes.items.armor[acType], ingredient: [ingredient[0], ingredient[1]]}, ItemID);

        }
    }
});

